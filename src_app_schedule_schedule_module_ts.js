"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_schedule_schedule_module_ts"],{

/***/ 9240:
/*!********************************************************!*\
  !*** ./src/app/schedule/schedule-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePageRoutingModule": () => (/* binding */ SchedulePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.page */ 9242);




const routes = [
    {
        path: '',
        component: _schedule_page__WEBPACK_IMPORTED_MODULE_0__.SchedulePage
    }
];
let SchedulePageRoutingModule = class SchedulePageRoutingModule {
};
SchedulePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SchedulePageRoutingModule);



/***/ }),

/***/ 9241:
/*!***********************************************!*\
  !*** ./src/app/schedule/schedule.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePageModule": () => (/* binding */ SchedulePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule-routing.module */ 9240);
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.page */ 9242);







let SchedulePageModule = class SchedulePageModule {
};
SchedulePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchedulePageRoutingModule
        ],
        declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_1__.SchedulePage]
    })
], SchedulePageModule);



/***/ }),

/***/ 9242:
/*!*******************************************!*\
  !*** ./src/app/schedule/schedule.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePage": () => (/* binding */ SchedulePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/inquiry-store */ 9200);

// The week planner: the next seven days of site visits, with the clashes and the next-due
// reminders worked out from the times and the addresses, and a drive order for a day's stops.
// The plan is the app's fourth persisted data set (localStorage, `solar360_schedule`) and is
// first seeded from the appointments the inquiry store already holds, so the planner describes
// the same visits the Home map and the Dashboard do.
const STORAGE_KEY = 'solar360_schedule';
const WEEK_LENGTH = 7;
const DEFAULT_DURATION = 60;
const DRIVE_SPEED_KMH = 42;        // door-to-door average on the Mason corridor
const TRAVEL_BUFFER_MIN = 10;      // parking and handover before the next visit can start
const FALLBACK_TRAVEL_MIN = 20;    // assumed gap when a stop has no mapped location
const REMINDER_WINDOW_MIN = 180;   // how close a visit must be before it is reminded
const DURATION_OPTIONS = [30, 45, 60, 90, 120];
const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const ROUTE_HINT = 'Orders the stops below into the shortest drive between them, using each visit\'s own coordinates.';

const pad2 = value => String(value).padStart(2, '0');
const isoOf = date => date.getFullYear() + '-' + pad2(date.getMonth() + 1) + '-' + pad2(date.getDate());
// Day offsets keep the plan anchored to the day the app is opened, like the seeded houses.
const dayOffset = offset => {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() + offset);
    return isoOf(date);
};
const dateOf = iso => new Date(iso + 'T12:00:00');
const minutesOf = time => {
    const parts = String(time || '09:00').split(':');
    return (parseInt(parts[0], 10) || 0) * 60 + (parseInt(parts[1], 10) || 0);
};
const clockLabel = minutes => pad2(Math.floor(minutes / 60) % 24) + ':' + pad2(minutes % 60);
const dayLabel = iso => DAY_LABELS[dateOf(iso).getDay()] + ' ' + dateOf(iso).getDate() + ' ' + MONTHS[dateOf(iso).getMonth()];
const durationLabel = minutes => {
    const value = typeof minutes === 'number' && minutes >= 0 ? minutes : DEFAULT_DURATION;
    if (value < 60) {
        return value + ' min';
    }
    const hours = Math.floor(value / 60);
    return value % 60 ? hours + ' h ' + (value % 60) + ' m' : hours + ' h';
};
const hasCoords = booking => typeof booking.lat === 'number' && typeof booking.lng === 'number';
// Great-circle kilometres between two stops, the same measure the map's travel total uses.
const kmBetween = (from, to) => {
    const toRad = degrees => degrees * Math.PI / 180;
    const dLat = toRad(to.lat - from.lat);
    const dLng = toRad(to.lng - from.lng);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(from.lat)) * Math.cos(toRad(to.lat)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};
const travelMinutes = (from, to) => hasCoords(from) && hasCoords(to)
    ? Math.round(kmBetween(from, to) / DRIVE_SPEED_KMH * 60) + TRAVEL_BUFFER_MIN
    : FALLBACK_TRAVEL_MIN;

const readPlan = () => {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : null;
        return Array.isArray(parsed) ? parsed : null;
    }
    catch (e) {
        return null;
    }
};
const writePlan = bookings => {
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    }
    catch (e) {
    }
};
// First open of the planner: start from the appointments the pipeline already holds that fall
// inside the coming week, so the page describes visits that really exist rather than invented
// ones. From that point on the plan is its own list.
const seedPlan = () => {
    const data = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.InquiryStore.snapshot();
    const firstDay = dayOffset(0);
    const lastDay = dayOffset(WEEK_LENGTH - 1);
    const seeds = [];
    data.inquiries.forEach(inquiry => {
        const note = data.notes[inquiry.id] || {};
        if (!note.appointmentDate || note.appointmentDate < firstDay || note.appointmentDate > lastDay) {
            return;
        }
        seeds.push({
            id: 'visit_' + inquiry.id,
            customerName: note.customerName || 'New inquiry',
            address: note.locationAddress || 'Location not set',
            date: note.appointmentDate,
            time: note.appointmentTime || '09:00',
            durationMin: DEFAULT_DURATION,
            lat: inquiry.lat,
            lng: inquiry.lng,
            notes: note.technicianNotes || '',
            done: false,
            order: null
        });
    });
    return seeds.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
};

const template = `<ion-header>
    <ion-toolbar>
        <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Schedule</ion-title>
        <ion-buttons slot="end">
            <ion-button class="add_visit_btn" (click)="openSheet()">Add visit</ion-button>
        </ion-buttons>
    </ion-toolbar>
</ion-header>

<ion-content class="bg_color" fullscreen>
    <div class="sched_wrap">
        <div class="sched_hero">
            <h2>{{ weekCount }}</h2>
            <span>visits planned this week</span>
            <p>{{ nextVisit }}</p>
        </div>

        <div class="week_strip">
            <div class="day_chip" *ngFor="let day of days" [class.active]="day.iso === selectedDay" [class.today]="day.isToday" (click)="selectDay(day.iso)">
                <span class="chip_dow">{{ day.dow }}</span>
                <strong class="chip_num">{{ day.dayNum }}</strong>
                <span class="chip_count" *ngIf="day.count">{{ day.count }}</span>
                <i class="chip_flag" *ngIf="day.clashCount"></i>
            </div>
        </div>

        <div class="smart_card">
            <div class="card_head d-flex">
                <h3>Needs attention</h3>
                <span class="head_count" *ngIf="alerts.length">{{ alertCount }}</span>
            </div>
            <p class="empty_note" *ngIf="!alerts.length">No clashes and nothing due soon. The week is clear.</p>
            <div class="alert_row d-flex" *ngFor="let alert of alerts" [ngClass]="alert.tone">
                <ion-icon [ngClass]="alert.icon"></ion-icon>
                <div class="alert_text">
                    <strong>{{ alert.title }}</strong>
                    <span>{{ alert.detail }}</span>
                </div>
            </div>
        </div>

        <div class="day_card">
            <div class="card_head d-flex">
                <h3>{{ selectedDayLabel }}</h3>
                <span class="head_count" *ngIf="dayRows.length">{{ dayRows.length }}</span>
            </div>
            <p class="empty_note" *ngIf="!dayRows.length">Nothing scheduled for this day. Tap Add visit to plan one.</p>
            <div class="sched_row d-flex" *ngFor="let row of dayRows" [class.flagged]="row.conflict" (click)="openSheet(row.booking)">
                <div class="time_box">
                    <strong>{{ row.booking.time }}</strong>
                    <span>{{ row.duration }}</span>
                </div>
                <div class="row_body">
                    <div class="row_top d-flex">
                        <h4>{{ row.booking.customerName }}</h4>
                        <span class="stop_badge" *ngIf="row.booking.order">Stop {{ row.booking.order }}</span>
                        <span class="done_badge" *ngIf="row.booking.done">Done</span>
                    </div>
                    <p class="row_addr">{{ row.booking.address }}</p>
                    <p class="row_flag" *ngIf="row.conflict"><ion-icon class="zmdi zmdi-alert-triangle"></ion-icon>{{ row.conflict }}</p>
                    <p class="row_reminder" *ngIf="row.reminder"><ion-icon class="zmdi zmdi-time"></ion-icon>{{ row.reminder }}</p>
                </div>
            </div>
            <div class="route_box" *ngIf="dayRows.length > 1">
                <button class="route_btn" (click)="optimizeRoute()">{{ routeSummary ? 'Re-plan the day' : 'Optimize day route' }}</button>
                <p class="route_note">{{ routeSummary || routeHint }}</p>
                <button class="ghost_btn" *ngIf="routeSummary" (click)="clearRoute()">Clear route order</button>
            </div>
            <p class="locating_note" *ngIf="locating">Finding this address on the map…</p>
        </div>
    </div>
</ion-content>

<div class="sheet_backdrop" *ngIf="sheetOpen" (click)="closeSheet()"></div>
<div class="sched_sheet" *ngIf="sheetOpen">
    <h3>{{ draft.id ? 'Edit visit' : 'Schedule a visit' }}</h3>
    <p class="sheet_text">Clashes and reminders are worked out from the time and the address, so keep both up to date.</p>
    <input class="field" type="text" placeholder="Customer name" [(ngModel)]="draft.customerName">
    <input class="field" type="text" placeholder="Address" [(ngModel)]="draft.address">
    <div class="field_row d-flex">
        <select class="field half" [(ngModel)]="draft.date">
            <option *ngFor="let day of dayOptions" [value]="day.iso">{{ day.label }}</option>
        </select>
        <input class="field half" type="time" [(ngModel)]="draft.time">
    </div>
    <select class="field" [(ngModel)]="draft.durationMin">
        <option *ngFor="let option of durationOptions" [ngValue]="option">{{ durationLabelOf(option) }}</option>
    </select>
    <input class="field" type="text" placeholder="Notes for the visit (optional)" [(ngModel)]="draft.notes">
    <p class="form_error" *ngIf="formError">{{ formError }}</p>
    <div class="sheet_actions d-flex" *ngIf="draft.id">
        <button class="ghost_btn inline" (click)="toggleDone()">{{ draft.done ? 'Mark not done' : 'Mark done' }}</button>
        <button class="ghost_btn inline danger" (click)="deleteBooking()">Delete</button>
    </div>
    <button class="dark_btn" (click)="saveBooking()">Save visit</button>
    <button class="ghost_btn" (click)="closeSheet()">Cancel</button>
</div>`;

const styles = `ion-header {
  background: var(--white_gradient);
}
ion-header ion-toolbar ion-title {
  color: var(--text-dark);
  font-weight: 600;
}
.add_visit_btn {
  margin: 0;
  --color: var(--primary);
  font-size: 0.86rem !important;
  font-weight: 600;
}
.sched_wrap {
  padding-bottom: 30px;
}
.sched_hero {
  width: calc(100% - 40px);
  margin: 0 auto 15px auto;
  padding: 20px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--primary) 0%, #FF7110 100%);
  box-shadow: 0 15px 12px -8px rgba(0, 0, 0, 0.25);
}
.sched_hero h2 {
  margin: 0;
  color: #ffffff;
  font-size: 2.3rem !important;
  font-weight: 700;
  line-height: 1;
}
.sched_hero span {
  display: block;
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.72rem !important;
  font-weight: 600;
  letter-spacing: 0.08em;
}
.sched_hero p {
  margin: 10px 0 0 0;
  color: #ffffff;
  font-size: 0.85rem !important;
  font-weight: 500;
}
.week_strip {
  display: flex;
  width: calc(100% - 40px);
  margin: 0 auto 15px auto;
}
.day_chip {
  position: relative;
  flex: 1;
  margin-right: 6px;
  padding: 10px 0 9px 0;
  border-radius: 12px;
  background: var(--bg-white);
  box-shadow: 0 15px 12px -8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
}
.day_chip:last-child {
  margin-right: 0;
}
.day_chip.today {
  border: 1px solid var(--primary);
}
.day_chip.active {
  background: var(--primary);
  border-color: var(--primary);
}
.chip_dow {
  display: block;
  color: var(--text-light2);
  font-size: 0.62rem !important;
  font-weight: 600;
}
.chip_num {
  display: block;
  margin-top: 3px;
  color: var(--text-dark);
  font-size: 0.92rem !important;
  font-weight: 700;
}
.day_chip.active .chip_dow,
.day_chip.active .chip_num {
  color: #ffffff;
}
.chip_count {
  position: absolute;
  top: 4px;
  right: 6px;
  min-width: 15px;
  padding: 1px 4px;
  border-radius: 10px;
  background: rgba(255, 113, 16, 0.14);
  color: var(--primary);
  font-size: 0.58rem !important;
  font-weight: 700;
}
.day_chip.active .chip_count {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
}
.chip_flag {
  position: absolute;
  bottom: 5px;
  left: 50%;
  width: 5px;
  height: 5px;
  margin-left: -2.5px;
  border-radius: 50%;
  background: #e62424;
}
.smart_card,
.day_card {
  width: calc(100% - 40px);
  margin: 0 auto 15px auto;
  padding: 16px;
  background: var(--bg-white);
  border-radius: 14px;
  box-shadow: 0 15px 12px -8px rgba(0, 0, 0, 0.1);
}
.card_head {
  align-items: center;
}
.card_head h3 {
  margin: 0;
  color: var(--text-dark);
  font-size: 1rem !important;
  font-weight: 600;
}
.head_count {
  margin-left: auto;
  padding: 2px 9px;
  border: 1px solid var(--border-line-color);
  border-radius: 20px;
  color: var(--text-light2);
  font-size: 0.68rem !important;
  font-weight: 700;
}
.empty_note {
  margin: 12px 0 0 0;
  color: var(--text-light2);
  font-size: 0.8rem !important;
  line-height: 1.5;
}
.alert_row {
  align-items: flex-start;
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(255, 113, 16, 0.08);
}
.alert_row.conflict {
  background: rgba(230, 36, 36, 0.1);
}
.alert_row ion-icon {
  margin-right: 10px;
  color: var(--primary);
  font-size: 1.1rem !important;
  min-width: 18px;
}
.alert_row.conflict ion-icon {
  color: #e62424;
}
.alert_text strong {
  display: block;
  color: var(--text-dark);
  font-size: 0.8rem !important;
  font-weight: 600;
}
.alert_text span {
  display: block;
  margin-top: 2px;
  color: var(--text-light2);
  font-size: 0.74rem !important;
  line-height: 1.45;
}
.sched_row {
  align-items: flex-start;
  padding: 14px 0;
  border-bottom: 1px solid var(--border-line-color);
  cursor: pointer;
}
.sched_row:last-of-type {
  border-bottom: 0;
}
.time_box {
  min-width: 54px;
  width: 54px;
  margin-right: 12px;
  padding: 8px 0;
  border-radius: 12px;
  background: rgba(255, 113, 16, 0.1);
  text-align: center;
}
.time_box strong {
  display: block;
  color: var(--primary);
  font-size: 0.9rem !important;
  font-weight: 700;
  line-height: 1;
}
.time_box span {
  display: block;
  margin-top: 4px;
  color: var(--text-light2);
  font-size: 0.6rem !important;
  font-weight: 600;
}
.row_body {
  width: 100%;
  overflow: hidden;
}
.row_top {
  align-items: center;
}
.row_top h4 {
  margin: 0;
  color: var(--text-dark);
  font-size: 0.92rem !important;
  font-weight: 600;
}
.stop_badge {
  margin-left: 8px;
  padding: 2px 8px;
  border-radius: 20px;
  background: var(--primary);
  color: #ffffff;
  font-size: 0.62rem !important;
  font-weight: 700;
}
.done_badge {
  margin-left: 8px;
  padding: 2px 8px;
  border: 1px solid var(--border-line-color);
  border-radius: 20px;
  color: var(--text-light2);
  font-size: 0.62rem !important;
  font-weight: 700;
}
.row_addr {
  margin: 3px 0 0 0;
  color: var(--text-light2);
  font-size: 0.75rem !important;
}
.row_flag,
.row_reminder {
  margin: 7px 0 0 0;
  font-size: 0.74rem !important;
  font-weight: 600;
  line-height: 1.4;
}
.row_flag {
  color: #e62424;
}
.row_reminder {
  color: var(--primary);
}
.row_flag ion-icon,
.row_reminder ion-icon {
  margin-right: 6px;
  position: relative;
  top: 1px;
}
.route_box {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--border-line-color);
}
.route_btn {
  display: block;
  width: 100%;
  padding: 13px;
  border: 0;
  border-radius: 12px;
  background: var(--primary);
  color: #ffffff;
  font-size: 0.86rem !important;
  font-weight: 600;
  cursor: pointer;
}
.route_note {
  margin: 10px 0 0 0;
  color: var(--text-light2);
  font-size: 0.76rem !important;
  line-height: 1.45;
}
.locating_note {
  margin: 12px 0 0 0;
  color: var(--text-light2);
  font-size: 0.74rem !important;
  font-style: italic;
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
.sched_sheet {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  padding: 18px 18px 24px 18px;
  border-radius: 20px 20px 0 0;
  background: var(--bg-white);
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.16);
}
.sched_sheet h3 {
  margin: 0;
  color: var(--text-dark);
  font-size: 1rem !important;
  font-weight: 600;
}
.sheet_text {
  margin: 6px 0 0 0;
  color: var(--text-light2);
  font-size: 0.78rem !important;
  line-height: 1.45;
}
.field {
  width: 100%;
  margin-top: 10px;
  padding: 12px 14px;
  border: 1px solid var(--border-line-color);
  border-radius: 12px;
  background: var(--bg-white);
  color: var(--text-dark);
  font-size: 0.84rem !important;
  outline: none;
}
.field_row {
  justify-content: space-between;
}
.field.half {
  width: calc(50% - 5px);
}
.form_error {
  margin: 10px 0 0 0;
  color: #e62424;
  font-size: 0.78rem !important;
}
.sheet_actions {
  margin-top: 12px;
}
.ghost_btn {
  display: block;
  width: 100%;
  margin-top: 6px;
  padding: 12px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: var(--text-light2);
  font-size: 0.84rem !important;
  font-weight: 500;
  cursor: pointer;
}
.ghost_btn.inline {
  width: calc(50% - 5px);
  margin: 0;
  border: 1px solid var(--border-line-color);
}
.ghost_btn.inline.danger {
  color: #e62424;
}
.dark_btn {
  display: block;
  width: 100%;
  margin-top: 12px;
  padding: 13px;
  border: 0;
  border-radius: 12px;
  background: var(--text-dark);
  color: var(--bg-white);
  font-size: 0.86rem !important;
  font-weight: 600;
  cursor: pointer;
}`;

let SchedulePage = class SchedulePage {
    constructor() {
        this.bookings = [];
        this.days = [];
        this.dayRows = [];
        this.alerts = [];
        this.alertCount = 0;
        this.selectedDay = dayOffset(0);
        this.selectedDayLabel = dayLabel(this.selectedDay);
        this.weekCount = 0;
        this.nextVisit = 'Nothing coming up this week';
        this.routeSummary = '';
        this.routeHint = ROUTE_HINT;
        this.sheetOpen = false;
        this.formError = '';
        this.locating = false;
        this.durationOptions = DURATION_OPTIONS;
        this.dayOptions = [];
        this.draft = {};
    }
    ngOnInit() {
        const stored = readPlan();
        this.bookings = stored || seedPlan();
        if (!stored) {
            writePlan(this.bookings);
        }
        this.refresh();
    }
    // The week strip, the day list, the clashes and the reminders are all derived from the
    // stored plan on every change, so the page never shows a stale warning.
    refresh() {
        const today = dayOffset(0);
        const days = [];
        for (let offset = 0; offset < WEEK_LENGTH; offset++) {
            const iso = dayOffset(offset);
            const rows = this.bookings
                .filter(booking => booking.date === iso)
                .map(booking => ({
                    booking: booking,
                    conflict: '',
                    reminder: '',
                    duration: durationLabel(booking.durationMin)
                }));
            const clashes = this.flagClashes(rows);
            rows.sort(rows.length > 1 && rows.every(row => row.booking.order)
                ? (a, b) => a.booking.order - b.booking.order
                : (a, b) => minutesOf(a.booking.time) - minutesOf(b.booking.time));
            rows.forEach(row => { row.reminder = this.reminderFor(row.booking); });
            days.push({
                iso: iso,
                dow: DAY_LABELS[dateOf(iso).getDay()],
                dayNum: String(dateOf(iso).getDate()),
                isToday: iso === today,
                count: rows.length,
                clashCount: clashes.length,
                rows: rows
            });
        }
        this.days = days;
        this.dayOptions = days.map(day => ({ iso: day.iso, label: dayLabel(day.iso) + (day.isToday ? ' (today)' : '') }));
        const selected = days.filter(day => day.iso === this.selectedDay)[0] || days[0];
        this.selectedDay = selected.iso;
        this.selectedDayLabel = dayLabel(selected.iso) + (selected.isToday ? ' · today' : '');
        this.dayRows = selected.rows;
        this.weekCount = this.bookings.filter(booking => booking.date >= today && booking.date <= dayOffset(WEEK_LENGTH - 1)).length;
        this.nextVisit = this.nextVisitText(today);
        this.alerts = this.buildAlerts(days);
        this.alertCount = this.alerts.length;
    }
    // Two visits clash when the second one starts before the first has ended (an overlap) or
    // when there is less time between them than the drive needs.
    flagClashes(rows) {
        const sorted = rows.slice().sort((a, b) => minutesOf(a.booking.time) - minutesOf(b.booking.time));
        const clashes = [];
        for (let i = 0; i < sorted.length - 1; i++) {
            const current = sorted[i];
            const next = sorted[i + 1];
            const end = minutesOf(current.booking.time) + (current.booking.durationMin || DEFAULT_DURATION);
            const gap = minutesOf(next.booking.time) - end;
            const drive = travelMinutes(current.booking, next.booking);
            if (gap < 0) {
                const overlap = Math.abs(gap);
                current.conflict = 'Runs ' + durationLabel(overlap) + ' into ' + next.booking.customerName;
                next.conflict = 'Starts while ' + current.booking.customerName + ' is still booked';
                clashes.push({
                    title: 'Two visits overlap',
                    detail: current.booking.customerName + ' at ' + current.booking.time + ' runs ' + durationLabel(overlap) +
                        ' past the ' + next.booking.time + ' start of ' + next.booking.customerName + '.'
                });
            }
            else if (gap < drive) {
                current.conflict = 'Only ' + durationLabel(gap) + ' before ' + next.booking.customerName + ' — about ' + drive + ' min of drive';
                next.conflict = 'Needs about ' + drive + ' min of drive from ' + current.booking.customerName + ', but has ' + durationLabel(gap);
                clashes.push({
                    title: 'Back-to-back with no travel time',
                    detail: durationLabel(gap) + ' between ' + current.booking.customerName + ' and ' + next.booking.customerName +
                        ' at ' + next.booking.time + ', but roughly ' + drive + ' min of driving between them.'
                });
            }
        }
        return clashes;
    }
    reminderFor(booking) {
        const today = dayOffset(0);
        if (booking.done) {
            return '';
        }
        const start = minutesOf(booking.time);
        const end = start + (booking.durationMin || DEFAULT_DURATION);
        if (booking.date === today) {
            const now = new Date();
            const nowMinutes = now.getHours() * 60 + now.getMinutes();
            if (start > nowMinutes) {
                const away = start - nowMinutes;
                return away <= REMINDER_WINDOW_MIN ? 'Starts in ' + durationLabel(away) : '';
            }
            if (end > nowMinutes) {
                return 'On site now, since ' + booking.time;
            }
            return 'Was due at ' + booking.time + ' — mark it done once it is finished';
        }
        if (booking.date === dayOffset(1)) {
            return 'Tomorrow at ' + booking.time;
        }
        return '';
    }
    buildAlerts(days) {
        const alerts = [];
        days.forEach(day => {
            this.flagClashes(day.rows).forEach(clash => {
                alerts.push({
                    tone: 'conflict',
                    icon: 'zmdi zmdi-alert-triangle',
                    title: clash.title + ' · ' + (day.isToday ? 'today' : day.dow + ' ' + day.dayNum),
                    detail: clash.detail
                });
            });
        });
        const conflicts = alerts.slice(0, 3);
        const reminders = [];
        days[0].rows.forEach(row => {
            const reminder = this.reminderFor(row.booking);
            if (reminder) {
                reminders.push({
                    tone: 'reminder',
                    icon: 'zmdi zmdi-time',
                    title: (reminder.indexOf('Starts in') === 0 ? 'Next up: ' : 'Still open: ') + row.booking.customerName,
                    detail: reminder + ' · ' + row.booking.time + ' · ' + row.booking.address
                });
            }
        });
        if (!reminders.length && days[1].rows.length) {
            const first = days[1].rows[0].booking;
            reminders.push({
                tone: 'reminder',
                icon: 'zmdi zmdi-calendar',
                title: 'First visit tomorrow',
                detail: first.time + ' · ' + first.customerName + ' · ' + first.address
            });
        }
        return conflicts.concat(reminders.slice(0, 2)).slice(0, 4);
    }
    nextVisitText(today) {
        const now = new Date();
        const nowMinutes = now.getHours() * 60 + now.getMinutes();
        const upcoming = this.bookings
            .filter(booking => !booking.done && (booking.date > today || (booking.date === today && minutesOf(booking.time) >= nowMinutes)))
            .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
        if (!upcoming.length) {
            return 'Nothing coming up this week';
        }
        const next = upcoming[0];
        return 'Next: ' + next.customerName + ' · ' + (next.date === today ? 'today' : dayLabel(next.date)) + ' ' + next.time;
    }
    selectDay(iso) {
        this.selectedDay = iso;
        this.refresh();
    }
    durationLabelOf(minutes) {
        return durationLabel(minutes);
    }
    openSheet(booking) {
        this.formError = '';
        if (booking) {
            this.draft = Object.assign({ durationMin: DEFAULT_DURATION }, booking);
        }
        else {
            this.draft = {
                id: '',
                customerName: '',
                address: '',
                date: this.selectedDay,
                time: this.nextSlot(),
                durationMin: DEFAULT_DURATION,
                lat: null,
                lng: null,
                notes: '',
                done: false,
                order: null
            };
        }
        this.sheetOpen = true;
    }
    // A new visit is offered the next free half hour after the day's last one, rather than a
    // fixed 09:00 that would clash with everything already on that day.
    nextSlot() {
        const rows = this.bookings.filter(booking => booking.date === this.selectedDay);
        const lastEnd = rows.reduce((end, booking) => Math.max(end, minutesOf(booking.time) + (booking.durationMin || DEFAULT_DURATION)), 8 * 60);
        const slot = Math.ceil((lastEnd + 30) / 30) * 30;
        return clockLabel(Math.min(slot, 19 * 60));
    }
    closeSheet() {
        this.sheetOpen = false;
        this.formError = '';
    }
    saveBooking() {
        const draft = this.draft;
        const name = String(draft.customerName || '').trim();
        if (!name) {
            this.formError = 'Add a customer name for this visit.';
            return;
        }
        const existing = this.bookings.filter(booking => booking.id === draft.id)[0];
        const date = draft.date || this.selectedDay;
        const time = draft.time || '09:00';
        const address = String(draft.address || '').trim() || 'Location not set';
        const moved = !existing || existing.date !== date || existing.time !== time || existing.address !== address;
        const booking = {
            id: draft.id || 'visit_' + Date.now(),
            customerName: name,
            address: address,
            date: date,
            time: time,
            durationMin: Number(draft.durationMin) || DEFAULT_DURATION,
            lat: typeof draft.lat === 'number' ? draft.lat : null,
            lng: typeof draft.lng === 'number' ? draft.lng : null,
            notes: String(draft.notes || '').trim(),
            done: !!draft.done,
            // A visit that moves loses its place in the day's drive order.
            order: moved ? null : (existing ? existing.order : null)
        };
        if (existing && existing.address !== booking.address) {
            booking.lat = null;
            booking.lng = null;
        }
        this.bookings = existing
            ? this.bookings.map(item => item.id === booking.id ? booking : item)
            : this.bookings.concat([booking]);
        writePlan(this.bookings);
        this.selectedDay = booking.date;
        this.routeSummary = '';
        this.sheetOpen = false;
        this.formError = '';
        this.refresh();
        this.locateBooking(booking);
    }
    // The drive order needs real coordinates: an address typed by hand is looked up once on the
    // map (when a Maps key is configured) and stamped on the visit. Without a key the visit
    // keeps no location, and the clash check falls back to a fixed travel gap.
    locateBooking(booking) {
        const maps = window.google && window.google.maps;
        if (!booking.address || booking.address === 'Location not set' || hasCoords(booking) || !maps || !maps.Geocoder) {
            return;
        }
        this.locating = true;
        try {
            new maps.Geocoder().geocode({ address: booking.address }, (results, status) => {
                this.locating = false;
                if (status !== 'OK' || !results || !results.length) {
                    return;
                }
                const location = results[0].geometry.location;
                this.bookings = this.bookings.map(item => item.id === booking.id
                    ? Object.assign({}, item, { lat: location.lat(), lng: location.lng() })
                    : item);
                writePlan(this.bookings);
                this.refresh();
            });
        }
        catch (e) {
            this.locating = false;
        }
    }
    toggleDone() {
        const draft = this.draft;
        if (!draft.id) {
            return;
        }
        draft.done = !draft.done;
        this.bookings = this.bookings.map(booking => booking.id === draft.id ? Object.assign({}, booking, { done: !!draft.done }) : booking);
        writePlan(this.bookings);
        this.refresh();
    }
    deleteBooking() {
        this.bookings = this.bookings.filter(booking => booking.id !== this.draft.id);
        writePlan(this.bookings);
        this.routeSummary = '';
        this.sheetOpen = false;
        this.refresh();
    }
    // Re-plans the selected day: nearest neighbour from the earliest stop, so the day is driven
    // in the shortest order the coordinates allow. The booked times are left alone.
    optimizeRoute() {
        const rows = this.dayRows.map(row => row.booking);
        const mapped = rows.filter(hasCoords);
        if (mapped.length < 2) {
            this.routeSummary = '';
            this.routeHint = 'Two stops with a mapped address are needed before a drive order can be planned.';
            return;
        }
        const start = mapped.slice().sort((a, b) => minutesOf(a.time) - minutesOf(b.time))[0];
        const remaining = mapped.filter(booking => booking !== start);
        const tour = [start];
        let current = start;
        while (remaining.length) {
            let nearest = 0;
            for (let i = 1; i < remaining.length; i++) {
                if (kmBetween(current, remaining[i]) < kmBetween(current, remaining[nearest])) {
                    nearest = i;
                }
            }
            current = remaining.splice(nearest, 1)[0];
            tour.push(current);
        }
        const unmapped = rows.filter(booking => !hasCoords(booking)).sort((a, b) => minutesOf(a.time) - minutesOf(b.time));
        const ordered = tour.concat(unmapped);
        ordered.forEach((booking, index) => { booking.order = index + 1; });
        let totalKm = 0;
        for (let i = 0; i < tour.length - 1; i++) {
            totalKm += kmBetween(tour[i], tour[i + 1]);
        }
        writePlan(this.bookings);
        this.refresh();
        this.routeSummary = ordered.length + ' stops · ' + Math.round(totalKm) + ' km · about ' +
            Math.round(totalKm / DRIVE_SPEED_KMH * 60) + ' min of driving' +
            (unmapped.length ? ' · ' + unmapped.length + ' stop' + (unmapped.length === 1 ? '' : 's') + ' without a mapped address' : '');
        this.routeHint = ROUTE_HINT;
    }
    clearRoute() {
        this.bookings = this.bookings.map(booking => booking.date === this.selectedDay ? Object.assign({}, booking, { order: null }) : booking);
        writePlan(this.bookings);
        this.routeSummary = '';
        this.routeHint = ROUTE_HINT;
        this.refresh();
    }
};
SchedulePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-schedule',
        template: template,
        styles: [styles]
    })
], SchedulePage);



/***/ })

}]);
