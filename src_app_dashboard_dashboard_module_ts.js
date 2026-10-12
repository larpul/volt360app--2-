"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 9201:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 9203);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 9202:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 9201);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 9203);








let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 9203:
/*!*******************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 9204);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 9205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/inquiry-store */ 9200);






// The status palette is the one the map's filter panel uses, so the Dashboard speaks the
// same colour language as the pins.
const STATUS_TILES = [
    { name: 'In Progress', colour: 'blue', swatch: '#b7e06b' },
    { name: 'Installed', colour: 'green', swatch: '#FF7110' },
    { name: 'Cancelled', colour: 'red', swatch: '#e87869' },
    { name: 'New', colour: 'yellow', swatch: '#f5f5f5' },
    { name: 'Not Home', colour: 'gray', swatch: '#f5f5f5' },
    { name: 'Renter', colour: 'violet', swatch: '#f5f5f5' }
];
// Sales commission is a flat rate per watt of installed system size ($0.10/W = $100/kW).
const COMMISSION_PER_WATT = 0.1;
const RECENT_LIMIT = 5;
const CALENDAR_CELLS = 42;
const MONTHS_FULL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let DashboardPage = class DashboardPage {
    constructor(route) {
        this.route = route;
        this.appointments = [];
        this.calendarDays = [];
        this.selectedAppointments = [];
        this.visits = [];
        this.visitSheet = null;
        this.openStage = null;
    }
    ngOnInit() {
        const data = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_5__.InquiryStore.snapshot();
        this.statusSummary = STATUS_TILES.map(tile => ({
            name: tile.name,
            swatch: tile.swatch,
            count: data.inquiries.filter(inquiry => this.statusOf(data, inquiry.id) === tile.name).length
        }));
        this.totalInquiries = data.inquiries.length;
        // A house counts as checked in while its note carries a live checkInAt timestamp, which the
        // Home map's Check in button sets (and Check out clears). The names travel with it, so the
        // Status overview can say which house is on site, not just how many.
        this.checkedInHouses = data.inquiries
            .filter(inquiry => (data.notes[inquiry.id] || {}).checkInAt)
            .map(inquiry => {
                const note = data.notes[inquiry.id];
                return {
                    id: inquiry.id,
                    customerName: note.customerName || 'New inquiry',
                    locationAddress: note.locationAddress || 'Location not set',
                    checkInTime: this.timeLabel(note.checkInAt),
                    coords: this.coordsLabel(note, inquiry),
                    visitNotes: note.technicianNotes || 'No notes from this visit'
                };
            });
        this.checkedInCount = this.checkedInHouses.length;
        // The sales pipeline is the same set of prospects, grouped by the stage each one has
        // reached, so the funnel and the install statuses never contradict each other.
        this.pipelineStages = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_5__.PIPELINE_STAGES.map(stage => {
            const stageInquiries = data.inquiries.filter(inquiry => this.stageOf(data, inquiry.id) === stage.name);
            const customers = stageInquiries.map(inquiry => {
                const note = data.notes[inquiry.id] || {};
                const status = this.statusOf(data, inquiry.id);
                const tile = STATUS_TILES.find(item => item.name === status) || STATUS_TILES[3];
                return {
                    id: inquiry.id,
                    customerName: note.customerName || 'New inquiry',
                    locationAddress: note.locationAddress || 'Location not set',
                    status: status,
                    colour: tile.colour,
                    swatch: tile.swatch
                };
            });
            const amount = stageInquiries.reduce((sum, inquiry) => sum + this.commissionFor(data, inquiry.id), 0);
            return {
                name: stage.name,
                swatch: stage.swatch,
                count: stageInquiries.length,
                customers: customers,
                amount: amount,
                amountLabel: this.moneyLabel(amount),
                width: this.totalInquiries ? stageInquiries.length / this.totalInquiries * 100 : 0
            };
        });
        // The Commissions card is the same pipeline measured in money: each stage's share of
        // the total commission ($0.10 per watt of system size) drives its bar.
        this.commissionTotal = this.pipelineStages.reduce((sum, stage) => sum + stage.amount, 0);
        this.commissionTotalLabel = this.moneyLabel(this.commissionTotal);
        this.commissionRateLabel = '$' + COMMISSION_PER_WATT.toFixed(2);
        this.pipelineStages.forEach(stage => {
            stage.commissionWidth = this.commissionTotal ? stage.amount / this.commissionTotal * 100 : 0;
        });
        this.installedCount = this.countFor('Installed');
        this.inProgressCount = this.countFor('In Progress');
        this.progressPercent = this.totalInquiries ? Math.round(this.installedCount / this.totalInquiries * 100) : 0;
        const notStarted = this.totalInquiries - this.installedCount - this.inProgressCount - this.countFor('Cancelled');
        this.progressSegments = [
            { name: 'Installed', swatch: '#FF7110', count: this.installedCount },
            { name: 'In Progress', swatch: '#b7e06b', count: this.inProgressCount },
            { name: 'Cancelled', swatch: '#e87869', count: this.countFor('Cancelled') },
            { name: 'Not started', swatch: 'var(--border-line-color)', count: notStarted > 0 ? notStarted : 0 }
        ].map(segment => Object.assign(segment, {
            width: this.totalInquiries ? segment.count / this.totalInquiries * 100 : 0
        }));
        this.recentInquiries = data.inquiries.slice().reverse().slice(0, RECENT_LIMIT).map(inquiry => {
            const note = data.notes[inquiry.id] || {};
            const status = this.statusOf(data, inquiry.id);
            const tile = STATUS_TILES.find(item => item.name === status) || STATUS_TILES[3];
            return {
                id: inquiry.id,
                customerName: note.customerName || 'New inquiry',
                locationAddress: note.locationAddress || 'Location not set',
                status: status,
                colour: tile.colour,
                swatch: tile.swatch,
                initials: this.initialsFor(note.customerName)
            };
        });
        // Appointments and visits are the same inquiries, dated two ways: the calendar and the
        // appointments card read `appointmentDate`, the houses-visited card reads `visitDate`.
        this.appointments = this.buildAppointments(data);
        this.appointmentsCount = this.appointments.length;
        const todayISO = this.isoOf(new Date());
        this.selectedDate = this.appointments.some(item => item.iso === todayISO)
            ? todayISO
            : (this.appointments.find(item => item.iso >= todayISO) || { iso: todayISO }).iso;
        const selected = this.parseISO(this.selectedDate);
        this.viewMonth = selected.getMonth();
        this.viewYear = selected.getFullYear();
        this.weekdayLabels = WEEKDAYS;
        this.buildCalendar();
        this.refreshSelected();
        this.visits = this.buildVisits(data);
        this.visitedCount = this.visits.length;
    }
    // Shared row shape: an inquiry plus the date it is shown for (its visit or appointment).
    rowFor(data, inquiry, dateISO) {
        const note = data.notes[inquiry.id] || {};
        const status = this.statusOf(data, inquiry.id);
        const tile = STATUS_TILES.find(item => item.name === status) || STATUS_TILES[3];
        const when = this.parseISO(dateISO);
        return {
            id: inquiry.id,
            customerName: note.customerName || 'New inquiry',
            locationAddress: note.locationAddress || 'Location not set',
            status: status,
            colour: tile.colour,
            swatch: tile.swatch,
            iso: dateISO,
            dayNumber: when.getDate(),
            monthShort: MONTHS_SHORT[when.getMonth()]
        };
    }
    buildAppointments(data) {
        return data.inquiries
            .filter(inquiry => (data.notes[inquiry.id] || {}).appointmentDate)
            .map(inquiry => {
                const note = data.notes[inquiry.id];
                const row = this.rowFor(data, inquiry, note.appointmentDate);
                row.time = note.appointmentTime || '';
                row.sortKey = note.appointmentDate + ' ' + row.time;
                return row;
            })
            .sort((a, b) => a.sortKey < b.sortKey ? -1 : (a.sortKey > b.sortKey ? 1 : 0));
    }
    buildVisits(data) {
        // Most recent visit first — that is the one you just got back from.
        return data.inquiries
            .filter(inquiry => (data.notes[inquiry.id] || {}).visitDate)
            .map(inquiry => {
                const note = data.notes[inquiry.id];
                const row = this.rowFor(data, inquiry, note.visitDate);
                // Everything the visit action sheet shows travels with the row.
                row.customerName = note.customerName || row.customerName;
                row.visitNotes = note.technicianNotes || 'No notes from this visit';
                row.spent = this.spentLabel(note.visitMinutes);
                row.decisionReason = note.decisionReason || 'Not recorded';
                row.billFiles = note.electricBills || [];
                return row;
            })
            .sort((a, b) => a.iso < b.iso ? 1 : (a.iso > b.iso ? -1 : 0));
    }
    // 90 → "1 hr 30 min", so the sheet reads the way a technician would say it.
    spentLabel(minutes) {
        if (!minutes) {
            return 'Not recorded';
        }
        const hours = Math.floor(minutes / 60);
        const rest = minutes % 60;
        if (!hours) {
            return rest + ' min';
        }
        return rest ? hours + ' hr ' + rest + ' min' : hours + ' hr';
    }
    // Check-in time of day, 24-hour — the same label the Home sheet shows on arrival.
    timeLabel(timestamp) {
        const date = new Date(timestamp);
        return String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0');
    }
    // Where the visit happened: the coordinates the device stamped at check-in when the browser
    // provided them, otherwise the house's own pin, so the row always names a real spot.
    coordsLabel(note, inquiry) {
        const lat = note.checkInLat === undefined || note.checkInLat === null ? inquiry.lat : note.checkInLat;
        const lng = note.checkInLng === undefined || note.checkInLng === null ? inquiry.lng : note.checkInLng;
        if (lat === undefined || lat === null || lng === undefined || lng === null) {
            return 'Not captured';
        }
        return lat.toFixed(5) + ', ' + lng.toFixed(5);
    }
    openVisitSheet(visit) {
        this.visitSheet = visit;
    }
    closeVisitSheet() {
        this.visitSheet = null;
    }
    toggleStage(stageName) {
        this.openStage = this.openStage === stageName ? null : stageName;
    }
    parseISO(iso) {
        const parts = iso.split('-');
        return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    }
    isoOf(date) {
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return date.getFullYear() + '-' + month + '-' + day;
    }
    buildCalendar() {
        const counts = {};
        this.appointments.forEach(item => {
            counts[item.iso] = (counts[item.iso] || 0) + 1;
        });
        const firstDay = new Date(this.viewYear, this.viewMonth, 1).getDay();
        const todayISO = this.isoOf(new Date());
        const days = [];
        for (let i = 0; i < CALENDAR_CELLS; i++) {
            const date = new Date(this.viewYear, this.viewMonth, 1 - firstDay + i);
            const iso = this.isoOf(date);
            days.push({
                iso: iso,
                day: date.getDate(),
                inMonth: date.getMonth() === this.viewMonth,
                isToday: iso === todayISO,
                count: counts[iso] || 0
            });
        }
        this.calendarDays = days;
        this.monthLabel = MONTHS_FULL[this.viewMonth] + ' ' + this.viewYear;
    }
    refreshSelected() {
        this.selectedAppointments = this.appointments.filter(item => item.iso === this.selectedDate);
    }
    prevMonth() {
        this.viewMonth -= 1;
        if (this.viewMonth < 0) {
            this.viewMonth = 11;
            this.viewYear -= 1;
        }
        this.buildCalendar();
    }
    nextMonth() {
        this.viewMonth += 1;
        if (this.viewMonth > 11) {
            this.viewMonth = 0;
            this.viewYear += 1;
        }
        this.buildCalendar();
    }
    selectDay(day) {
        this.selectedDate = day.iso;
        if (!day.inMonth) {
            const selected = this.parseISO(day.iso);
            this.viewMonth = selected.getMonth();
            this.viewYear = selected.getFullYear();
            this.buildCalendar();
        }
        this.refreshSelected();
    }
    stageOf(data, inquiryId) {
        const note = data.notes[inquiryId] || {};
        return note.pipelineStage || 'Lead';
    }
    statusOf(data, inquiryId) {
        const note = data.notes[inquiryId];
        return note && note.status ? note.status : 'Renter';
    }
    countFor(status) {
        const entry = this.statusSummary.find(item => item.name === status);
        return entry ? entry.count : 0;
    }
    // $0.10 per watt of the system's kW rating; an unsized house is worth nothing yet.
    commissionFor(data, inquiryId) {
        const note = data.notes[inquiryId] || {};
        const size = parseFloat(note.systemSize);
        return isNaN(size) ? 0 : size * 1000 * COMMISSION_PER_WATT;
    }
    moneyLabel(value) {
        return '$' + Math.round(value).toLocaleString('en-US');
    }
    initialsFor(name) {
        if (!name) {
            return 'NI';
        }
        return name.split(' ').filter(word => !!word).slice(0, 2)
            .map(word => word.charAt(0).toUpperCase()).join('');
    }
    openMap() {
        // Absolute path on purpose: the Dashboard is served under /dashboard, so './home'
        // would resolve against its own route instead of the map.
        this.route.navigate(['/home']);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dashboard',
        template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardPage);



/***/ }),

/***/ 9204:
/*!********************************************************!*\
  !*** ./src/app/dashboard/dashboard.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>{{'dashboard' | translate}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\" fullscreen>\n    <div class=\"dashboard_wrap\">\n        <div class=\"hero_card animate__animated animate__fadeInUp\">\n            <h2>{{totalInquiries}}</h2>\n            <span>Houses tracked</span>\n            <p>{{installedCount}} installed &middot; {{inProgressCount}} in progress</p>\n        </div>\n\n        <div class=\"section_card animate__animated animate__fadeInUp\">\n            <div class=\"section_head d-flex\">\n                <h3>Install progress</h3>\n                <strong class=\"end\">{{progressPercent}}%</strong>\n            </div>\n            <div class=\"progress_track\">\n                <span *ngFor=\"let segment of progressSegments\" [style.width.%]=\"segment.width\" [style.background]=\"segment.swatch\"></span>\n            </div>\n            <div class=\"progress_legend\">\n                <div class=\"legend_item d-flex\" *ngFor=\"let segment of progressSegments\">\n                    <span class=\"dot\" [style.background]=\"segment.swatch\"></span>\n                    <h4>{{segment.name}}</h4>\n                    <strong class=\"end\">{{segment.count}}</strong>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"section_card animate__animated animate__fadeInUp\">\n            <div class=\"section_head d-flex\">\n                <h3>Sales pipeline</h3>\n                <strong class=\"end\">{{totalInquiries}} prospects</strong>\n            </div>\n            <div class=\"pipeline_row d-flex\" *ngFor=\"let stage of pipelineStages\">\n                <span class=\"dot\" [style.background]=\"stage.swatch\"></span>\n                <div class=\"text_box\">\n                    <h4>{{stage.name}}</h4>\n                    <div class=\"pipeline_track\"><span [style.width.%]=\"stage.width\" [style.background]=\"stage.swatch\"></span></div>\n                </div>\n                <strong class=\"end\">{{stage.count}}</strong>\n            </div>\n        </div>\n\n        <div class=\"section_card animate__animated animate__fadeInUp\">\n            <div class=\"section_head d-flex\">\n                <h3>Customers by stage</h3>\n                <strong class=\"end\">{{totalInquiries}} customers</strong>\n            </div>\n            <div class=\"stage_group\" *ngFor=\"let stage of pipelineStages\">\n                <div class=\"stage_row d-flex\" (click)=\"toggleStage(stage.name)\">\n                    <span class=\"dot\" [style.background]=\"stage.swatch\"></span>\n                    <h4>{{stage.name}}</h4>\n                    <strong class=\"end\">{{stage.count}}</strong>\n                    <ion-icon class=\"zmdi\" [ngClass]=\"openStage === stage.name ? 'zmdi-chevron-up' : 'zmdi-chevron-down'\"></ion-icon>\n                </div>\n                <div class=\"stage_customers\" *ngIf=\"openStage === stage.name\">\n                    <p class=\"stage_empty\" *ngIf=\"!stage.customers.length\">No customers at this stage.</p>\n                    <div class=\"inquiry_row d-flex\" *ngFor=\"let customer of stage.customers\" (click)=\"openMap()\">\n                        <div class=\"avatar\">{{initialsFor(customer.customerName)}}</div>\n                        <div class=\"text_box\">\n                            <h4>{{customer.customerName}}</h4>\n                            <p>{{customer.locationAddress}}</p>\n                        </div>\n                        <span class=\"chip\" [ngClass]=\"customer.colour\"><span class=\"dot\" [style.background]=\"customer.swatch\"></span>{{customer.status}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"section_card animate__animated animate__fadeInUp\">\n            <div class=\"section_head d-flex\">\n                <h3>Commissions</h3>\n                <strong class=\"end\">{{commissionTotalLabel}}</strong>\n            </div>\n            <div class=\"pipeline_row d-flex\" *ngFor=\"let stage of pipelineStages\">\n                <span class=\"dot\" [style.background]=\"stage.swatch\"></span>\n                <div class=\"text_box\">\n                    <h4>{{stage.name}}<span class=\"deal_count\">{{stage.count}} {{stage.count === 1 ? 'deal' : 'deals'}}</span></h4>\n                    <div class=\"pipeline_track\"><span [style.width.%]=\"stage.commissionWidth\" [style.background]=\"stage.swatch\"></span></div>\n                </div>\n                <strong class=\"end\">{{stage.amountLabel}}</strong>\n            </div>\n            <p class=\"commission_note\">Earned at {{commissionRateLabel}} per watt of system size</p>\n        </div>\n\n        <div class=\"section_card animate__animated animate__fadeInUp\">\n            <div class=\"section_head d-flex\">\n                <h3>Status overview</h3>\n            </div>\n            <div class=\"status_grid\">\n                <div class=\"status_card\" *ngFor=\"let status of statusSummary\">\n                    <span class=\"dot\" [style.background]=\"status.swatch\"></span>\n                    <strong>{{status.count}}</strong>\n                    <h4>{{status.name}}</h4>\n                </div>\n                <div class=\"status_card checked_in\">\n                    <span class=\"dot\" style=\"background: #FF7110;\"></span>\n                    <strong>{{checkedInCount}}</strong>\n                    <h4>Checked in</h4>\n                </div>\n            </div>\n            <div class=\"checked_in_list\" *ngIf=\"checkedInHouses.length\">\n                <div class=\"checked_in_row\" *ngFor=\"let house of checkedInHouses\">\n                    <div class=\"checked_in_top d-flex\">\n                        <span class=\"dot\" style=\"background: #FF7110;\"></span>\n                        <div class=\"text_box\">\n                            <h4>{{house.customerName}}</h4>\n                            <p>{{house.locationAddress}}</p>\n                        </div>\n                    </div>\n                    <div class=\"visit_meta\">\n                        <span class=\"meta_item\"><strong>Checked in</strong>{{house.checkInTime}}</span>\n                        <span class=\"meta_item\"><strong>GPS</strong>{{house.coords}}</span>\n                    </div>\n                    <p class=\"visit_note\">{{house.visitNotes}}</p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"section_card animate__animated animate__fadeInUp\">\n            <div class=\"section_head d-flex\">\n                <h3>Recent inquiries</h3>\n            </div>\n            <div class=\"inquiry_row d-flex\" *ngFor=\"let inquiry of recentInquiries\" (click)=\"openMap()\">\n                <div class=\"avatar\">{{inquiry.initials}}</div>\n                <div class=\"text_box\">\n                    <h4>{{inquiry.customerName}}</h4>\n                    <p>{{inquiry.locationAddress}}</p>\n                </div>\n                <span class=\"chip\" [ngClass]=\"inquiry.colour\"><span class=\"dot\" [style.background]=\"inquiry.swatch\"></span>{{inquiry.status}}</span>\n            </div>\n        </div>\n\n        <div class=\"section_card animate__animated animate__fadeInUp\">\n            <div class=\"section_head d-flex\">\n                <h3>Calendar</h3>\n                <strong class=\"end\">{{appointmentsCount}} scheduled</strong>\n            </div>\n            <div class=\"calendar_head d-flex\">\n                <ion-icon class=\"zmdi zmdi-chevron-left\" (click)=\"prevMonth()\"></ion-icon>\n                <h4>{{monthLabel}}</h4>\n                <ion-icon class=\"zmdi zmdi-chevron-right\" (click)=\"nextMonth()\"></ion-icon>\n            </div>\n            <div class=\"calendar_weekdays\">\n                <span *ngFor=\"let label of weekdayLabels\">{{label}}</span>\n            </div>\n            <div class=\"calendar_grid\">\n                <div class=\"calendar_day\" *ngFor=\"let day of calendarDays\" [class.out_month]=\"!day.inMonth\" [class.today]=\"day.isToday\" [class.selected]=\"day.iso === selectedDate\" [class.has_appointment]=\"day.count > 0\" (click)=\"selectDay(day)\">\n                    <span>{{day.day}}</span>\n                    <i *ngIf=\"day.count > 0\"></i>\n                </div>\n            </div>\n            <div class=\"day_list\" *ngIf=\"selectedAppointments.length\">\n                <div class=\"appointment_row d-flex\" *ngFor=\"let appointment of selectedAppointments\" (click)=\"openMap()\">\n                    <div class=\"time_box\">{{appointment.time}}</div>\n                    <div class=\"text_box\">\n                        <h4>{{appointment.customerName}}</h4>\n                        <p>{{appointment.locationAddress}}</p>\n                    </div>\n                    <span class=\"chip\" [ngClass]=\"appointment.colour\"><span class=\"dot\" [style.background]=\"appointment.swatch\"></span>{{appointment.status}}</span>\n                </div>\n            </div>\n            <p class=\"day_empty\" *ngIf=\"!selectedAppointments.length\">No appointments on this day.</p>\n        </div>\n\n        <div class=\"section_card animate__animated animate__fadeInUp\" *ngIf=\"visits.length\">\n            <div class=\"section_head d-flex\">\n                <h3>Houses visited</h3>\n                <strong class=\"end\">{{visitedCount}}</strong>\n            </div>\n            <div class=\"appointment_row d-flex\" *ngFor=\"let visit of visits\" (click)=\"openVisitSheet(visit)\">\n                <div class=\"date_box\">\n                    <strong>{{visit.dayNumber}}</strong>\n                    <span>{{visit.monthShort}}</span>\n                </div>\n                <div class=\"text_box\">\n                    <h4>{{visit.customerName}}</h4>\n                    <p>{{visit.locationAddress}}</p>\n                </div>\n                <span class=\"chip\" [ngClass]=\"visit.colour\"><span class=\"dot\" [style.background]=\"visit.swatch\"></span>{{visit.status}}</span>\n            </div>\n        </div>\n\n        <div class=\"section_card animate__animated animate__fadeInUp\" *ngIf=\"appointments.length\">\n            <div class=\"section_head d-flex\">\n                <h3>Appointments set</h3>\n                <strong class=\"end\">{{appointmentsCount}}</strong>\n            </div>\n            <div class=\"appointment_row d-flex\" *ngFor=\"let appointment of appointments\" (click)=\"openMap()\">\n                <div class=\"date_box\">\n                    <strong>{{appointment.dayNumber}}</strong>\n                    <span>{{appointment.monthShort}}</span>\n                </div>\n                <div class=\"text_box\">\n                    <h4>{{appointment.customerName}}</h4>\n                    <p>{{appointment.locationAddress}}</p>\n                </div>\n                <div class=\"time_tag\">{{appointment.time}}</div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n\n<div class=\"sheet_backdrop\" *ngIf=\"visitSheet\" (click)=\"closeVisitSheet()\"></div>\n<div class=\"visit_sheet\" *ngIf=\"visitSheet\">\n    <div class=\"sheet_head\">\n        <h3>{{visitSheet.customerName}}</h3>\n        <p>{{visitSheet.locationAddress}}</p>\n    </div>\n    <div class=\"sheet_block\">\n        <h4>Visit notes</h4>\n        <p>{{visitSheet.visitNotes}}</p>\n    </div>\n    <div class=\"sheet_block\">\n        <h4>Time spent in the house</h4>\n        <p>{{visitSheet.spent}}</p>\n    </div>\n    <div class=\"sheet_block\">\n        <h4>Electric bills</h4>\n        <p *ngIf=\"!visitSheet.billFiles.length\">No electric bills attached</p>\n        <div class=\"file_chips\" *ngIf=\"visitSheet.billFiles.length\">\n            <span class=\"file_chip\" *ngFor=\"let file of visitSheet.billFiles\"><a *ngIf=\"file.url\" [href]=\"file.url\" target=\"_blank\">{{file.name}}</a><span *ngIf=\"!file.url\">{{file.name}}</span></span>\n        </div>\n    </div>\n    <div class=\"sheet_block\">\n        <h4>Reason for going solar or not</h4>\n        <p>{{visitSheet.decisionReason}}</p>\n    </div>\n    <button class=\"sheet_cancel\" (click)=\"closeVisitSheet()\">Cancel</button>\n</div>";

/***/ }),

/***/ 9205:
/*!********************************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-header {\n  background: var(--white_gradient);\n}\nion-header ion-toolbar ion-title {\n  color: var(--text-dark);\n  font-weight: 600;\n}\n.dashboard_wrap {\n  padding-bottom: 30px;\n}\n.hero_card {\n  width: calc(100% - 40px);\n  margin: 0 auto 15px auto;\n  padding: 20px;\n  border-radius: 16px;\n  background: linear-gradient(135deg, var(--primary) 0%, #FF7110 100%);\n  box-shadow: 0 15px 12px -8px rgba(0, 0, 0, 0.25);\n}\n.hero_card h2 {\n  margin: 0;\n  color: #ffffff;\n  font-size: 2.3rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.hero_card span {\n  display: block;\n  margin-top: 5px;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: none;\n}\n.hero_card p {\n  margin: 10px 0 0 0;\n  color: #ffffff;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.section_card {\n  width: calc(100% - 40px);\n  margin: 0 auto 15px auto;\n  padding: 16px;\n  background: var(--bg-white);\n  border-radius: 14px;\n  box-shadow: 0 15px 12px -8px rgba(0, 0, 0, 0.1);\n}\n.section_head h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1rem;\n  font-weight: 600;\n}\n.section_head strong {\n  color: var(--primary);\n  font-size: 1rem;\n  font-weight: 700;\n}\n.progress_track {\n  display: flex;\n  height: 12px;\n  margin-top: 14px;\n  border-radius: 6px;\n  overflow: hidden;\n  background: var(--border-line-color);\n}\n.progress_track span {\n  display: block;\n  height: 100%;\n  transition: all 0.4s;\n}\n.progress_legend {\n  margin-top: 5px;\n}\n.legend_item {\n  padding: 9px 0;\n  border-bottom: 1px solid var(--border-line-color);\n}\n.legend_item:last-child {\n  padding-bottom: 0;\n  border-bottom: 0;\n}\n.legend_item h4 {\n  margin: 0 0 0 9px;\n  color: var(--text-light2);\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.legend_item strong {\n  color: var(--text-dark);\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.dot {\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n}\n.status_grid {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -5px;\n}\n.status_card {\n  width: calc(50% - 10px);\n  margin: 0 5px 10px 5px;\n  padding: 12px;\n  border: 1px solid var(--border-line-color);\n  border-radius: 12px;\n}\n.status_card.checked_in {\n  border-color: #FF7110;\n}\n.checked_in_list {\n  margin-top: 12px;\n  padding-top: 2px;\n  border-top: 1px solid var(--border-line-color);\n}\n.checked_in_row {\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border-line-color);\n}\n.checked_in_row:last-child {\n  padding-bottom: 0;\n  border-bottom: 0;\n}\n.checked_in_row .dot {\n  min-width: 10px;\n  margin: 5px 10px 0 0;\n}\n.checked_in_row .text_box {\n  width: 100%;\n  overflow: hidden;\n}\n.checked_in_row .text_box h4 {\n  margin: 0 0 2px 0;\n  color: var(--text-dark);\n  font-size: 0.9rem;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.checked_in_row .text_box p {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.75rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.visit_meta {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 8px 0 0 20px;\n}\n.meta_item {\n  margin: 0 8px 4px 0;\n  padding: 4px 9px;\n  border: 1px solid var(--border-line-color);\n  border-radius: 20px;\n  background: rgba(255, 113, 16, 0.08);\n  color: var(--text-light2);\n  font-size: 0.68rem;\n  font-weight: 600;\n}\n.meta_item strong {\n  margin-right: 5px;\n  color: var(--text-dark);\n  font-weight: 700;\n}\n.visit_note {\n  margin: 8px 0 0 20px;\n  color: var(--text-light2);\n  font-size: 0.75rem;\n  line-height: 1.4;\n}\n.status_card strong {\n  display: block;\n  margin: 9px 0 3px 0;\n  color: var(--text-dark);\n  font-size: 1.45rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.status_card h4 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.78rem;\n  font-weight: 500;\n}\n.inquiry_row {\n  padding: 12px 0;\n  border-bottom: 1px solid var(--border-line-color);\n  cursor: pointer;\n}\n.inquiry_row:last-child {\n  padding-bottom: 0;\n  border-bottom: 0;\n}\n.inquiry_row .avatar {\n  min-width: 38px;\n  width: 38px;\n  height: 38px;\n  margin-right: 12px;\n  border-radius: 50%;\n  background: rgba(255, 113, 16, 0.12);\n  color: var(--primary);\n  font-size: 0.8rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.inquiry_row .text_box {\n  width: 100%;\n  overflow: hidden;\n}\n.inquiry_row .text_box h4 {\n  margin: 0 0 2px 0;\n  color: var(--text-dark);\n  font-size: 0.9rem;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.inquiry_row .text_box p {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.75rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.chip {\n  display: flex;\n  align-items: center;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  padding: 5px 10px;\n  border: 1px solid var(--border-line-color);\n  border-radius: 20px;\n  background: var(--bg-white);\n  color: var(--text-light2);\n  font-size: 0.62rem;\n  font-weight: 600;\n  text-transform: none;\n}\n.chip .dot {\n  min-width: 8px;\n  width: 8px;\n  height: 8px;\n  margin-right: 5px;\n}\n.calendar_head {\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 14px;\n  padding: 8px 10px;\n  border-radius: 10px;\n  background: rgba(255, 113, 16, 0.08);\n}\n.calendar_head h4 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.92rem;\n  font-weight: 600;\n}\n.calendar_head ion-icon {\n  color: var(--primary);\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n.calendar_weekdays,\n.calendar_grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.calendar_weekdays {\n  margin-top: 12px;\n}\n.calendar_weekdays span {\n  color: var(--text-light2);\n  font-size: 0.66rem;\n  font-weight: 600;\n  text-align: center;\n  text-transform: none;\n}\n.calendar_grid {\n  margin-top: 4px;\n}\n.calendar_day {\n  position: relative;\n  height: 38px;\n  margin: 1px;\n  border-radius: 9px;\n  color: var(--text-dark);\n  font-size: 0.8rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.calendar_day.out_month {\n  color: var(--text-light2);\n  opacity: 0.5;\n}\n.calendar_day.today {\n  border: 1px solid var(--primary);\n}\n.calendar_day.selected {\n  background: var(--primary);\n  color: #ffffff;\n  font-weight: 600;\n}\n.calendar_day i {\n  position: absolute;\n  bottom: 5px;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: var(--primary);\n}\n.calendar_day.selected i {\n  background: #ffffff;\n}\n.day_list {\n  margin-top: 12px;\n  padding-top: 4px;\n  border-top: 1px solid var(--border-line-color);\n}\n.day_empty {\n  margin: 12px 0 0 0;\n  color: var(--text-light2);\n  font-size: 0.8rem;\n}\n.appointment_row {\n  padding: 12px 0;\n  border-bottom: 1px solid var(--border-line-color);\n  cursor: pointer;\n}\n.appointment_row:last-child {\n  padding-bottom: 0;\n  border-bottom: 0;\n}\n.appointment_row .text_box {\n  width: 100%;\n  overflow: hidden;\n}\n.appointment_row .text_box h4 {\n  margin: 0 0 2px 0;\n  color: var(--text-dark);\n  font-size: 0.9rem;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.appointment_row .text_box p {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.75rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.appointment_row .time_box {\n  min-width: 52px;\n  margin-right: 12px;\n  color: var(--primary);\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.appointment_row .date_box {\n  min-width: 44px;\n  margin-right: 12px;\n  padding: 6px 0;\n  border-radius: 10px;\n  background: rgba(255, 113, 16, 0.12);\n  text-align: center;\n}\n.appointment_row .date_box strong {\n  display: block;\n  color: var(--primary);\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.appointment_row .date_box span {\n  color: var(--text-light2);\n  font-size: 0.62rem;\n  font-weight: 600;\n  text-transform: none;\n}\n.appointment_row .time_tag {\n  color: var(--text-light2);\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.sheet_backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 40;\n  background: rgba(0, 0, 0, 0.45);\n}\n.visit_sheet {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 41;\n  max-height: 78vh;\n  padding: 20px 20px 26px 20px;\n  border-radius: 18px 18px 0 0;\n  overflow-y: auto;\n  background: var(--bg-white);\n  box-shadow: 0 -15px 12px -8px rgba(0, 0, 0, 0.25);\n  animation: sheet_up 0.25s ease-out;\n}\n@keyframes sheet_up {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.visit_sheet .sheet_head h3 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 1.05rem;\n  font-weight: 700;\n}\n.visit_sheet .sheet_head p {\n  margin: 4px 0 0 0;\n  color: var(--text-light2);\n  font-size: 0.78rem;\n}\n.visit_sheet .sheet_block {\n  margin-top: 16px;\n  padding-top: 14px;\n  border-top: 1px solid var(--border-line-color);\n}\n.visit_sheet .sheet_block h4 {\n  margin: 0 0 6px 0;\n  color: var(--text-light2);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: none;\n}\n.visit_sheet .sheet_block p {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.85rem;\n  line-height: 1.45;\n}\n.visit_sheet .file_chips {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -4px;\n}\n.visit_sheet .file_chip {\n  display: block;\n  margin: 4px;\n  padding: 6px 10px;\n  border: 1px solid var(--border-line-color);\n  border-radius: 8px;\n  background: rgba(255, 113, 16, 0.08);\n}\n.visit_sheet .file_chip a {\n  color: var(--primary);\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-decoration: none;\n}\n.visit_sheet .file_chip > span {\n  color: var(--primary);\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.visit_sheet .sheet_cancel {\n  width: 100%;\n  margin-top: 18px;\n  padding: 12px;\n  border: 0;\n  border-radius: 12px;\n  background: rgba(255, 113, 16, 0.12);\n  color: var(--primary);\n  font-size: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.pipeline_row {\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border-line-color);\n}\n.pipeline_row:last-child {\n  padding-bottom: 0;\n  border-bottom: 0;\n}\n.pipeline_row .dot {\n  min-width: 10px;\n  margin: 5px 10px 0 0;\n}\n.pipeline_row .text_box {\n  width: 100%;\n  overflow: hidden;\n}\n.pipeline_row .text_box h4 {\n  margin: 0 0 6px 0;\n  color: var(--text-dark);\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.pipeline_row > strong {\n  margin-left: 10px;\n  color: var(--text-dark);\n  font-size: 0.9rem;\n}\n.pipeline_track {\n  height: 6px;\n  border-radius: 3px;\n  background: var(--border-line-color);\n  overflow: hidden;\n}\n.pipeline_track span {\n  display: block;\n  height: 100%;\n  border-radius: 3px;\n}\n.commission_note {\n  margin: 12px 0 0 0;\n  padding-top: 10px;\n  border-top: 1px solid var(--border-line-color);\n  color: var(--text-light2);\n  font-size: 0.72rem;\n}\n.deal_count {\n  margin-left: 6px;\n  color: var(--text-light2);\n  font-size: 0.72rem;\n  font-weight: 500;\n}\n.stage_group {\n  border-bottom: 1px solid var(--border-line-color);\n}\n.stage_group:last-child {\n  border-bottom: 0;\n}\n.stage_row {\n  padding: 14px 0;\n  cursor: pointer;\n}\n.stage_row .dot {\n  min-width: 10px;\n  margin-right: 10px;\n}\n.stage_row h4 {\n  margin: 0;\n  color: var(--text-dark);\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.stage_row strong {\n  color: var(--text-dark);\n  font-size: 0.9rem;\n}\n.stage_row ion-icon {\n  margin-left: 10px;\n  color: var(--primary);\n  font-size: 1.1rem;\n}\n.stage_customers {\n  padding: 0 0 6px 20px;\n}\n.stage_customers .inquiry_row {\n  padding: 10px 0;\n}\n.stage_customers .inquiry_row:last-child {\n  border-bottom: 0;\n}\n.stage_empty {\n  margin: 0 0 10px 0;\n  color: var(--text-light2);\n  font-size: 0.78rem;\n}\n";

/***/ })

}]);
