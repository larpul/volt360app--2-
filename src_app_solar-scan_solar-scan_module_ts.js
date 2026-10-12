"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_solar-scan_solar-scan_module_ts"],{

/***/ 9210:
/*!******************************************************************!*\
  !*** ./src/app/solar-scan/solar-scan-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolarScanPageRoutingModule": () => (/* binding */ SolarScanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _solar_scan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solar-scan.page */ 9212);




const routes = [
    {
        path: '',
        component: _solar_scan_page__WEBPACK_IMPORTED_MODULE_0__.SolarScanPage
    }
];
let SolarScanPageRoutingModule = class SolarScanPageRoutingModule {
};
SolarScanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SolarScanPageRoutingModule);



/***/ }),

/***/ 9211:
/*!*******************************************************!*\
  !*** ./src/app/solar-scan/solar-scan.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolarScanPageModule": () => (/* binding */ SolarScanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _solar_scan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solar-scan-routing.module */ 9210);
/* harmony import */ var _solar_scan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solar-scan.page */ 9212);








let SolarScanPageModule = class SolarScanPageModule {
};
SolarScanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _solar_scan_routing_module__WEBPACK_IMPORTED_MODULE_0__.SolarScanPageRoutingModule
        ],
        declarations: [_solar_scan_page__WEBPACK_IMPORTED_MODULE_1__.SolarScanPage]
    })
], SolarScanPageModule);



/***/ }),

/***/ 9212:
/*!***************************************************!*\
  !*** ./src/app/solar-scan/solar-scan.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolarScanPage": () => (/* binding */ SolarScanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/inquiry-store */ 9200);

const SCAN_URL = '/api/solar/scan';
const STATUS_URL = '/api/solar/status';

// The scan answers one question per house: is there already solar on that roof?
// The houses that come back empty are the ones worth calling on.
const NO_SOLAR = 'none';
const HAS_SOLAR = 'installed';
const UNKNOWN = 'unknown';

const template = `<ion-header>
    <ion-toolbar>
        <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Solar scan</ion-title>
    </ion-toolbar>
</ion-header>

<ion-content class="bg_color" fullscreen>
    <div class="scan_wrap">
        <div class="scan_hero animate__animated animate__fadeInUp">
            <h2>Houses without solar</h2>
            <p class="hero_text">Every prospect on the map is checked against Google's roof data and an AI look at the satellite image.</p>
            <div class="hero_actions">
                <ion-button class="scan_btn" [disabled]="scanning" (click)="runScan()">
                    <ion-icon slot="start" class="zmdi zmdi-sun"></ion-icon>
                    <span *ngIf="!scanning">Scan houses</span>
                    <span *ngIf="scanning">Scanning</span>
                </ion-button>
                <strong class="hero_count" *ngIf="scannedCount()">{{ noSolarCount() }} of {{ scannedCount() }} have no solar</strong>
            </div>
            <div class="scan_progress" *ngIf="scanning">
                <div class="progress_track">
                    <div class="progress_fill" [style.width.%]="progressPercent()"></div>
                </div>
                <span class="progress_label">{{ progress }} / {{ total }}</span>
            </div>
            <p class="scan_error" *ngIf="errorMessage">{{ errorMessage }}</p>
            <p class="scan_notice" *ngIf="notice">{{ notice }}</p>
            <p class="scan_setup" *ngIf="status && !status.solarConfigured">Google Solar API key is not set, so roof data cannot be fetched yet.</p>
            <p class="scan_setup" *ngIf="status && status.solarConfigured && !status.aiConfigured">AI key is not set, so the satellite check is skipped and only roof data is shown.</p>
        </div>

        <div class="section_card" *ngFor="let group of groups">
            <div class="section_head d-flex">
                <h3>{{ group.title }}</h3>
                <strong class="end">{{ group.rows.length }}</strong>
            </div>
            <div class="house_row" *ngFor="let row of group.rows" [class.no_solar]="row.verdict === 'none'">
                <div class="house_top d-flex">
                    <div class="text_box">
                        <h4>{{ row.name }}</h4>
                        <p>{{ row.address }}</p>
                    </div>
                    <span class="verdict" [ngClass]="row.verdict">{{ verdictLabel(row) }}</span>
                </div>
                <p class="ai_line" *ngIf="row.summary">{{ row.summary }}</p>
                <div class="roof_row" *ngIf="row.roof">
                    <span class="roof_chip" *ngIf="row.roof.roofAreaM2">{{ row.roof.roofAreaM2 }} m2 roof</span>
                    <span class="roof_chip" *ngIf="row.roof.maxPanels">up to {{ row.roof.maxPanels }} panels</span>
                    <span class="roof_chip" *ngIf="row.roof.capacityKw">{{ row.roof.capacityKw }} kW potential</span>
                    <span class="roof_chip" *ngIf="row.roof.sunshineHours">{{ row.roof.sunshineHours }} sun hours a year</span>
                </div>
                <p class="row_reason" *ngIf="row.reason">{{ row.reason }}</p>
                <div class="book_block">
                    <ion-button size="small" fill="outline" color="primary" (click)="openBooking(row)">Book site visit</ion-button>
                    <div class="book_form" *ngIf="bookingId === row.id">
                        <input class="book_input" type="date" [(ngModel)]="bookDate">
                        <input class="book_input" type="time" [(ngModel)]="bookTime">
                        <ion-button size="small" color="primary" (click)="bookVisit(row)">Confirm</ion-button>
                        <ion-button size="small" fill="clear" (click)="closeBooking()">Cancel</ion-button>
                    </div>
                    <p class="booked_line" *ngIf="row.appointment">Site visit booked for {{ row.appointment }}</p>
                </div>
            </div>
        </div>
    </div>
</ion-content>`;

const styles = `.scan_wrap {
  padding: 16px;
}
.scan_hero {
  background: var(--bg-white);
  border: 1px solid var(--border-line-color);
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 14px;
}
.scan_hero h2 {
  margin: 0 0 6px 0;
  color: var(--text-dark);
  font-size: 1.05rem;
  font-weight: 600;
}
.hero_text {
  margin: 0 0 12px 0;
  color: var(--text-light2);
  font-size: 0.82rem;
  line-height: 1.5;
}
.hero_actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.scan_btn {
  --background: var(--primary);
  --border-radius: 10px;
  margin: 0;
}
.hero_count {
  color: var(--text-dark);
  font-size: 0.82rem;
}
.scan_progress {
  display: flex;
  align-items: center;
  margin-top: 12px;
}
.progress_track {
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: var(--border-line-color);
  overflow: hidden;
  margin-right: 10px;
}
.progress_fill {
  height: 100%;
  background: var(--primary);
}
.progress_label {
  color: var(--text-light2);
  font-size: 0.78rem;
}
.scan_error {
  margin: 10px 0 0 0;
  color: #e87869;
  font-size: 0.8rem;
}
.scan_notice {
  margin: 10px 0 0 0;
  color: var(--text-dark);
  font-size: 0.8rem;
}
.scan_setup {
  margin: 8px 0 0 0;
  color: var(--text-light2);
  font-size: 0.78rem;
}
.section_card {
  background: var(--bg-white);
  border: 1px solid var(--border-line-color);
  border-radius: 14px;
  padding: 14px 16px;
  margin-bottom: 14px;
}
.section_head h3 {
  margin: 0;
  color: var(--text-dark);
  font-size: 0.95rem;
  font-weight: 600;
}
.section_head .end {
  color: var(--primary);
  font-size: 0.85rem;
}
.house_row {
  padding: 12px 0;
  border-bottom: 1px solid var(--border-line-color);
}
.house_row:last-child {
  border-bottom: 0;
}
.house_row.no_solar {
  background: rgba(183, 224, 107, 0.14);
  border-left: 3px solid #b7e06b;
  padding-left: 10px;
  border-radius: 8px;
}
.house_top h4 {
  margin: 0 0 4px 0;
  color: var(--text-dark);
  font-size: 0.88rem;
  font-weight: 600;
}
.house_top p {
  margin: 0;
  color: var(--text-light2);
  font-size: 0.78rem;
}
.verdict {
  align-self: flex-start;
  margin-left: 10px;
  padding: 3px 9px;
  border-radius: 10px;
  font-size: 0.7rem;
  white-space: nowrap;
  background: var(--border-line-color);
  color: var(--text-dark);
}
.verdict.none {
  background: #b7e06b;
  color: #2f3a12;
}
.verdict.installed {
  background: #FF7110;
  color: #ffffff;
}
.ai_line {
  margin: 8px 0 0 0;
  color: var(--text-dark);
  font-size: 0.8rem;
  line-height: 1.45;
}
.roof_row {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
}
.roof_chip {
  margin: 0 6px 6px 0;
  padding: 3px 8px;
  border-radius: 8px;
  background: var(--border-line-color);
  color: var(--text-dark);
  font-size: 0.72rem;
}
.row_reason {
  margin: 8px 0 0 0;
  color: var(--text-light2);
  font-size: 0.76rem;
}
.book_block {
  margin-top: 10px;
}
.book_form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10px;
}
.book_input {
  margin: 0 8px 8px 0;
  padding: 8px;
  border: 1px solid var(--border-line-color);
  border-radius: 8px;
  background: var(--bg-white);
  color: var(--text-dark);
  font-size: 0.8rem;
}
.booked_line {
  margin: 8px 0 0 0;
  color: var(--primary);
  font-size: 0.78rem;
}`;

// A booked date is stored as a day offset, the same way the seeded records store theirs,
// so a booking made here survives the Home page re-seeding the map from HOUSE_SAMPLES.
const daysFromToday = (iso) => {
    const target = new Date(iso + 'T12:00:00');
    const today = new Date();
    today.setHours(12, 0, 0, 0);
    return Math.round((target.getTime() - today.getTime()) / 86400000);
};

let SolarScanPage = class SolarScanPage {
    constructor() {
        this.data = null;
        this.rows = [];
        this.groups = [];
        this.scanning = false;
        this.progress = 0;
        this.total = 0;
        this.errorMessage = '';
        this.notice = '';
        this.bookingId = '';
        this.bookDate = '';
        this.bookTime = '09:00';
        this.status = null;
    }
    ngOnInit() {
        const store = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__;
        this.data = store.InquiryStore.snapshot();
        const samples = store.HOUSE_SAMPLES;
        this.rows = this.data.inquiries.map((inquiry, index) => {
            const note = this.data.notes[inquiry.id] || {};
            const sample = index < samples.length ? samples[index] : null;
            const row = {
                id: inquiry.id,
                sample: sample,
                name: note.customerName || 'Prospect',
                address: note.locationAddress || '',
                lat: inquiry.lat,
                lng: inquiry.lng,
                verdict: UNKNOWN,
                summary: '',
                roof: null,
                reason: '',
                scanned: false,
                busy: false,
                appointment: note.appointmentDate ? note.appointmentDate + ' at ' + (note.appointmentTime || '') : ''
            };
            // A scan already run in this session is still on the shared record.
            if (sample && (sample.hasSolar === true || sample.hasSolar === false)) {
                row.verdict = sample.hasSolar ? HAS_SOLAR : NO_SOLAR;
                row.scanned = true;
                row.roof = sample.solarRoof || null;
                row.summary = sample.solarSummary || '';
            }
            return row;
        });
        this.rebuild();
        fetch(STATUS_URL)
            .then(response => response.json())
            .then(result => { this.status = result; })
            .catch(() => { this.status = { solarConfigured: false, aiConfigured: false }; });
    }
    rebuild() {
        const noSolar = this.rows.filter(row => row.scanned && row.verdict === NO_SOLAR);
        const installed = this.rows.filter(row => row.scanned && row.verdict === HAS_SOLAR);
        const pending = this.rows.filter(row => !row.scanned);
        this.groups = [];
        if (noSolar.length) {
            this.groups.push({ key: NO_SOLAR, title: 'No solar yet', rows: noSolar });
        }
        if (pending.length) {
            this.groups.push({ key: UNKNOWN, title: 'Not scanned yet', rows: pending });
        }
        if (installed.length) {
            this.groups.push({ key: HAS_SOLAR, title: 'Solar already installed', rows: installed });
        }
    }
    scannedCount() {
        return this.rows.filter(row => row.scanned).length;
    }
    noSolarCount() {
        return this.rows.filter(row => row.scanned && row.verdict === NO_SOLAR).length;
    }
    progressPercent() {
        return this.total ? Math.round(this.progress / this.total * 100) : 0;
    }
    verdictLabel(row) {
        if (row.verdict === NO_SOLAR) {
            return 'No solar';
        }
        if (row.verdict === HAS_SOLAR) {
            return 'Has solar';
        }
        return row.scanned ? 'Unclear' : 'Not scanned';
    }
    runScan() {
        if (this.scanning) {
            return;
        }
        const queue = this.rows.filter(row => row.lat && row.lng);
        if (!queue.length) {
            this.errorMessage = 'There are no houses on the map to scan yet.';
            return;
        }
        this.scanning = true;
        this.errorMessage = '';
        this.notice = '';
        this.total = queue.length;
        this.progress = 0;
        const step = (index) => {
            if (index >= queue.length) {
                this.scanning = false;
                this.publishResults();
                this.rebuild();
                this.notice = 'Scan finished: ' + this.noSolarCount() + ' of ' + queue.length + ' houses have no solar yet.';
                return;
            }
            const row = queue[index];
            row.busy = true;
            fetch(SCAN_URL + '?lat=' + row.lat + '&lng=' + row.lng)
                .then(response => response.json())
                .then(result => {
                    row.busy = false;
                    row.scanned = true;
                    if (!result || !result.ok) {
                        this.errorMessage = (result && result.message) || 'The roof scan is not available.';
                        row.verdict = UNKNOWN;
                        row.reason = this.errorMessage;
                    } else {
                        row.summary = result.summary || '';
                        row.roof = result.roof && result.roof.available ? result.roof : null;
                        row.reason = result.roof && !result.roof.available ? (result.roof.reason || '') : '';
                        row.verdict = result.hasSolar === true ? HAS_SOLAR : (result.hasSolar === false ? NO_SOLAR : UNKNOWN);
                    }
                    this.progress = index + 1;
                    this.publishResults();
                    this.rebuild();
                })
                .catch(() => {
                    row.busy = false;
                    row.scanned = true;
                    row.verdict = UNKNOWN;
                    row.reason = 'Could not reach the scan service.';
                    this.errorMessage = 'Could not reach the scan service.';
                    this.progress = index + 1;
                    this.rebuild();
                })
                .then(() => step(index + 1));
        };
        step(0);
    }
    // Keep the shared record in step, so the Dashboard and the map agree with what was scanned.
    publishResults() {
        const store = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__;
        this.rows.forEach(row => {
            if (!row.sample || !row.scanned) {
                return;
            }
            row.sample.hasSolar = row.verdict === NO_SOLAR ? false : (row.verdict === HAS_SOLAR ? true : null);
            row.sample.solarSummary = row.summary || '';
            row.sample.solarRoof = row.roof || null;
            const note = this.data.notes[row.id];
            if (note) {
                note.hasSolar = row.sample.hasSolar;
            }
        });
        store.InquiryStore.publish(this.data.inquiries, this.data.notes);
    }
    openBooking(row) {
        const note = this.data.notes[row.id] || {};
        this.bookingId = row.id;
        this.bookDate = note.appointmentDate || src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.offsetDateISO(1);
        this.bookTime = note.appointmentTime || '09:00';
        this.errorMessage = '';
        this.notice = '';
    }
    closeBooking() {
        this.bookingId = '';
    }
    bookVisit(row) {
        if (!this.bookDate || !this.bookTime) {
            this.errorMessage = 'Pick both a date and a time for the site visit.';
            return;
        }
        const note = this.data.notes[row.id];
        if (!note) {
            return;
        }
        note.appointmentDate = this.bookDate;
        note.appointmentTime = this.bookTime;
        if (row.sample) {
            row.sample.appointmentInDays = daysFromToday(this.bookDate);
            row.sample.appointmentTime = this.bookTime;
        }
        src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.InquiryStore.publish(this.data.inquiries, this.data.notes);
        row.appointment = this.bookDate + ' at ' + this.bookTime;
        this.bookingId = '';
        this.errorMessage = '';
        this.notice = 'Site visit booked for ' + row.name + ' on ' + row.appointment + '. It now shows on the Dashboard calendar.';
        this.rebuild();
    }
};
SolarScanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-solar-scan',
        template: template,
        styles: [styles]
    })
], SolarScanPage);



/***/ })

}]);
