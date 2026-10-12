/**
 * Solar360 PDF export.
 *
 * One small layout builder the page chunks share for their "Download PDF" buttons, on top of
 * jsPDF (assets/Js/jspdf.umd.min.js, loaded by index.html). A page owns its own figures and
 * section titles; this file owns the page geometry, the masthead, the label/value rows, the
 * highlighted callout, the running text and the page footer, so the Solar proposal document and
 * the savings estimate read as the same company's paperwork.
 *
 * The masthead carries the Volt360 brand mark (assets/images/logo_vault360.png — the same file the
 * sign-in toolbar, the side menu and the Home card list show), not the old "Solar360" wordmark.
 * It is read once as a data URL when this file loads, so the synchronous document build can place
 * it; `BRAND` is the plain fallback wordmark for the moment before that read finishes.
 *
 * Usage (from a page component):
 *   const pdf = window.Solar360Pdf.create('Solar proposal');
 *   if (!pdf) { ...jsPDF not loaded yet... }
 *   pdf.subject(name, address).section('The roof').row('System size', '9.5 kW');
 *   pdf.paragraph('...').save('solar-proposal.pdf');
 *
 * Like solar360-assist.js this is a standalone vanilla-JS global, not an Angular page.
 */
(function () {
    'use strict';

    const MARGIN = 44;        // points from every edge
    const BOTTOM = 52;        // space kept clear for the footer
    const BRAND = 'Volt360';  // footer name, and the wordmark until the mark itself is loaded
    const LOGO_SRC = 'assets/images/logo_vault360.png';
    const LOGO_ASPECT = 572 / 1874;   // the mark's own height / width
    const LOGO_WIDTH = 118;           // points, printed bottom-left of the masthead
    const ORANGE = [250, 108, 0];
    const BODY_TOP = 138;     // first line below the masthead band

    // Read the brand mark once, as a data URL, for every document these pages turn out.
    let logoData = null;
    fetch(LOGO_SRC)
        .then((res) => (res.ok ? res.blob() : Promise.reject(new Error('logo ' + res.status))))
        .then((blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        }))
        .then((data) => { logoData = data; })
        .catch(() => { logoData = null; });

    function dateLabel() {
        return new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }

    function create(title) {
        const jsPDF = window.jspdf && window.jspdf.jsPDF;
        if (!jsPDF) {
            return null;
        }
        const doc = new jsPDF({ unit: 'pt', format: 'a4' });
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const contentWidth = pageWidth - MARGIN * 2;
        let y = BODY_TOP;

        // Break to a fresh page whenever the next block would not fit.
        const ensure = (height) => {
            if (y + height > pageHeight - BOTTOM) {
                doc.addPage();
                y = MARGIN;
            }
        };

        doc.setFillColor(ORANGE[0], ORANGE[1], ORANGE[2]);
        doc.rect(0, 0, pageWidth, 104, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(21);
        doc.setTextColor(255, 255, 255);
        doc.text(title, MARGIN, 52);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text(dateLabel(), pageWidth - MARGIN, 74, { align: 'right' });
        // The brand mark sits where the old "Solar360 · Cincinnati" line was; before it has been
        // read (or if it cannot be drawn) the plain wordmark keeps that place.
        let markDrawn = false;
        if (logoData) {
            try {
                // 'FAST' matters: jsPDF stores a PNG's pixels uncompressed by default, which would
                // add ~4 MB to every document for this mark (compressed: ~100 KB).
                doc.addImage(logoData, 'PNG', MARGIN, 60, LOGO_WIDTH, LOGO_WIDTH * LOGO_ASPECT, undefined, 'FAST');
                markDrawn = true;
            } catch (err) {
                logoData = null;
            }
        }
        if (!markDrawn) {
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(10);
            doc.setTextColor(255, 255, 255);
            doc.text(BRAND, MARGIN, 74);
        }

        const api = {
            // Who the document is for, printed straight under the masthead.
            subject(name, address) {
                if (!name) {
                    return api;
                }
                ensure(46);
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(14);
                doc.setTextColor(26, 26, 26);
                doc.text('Prepared for ' + name, MARGIN, y);
                y += 18;
                if (address) {
                    doc.setFont('helvetica', 'normal');
                    doc.setFontSize(9.5);
                    doc.setTextColor(122, 122, 122);
                    doc.text(address, MARGIN, y);
                    y += 8;
                }
                return api;
            },
            // A titled block: heading, hairline rule, then its rows.
            section(heading) {
                ensure(62);
                y += 20;
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(12);
                doc.setTextColor(26, 26, 26);
                doc.text(heading, MARGIN, y);
                y += 8;
                doc.setDrawColor(232, 232, 232);
                doc.line(MARGIN, y, pageWidth - MARGIN, y);
                y += 18;
                return api;
            },
            // Label on the left, figure flush right.
            row(label, value) {
                ensure(20);
                doc.setFont('helvetica', 'normal');
                doc.setFontSize(10);
                doc.setTextColor(122, 122, 122);
                doc.text(label, MARGIN, y);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(26, 26, 26);
                doc.text(String(value), pageWidth - MARGIN, y, { align: 'right' });
                y += 19;
                return api;
            },
            // Small grey running text, wrapped to the page.
            paragraph(text) {
                doc.setFont('helvetica', 'normal');
                doc.setFontSize(9);
                doc.setTextColor(150, 150, 150);
                const lines = doc.splitTextToSize(text, contentWidth);
                ensure(lines.length * 13 + 4);
                doc.text(lines, MARGIN, y);
                y += lines.length * 13;
                return api;
            },
            // The one line worth shouting: an orange figure on a tinted box.
            callout(heading, caption) {
                ensure(caption ? 86 : 62);
                doc.setFillColor(255, 240, 230);
                doc.rect(MARGIN, y - 4, contentWidth, caption ? 46 : 42, 'F');
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(12);
                doc.setTextColor(250, 108, 0);
                doc.text(heading, MARGIN + 14, y + 20);
                y += caption ? 56 : 52;
                if (caption) {
                    api.paragraph(caption);
                }
                return api;
            },
            save(filename) {
                const pages = doc.getNumberOfPages();
                for (let page = 1; page <= pages; page++) {
                    doc.setPage(page);
                    doc.setFont('helvetica', 'normal');
                    doc.setFontSize(8);
                    doc.setTextColor(170, 170, 170);
                    doc.text(title + ' \u00b7 ' + BRAND + ' \u00b7 page ' + page + ' of ' + pages, pageWidth / 2, pageHeight - 26, { align: 'center' });
                }
                doc.save(filename);
            }
        };
        return api;
    }

    window.Solar360Pdf = { create: create };
})();
