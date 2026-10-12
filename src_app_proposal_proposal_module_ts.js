"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_proposal_proposal_module_ts"],{

/***/ 9270:
/*!***********************************************************!*\
  !*** ./src/app/proposal/proposal-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProposalPageRoutingModule": () => (/* binding */ ProposalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _proposal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proposal.page */ 9272);




const routes = [
    {
        path: '',
        component: _proposal_page__WEBPACK_IMPORTED_MODULE_0__.ProposalPage
    }
];
let ProposalPageRoutingModule = class ProposalPageRoutingModule {
};
ProposalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProposalPageRoutingModule);



/***/ }),

/***/ 9271:
/*!**************************************************!*\
  !*** ./src/app/proposal/proposal.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProposalPageModule": () => (/* binding */ ProposalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _proposal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proposal-routing.module */ 9270);
/* harmony import */ var _proposal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proposal.page */ 9272);







let ProposalPageModule = class ProposalPageModule {
};
ProposalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _proposal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProposalPageRoutingModule
        ],
        declarations: [_proposal_page__WEBPACK_IMPORTED_MODULE_1__.ProposalPage]
    })
], ProposalPageModule);



/***/ }),

/***/ 9272:
/*!************************************************!*\
  !*** ./src/app/proposal/proposal.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProposalPage": () => (/* binding */ ProposalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/inquiry-store */ 9200);

// The customer-facing half of a quote: the same system the savings calculator sizes, presented as
// the roof's output, the money at five to twenty-five years, how it is paid for, the monthly
// comparison and what it keeps out of the air. Every figure is derived, nothing is stored.
const PRODUCTION_PER_KW = 1400;   // kWh a year one kW of panels makes in this region
const COST_PER_WATT = 2.6;        // installed dollars a watt, before the tax credit
const FEDERAL_CREDIT = 0.30;      // federal residential solar credit
const UTILITY_ESCALATION = 0.03;  // what the utility rises a year
const PANEL_WATTS = 400;
const PROJECTION_YEARS = [5, 10, 20, 25];
const PLANS = [
    { id: 'cash', name: 'Cash' },
    { id: 'loan', name: 'Loan' },
    { id: 'lease', name: 'Lease or PPA' }
];
const LOAN_APR = 0.0599;          // a ten-year loan, nothing down
const LOAN_MONTHS = 120;
const LEASE_RATE = 0.13;          // dollars a kWh on a lease or PPA
const CO2_KG_PER_KWH = 0.39;      // grid CO2 avoided for every clean kWh
const TREE_KG_PER_YEAR = 21;      // CO2 one grown tree takes up in a year

const template = `<ion-header>
    <ion-toolbar>
        <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Solar proposal</ion-title>
    </ion-toolbar>
</ion-header>

<ion-content class="prop_content" fullscreen>
    <div class="prop_wrap">
        <div class="prop_card hero_card animate__animated animate__fadeInUp">
            <h2>Solar proposal</h2>
            <p class="hero_sub">One page the customer can follow: the roof, the money and the difference it makes.</p>
            <div class="hero_stats d-flex">
                <div class="hero_stat">
                    <strong>{{ systemSize() }} kW</strong>
                    <span>system size</span>
                </div>
                <div class="hero_stat">
                    <strong>{{ panelCount() }}</strong>
                    <span>panels</span>
                </div>
                <div class="hero_stat">
                    <strong>{{ offsetPercent() }}%</strong>
                    <span>of the usage</span>
                </div>
            </div>
            <p class="hero_note">{{ heroNote() }}</p>
            <button class="pdf_btn" type="button" (click)="downloadPdf()">
                <ion-icon class="zmdi zmdi-download"></ion-icon>
                Download PDF
            </button>
            <p class="pdf_notice" *ngIf="pdfNotice">{{ pdfNotice }}</p>
        </div>

        <div class="prop_card animate__animated animate__fadeInUp">
            <div class="card_head d-flex">
                <h3>Customer's saved inquiry</h3>
                <span class="src_badge" *ngIf="billApplied">From their bill</span>
            </div>
            <p class="card_text">Pick a saved inquiry and the proposal pulls the bill that customer handed over.</p>
            <label class="field_label">Customer</label>
            <div class="select_box">
                <select class="cust_select" [ngModel]="customerId" (ngModelChange)="pickCustomerId($event)">
                    <option value="">Choose a saved inquiry</option>
                    <option *ngFor="let customer of customers" [value]="customer.id">{{ customer.customerName }}</option>
                </select>
                <ion-icon class="zmdi zmdi-chevron-down"></ion-icon>
            </div>
            <p class="cust_addr" *ngIf="customerAddress">{{ customerAddress }}</p>
            <div class="bill_row d-flex" *ngFor="let bill of bills">
                <ion-icon class="zmdi zmdi-file-text bill_icon"></ion-icon>
                <div class="row_text">
                    <h4>{{ bill.name }}</h4>
                    <p>{{ bill.detail }}</p>
                </div>
                <a class="bill_link" *ngIf="bill.url" [href]="bill.url" target="_blank" rel="noopener">View</a>
            </div>
            <p class="prop_notice" *ngIf="notice">{{ notice }}</p>
        </div>

        <div class="prop_card animate__animated animate__fadeInUp">
            <h3>The customer's bill</h3>
            <p class="card_text">Both figures come straight off the latest utility bill.</p>
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
        </div>

        <div class="prop_card animate__animated animate__fadeInUp">
            <h3>Savings projection</h3>
            <p class="card_text">Tap a term to show where the customer stands at that point.</p>
            <div class="chip_row d-flex">
                <span class="chip" *ngFor="let term of terms" [class.on]="term === years" (click)="pickYears(term)">{{ term }} years</span>
            </div>
            <div class="proj_box">
                <div class="proj_row d-flex">
                    <span>Utility over {{ years }} years</span>
                    <strong>{{ money(utilityOver(years)) }}</strong>
                </div>
                <div class="proj_row d-flex">
                    <span>Solar over {{ years }} years</span>
                    <strong>{{ money(solarOver(years)) }}</strong>
                </div>
                <div class="proj_row net d-flex">
                    <span>Net savings</span>
                    <strong>{{ money(netOver(years)) }}</strong>
                </div>
            </div>
            <div class="c_track"><span class="c_fill solar" [style.width.%]="shareWidth(years)"></span></div>
            <p class="fine_print">The solar figure is what the customer pays on the {{ planName() }} plan; the utility rises 3% a year.</p>
        </div>

        <div class="prop_card animate__animated animate__fadeInUp">
            <h3>Financing options</h3>
            <p class="card_text">Pick how the customer pays and the rest of the page follows.</p>
            <div class="chip_row d-flex">
                <span class="chip" *ngFor="let plan of plans" [class.on]="plan.id === planId" (click)="pickPlan(plan.id)">{{ plan.name }}</span>
            </div>
            <div class="plan_box">
                <div class="plan_top d-flex">
                    <span class="c_label">{{ planName() }}</span>
                    <strong>{{ planPaymentLabel() }} a month</strong>
                </div>
                <p class="plan_text">{{ planDetail() }}</p>
            </div>
        </div>

        <div class="prop_card animate__animated animate__fadeInUp">
            <h3>Monthly payment comparison</h3>
            <p class="card_text">The utility bill today against what the roof costs the customer a month.</p>
            <div class="compare_row">
                <div class="compare_top d-flex">
                    <span class="c_label">Utility bill</span>
                    <strong class="end">{{ money(billValue()) }} a month</strong>
                </div>
                <div class="c_track"><span class="c_fill utility" [style.width.%]="barWidth(billValue())"></span></div>
            </div>
            <div class="compare_row">
                <div class="compare_top d-flex">
                    <span class="c_label">Solar on the {{ planName() }} plan</span>
                    <strong class="end">{{ money(planMonthly()) }} a month</strong>
                </div>
                <div class="c_track"><span class="c_fill solar" [style.width.%]="barWidth(planMonthly())"></span></div>
            </div>
            <div class="diff_box" [class.negative]="monthlyDifference() < 0">
                <strong>{{ differenceLabel() }}</strong>
                <span>{{ differenceCaption() }}</span>
            </div>
        </div>

        <div class="prop_card animate__animated animate__fadeInUp">
            <h3>Environmental impact</h3>
            <p class="card_text">What the roof keeps out of the air over its twenty-five years.</p>
            <div class="stat_grid">
                <div class="stat_cell">
                    <strong>{{ co2Label(1) }}</strong>
                    <span>CO2 a year</span>
                </div>
                <div class="stat_cell">
                    <strong>{{ treeCount() }}</strong>
                    <span>trees a year</span>
                </div>
                <div class="stat_cell">
                    <strong>{{ co2Label(25) }}</strong>
                    <span>CO2 over 25 years</span>
                </div>
                <div class="stat_cell">
                    <strong>{{ kwh(annualProduction()) }}</strong>
                    <span>clean kWh a year</span>
                </div>
            </div>
        </div>

        <p class="fine_print end_note">Estimates assume {{ kwh(PRODUCTION_PER_KW) }} kWh a year for every kW of panels, $2.60 a watt installed and the 30% federal credit.</p>
    </div>
</ion-content>`;

const styles = `.prop_content {
  --background: #f5f5f5;
}
.prop_wrap {
  padding: 16px 16px 40px 16px;
}
.prop_card {
  margin-bottom: 14px;
  padding: 16px;
  border: 1px solid #eeeeee;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
}
.hero_card {
  border: 0;
  background: #1a1a1a;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
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
  line-height: 1.5;
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
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.1;
}
.hero_stat span {
  margin-top: 2px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.72rem;
  font-weight: 500;
}
.hero_note {
  margin: 14px 0 0 0;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.35);
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.72rem;
  font-weight: 500;
}
.prop_card h3 {
  margin: 0;
  color: #1a1a1a;
  font-size: 1rem;
  font-weight: 600;
}
.card_text {
  margin: 6px 0 0 0;
  color: #9a9a9a;
  font-size: 0.78rem;
  line-height: 1.5;
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
.select_box {
  display: flex;
  align-items: center;
  padding: 12px 14px;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  background: #ffffff;
}
.select_box .cust_select {
  width: 100%;
  border: 0;
  background: transparent;
  color: #1a1a1a;
  font-size: 0.86rem;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}
.select_box ion-icon {
  color: #9a9a9a;
  font-size: 1rem;
}
.cust_addr {
  margin: 8px 0 0 0;
  color: #9a9a9a;
  font-size: 0.74rem;
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
  color: #fa6c00;
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
  color: #fa6c00;
  font-size: 0.76rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}
.prop_notice {
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
.chip_row {
  flex-wrap: wrap;
  margin-top: 12px;
}
.chip {
  margin: 0 8px 8px 0;
  padding: 8px 14px;
  border: 1px solid #eeeeee;
  border-radius: 20px;
  background: #fafafa;
  color: #6c6c6c;
  font-size: 0.76rem;
  font-weight: 600;
  cursor: pointer;
}
.chip.on {
  border-color: #fa6c00;
  background: #fa6c00;
  color: #ffffff;
}
.proj_box {
  margin-top: 6px;
  padding: 2px 12px;
  border-radius: 12px;
  background: #fafafa;
}
.proj_row {
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}
.proj_row:last-child {
  border-bottom: 0;
}
.proj_row span {
  color: #6c6c6c;
  font-size: 0.78rem;
}
.proj_row strong {
  color: #1a1a1a;
  font-size: 0.82rem;
  font-weight: 600;
}
.proj_row.net strong {
  color: #fa6c00;
  font-weight: 700;
}
.plan_box {
  margin-top: 6px;
  padding: 12px;
  border-radius: 12px;
  background: #fafafa;
}
.plan_top {
  align-items: center;
  justify-content: space-between;
}
.plan_top strong {
  color: #1a1a1a;
  font-size: 0.82rem;
  font-weight: 700;
}
.plan_text {
  margin: 8px 0 0 0;
  color: #9a9a9a;
  font-size: 0.74rem;
  line-height: 1.5;
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
  background: #fa6c00;
}
.diff_box {
  margin-top: 16px;
  padding: 12px 14px;
  border-radius: 14px;
  background: #fff8f0;
}
.diff_box strong {
  display: block;
  color: #fa6c00;
  font-size: 0.92rem;
  font-weight: 700;
}
.diff_box span {
  display: block;
  margin-top: 3px;
  color: #9a9a9a;
  font-size: 0.72rem;
}
.diff_box.negative {
  background: #f5f5f5;
}
.diff_box.negative strong {
  color: #6c6c6c;
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
.fine_print {
  margin: 12px 0 0 0;
  color: #b0b0b0;
  font-size: 0.68rem;
  line-height: 1.5;
}
.end_note {
  margin: 0 4px;
  text-align: center;
}`;

let ProposalPage = class ProposalPage {
    constructor() {
        this.monthlyBill = 180;
        this.monthlyUsage = 1100;
        this.years = 25;
        this.planId = 'loan';
        this.terms = PROJECTION_YEARS;
        this.plans = PLANS;
        this.customers = [];
        this.customerId = '';
        this.customerName = '';
        this.customerAddress = '';
        this.bills = [];
        this.billApplied = false;
        this.reading = false;
        this.notice = '';
    }
    ngOnInit() {
        const data = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_2__.InquiryStore.snapshot();
        this.customers = data.inquiries.map((inquiry) => {
            const note = data.notes[inquiry.id] || {};
            return {
                id: inquiry.id,
                customerName: note.customerName || 'New inquiry',
                locationAddress: note.locationAddress || 'Location not set',
                bills: (note.electricBills || []).map((bill) => Object.assign({}, bill))
            };
        });
        const withBill = this.customers.filter((customer) => customer.bills.length)[0];
        if (withBill) {
            this.pickCustomerId(withBill.id);
        }
    }
    pickYears(term) {
        this.years = term;
    }
    // The proposal is written for one saved inquiry, so picking the customer pulls the bill
    // they handed over instead of asking the rep to type it in again.
    pickCustomerId(id) {
        this.customerId = id;
        const customer = this.customers.filter((entry) => entry.id === id)[0];
        if (!customer) {
            this.customerName = '';
            this.customerAddress = '';
            this.bills = [];
            this.billApplied = false;
            this.notice = '';
            return;
        }
        this.customerName = customer.customerName;
        this.customerAddress = customer.locationAddress;
        this.bills = customer.bills.map((bill) => ({
            name: bill.name,
            url: bill.url || '',
            detail: this.billDetail(bill)
        }));
        this.notice = '';
        // The latest bill on the inquiry is the one that sizes the proposal.
        const source = customer.bills[customer.bills.length - 1];
        if (!source) {
            this.billApplied = false;
            this.notice = 'No bill on file for this customer yet. Enter the amounts below by hand.';
            return;
        }
        if (source.url) {
            this.readBill(source, this.bills[this.bills.length - 1]);
            return;
        }
        this.applyReading(source);
    }
    // The rep read this bill on site, so its usage and amount travel with the inquiry.
    applyReading(bill) {
        const usage = Number(bill.usageKwh);
        const amount = Number(bill.amountDue);
        if (!(usage > 0) && !(amount > 0)) {
            this.billApplied = false;
            this.notice = 'This bill is on file without a reading. Open it and enter the amounts below.';
            return;
        }
        if (usage > 0) {
            this.monthlyUsage = usage;
        }
        if (amount > 0) {
            this.monthlyBill = amount;
        }
        this.billApplied = true;
        this.notice = 'Pulled ' + this.money(amount) + ' and ' + this.kwh(usage) + ' kWh from this customer\'s saved bill.';
    }
    // A bill that was uploaded with the inquiry is read live, the way the savings page reads one.
    readBill(source, row) {
        this.reading = true;
        this.notice = 'Reading this customer\'s bill';
        fetch(source.url)
            .then((res) => res.blob())
            .then((blob) => fetch('/api/bill/analyze?name=' + encodeURIComponent(source.name || 'bill'), {
            method: 'POST',
            headers: { 'Content-Type': blob.type || 'application/octet-stream' },
            body: blob
        }))
            .then((res) => res.json())
            .then((data) => {
            this.reading = false;
            if (data.ok && (data.usageKwh > 0 || data.amountDue > 0)) {
                if (data.usageKwh > 0) {
                    this.monthlyUsage = data.usageKwh;
                }
                if (data.amountDue > 0) {
                    this.monthlyBill = data.amountDue;
                }
                this.billApplied = true;
                this.notice = 'Usage and amount read from this customer\'s saved bill.';
                if (row && data.file) {
                    row.detail = this.billDetail(data);
                }
                return;
            }
            this.applyReading(source);
        })
            .catch(() => {
            this.reading = false;
            this.applyReading(source);
        });
    }
    billDetail(bill) {
        const parts = [];
        if (Number(bill.usageKwh) > 0) {
            parts.push(this.kwh(bill.usageKwh) + ' kWh');
        }
        if (Number(bill.amountDue) > 0) {
            parts.push(this.money(bill.amountDue));
        }
        return parts.length ? parts.join(' \u00b7 ') : 'On file';
    }
    heroNote() {
        const production = this.kwh(this.annualProduction()) + ' kWh a year';
        return this.billApplied && this.customerName
            ? production + ', drawn from the bill on ' + this.customerName + '\u2019s saved inquiry.'
            : production + ', drawn from the customer\'s own bill.';
    }
    // The same proposal written out as a document the customer can keep. The page layout lives in
    // solar360-pdf.js (loaded by index.html); this method only supplies what the page is showing,
    // so the PDF and the screen cannot drift apart.
    downloadPdf() {
        const pdf = window.Solar360Pdf.create('Solar proposal');
        if (!pdf) {
            this.pdfNotice = 'The PDF tool is still loading. Try again in a moment.';
            return;
        }
        this.pdfNotice = '';
        pdf.subject(this.customerName, this.customerAddress);
        pdf.section('The roof');
        pdf.row('System size', this.systemSize() + ' kW');
        pdf.row('Panels', this.panelCount());
        pdf.row('Usage covered', this.offsetPercent() + '%');
        pdf.row('Clean kWh a year', this.kwh(this.annualProduction()));

        pdf.section('The customer\'s bill');
        pdf.row('Monthly bill', this.money(this.billValue()));
        pdf.row('Monthly usage', this.kwh(this.usageValue()) + ' kWh');
        pdf.row('Annual usage', this.kwh(this.annualUsage()) + ' kWh');

        pdf.section('Savings projection');
        pdf.row('Utility over ' + this.years + ' years', this.money(this.utilityOver(this.years)));
        pdf.row('Solar over ' + this.years + ' years', this.money(this.solarOver(this.years)));
        pdf.row('Net savings', this.money(this.netOver(this.years)));

        pdf.section('Financing options');
        pdf.row('Plan', this.planName());
        pdf.row('Monthly payment', this.planPaymentLabel() + ' a month');
        pdf.row('System cost after the 30% credit', this.money(this.netCost()));
        pdf.paragraph(this.planDetail());

        pdf.section('Monthly payment comparison');
        pdf.row('Utility bill', this.money(this.billValue()) + ' a month');
        pdf.row('Solar on the ' + this.planName() + ' plan', this.money(this.planMonthly()) + ' a month');
        pdf.callout(this.differenceLabel(), this.differenceCaption());

        pdf.section('Environmental impact');
        pdf.row('CO2 avoided a year', this.co2Label(1));
        pdf.row('Trees a year', this.treeCount());
        pdf.row('CO2 avoided over 25 years', this.co2Label(25));
        pdf.row('Clean kWh a year', this.kwh(this.annualProduction()));

        pdf.section('Assumptions');
        pdf.paragraph('Estimates assume ' + this.kwh(PRODUCTION_PER_KW) + ' kWh a year for every kW of panels, '
            + this.pdfCostPerWattLabel() + ' a watt installed and the 30% federal credit. The utility rises 3% a year.');
        pdf.save('solar-proposal' + this.pdfFileSuffix() + '.pdf');
    }
    // "$2.60 a watt" reads off the installed-price constant, which is dollars per watt.
    pdfCostPerWattLabel() {
        return '$' + COST_PER_WATT.toFixed(2);
    }
    pdfFileSuffix() {
        const slug = String(this.customerName || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        return slug ? '-' + slug : '';
    }
    pickPlan(id) {
        this.planId = id;
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
    offsetPercent() {
        const usage = this.annualUsage();
        return usage ? Math.min(100, Math.round(this.annualProduction() / usage * 100)) : 0;
    }
    // The same bill, compounded at the utility's own rate.
    utilityOver(years) {
        const yearly = this.billValue() * 12;
        let total = 0;
        for (let year = 0; year < years; year++) {
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
    loanMonthly() {
        const rate = LOAN_APR / 12;
        const principal = this.netCost();
        return principal ? principal * rate / (1 - Math.pow(1 + rate, -LOAN_MONTHS)) : 0;
    }
    leaseMonthly() {
        return this.monthlyProduction() * LEASE_RATE;
    }
    planMonthly() {
        if (this.planId === 'loan') {
            return this.loanMonthly();
        }
        return this.planId === 'lease' ? this.leaseMonthly() : 0;
    }
    // What the customer has paid the solar side by that point on the plan they chose.
    solarOver(years) {
        if (this.planId === 'loan') {
            return this.loanMonthly() * 12 * Math.min(years, LOAN_MONTHS / 12);
        }
        return this.planId === 'lease' ? this.leaseMonthly() * 12 * years : this.netCost();
    }
    netOver(years) {
        return this.utilityOver(years) - this.solarOver(years);
    }
    shareWidth(years) {
        const utility = this.utilityOver(years);
        return utility ? Math.min(100, Math.max(3, Math.round(this.solarOver(years) / utility * 100))) : 0;
    }
    barWidth(value) {
        const bill = this.billValue();
        return bill ? Math.min(100, Math.max(3, Math.round(value / bill * 100))) : 0;
    }
    monthlyDifference() {
        return this.billValue() - this.planMonthly();
    }
    differenceLabel() {
        const diff = this.monthlyDifference();
        return diff < 0 ? 'Costs ' + this.money(-diff) + ' more a month' : 'Saves ' + this.money(diff) + ' a month';
    }
    differenceCaption() {
        return 'The utility bill with the ' + this.planName().toLowerCase() + ' payment taken off it.';
    }
    planName() {
        const plan = PLANS.filter((entry) => entry.id === this.planId)[0];
        return plan ? plan.name : PLANS[0].name;
    }
    planPaymentLabel() {
        return this.planId === 'cash' ? 'Nothing' : this.money(this.planMonthly());
    }
    planDetail() {
        if (this.planId === 'loan') {
            return 'A ' + Math.round(LOAN_MONTHS / 12) + '-year loan at ' + (LOAN_APR * 100).toFixed(2) + '%, nothing down, and the monthly payment ends with the loan.';
        }
        if (this.planId === 'lease') {
            return 'A lease or PPA at $' + LEASE_RATE.toFixed(2) + ' a kWh for the power the roof makes, nothing down.';
        }
        return 'Paid in full at installation, with the 30% federal credit already taken off the price.';
    }
    // Tons of CO2 the roof keeps out of the air over the years asked for.
    co2Label(years) {
        const tons = this.annualProduction() * years * CO2_KG_PER_KWH / 1000;
        return (tons >= 100 ? Math.round(tons) : Math.round(tons * 10) / 10) + ' tons';
    }
    treeCount() {
        const kg = this.annualProduction() * CO2_KG_PER_KWH;
        return this.kwh(Math.round(kg / TREE_KG_PER_YEAR));
    }
    money(value) {
        const amount = Math.round(Number(value) || 0);
        return (amount < 0 ? '-$' : '$') + Math.abs(amount).toLocaleString('en-US');
    }
    kwh(value) {
        return Math.round(Number(value) || 0).toLocaleString('en-US');
    }
};
ProposalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
        selector: 'app-proposal',
        template: template,
        styles: [styles]
    })
], ProposalPage);



/***/ })

}]);
