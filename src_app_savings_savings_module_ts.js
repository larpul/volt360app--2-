"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_savings_savings_module_ts"],{

/***/ 9250:
/*!**********************************************************!*\
  !*** ./src/app/savings/savings-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavingsPageRoutingModule": () => (/* binding */ SavingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _savings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savings.page */ 9252);




const routes = [
    {
        path: '',
        component: _savings_page__WEBPACK_IMPORTED_MODULE_0__.SavingsPage
    }
];
let SavingsPageRoutingModule = class SavingsPageRoutingModule {
};
SavingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SavingsPageRoutingModule);



/***/ }),

/***/ 9251:
/*!*************************************************!*\
  !*** ./src/app/savings/savings.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavingsPageModule": () => (/* binding */ SavingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _savings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savings-routing.module */ 9250);
/* harmony import */ var _savings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./savings.page */ 9252);







let SavingsPageModule = class SavingsPageModule {
};
SavingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _savings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SavingsPageRoutingModule
        ],
        declarations: [_savings_page__WEBPACK_IMPORTED_MODULE_1__.SavingsPage]
    })
], SavingsPageModule);



/***/ }),

/***/ 9252:
/*!***********************************************!*\
  !*** ./src/app/savings/savings.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavingsPage": () => (/* binding */ SavingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

// The savings pitch for one customer: the bill they hand over is read for its real usage,
// that usage sizes the system, and the result is set against twenty-five years of the utility.
const PRODUCTION_PER_KW = 1400;   // kWh a year one kW of panels makes in this region
const COST_PER_WATT = 2.6;        // installed dollars a watt, before the tax credit
const FEDERAL_CREDIT = 0.30;      // federal residential solar credit
const UTILITY_ESCALATION = 0.03;  // what the utility rises a year
const YEARS = 25;
const PANEL_WATTS = 400;

const template = `<ion-header>
    <ion-toolbar>
        <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Savings calculator</ion-title>
    </ion-toolbar>
</ion-header>

<ion-content class="sav_content" fullscreen>
    <div class="sav_wrap">
        <div class="sav_card hero_card animate__animated animate__fadeInUp">
            <h2>What this customer saves</h2>
            <p class="hero_sub">{{ usageLabel() }} kWh a month at {{ rateLabel() }} a kWh</p>
            <div class="hero_stats d-flex">
                <div class="hero_stat">
                    <strong>{{ money(monthlySavings()) }}</strong>
                    <span>a month</span>
                </div>
                <div class="hero_stat">
                    <strong>{{ money(yearlySavings()) }}</strong>
                    <span>a year</span>
                </div>
            </div>
            <div class="offset_block">
                <div class="offset_track"><span [style.width.%]="offsetPercent()"></span></div>
                <p>Solar covers {{ offsetPercent() }}% of the yearly usage</p>
            </div>
            <button class="pdf_btn" type="button" (click)="downloadPdf()">
                <ion-icon class="zmdi zmdi-download"></ion-icon>
                Download PDF
            </button>
            <p class="pdf_notice" *ngIf="pdfNotice">{{ pdfNotice }}</p>
        </div>

        <div class="sav_card animate__animated animate__fadeInUp">
            <div class="card_head d-flex">
                <h3>Utility bill upload</h3>
                <span class="src_badge" *ngIf="billApplied">Actual usage</span>
            </div>
            <p class="card_text">Upload the customer's latest bill and the usage and the amount are read straight off it.</p>
            <label class="upload_btn" [class.busy]="reading">
                <ion-icon class="zmdi zmdi-cloud-upload"></ion-icon>
                <span *ngIf="!reading">Choose a bill</span>
                <span *ngIf="reading">Reading the bill</span>
                <input type="file" accept="image/*,application/pdf" (change)="onBillPicked($event)">
            </label>
            <div class="bill_row d-flex" *ngIf="billFile">
                <ion-icon class="zmdi zmdi-file-text bill_icon"></ion-icon>
                <div class="row_text">
                    <h4>{{ billFile.name }}</h4>
                    <p>{{ billFile.detail }}</p>
                </div>
                <a class="bill_link" *ngIf="billFile.url" [href]="billFile.url" target="_blank" rel="noopener">View</a>
            </div>
            <p class="sav_notice" *ngIf="notice">{{ notice }}</p>
        </div>

        <div class="sav_card animate__animated animate__fadeInUp">
            <h3>Energy usage analysis</h3>
            <p class="card_text">The monthly usage sizes the system and estimates what it produces.</p>
            <label class="field_label">Monthly bill</label>
            <div class="field_box">
                <span class="prefix">$</span>
                <input type="number" inputmode="decimal" min="0" [(ngModel)]="monthlyBill">
            </div>
            <label class="field_label">Monthly usage</label>
            <div class="field_box">
                <input type="number" inputmode="numeric" min="0" [(ngModel)]="monthlyUsage">
                <span class="suffix">kWh</span>
            </div>
            <div class="stat_grid">
                <div class="stat_cell">
                    <strong>{{ systemSize() }} kW</strong>
                    <span>system size</span>
                </div>
                <div class="stat_cell">
                    <strong>{{ panelCount() }} panels</strong>
                    <span>about 400 W each</span>
                </div>
                <div class="stat_cell">
                    <strong>{{ kwh(annualProduction()) }}</strong>
                    <span>kWh a year</span>
                </div>
                <div class="stat_cell">
                    <strong>{{ kwh(monthlyProduction()) }}</strong>
                    <span>kWh a month</span>
                </div>
            </div>
        </div>

        <div class="sav_card animate__animated animate__fadeInUp">
            <h3>Solar vs. utility</h3>
            <p class="card_text">Twenty-five years of the local utility against the same power from the roof.</p>
            <div class="compare_row">
                <div class="compare_top d-flex">
                    <span class="c_label">Utility</span>
                    <strong class="end">{{ money(utility25()) }}</strong>
                </div>
                <div class="c_track"><span class="c_fill utility" [style.width.%]="compareWidth(utility25())"></span></div>
            </div>
            <div class="compare_row">
                <div class="compare_top d-flex">
                    <span class="c_label">Solar</span>
                    <strong class="end">{{ money(netCost()) }}</strong>
                </div>
                <div class="c_track"><span class="c_fill solar" [style.width.%]="compareWidth(netCost())"></span></div>
            </div>
            <div class="cmp_box">
                <div class="cmp_row d-flex">
                    <span>Utility bill today</span>
                    <strong>{{ money(billValue()) }} a month</strong>
                </div>
                <div class="cmp_row d-flex">
                    <span>Solar with a 25-year plan</span>
                    <strong>{{ money(solarMonthly()) }} a month</strong>
                </div>
                <div class="cmp_row d-flex">
                    <span>Savings over 25 years</span>
                    <strong>{{ money(savings25()) }}</strong>
                </div>
                <div class="cmp_row d-flex">
                    <span>Payback</span>
                    <strong>{{ paybackLabel() }}</strong>
                </div>
            </div>
            <p class="fine_print">Estimates assume {{ kwh(PRODUCTION_PER_KW) }} kWh a year for every kW of panels, $2.60 a watt installed, the 30% federal credit and a utility that rises 3% a year.</p>
        </div>
    </div>
</ion-content>`;

const styles = `.sav_content {
  --background: #f5f5f5;
}
.sav_wrap {
  padding: 16px 16px 40px 16px;
}
.sav_card {
  margin-bottom: 14px;
  padding: 16px;
  border: 1px solid #eeeeee;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
}
.hero_card {
  border: 0;
  background: #FF7110;
  box-shadow: 0 10px 24px rgba(255, 113, 16, 0.3);
}
.hero_card h2 {
  margin: 0;
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 600;
}
.hero_sub {
  margin: 6px 0 0 0;
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.76rem;
}
.hero_stats {
  margin-top: 14px;
}
.hero_stat {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.hero_stat strong {
  color: #ffffff;
  font-size: 1.55rem;
  font-weight: 700;
  line-height: 1.1;
}
.hero_stat span {
  margin-top: 2px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.72rem;
  font-weight: 500;
}
.offset_block {
  margin-top: 16px;
}
.offset_track {
  height: 8px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.35);
  overflow: hidden;
}
.offset_track span {
  display: block;
  height: 100%;
  border-radius: 6px;
  background: #ffffff;
}
.offset_block p {
  margin: 7px 0 0 0;
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.72rem;
  font-weight: 500;
}
.sav_card h3 {
  margin: 0;
  color: #1a1a1a;
  font-size: 1rem;
  font-weight: 600;
}
.card_head {
  align-items: center;
  justify-content: space-between;
}
.src_badge {
  padding: 4px 10px;
  border-radius: 10px;
  background: #eaf7e2;
  color: #4b8b2a;
  font-size: 0.68rem;
  font-weight: 600;
  white-space: nowrap;
}
.card_text {
  margin: 6px 0 0 0;
  color: #9a9a9a;
  font-size: 0.78rem;
  line-height: 1.5;
}
.upload_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
  padding: 14px;
  border: 1px dashed #FF7110;
  border-radius: 14px;
  background: #fff8f0;
  color: #FF7110;
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
}
.upload_btn.busy {
  border-style: solid;
  background: #fdf1e3;
  color: #FF7110;
}
.upload_btn ion-icon {
  margin-right: 8px;
  font-size: 1.1rem;
}
.upload_btn input {
  display: none;
}
.bill_row {
  align-items: center;
  margin-top: 12px;
  padding: 11px 12px;
  border: 1px solid #eeeeee;
  border-radius: 14px;
  background: #fafafa;
}
.bill_icon {
  margin-right: 10px;
  color: #FF7110;
  font-size: 1.2rem;
}
.row_text {
  width: 100%;
  overflow: hidden;
}
.row_text h4 {
  margin: 0 0 2px 0;
  color: #1a1a1a;
  font-size: 0.84rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.row_text p {
  margin: 0;
  color: #9a9a9a;
  font-size: 0.72rem;
}
.bill_link {
  margin-left: auto;
  padding-left: 10px;
  color: #FF7110;
  font-size: 0.76rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}
.sav_notice {
  margin: 10px 0 0 0;
  padding: 9px 12px;
  border-radius: 10px;
  background: #f5f5f5;
  color: #1a1a1a;
  font-size: 0.76rem;
  font-weight: 500;
}
.field_label {
  display: block;
  margin: 14px 0 6px 0;
  color: #9a9a9a;
  font-size: 0.72rem;
  font-weight: 500;
}
.field_box {
  display: flex;
  align-items: center;
  padding: 12px 14px;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  background: #ffffff;
}
.field_box .prefix {
  margin-right: 8px;
  color: #1a1a1a;
  font-size: 0.86rem;
  font-weight: 600;
}
.field_box .suffix {
  margin-left: 8px;
  color: #9a9a9a;
  font-size: 0.76rem;
  font-weight: 500;
}
.field_box input {
  width: 100%;
  border: 0;
  background: transparent;
  color: #1a1a1a;
  font-size: 0.86rem;
  outline: none;
}
.stat_grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 14px;
}
.stat_cell {
  width: 50%;
  padding: 10px 0;
}
.stat_cell strong {
  display: block;
  color: #1a1a1a;
  font-size: 0.92rem;
  font-weight: 700;
}
.stat_cell span {
  display: block;
  margin-top: 2px;
  color: #9a9a9a;
  font-size: 0.72rem;
}
.compare_row {
  margin-top: 14px;
}
.compare_top {
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}
.c_label {
  color: #6c6c6c;
  font-size: 0.78rem;
  font-weight: 500;
}
.compare_top strong {
  color: #1a1a1a;
  font-size: 0.84rem;
  font-weight: 700;
}
.c_track {
  height: 10px;
  border-radius: 6px;
  background: #f1f1f1;
  overflow: hidden;
}
.c_fill {
  display: block;
  height: 100%;
  border-radius: 6px;
}
.c_fill.utility {
  background: #d9d9d9;
}
.c_fill.solar {
  background: #FF7110;
}
.cmp_box {
  margin-top: 16px;
  padding: 2px 12px;
  border-radius: 12px;
  background: #fafafa;
}
.cmp_row {
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}
.cmp_row:last-child {
  border-bottom: 0;
}
.cmp_row span {
  color: #6c6c6c;
  font-size: 0.78rem;
}
.cmp_row strong {
  color: #1a1a1a;
  font-size: 0.82rem;
  font-weight: 600;
}
.fine_print {
  margin: 12px 0 0 0;
  color: #b0b0b0;
  font-size: 0.68rem;
  line-height: 1.5;
}`;

let SavingsPage = class SavingsPage {
    constructor() {
        this.monthlyBill = 180;
        this.monthlyUsage = 1100;
        this.billApplied = false;
        this.billFile = null;
        this.reading = false;
        this.notice = '';
    }
    billValue() {
        const bill = Number(this.monthlyBill);
        return isFinite(bill) && bill > 0 ? bill : 0;
    }
    usageValue() {
        const usage = Number(this.monthlyUsage);
        return isFinite(usage) && usage > 0 ? usage : 0;
    }
    annualUsage() {
        return this.usageValue() * 12;
    }
    // What the customer actually pays a kWh, straight from the bill.
    rateValue() {
        const usage = this.usageValue();
        return usage ? this.billValue() / usage : 0;
    }
    rateLabel() {
        return '$' + this.rateValue().toFixed(2);
    }
    usageLabel() {
        return this.kwh(this.usageValue());
    }
    // A system big enough to cover the year, in half-kilowatt steps.
    systemSize() {
        const size = this.annualUsage() / PRODUCTION_PER_KW;
        return size > 0 ? Math.max(0.5, Math.round(size * 2) / 2) : 0;
    }
    annualProduction() {
        return this.systemSize() * PRODUCTION_PER_KW;
    }
    monthlyProduction() {
        return this.annualProduction() / 12;
    }
    panelCount() {
        return this.systemSize() ? Math.ceil(this.systemSize() * 1000 / PANEL_WATTS) : 0;
    }
    offset() {
        const usage = this.annualUsage();
        return usage ? Math.min(1, this.annualProduction() / usage) : 0;
    }
    offsetPercent() {
        return Math.round(this.offset() * 100);
    }
    monthlySavings() {
        return this.billValue() * this.offset();
    }
    yearlySavings() {
        return this.monthlySavings() * 12;
    }
    // Twenty-five years of the same bill, with the utility rising every year.
    utility25() {
        const yearly = this.billValue() * 12;
        let total = 0;
        for (let year = 0; year < YEARS; year++) {
            total += yearly * Math.pow(1 + UTILITY_ESCALATION, year);
        }
        return total;
    }
    grossCost() {
        return this.systemSize() * 1000 * COST_PER_WATT;
    }
    netCost() {
        return this.grossCost() * (1 - FEDERAL_CREDIT);
    }
    savings25() {
        return Math.max(0, this.utility25() - this.netCost());
    }
    solarMonthly() {
        return this.systemSize() ? this.netCost() / (YEARS * 12) : 0;
    }
    paybackLabel() {
        const yearly = this.yearlySavings();
        if (!yearly) {
            return 'Not estimated';
        }
        return (this.netCost() / yearly).toFixed(1) + ' years';
    }
    // The utility bar is the full width, so the solar bar is its share of that.
    compareWidth(value) {
        const utility = this.utility25();
        return utility ? Math.min(100, Math.max(3, Math.round(value / utility * 100))) : 0;
    }
    // The same estimate written out as a document the customer can keep. The page layout lives in
    // solar360-pdf.js (loaded by index.html); this method only supplies what the page is showing,
    // so the PDF and the screen cannot drift apart.
    downloadPdf() {
        const pdf = window.Solar360Pdf.create('Savings estimate');
        if (!pdf) {
            this.pdfNotice = 'The PDF tool is still loading. Try again in a moment.';
            return;
        }
        this.pdfNotice = '';
        pdf.section('What this customer saves');
        pdf.row('Saving a month', this.money(this.monthlySavings()));
        pdf.row('Saving a year', this.money(this.yearlySavings()));
        pdf.row('Usage covered', this.offsetPercent() + '%');
        pdf.row('Energy rate', this.rateLabel() + ' a kWh');

        pdf.section('Energy usage analysis');
        pdf.row('Monthly bill', this.money(this.billValue()));
        pdf.row('Monthly usage', this.kwh(this.usageValue()) + ' kWh');
        pdf.row('Annual usage', this.kwh(this.annualUsage()) + ' kWh');
        pdf.row('System size', this.systemSize() + ' kW');
        pdf.row('Panels', this.panelCount());
        pdf.row('Clean kWh a year', this.kwh(this.annualProduction()));
        pdf.row('Clean kWh a month', this.kwh(this.monthlyProduction()));

        pdf.section('Solar vs. utility');
        pdf.row('Utility over 25 years', this.money(this.utility25()));
        pdf.row('Solar over 25 years', this.money(this.netCost()));
        pdf.row('Utility bill today', this.money(this.billValue()) + ' a month');
        pdf.row('Solar with a 25-year plan', this.money(this.solarMonthly()) + ' a month');
        pdf.row('Payback', this.paybackLabel());
        pdf.callout(this.money(this.savings25()) + ' saved over 25 years', 'The utility bill with the solar payment taken off it, over the roof\'s twenty-five years.');

        pdf.section('Assumptions');
        pdf.paragraph('Estimates assume ' + this.kwh(PRODUCTION_PER_KW) + ' kWh a year for every kW of panels, $'
            + COST_PER_WATT.toFixed(2) + ' a watt installed, the 30% federal credit and a utility that rises 3% a year.');
        pdf.save('savings-estimate.pdf');
    }
    money(value) {
        return '$' + Math.round(Number(value) || 0).toLocaleString('en-US');
    }
    kwh(value) {
        return Math.round(Number(value) || 0).toLocaleString('en-US');
    }
    // The bill is uploaded whole: the server stores it and reads the usage and amount out of it.
    onBillPicked(event) {
        const input = event.target;
        const file = input.files && input.files[0];
        if (!file) {
            return;
        }
        this.reading = true;
        this.notice = '';
        this.billFile = { name: file.name, url: '', detail: 'Uploading' };
        fetch('/api/bill/analyze?name=' + encodeURIComponent(file.name), {
            method: 'POST',
            headers: { 'Content-Type': file.type || 'application/octet-stream' },
            body: file
        })
            .then((res) => res.json())
            .then((data) => {
                this.reading = false;
                if (data.file) {
                    this.billFile = { name: data.file.name, url: data.file.url, detail: this.billDetail(data) };
                }
                if (data.ok) {
                    if (data.usageKwh) {
                        this.monthlyUsage = data.usageKwh;
                    }
                    if (data.amountDue) {
                        this.monthlyBill = data.amountDue;
                    }
                    this.billApplied = true;
                    this.notice = 'Usage and amount read from this bill.';
                }
                else {
                    this.notice = data.message || 'The bill could not be read. Enter the numbers by hand.';
                }
                input.value = '';
            })
            .catch(() => {
                this.reading = false;
                this.billFile = null;
                this.notice = 'The bill could not be uploaded. Enter the numbers by hand.';
                input.value = '';
            });
    }
    billDetail(data) {
        const parts = [];
        if (data.usageKwh) {
            parts.push(this.kwh(data.usageKwh) + ' kWh');
        }
        if (data.amountDue) {
            parts.push('$' + Number(data.amountDue).toFixed(2));
        }
        if (data.utility) {
            parts.push(data.utility);
        }
        return parts.length ? parts.join(' \u00b7 ') : 'Saved to your uploads';
    }
};
SavingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
        selector: 'app-savings',
        template: template,
        styles: [styles]
    })
], SavingsPage);



/***/ })

}]);
