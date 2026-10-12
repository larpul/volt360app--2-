"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_referrals_referrals_module_ts"],{

/***/ 9220:
/*!**************************************************************!*\
  !*** ./src/app/referrals/referrals-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralsPageRoutingModule": () => (/* binding */ ReferralsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _referrals_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referrals.page */ 9222);




const routes = [
    {
        path: '',
        component: _referrals_page__WEBPACK_IMPORTED_MODULE_0__.ReferralsPage
    }
];
let ReferralsPageRoutingModule = class ReferralsPageRoutingModule {
};
ReferralsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReferralsPageRoutingModule);



/***/ }),

/***/ 9221:
/*!*****************************************************!*\
  !*** ./src/app/referrals/referrals.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralsPageModule": () => (/* binding */ ReferralsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _referrals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referrals-routing.module */ 9220);
/* harmony import */ var _referrals_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./referrals.page */ 9222);








let ReferralsPageModule = class ReferralsPageModule {
};
ReferralsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _referrals_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReferralsPageRoutingModule
        ],
        declarations: [_referrals_page__WEBPACK_IMPORTED_MODULE_1__.ReferralsPage]
    })
], ReferralsPageModule);



/***/ }),

/***/ 9222:
/*!*************************************************!*\
  !*** ./src/app/referrals/referrals.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralsPage": () => (/* binding */ ReferralsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/inquiry-store */ 9200);

// Customer referrals: every customer can hand their own code to friends, and each friend who
// comes in on it is a referral whose bonus moves Pending -> Approved -> Paid. Organised by
// customer so the sales rep can see at a glance which customer is owed what.
const STORAGE_KEY = 'solar360_customer_referrals';
const REFERRAL_REWARD = 1000;
const STAGE_PENDING = 'Pending';
const STAGE_APPROVED = 'Approved';
const STAGE_PAID = 'Paid';
const STAGES = [STAGE_PENDING, STAGE_APPROVED, STAGE_PAID];
const NO_REFERRALS = 'No referrals';

const SEED_CUSTOMERS = [
    {
        id: 'cust1',
        name: 'Maria Lopez',
        code: 'SOLAR360-ML21',
        referrals: [
            { id: 'ref1', name: 'John Smith', contact: 'john.smith@email.com', date: src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.offsetDateISO(-14), status: STAGE_PAID },
            { id: 'ref2', name: 'Devon Carter', contact: 'devon.carter@email.com', date: src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.offsetDateISO(-3), status: STAGE_PENDING }
        ]
    },
    {
        id: 'cust2',
        name: 'Priya Raman',
        code: 'SOLAR360-PR08',
        referrals: [
            { id: 'ref3', name: 'Ava Reed', contact: 'ava.reed@email.com', date: src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.offsetDateISO(-8), status: STAGE_APPROVED }
        ]
    },
    {
        id: 'cust3',
        name: 'Robert Chen',
        code: 'SOLAR360-RC45',
        referrals: []
    }
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// The customer ledger outlives a reload, so a referral recorded here is not lost when the page
// is reopened (the rest of the app's inquiry data is in-memory only).
const cloneCustomer = (customer) => ({
    id: customer.id,
    name: customer.name,
    code: customer.code,
    referrals: (customer.referrals || []).map(row => ({
        id: row.id,
        name: row.name,
        contact: row.contact || '',
        date: row.date,
        status: STAGES.indexOf(row.status) === -1 ? STAGE_PENDING : row.status
    }))
});

const loadCustomers = () => {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
                return parsed.map(cloneCustomer);
            }
        }
    }
    catch (e) {
    }
    return SEED_CUSTOMERS.map(cloneCustomer);
};

const saveCustomers = (list) => {
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }
    catch (e) {
    }
};

const template = `<ion-header>
    <ion-toolbar>
        <ion-buttons slot="start">
            <ion-back-button text="" defaultHref="/home" icon="arrow-back-outline"></ion-back-button>
        </ion-buttons>
        <ion-title>Referrals</ion-title>
        <ion-buttons slot="end">
            <ion-button class="apply_btn" (click)="openAdd()">Add</ion-button>
        </ion-buttons>
    </ion-toolbar>
</ion-header>

<ion-content class="ref_content" fullscreen>
    <div class="ref_wrap">
        <h2 class="ref_hero">Each customer who brings a friend to solar earns {{ moneyLabel(reward) }} per confirmed install</h2>
        <p class="ref_notice" *ngIf="notice">{{ notice }}</p>

        <div class="progress_card">
            <div class="progress_head d-flex">
                <h3>Referral bonuses</h3>
                <button class="dots_btn" (click)="toggleMenu()">
                    <ion-icon class="zmdi zmdi-more-vert"></ion-icon>
                </button>
            </div>

            <div class="menu_list" *ngIf="menuOpen">
                <button (click)="toggleHowItWorks()">How it works</button>
                <button (click)="shareProgress()">Share progress</button>
            </div>

            <div class="stat_row d-flex">
                <div class="stat">
                    <ion-icon class="zmdi zmdi-accounts"></ion-icon>
                    <span>{{ customerCount() }} Customers</span>
                </div>
                <div class="stat">
                    <ion-icon class="zmdi zmdi-card-giftcard"></ion-icon>
                    <span>{{ moneyLabel(totalBonus()) }} Bonuses</span>
                </div>
                <div class="stat">
                    <span>Paid: {{ moneyLabel(paidTotal()) }}</span>
                </div>
            </div>

            <div class="gauge_block">
                <svg class="gauge" viewBox="0 0 200 118" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <clipPath id="refGaugeClip">
                            <rect x="13" y="0" height="118" [attr.width]="gaugeClipWidth()"></rect>
                        </clipPath>
                    </defs>
                    <path d="M20 100 A80 80 0 0 1 180 100" class="gauge_track"></path>
                    <path d="M20 100 A80 80 0 0 1 180 100" class="gauge_fill" clip-path="url(#refGaugeClip)"></path>
                </svg>
                <div class="gauge_pct">{{ progressPercent() }}%</div>
                <div class="gauge_cap">bonuses paid</div>
            </div>

            <button class="dark_btn" (click)="toggleDetails()">{{ detailsOpen ? 'Hide details' : 'More details' }}</button>

            <div class="details_box" *ngIf="detailsOpen">
                <div class="detail_row d-flex">
                    <span>Bonuses paid</span>
                    <strong>{{ moneyLabel(paidTotal()) }}</strong>
                </div>
                <div class="detail_row d-flex">
                    <span>Bonuses approved</span>
                    <strong>{{ moneyLabel(approvedTotal()) }}</strong>
                </div>
                <div class="detail_row d-flex">
                    <span>Bonuses pending</span>
                    <strong>{{ moneyLabel(pendingTotal()) }}</strong>
                </div>
                <div class="detail_row d-flex">
                    <span>Referrals tracked</span>
                    <strong>{{ referralTotal() }}</strong>
                </div>
                <div class="detail_row d-flex">
                    <span>Bonus per referral</span>
                    <strong>{{ moneyLabel(reward) }}</strong>
                </div>
            </div>

            <div class="how_box" *ngIf="howOpen">
                <h4>How it works</h4>
                <p>Every customer gets their own code to hand to friends. Each friend who comes in on it is tracked under that customer.</p>
                <p>A bonus starts Pending, becomes Approved once the friend's install is confirmed, and Paid once the customer has been paid. Tap a status badge to move it forward.</p>
            </div>
        </div>

        <div class="list_head d-flex">
            <h3>My customers</h3>
        </div>

        <div class="search_box">
            <ion-icon class="zmdi zmdi-search"></ion-icon>
            <input type="text" placeholder="Search customers or referrals" [(ngModel)]="search">
        </div>

        <div class="cust_card" *ngFor="let cust of filtered()">
            <div class="cust_head d-flex" (click)="toggleCustomer(cust)">
                <div class="avatar">{{ initial(cust.name) }}</div>
                <div class="row_text">
                    <h4>{{ cust.name }}</h4>
                    <p>{{ countLabel(cust) }} &middot; {{ cust.code }}</p>
                </div>
                <div class="row_end">
                    <strong class="row_reward">{{ moneyLabel(customerBonus(cust)) }}</strong>
                    <span class="status_chip" [ngClass]="stageClass(customerStage(cust))">{{ customerStage(cust) }}</span>
                </div>
            </div>

            <div class="cust_body" *ngIf="expandedId === cust.id">
                <div class="cust_actions d-flex">
                    <button class="mini_btn" (click)="copyCode(cust)">
                        <ion-icon class="zmdi zmdi-copy"></ion-icon>
                        <span>Copy code</span>
                    </button>
                    <button class="mini_btn" (click)="shareCode(cust)">
                        <ion-icon class="zmdi zmdi-share"></ion-icon>
                        <span>Share code</span>
                    </button>
                </div>

                <div class="ref_row d-flex" *ngFor="let row of cust.referrals">
                    <div class="ref_dot" [ngClass]="stageClass(row.status)">
                        <ion-icon class="zmdi" [ngClass]="stageIcon(row.status)"></ion-icon>
                    </div>
                    <div class="row_text">
                        <h4>{{ row.name }}</h4>
                        <p>{{ dateLabel(row.date) }}{{ row.contact ? ' \u00b7 ' + row.contact : '' }}</p>
                    </div>
                    <div class="row_end">
                        <strong class="row_reward">{{ moneyLabel(reward) }}</strong>
                        <button class="status_chip as_btn" [ngClass]="stageClass(row.status)" [disabled]="row.status === 'Paid'" (click)="advance(row)">{{ row.status }}</button>
                    </div>
                </div>

                <p class="cust_empty" *ngIf="!cust.referrals.length">No referrals yet — add the first friend this customer sends.</p>

                <button class="ghost_btn small" (click)="openAdd(cust)">Add a referral for {{ cust.name }}</button>
            </div>
        </div>

        <p class="empty" *ngIf="!filtered().length">No customers match your search.</p>
    </div>
</ion-content>

<div class="sheet_backdrop" *ngIf="addOpen" (click)="closeAdd()"></div>
<div class="apply_sheet" *ngIf="addOpen">
    <h3>Add a referral</h3>
    <p class="sheet_text">Record a friend who came in on a customer's referral code.</p>
    <div class="pick_label">Customer</div>
    <div class="status_pick wrap">
        <button class="pick" *ngFor="let c of customers" [class.active]="newCustomerId === c.id" (click)="pickCustomer(c.id)">{{ c.name }}</button>
        <button class="pick" [class.active]="newCustomerId === 'new'" (click)="pickCustomer('new')">New customer</button>
    </div>
    <input class="field" *ngIf="newCustomerId === 'new'" type="text" placeholder="Customer name" [(ngModel)]="newCustomerName">
    <input class="field" type="text" placeholder="Referral name" [(ngModel)]="newName">
    <input class="field" type="text" placeholder="Email or phone (optional)" [(ngModel)]="newContact">
    <p class="form_error" *ngIf="formError">{{ formError }}</p>
    <button class="dark_btn" (click)="addReferral()">Add referral</button>
    <button class="ghost_btn" (click)="closeAdd()">Cancel</button>
</div>

<div class="sheet_backdrop" *ngIf="shareOpen" (click)="closeShare()"></div>
<div class="share_sheet" *ngIf="shareOpen">
    <h3>{{ shareTitle }}</h3>
    <p class="sheet_text">{{ shareText }}</p>
    <div class="share_list">
        <a class="share_row" *ngFor="let option of shareOptions" [href]="shareHref(option.key)" [attr.target]="option.external ? '_blank' : null" rel="noopener" (click)="closeShare()">
            <span class="share_icon" [ngClass]="option.key"><ion-icon class="zmdi" [ngClass]="option.icon"></ion-icon></span>
            <span class="share_text">
                <strong>{{ option.label }}</strong>
                <span>{{ option.hint }}</span>
            </span>
        </a>
        <button class="share_row" *ngIf="canNativeShare" (click)="nativeShare()">
            <span class="share_icon more"><ion-icon class="zmdi zmdi-share"></ion-icon></span>
            <span class="share_text">
                <strong>More options</strong>
                <span>Other apps on this device</span>
            </span>
        </button>
    </div>
    <button class="ghost_btn" (click)="closeShare()">Cancel</button>
</div>`;

const styles = `.ref_content {
  --background: #f5f5f5;
}
.ref_wrap {
  padding: 16px 16px 40px 16px;
}
.ref_hero {
  margin: 4px 0 0 0;
  color: #1a1a1a;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.4;
}
.ref_notice {
  margin: 10px 0 0 0;
  padding: 9px 12px;
  border-radius: 10px;
  background: #ffffff;
  color: #FF7110;
  font-size: 0.78rem;
  font-weight: 500;
}
.progress_card {
  position: relative;
  margin-top: 16px;
  padding: 18px 16px;
  border-radius: 18px;
  background: #FF7110;
  box-shadow: 0 10px 24px rgba(255, 113, 16, 0.3);
}
.progress_head {
  position: relative;
  align-items: center;
  justify-content: space-between;
}
.progress_head h3 {
  margin: 0;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
}
.dots_btn {
  padding: 2px 4px;
  border: 0;
  background: transparent;
  color: #ffffff;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
}
.menu_list {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 6px;
  border-radius: 12px;
  background: #ffffff;
}
.menu_list button {
  padding: 9px 10px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: #1a1a1a;
  font-size: 0.82rem;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
}
.stat_row {
  position: relative;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
}
.stat {
  display: flex;
  align-items: center;
  flex: 1;
  padding-right: 8px;
}
.stat:last-child {
  padding-right: 0;
}
.stat ion-icon {
  margin-right: 7px;
  color: #ffffff;
  font-size: 1.1rem;
}
.stat span {
  color: #ffffff;
  font-size: 0.76rem;
  font-weight: 600;
  line-height: 1.3;
}
.gauge_block {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
}
.gauge {
  display: block;
  width: 190px;
  height: 112px;
}
.gauge_track {
  fill: none;
  stroke: rgba(255, 255, 255, 0.6);
  stroke-width: 14;
  stroke-dasharray: 3 7;
}
.gauge_fill {
  fill: none;
  stroke: #ffe066;
  stroke-width: 14;
  stroke-dasharray: 3 7;
}
.gauge_pct {
  position: absolute;
  top: 68px;
  left: 0;
  right: 0;
  color: #ffffff;
  font-size: 1.9rem;
  font-weight: 700;
  text-align: center;
}
.gauge_cap {
  margin-top: -8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.7rem;
  font-weight: 500;
}
.details_box {
  margin-top: 12px;
  padding: 4px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.16);
}
.detail_row {
  align-items: center;
  justify-content: space-between;
  padding: 9px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}
.detail_row:last-child {
  border-bottom: 0;
}
.detail_row span {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.78rem;
}
.detail_row strong {
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 600;
}
.how_box {
  margin-top: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.16);
}
.how_box h4 {
  margin: 0 0 6px 0;
  color: #ffffff;
  font-size: 0.86rem;
  font-weight: 600;
}
.how_box p {
  margin: 0 0 8px 0;
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.76rem;
  line-height: 1.5;
}
.how_box p:last-child {
  margin-bottom: 0;
}
.list_head {
  align-items: center;
  margin-top: 24px;
}
.list_head h3 {
  margin: 0;
  color: #1a1a1a;
  font-size: 1rem;
  font-weight: 600;
}
.search_box {
  display: flex;
  align-items: center;
  margin-top: 12px;
  padding: 12px 14px;
  border: 1px solid #eeeeee;
  border-radius: 14px;
  background: #ffffff;
}
.search_box ion-icon {
  margin-right: 10px;
  color: #9a9a9a;
  font-size: 1.1rem;
}
.search_box input {
  width: 100%;
  border: 0;
  background: transparent;
  color: #1a1a1a;
  font-size: 0.84rem;
  outline: none;
}
.cust_card {
  margin-top: 12px;
  padding: 12px 14px;
  border: 1px solid #eeeeee;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
}
.cust_head {
  align-items: center;
  cursor: pointer;
}
.avatar {
  min-width: 44px;
  width: 44px;
  height: 44px;
  margin-right: 12px;
  border-radius: 50%;
  background: #ffedd9;
  color: #FF7110;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.row_text {
  width: 100%;
  overflow: hidden;
}
.row_text h4 {
  margin: 0 0 2px 0;
  color: #1a1a1a;
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.row_text p {
  margin: 0;
  color: #9a9a9a;
  font-size: 0.74rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.row_end {
  margin-left: auto;
  text-align: right;
}
.row_reward {
  display: block;
  margin-bottom: 5px;
  color: #1a1a1a;
  font-size: 0.86rem;
  font-weight: 700;
}
.status_chip {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 0.68rem;
  font-weight: 600;
  white-space: nowrap;
}
.status_chip.pending {
  background: #fff1e0;
  color: #FF7110;
}
.status_chip.approved {
  background: #e7f0ff;
  color: #3b7ddd;
}
.status_chip.paid {
  background: #eaf7e2;
  color: #4b8b2a;
}
.status_chip.none {
  background: #f1f1f1;
  color: #8a8a8a;
}
.status_chip.as_btn {
  border: 0;
  font-family: inherit;
  cursor: pointer;
}
.status_chip.as_btn:disabled {
  cursor: default;
  opacity: 0.85;
}
.cust_body {
  margin-top: 12px;
  padding-top: 4px;
  border-top: 1px solid #f3f3f3;
}
.cust_actions {
  margin-bottom: 4px;
}
.mini_btn {
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
  padding: 7px 12px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  background: #fafafa;
  color: #1a1a1a;
  font-family: inherit;
  font-size: 0.74rem;
  font-weight: 600;
  cursor: pointer;
}
.mini_btn ion-icon {
  margin-right: 6px;
  color: #FF7110;
  font-size: 0.95rem;
}
.ref_row {
  align-items: center;
  padding: 11px 0;
  border-bottom: 1px solid #f4f4f4;
}
.ref_row:last-of-type {
  border-bottom: 0;
}
.ref_dot {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 34px;
  width: 34px;
  height: 34px;
  margin-right: 12px;
  border-radius: 50%;
  background: #f1f1f1;
  color: #8a8a8a;
  font-size: 1rem;
}
.ref_dot.pending {
  background: #fff1e0;
  color: #FF7110;
}
.ref_dot.approved {
  background: #e7f0ff;
  color: #3b7ddd;
}
.ref_dot.paid {
  background: #eaf7e2;
  color: #4b8b2a;
}
.cust_empty {
  margin: 10px 0 0 0;
  color: #9a9a9a;
  font-size: 0.78rem;
}
.ghost_btn.small {
  margin-top: 8px;
  padding: 10px;
  color: #FF7110;
  font-weight: 600;
  text-align: left;
}
.empty {
  margin: 16px 0 0 0;
  color: #9a9a9a;
  font-size: 0.82rem;
  text-align: center;
}
.apply_btn {
  margin: 0;
  --color: #FF7110;
  font-size: 0.86rem;
  font-weight: 600;
}
ion-toolbar ion-title {
  color: #1a1a1a;
  font-weight: 600;
}
.sheet_backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.45);
}
.apply_sheet,
.share_sheet {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  padding: 18px 18px 24px 18px;
  border-radius: 20px 20px 0 0;
  background: #ffffff;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.16);
}
.apply_sheet h3,
.share_sheet h3 {
  margin: 0;
  color: #1a1a1a;
  font-size: 1rem;
  font-weight: 600;
}
.sheet_text {
  margin: 6px 0 0 0;
  color: #9a9a9a;
  font-size: 0.78rem;
  line-height: 1.5;
}
.pick_label {
  margin-top: 14px;
  color: #9a9a9a;
  font-size: 0.72rem;
  font-weight: 500;
}
.field {
  width: 100%;
  margin-top: 10px;
  padding: 12px 14px;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  background: #ffffff;
  color: #1a1a1a;
  font-size: 0.84rem;
  outline: none;
}
.status_pick {
  display: flex;
  margin-top: 12px;
}
.status_pick.wrap {
  flex-wrap: wrap;
}
.status_pick .pick {
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 8px 12px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  background: #ffffff;
  color: #6c6c6c;
  font-family: inherit;
  font-size: 0.76rem;
  font-weight: 500;
  cursor: pointer;
}
.status_pick .pick.active {
  border-color: #FF7110;
  background: #FF7110;
  color: #ffffff;
}
.form_error {
  margin: 10px 0 0 0;
  color: #e62424;
  font-size: 0.78rem;
}
.dark_btn {
  display: block;
  width: 100%;
  margin-top: 14px;
  padding: 13px;
  border: 0;
  border-radius: 12px;
  background: #1a1a1a;
  color: #ffffff;
  font-size: 0.86rem;
  font-weight: 600;
  cursor: pointer;
}
.ghost_btn {
  display: block;
  width: 100%;
  margin-top: 6px;
  padding: 12px;
  border: 0;
  background: transparent;
  color: #9a9a9a;
  font-size: 0.84rem;
  font-weight: 500;
  cursor: pointer;
}
.share_list {
  margin-top: 14px;
}
.share_row {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  padding: 11px 12px;
  border: 1px solid #eeeeee;
  border-radius: 14px;
  background: #ffffff;
  font-family: inherit;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
}
.share_icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 38px;
  width: 38px;
  height: 38px;
  margin-right: 12px;
  border-radius: 50%;
  background: #f1f1f1;
  color: #1a1a1a;
  font-size: 1.15rem;
}
.share_icon.sms {
  background: #e7f0ff;
  color: #3b7ddd;
}
.share_icon.whatsapp {
  background: #e3f7ea;
  color: #25d366;
}
.share_icon.email {
  background: #ffedd9;
  color: #FF7110;
}
.share_text {
  display: block;
}
.share_text strong {
  display: block;
  color: #1a1a1a;
  font-size: 0.86rem;
  font-weight: 600;
}
.share_text > span {
  display: block;
  margin-top: 2px;
  color: #9a9a9a;
  font-size: 0.72rem;
}`;

// The semicircle arc above is 251.33 long (pi * r, r = 80): the drawn share of it is the
// paid fraction, the rest of the length stays empty.
const GAUGE_LENGTH = 251.33;

let ReferralsPage = class ReferralsPage {
    constructor() {
        this.reward = REFERRAL_REWARD;
        this.customers = [];
        this.search = '';
        this.detailsOpen = false;
        this.howOpen = false;
        this.menuOpen = false;
        this.addOpen = false;
        this.shareOpen = false;
        this.shareText = '';
        this.shareTitle = '';
        this.expandedId = null;
        this.shareOptions = [
            { key: 'sms', label: 'Text message', hint: 'Send it by SMS', icon: 'zmdi-comment-text', external: false },
            { key: 'whatsapp', label: 'WhatsApp', hint: 'Share it in a chat', icon: 'zmdi-whatsapp', external: true },
            { key: 'email', label: 'Email', hint: 'Send it as an email', icon: 'zmdi-email', external: false }
        ];
        this.canNativeShare = !!(window.navigator && navigator.share);
        this.newCustomerId = 'new';
        this.newCustomerName = '';
        this.newName = '';
        this.newContact = '';
        this.formError = '';
        this.notice = '';
    }
    ngOnInit() {
        this.customers = loadCustomers();
    }
    customerCount() {
        return this.customers.length;
    }
    referralTotal() {
        return this.customers.reduce((sum, cust) => sum + cust.referrals.length, 0);
    }
    stageCount(stage) {
        return this.customers.reduce((sum, cust) => sum + cust.referrals.filter(row => row.status === stage).length, 0);
    }
    totalBonus() {
        return this.referralTotal() * REFERRAL_REWARD;
    }
    paidTotal() {
        return this.stageCount(STAGE_PAID) * REFERRAL_REWARD;
    }
    approvedTotal() {
        return this.stageCount(STAGE_APPROVED) * REFERRAL_REWARD;
    }
    pendingTotal() {
        return this.stageCount(STAGE_PENDING) * REFERRAL_REWARD;
    }
    progressPercent() {
        const total = this.totalBonus();
        return total ? Math.round(this.paidTotal() / total * 100) : 0;
    }
    // The gauge is drawn as a ring of ticks, so the yellow ticks are revealed by clipping the
    // filled arc. The arc is a semicircle of radius 80 centred at (100, 100), so the x for a
    // given progress is not a linear share of the width: x = 100 - 80 * cos(arc length / 80).
    // 7 is half the stroke (so the boundary tick is whole) and 13 is the rect's own x, i.e. the
    // arc's start x minus that half stroke.
    gaugeClipWidth() {
        const percent = this.progressPercent();
        if (!percent) {
            return 0;
        }
        return Math.max(0, 100 - 80 * Math.cos(GAUGE_LENGTH * percent / 100 / 80) + 7 - 13);
    }
    customerBonus(cust) {
        return cust.referrals.length * REFERRAL_REWARD;
    }
    // The badge on the collapsed card is the least-advanced bonus this customer still has,
    // so the row tells you what needs attention without opening it.
    customerStage(cust) {
        if (!cust.referrals.length) {
            return NO_REFERRALS;
        }
        if (cust.referrals.some(row => row.status === STAGE_PENDING)) {
            return STAGE_PENDING;
        }
        if (cust.referrals.some(row => row.status === STAGE_APPROVED)) {
            return STAGE_APPROVED;
        }
        return STAGE_PAID;
    }
    countLabel(cust) {
        const count = cust.referrals.length;
        return count + (count === 1 ? ' referral' : ' referrals');
    }
    stageClass(stage) {
        if (stage === STAGE_PENDING) {
            return 'pending';
        }
        if (stage === STAGE_APPROVED) {
            return 'approved';
        }
        if (stage === STAGE_PAID) {
            return 'paid';
        }
        return 'none';
    }
    stageIcon(stage) {
        if (stage === STAGE_PENDING) {
            return 'zmdi-time';
        }
        if (stage === STAGE_APPROVED) {
            return 'zmdi-check';
        }
        if (stage === STAGE_PAID) {
            return 'zmdi-check-circle';
        }
        return 'zmdi-account';
    }
    moneyLabel(value) {
        return '$' + Number(value || 0).toLocaleString('en-US');
    }
    initial(name) {
        return (name || '?').trim().charAt(0).toUpperCase();
    }
    dateLabel(iso) {
        if (!iso) {
            return '';
        }
        const parts = String(iso).split('-');
        if (parts.length < 3) {
            return iso;
        }
        return (MONTHS[parseInt(parts[1], 10) - 1] || '') + ' ' + parseInt(parts[2], 10);
    }
    filtered() {
        const query = this.search.trim().toLowerCase();
        if (!query) {
            return this.customers;
        }
        return this.customers.filter(cust => this.matches(cust, query));
    }
    matches(cust, query) {
        if ((cust.name || '').toLowerCase().indexOf(query) !== -1 || (cust.code || '').toLowerCase().indexOf(query) !== -1) {
            return true;
        }
        return cust.referrals.some(row => (row.name || '').toLowerCase().indexOf(query) !== -1 || (row.contact || '').toLowerCase().indexOf(query) !== -1 || (row.status || '').toLowerCase().indexOf(query) !== -1);
    }
    toggleCustomer(cust) {
        this.expandedId = this.expandedId === cust.id ? null : cust.id;
    }
    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
    toggleHowItWorks() {
        this.menuOpen = false;
        this.howOpen = !this.howOpen;
    }
    toggleDetails() {
        this.detailsOpen = !this.detailsOpen;
    }
    // Tapping a referral's badge walks its bonus to the next stage; Paid is the end of the line.
    advance(row) {
        const index = STAGES.indexOf(row.status);
        if (index === -1 || index >= STAGES.length - 1) {
            return;
        }
        row.status = STAGES[index + 1];
        saveCustomers(this.customers);
        this.notice = row.name + '\u2019s bonus is now ' + row.status + '.';
    }
    writeClipboard(text, message) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => { this.notice = message; }).catch(() => { this.notice = text; });
        }
        else {
            this.notice = text;
        }
    }
    copyCode(cust) {
        this.writeClipboard(cust.code, cust.name + '\u2019s referral code copied.');
    }
    progressMessage() {
        return 'My Solar360 referral bonuses: ' + this.referralTotal() + ' referrals across ' + this.customerCount() + ' customers, ' + this.moneyLabel(this.paidTotal()) + ' paid so far.';
    }
    codeMessage(cust) {
        return cust.name + '\u2019s Solar360 referral code is ' + cust.code + ' — every friend who goes solar earns them ' + this.moneyLabel(REFERRAL_REWARD) + '.';
    }
    openShare(title, text) {
        this.shareTitle = title;
        this.shareText = text;
        this.menuOpen = false;
        this.shareOpen = true;
    }
    shareCode(cust) {
        this.openShare('Share ' + cust.name + '\u2019s code', this.codeMessage(cust));
    }
    shareProgress() {
        this.openShare('Share your progress', this.progressMessage());
    }
    closeShare() {
        this.shareOpen = false;
    }
    // Every pick opens the matching app: sms:/mailto: hand off to the phone's own apps,
    // WhatsApp opens wa.me with the message prefilled.
    shareSubject() {
        return this.shareTitle.indexOf('progress') !== -1 ? 'My Solar360 referrals' : 'Join me on Solar360';
    }
    shareHref(key) {
        const text = this.shareText;
        if (key === 'sms') {
            return 'sms:?&body=' + encodeURIComponent(text);
        }
        if (key === 'email') {
            return 'mailto:?subject=' + encodeURIComponent(this.shareSubject()) + '&body=' + encodeURIComponent(text);
        }
        if (key === 'whatsapp') {
            return 'https://wa.me/?text=' + encodeURIComponent(text);
        }
        return '';
    }
    nativeShare() {
        this.closeShare();
        if (this.canNativeShare) {
            navigator.share({ title: this.shareSubject(), text: this.shareText }).catch(() => { });
        }
        else {
            this.writeClipboard(this.shareText, 'Referral message copied — share it with a friend.');
        }
    }
    makeCode(name) {
        const initials = (name || '').trim().split(/\s+/).map(part => part.charAt(0).toUpperCase()).join('').slice(0, 2) || 'RV';
        const digits = String(Date.now() % 90 + 10);
        return 'SOLAR360-' + initials + digits;
    }
    openAdd(cust) {
        this.addOpen = true;
        this.formError = '';
        this.newName = '';
        this.newContact = '';
        this.newCustomerName = '';
        this.newCustomerId = cust ? cust.id : 'new';
    }
    closeAdd() {
        this.addOpen = false;
    }
    pickCustomer(id) {
        this.newCustomerId = id;
        this.formError = '';
    }
    addReferral() {
        const name = (this.newName || '').trim();
        if (!name) {
            this.formError = 'Enter the referral name first.';
            return;
        }
        if (this.newCustomerId === 'new' && !(this.newCustomerName || '').trim()) {
            this.formError = 'Enter the customer name first.';
            return;
        }
        const record = {
            id: 'ref' + Date.now(),
            name: name,
            contact: (this.newContact || '').trim(),
            date: src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.offsetDateISO(0),
            status: STAGE_PENDING
        };
        if (this.newCustomerId === 'new') {
            const customerName = this.newCustomerName.trim();
            const cust = {
                id: 'cust' + Date.now(),
                name: customerName,
                code: this.makeCode(customerName),
                referrals: [record]
            };
            this.customers = [cust].concat(this.customers);
            this.expandedId = cust.id;
            this.notice = customerName + ' added with 1 referral.';
        }
        else {
            const target = this.customers.filter(c => c.id === this.newCustomerId)[0];
            this.customers = this.customers.map(c => c.id === this.newCustomerId ? Object.assign({}, c, { referrals: [record].concat(c.referrals) }) : c);
            this.expandedId = this.newCustomerId;
            this.notice = name + ' added to ' + (target ? target.name : 'the customer') + '.';
        }
        saveCustomers(this.customers);
        this.addOpen = false;
        this.formError = '';
    }
};
ReferralsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-referrals',
        template: template,
        styles: [styles]
    })
], ReferralsPage);



/***/ })

}]);
