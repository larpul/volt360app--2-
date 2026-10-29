"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_leads_leads_module_ts"],{

/***/ 9263:
/*!************************************************!*\
  !*** ./src/app/leads/leads-routing.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadsPageRoutingModule": () => (/* binding */ LeadsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _leads_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leads.page */ 9265);




const routes = [
    {
        path: '',
        component: _leads_page__WEBPACK_IMPORTED_MODULE_0__.LeadsPage
    }
];
let LeadsPageRoutingModule = class LeadsPageRoutingModule {
};
LeadsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LeadsPageRoutingModule);



/***/ }),

/***/ 9264:
/*!***************************************!*\
  !*** ./src/app/leads/leads.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadsPageModule": () => (/* binding */ LeadsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _leads_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leads-routing.module */ 9263);
/* harmony import */ var _leads_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leads.page */ 9265);








let LeadsPageModule = class LeadsPageModule {
};
LeadsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _leads_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeadsPageRoutingModule
        ],
        declarations: [_leads_page__WEBPACK_IMPORTED_MODULE_1__.LeadsPage]
    })
], LeadsPageModule);



/***/ }),

/***/ 9265:
/*!***********************************!*\
  !*** ./src/app/leads/leads.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeadsPage": () => (/* binding */ LeadsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/inquiry-store */ 9200);

// Lead management: the prospects the app already tracks (the map's inquiries), enriched with
// the CRM half of the sale - qualification, the shared sales pipeline (site survey pending ->
// RTS), the consultation booked for each one, and the sales activity timeline.
// The CRM state outlives a reload in localStorage under solar360_leads, keyed by inquiry id;
// the qualification and the first timeline entries are seeded from the notes the store holds.
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// The pipeline is the one shared list the Dashboard and the map's sales-stage chips read, so
// the funnel here always matches them. A lead whose stored stage is gone falls to the first step.
const LEAD_STAGES = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.PIPELINE_STAGES;
const SOLD_STAGES = ['Install ready', 'Install scheduled', 'PTO pending', 'RTS'];
const PROPOSAL_STAGES = ['Approvals pending'].concat(SOLD_STAGES);
// Stages the old five-step pipeline stored in localStorage, mapped onto the current ones.
const LEGACY_STAGES = {
    New: 'Site survey pending',
    Qualified: 'Site survey pending',
    Proposal: 'Approvals pending',
    Sold: 'Install ready',
    Installed: 'RTS'
};

const QUAL_FIELDS = [
    { key: 'homeowner', label: 'Homeowner', options: ['Owner', 'Renter', 'Unknown'] },
    { key: 'roof', label: 'Roof', options: ['Not assessed', 'New (0-5 yrs)', 'Good', 'Aging', 'Needs repair'] },
    { key: 'utility', label: 'Utility', options: ['Duke Energy', 'Other provider', 'Not captured'] },
    { key: 'credit', label: 'Credit', options: ['Not checked', 'Excellent', 'Good', 'Fair', 'Poor', 'Failed'] }
];

const ACTIVITY_TYPES = ['Call', 'Text', 'Meeting', 'Proposal'];
const ACTIVITY_TONES = { Call: 'blue', Text: 'violet', Meeting: 'green', Proposal: 'orange' };
const CONSULT_TYPES = ['In-home consultation', 'Virtual consultation', 'Phone consultation'];

const LEAD_KEY = 'solar360_leads';

// Activity overview: every prospect carries one canvassing disposition, so the status summary
// adds up to the doors knocked that week. An appointment or a sale counts as converted.
const CONVERTED_STATUSES = ['Appt set', 'Sat (sale)'];
const WEEK_DAYS = 7;

// Door-knock session: one tap per attempted door, then how it went. A knock counts the attempt,
// a contact counts an actual conversation, and a lead / appointment is counted off the outcome -
// so the conversion numbers stay honest. The session itself lives in the shared KnockLog
// (inquiry-store), because the Home map's check-in logs knocks into the same session.
const KNOCK_OUTCOMES = [
    { key: 'no_answer', label: 'No answer', swatch: '#9aa0a6', contacted: false },
    { key: 'not_interested', label: 'Not interested', swatch: '#ef6b6b', contacted: true },
    { key: 'interested', label: 'Interested / qualified lead', swatch: '#7ec850', contacted: true, lead: true },
    { key: 'follow_up', label: 'Follow-up requested', swatch: '#5b9bd5', contacted: true, lead: true },
    { key: 'appointment', label: 'Appointment booked', swatch: '#FF7110', contacted: true, lead: true, appointment: true },
    { key: 'do_not_knock', label: 'Do not knock again', swatch: '#9b7fd4', contacted: true }
];

const clockOf = (at) => {
    const time = new Date(at);
    return isNaN(time.getTime()) ? '' : String(time.getHours()).padStart(2, '0') + ':' + String(time.getMinutes()).padStart(2, '0');
};

const whenLabel = (at) => {
    const iso = String(at || '');
    const month = parseInt(iso.slice(5, 7), 10);
    const day = parseInt(iso.slice(8, 10), 10);
    return month && day ? day + ' ' + MONTHS[month - 1] : '';
};

const initialsOf = (name) => String(name || '')
    .split(' ')
    .filter(word => word.length)
    .slice(0, 2)
    .map(word => word.charAt(0))
    .join('');

const stageFor = (note) => {
    const pipeline = note.pipelineStage;
    return LEAD_STAGES.filter(stage => stage.name === pipeline).length ? pipeline : LEAD_STAGES[0].name;
};

// What the notes already say about the homeowner, the roof, the utility and the credit check.
const qualFor = (note) => {
    const text = String(note.decisionReason || '') + ' ' + String(note.technicianNotes || '');
    const bills = note.electricBills || [];
    return {
        homeowner: note.status === 'Renters' ? 'Renter' : (note.status === 'Not answered' ? 'Unknown' : 'Owner'),
        roof: /new roof/i.test(text) ? 'New (0-5 yrs)' : 'Not assessed',
        utility: bills.length ? 'Duke Energy' : 'Not captured',
        credit: /credit check failed/i.test(text) ? 'Failed' : 'Not checked'
    };
};

// The first sales touches, read back off the note: a completed site visit, a proposal already
// out, and the appointment that booked the visit.
const activitiesFor = (note) => {
    const activities = [];
    if (note.visitDate) {
        activities.push({
            type: 'Meeting',
            text: 'Site visit completed' + (note.visitMinutes ? ' (' + note.visitMinutes + ' min on site)' : ''),
            at: note.visitDate
        });
    }
    if (PROPOSAL_STAGES.indexOf(note.pipelineStage) >= 0) {
        activities.push({
            type: 'Proposal',
            text: 'Proposal sent to the customer',
            at: note.appointmentDate || note.visitDate || ''
        });
    }
    if (note.appointmentDate) {
        activities.push({
            type: 'Meeting',
            text: 'Consultation booked for ' + whenLabel(note.appointmentDate) + (note.appointmentTime ? ' at ' + note.appointmentTime : ''),
            at: note.appointmentDate
        });
    }
    return activities;
};

const seedRecord = (note) => ({
    stage: stageFor(note),
    qual: qualFor(note),
    consultation: note.appointmentDate ? { date: note.appointmentDate, time: note.appointmentTime || '09:00', type: CONSULT_TYPES[0] } : null,
    activities: activitiesFor(note)
});

const readLedger = () => {
    try {
        const raw = window.localStorage.getItem(LEAD_KEY);
        const parsed = raw ? JSON.parse(raw) : null;
        return parsed && typeof parsed === 'object' ? parsed : {};
    }
    catch (e) {
        return {};
    }
};

const writeLedger = (ledger) => {
    try {
        window.localStorage.setItem(LEAD_KEY, JSON.stringify(ledger));
    }
    catch (e) {
    }
};

const template = `<ion-header>
    <ion-toolbar>
        <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Leads</ion-title>
    </ion-toolbar>
</ion-header>

<ion-content class="bg_color" fullscreen>
    <div class="leads_wrap">
        <div class="leads_hero">
            <h2>{{ leads.length }}</h2>
            <span>prospects tracked</span>
            <p>{{ openLabel }}</p>
        </div>

        <div class="leads_card knock_card">
            <div class="card_head d-flex">
                <h3>Knocks counter</h3>
                <span class="count_pill">Today</span>
            </div>
            <div class="knock_main d-flex">
                <div class="knock_total">
                    <strong>{{ knock.total }}</strong>
                    <span>Knocks today</span>
                </div>
                <div class="knock_rate">
                    <strong>{{ knock.contactRate }}%</strong>
                    <span>Contact rate</span>
                </div>
            </div>
            <div class="knock_stats d-flex">
                <div class="knock_stat">
                    <strong>{{ knock.contacts }}</strong>
                    <span>Contacts</span>
                </div>
                <div class="knock_stat">
                    <strong>{{ knock.leads }}</strong>
                    <span>Leads</span>
                </div>
                <div class="knock_stat">
                    <strong>{{ knock.appointments }}</strong>
                    <span>Appointments</span>
                </div>
            </div>
            <button class="knock_add" (click)="openKnockSheet()">
                <ion-icon class="zmdi zmdi-plus"></ion-icon>Add knock
            </button>
            <div class="knock_log" *ngIf="knock.entries.length">
                <div class="knock_row d-flex" *ngFor="let entry of knock.entries">
                    <span class="knock_dot" [style.background]="entry.swatch"></span>
                    <span class="knock_name">{{ entry.label }}</span>
                    <span class="knock_time">{{ entry.time }}</span>
                </div>
            </div>
            <p class="empty_note" *ngIf="!knock.entries.length">No knocks logged today. Tap Add knock at each door.</p>
        </div>

        <div class="leads_card leaderboard_card">
            <div class="card_head d-flex">
                <h3>Team leaderboard</h3>
                <span class="count_pill">This week</span>
            </div>
            <div class="lb_me d-flex" *ngIf="repName">
                <span>You are <strong>{{ repName }}</strong></span>
                <span class="mini_btn" (click)="openRepSheet()">Change</span>
            </div>
            <div class="lb_rows" *ngIf="leaderboard.reps.length">
                <div class="lb_row d-flex" *ngFor="let rep of leaderboard.reps" [class.lb_you]="rep.you">
                    <span class="lb_rank">{{ rep.rank }}</span>
                    <span class="lb_avatar">{{ rep.initials }}</span>
                    <div class="lb_body">
                        <div class="lb_head d-flex">
                            <span class="lb_name">{{ rep.name }}</span>
                            <span class="lb_count">{{ rep.knocks }}</span>
                        </div>
                        <div class="lb_track"><span class="lb_bar" [style.width.%]="rep.width"></span></div>
                    </div>
                </div>
                <p class="lb_note">{{ leaderboard.total }} knocks across {{ leaderboard.reps.length }} reps in the last 7 days</p>
            </div>
            <p class="empty_note" *ngIf="!leaderboard.reps.length && leaderboard.loading">Loading the team's knocks&hellip;</p>
            <p class="empty_note" *ngIf="!leaderboard.reps.length && !leaderboard.loading && leaderboard.error">{{ leaderboard.error }}</p>
            <p class="empty_note" *ngIf="!leaderboard.reps.length && !leaderboard.loading && !leaderboard.error">No knocks this week yet. Add a knock and it lands on the board.</p>
            <button class="lb_join" *ngIf="!repName" (click)="openRepSheet()">Set your name to join</button>
        </div>

        <div class="leads_card activity_card">
            <div class="card_head d-flex">
                <h3>Activity overview</h3>
                <span class="count_pill">This week</span>
            </div>
            <div class="activity_stats d-flex">
                <div class="activity_stat">
                    <strong>{{ activity.knocks }}</strong>
                    <span>Knocks</span>
                </div>
                <div class="activity_stat">
                    <strong>{{ activity.avgPerDay }}</strong>
                    <span>Avg / day</span>
                </div>
                <div class="activity_stat">
                    <strong>{{ activity.conversionRate }}%</strong>
                    <span>Conversion</span>
                </div>
            </div>
            <p class="activity_note">{{ activity.converted }} of {{ activity.knocks }} knocks converted &middot; {{ activity.avgPerDay }} knocks a day across the last 7 days</p>
            <div class="activity_row d-flex" *ngFor="let row of activity.statusRows">
                <span class="activity_dot" [style.background]="row.swatch"></span>
                <span class="activity_name">{{ row.name }}</span>
                <span class="activity_count">{{ row.count }}</span>
            </div>
            <div class="activity_total d-flex" *ngIf="activity.knocks">
                <span>Status summary</span>
                <strong>{{ activity.knocks }} knocks</strong>
            </div>
        </div>

        <div class="leads_card">
            <div class="card_head d-flex">
                <h3>Sales pipeline</h3>
                <span class="count_pill">{{ stageNames.length }} stages</span>
            </div>
            <p class="pipeline_hint">Site survey pending &#8594; Approvals pending &#8594; Install ready &#8594; Install scheduled &#8594; PTO pending &#8594; RTS</p>
            <div class="pipe_row" *ngFor="let stage of stages">
                <div class="pipe_head d-flex">
                    <span class="pipe_name">{{ stage.name }}</span>
                    <span class="pipe_count">{{ stage.count }}</span>
                </div>
                <div class="pipe_track">
                    <span class="pipe_fill" [style.width.%]="stage.width" [style.background]="stage.swatch"></span>
                </div>
            </div>
        </div>

        <div class="stage_filter d-flex">
            <span class="filter_chip" [class.active]="!stageFilter" (click)="setStageFilter('')">All</span>
            <span class="filter_chip" *ngFor="let name of stageNames" [class.active]="stageFilter === name" (click)="setStageFilter(name)">{{ name }}</span>
        </div>

        <div class="leads_card">
            <div class="card_head d-flex">
                <h3>Prospects</h3>
                <span class="count_pill">{{ filtered.length }}</span>
            </div>
            <p class="empty_note" *ngIf="!filtered.length">No leads at this stage yet.</p>

            <div class="lead_row" *ngFor="let lead of filtered">
                <div class="lead_head d-flex" (click)="toggleLead(lead)">
                    <div class="lead_avatar">{{ lead.initials }}</div>
                    <div class="lead_title">
                        <h4>{{ lead.name }}</h4>
                        <p>{{ lead.address }}</p>
                    </div>
                    <span class="stage_chip" [style.background]="lead.swatch">{{ lead.stage }}</span>
                </div>

                <div class="lead_quals d-flex">
                    <span class="qual_pill" *ngFor="let q of lead.qualList">{{ q.label }}: <strong>{{ q.value }}</strong></span>
                </div>

                <div class="lead_foot d-flex">
                    <span class="foot_item" [class.booked]="lead.consultation">
                        <ion-icon class="zmdi zmdi-calendar"></ion-icon>{{ lead.consultLabel }}
                    </span>
                    <span class="foot_item">
                        <ion-icon class="zmdi zmdi-comment-text"></ion-icon>{{ lead.activities.length }} activities
                    </span>
                </div>

                <div class="lead_body" *ngIf="openLeadId === lead.id">
                    <div class="body_block">
                        <h5>Pipeline stage</h5>
                        <div class="stage_chips d-flex">
                            <span class="stage_chip selectable" *ngFor="let name of stageNames" [class.active]="lead.stage === name" (click)="setStage(lead, name)">{{ name }}</span>
                        </div>
                    </div>

                    <div class="body_block">
                        <div class="block_head d-flex">
                            <h5>Qualification</h5>
                            <span class="mini_btn" (click)="openQualSheet(lead)">Edit</span>
                        </div>
                        <div class="qual_grid">
                            <div class="qual_item" *ngFor="let q of lead.qualList">
                                <span>{{ q.label }}</span>
                                <strong>{{ q.value }}</strong>
                            </div>
                        </div>
                    </div>

                    <div class="body_block">
                        <div class="block_head d-flex">
                            <h5>Consultation</h5>
                            <span class="mini_btn" (click)="openBookSheet(lead)">{{ lead.consultation ? 'Reschedule' : 'Book' }}</span>
                        </div>
                        <p class="appt_line" *ngIf="lead.consultation">{{ lead.consultLabel }} &#183; {{ lead.consultation.type }}</p>
                        <p class="empty_note" *ngIf="!lead.consultation">No consultation booked yet.</p>
                    </div>

                    <div class="body_block">
                        <div class="block_head d-flex">
                            <h5>Sales activity</h5>
                            <span class="mini_btn" (click)="openActivitySheet(lead)">Log activity</span>
                        </div>
                        <p class="empty_note" *ngIf="!lead.activities.length">No activity logged yet.</p>
                        <div class="timeline">
                            <div class="tl_row d-flex" *ngFor="let a of lead.activities">
                                <span class="tl_dot" [class]="'tl_' + a.tone"></span>
                                <div class="tl_body">
                                    <h6>{{ a.type }}</h6>
                                    <p>{{ a.text }}</p>
                                    <span class="tl_when">{{ a.when }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</ion-content>

<div class="sheet_backdrop" *ngIf="sheet" (click)="closeSheet()"></div>

<div class="lead_sheet" *ngIf="sheet === 'qual'">
    <h3>Qualification</h3>
    <p class="sheet_sub">{{ activeLead ? activeLead.name : '' }}</p>
    <div class="qual_field" *ngFor="let f of qualFields">
        <label>{{ f.label }}</label>
        <select class="field" [(ngModel)]="qualDraft[f.key]">
            <option *ngFor="let option of f.options" [value]="option">{{ option }}</option>
        </select>
    </div>
    <div class="sheet_actions d-flex">
        <button class="ghost_btn" (click)="closeSheet()">Cancel</button>
        <button class="primary_btn" (click)="saveQual()">Save qualification</button>
    </div>
</div>

<div class="lead_sheet" *ngIf="sheet === 'book'">
    <h3>{{ activeLead && activeLead.consultation ? 'Reschedule consultation' : 'Book consultation' }}</h3>
    <p class="sheet_sub">{{ activeLead ? activeLead.name : '' }}</p>
    <div class="qual_field">
        <label>Date</label>
        <input class="field" type="date" [(ngModel)]="bookDraft.date">
    </div>
    <div class="qual_field">
        <label>Time</label>
        <input class="field" type="time" [(ngModel)]="bookDraft.time">
    </div>
    <div class="qual_field">
        <label>Type</label>
        <select class="field" [(ngModel)]="bookDraft.type">
            <option *ngFor="let type of consultTypes" [value]="type">{{ type }}</option>
        </select>
    </div>
    <div class="sheet_actions d-flex">
        <button class="ghost_btn" (click)="closeSheet()">Cancel</button>
        <button class="primary_btn" (click)="saveBooking()">Save consultation</button>
    </div>
</div>

<div class="lead_sheet" *ngIf="sheet === 'activity'">
    <h3>Log sales activity</h3>
    <p class="sheet_sub">{{ activeLead ? activeLead.name : '' }}</p>
    <div class="qual_field">
        <label>Activity</label>
        <select class="field" [(ngModel)]="activityDraft.type">
            <option *ngFor="let type of activityTypes" [value]="type">{{ type }}</option>
        </select>
    </div>
    <div class="qual_field">
        <label>Notes</label>
        <textarea class="field" rows="3" placeholder="What happened?" [(ngModel)]="activityDraft.text"></textarea>
    </div>
    <div class="sheet_actions d-flex">
        <button class="ghost_btn" (click)="closeSheet()">Cancel</button>
        <button class="primary_btn" (click)="saveActivity()">Log activity</button>
    </div>
</div>

<div class="lead_sheet" *ngIf="sheet === 'knock'">
    <h3>Log door knock</h3>
    <p class="sheet_sub">How did the door go?</p>
    <div class="knock_outcomes">
        <span class="outcome_chip" *ngFor="let outcome of knockOutcomes" [class.active]="knockDraft === outcome.key" (click)="knockDraft = outcome.key">{{ outcome.label }}</span>
    </div>
    <div class="sheet_actions d-flex">
        <button class="ghost_btn" (click)="closeSheet()">Cancel</button>
        <button class="primary_btn" (click)="saveKnock()">Save knock</button>
    </div>
</div>

<div class="lead_sheet" *ngIf="sheet === 'rep'">
    <h3>Who's knocking?</h3>
    <p class="sheet_sub">Your name is how the team leaderboard counts your week.</p>
    <div class="qual_field">
        <label>Your name</label>
        <input class="field" type="text" placeholder="e.g. Jordan Reyes" [(ngModel)]="repDraft">
    </div>
    <div class="sheet_actions d-flex">
        <button class="ghost_btn" (click)="closeSheet()">Cancel</button>
        <button class="primary_btn" (click)="saveRep()">Save name</button>
    </div>
</div>`;

const styles = `ion-header {
  background: var(--white_gradient);
}
ion-header ion-toolbar ion-title {
  color: var(--text-dark);
  font-weight: 600;
}
.leads_wrap {
  padding-bottom: 30px;
}
.leads_hero {
  width: calc(100% - 40px);
  margin: 0 auto 15px auto;
  padding: 20px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--primary) 0%, #FF7110 100%);
  box-shadow: 0 15px 12px -8px rgba(0, 0, 0, 0.25);
}
.leads_hero h2 {
  margin: 0;
  color: #ffffff;
  font-size: 2.3rem !important;
  font-weight: 700;
  line-height: 1;
}
.leads_hero span {
  display: block;
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.85rem !important;
  font-weight: 600;
  letter-spacing: 0.08em;
}
.leads_hero p {
  margin: 10px 0 0 0;
  color: #ffffff;
  font-size: 0.95rem !important;
  font-weight: 500;
}
.leads_card {
  width: calc(100% - 40px);
  margin: 0 auto 15px auto;
  padding: 16px;
  background: var(--bg-white);
  border-radius: 14px;
  box-shadow: 0 15px 12px -8px rgba(0, 0, 0, 0.1);
}
.card_head {
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
  padding: 0 0 12px 0;
  background: transparent;
  color: var(--text-dark);
}
.card_head h3 {
  margin: 0;
  color: var(--text-dark);
  font-size: 1.05rem !important;
  font-weight: 700;
  letter-spacing: 0.01em;
}
.count_pill {
  padding: 3px 10px;
  border-radius: 20px;
  background: rgba(255, 113, 16, 0.12);
  color: var(--primary);
  font-size: 0.8rem !important;
  font-weight: 700;
}
.pipeline_hint {
  margin: 8px 0 14px 0;
  color: var(--text-light2);
  font-size: 0.85rem !important;
  font-weight: 600;
}
.pipe_row {
  margin-bottom: 10px;
}
.pipe_row:last-child {
  margin-bottom: 0;
}
.pipe_head {
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
}
.pipe_name {
  color: var(--text-dark);
  font-size: 0.9rem !important;
  font-weight: 600;
}
.pipe_count {
  color: var(--text-light2);
  font-size: 0.9rem !important;
  font-weight: 700;
}
.pipe_track {
  height: 7px;
  border-radius: 6px;
  background: var(--border-line-color);
  overflow: hidden;
}
.pipe_fill {
  display: block;
  height: 100%;
  border-radius: 6px;
}
.stage_filter {
  width: calc(100% - 40px);
  margin: 0 auto 15px auto;
  flex-wrap: wrap;
}
.filter_chip {
  margin: 0 8px 8px 0;
  padding: 6px 13px;
  border: 1px solid var(--border-line-color);
  border-radius: 20px;
  background: var(--bg-white);
  color: var(--text-light2);
  font-size: 0.85rem !important;
  font-weight: 600;
}
.filter_chip.active {
  border-color: var(--primary);
  background: rgba(255, 113, 16, 0.12);
  color: var(--primary);
}
.empty_note {
  margin: 12px 0 0 0;
  color: var(--text-light2);
  font-size: 0.9rem !important;
  line-height: 1.5;
}
.lead_row {
  padding: 14px 0;
  border-bottom: 1px solid var(--border-line-color);
}
.lead_row:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}
.lead_head {
  align-items: center;
}
.lead_avatar {
  min-width: 40px;
  width: 40px;
  height: 40px;
  margin-right: 12px;
  border-radius: 50%;
  background: rgba(255, 113, 16, 0.12);
  color: var(--primary);
  font-size: 0.9rem !important;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lead_title {
  width: 100%;
  overflow: hidden;
}
.lead_title h4 {
  margin: 0 0 2px 0;
  color: var(--text-dark);
  font-size: 1rem !important;
  font-weight: 600;
}
.lead_title p {
  margin: 0;
  color: var(--text-light2);
  font-size: 0.85rem !important;
}
.stage_chip {
  flex-shrink: 0;
  margin-left: 8px;
  padding: 5px 11px;
  border-radius: 20px;
  color: #2b2c30;
  font-size: 0.78rem !important;
  font-weight: 700;
  white-space: nowrap;
}
.stage_chip.selectable {
  background: var(--border-line-color);
  color: var(--text-light2);
  margin-bottom: 8px;
}
.stage_chip.selectable.active {
  background: var(--primary);
  color: #ffffff;
}
.lead_quals {
  flex-wrap: wrap;
  margin-top: 10px;
}
.qual_pill {
  margin: 0 8px 6px 0;
  padding: 4px 9px;
  border: 1px solid var(--border-line-color);
  border-radius: 20px;
  background: rgba(255, 113, 16, 0.08);
  color: var(--text-light2);
  font-size: 0.78rem !important;
  font-weight: 600;
}
.qual_pill strong {
  margin-left: 4px;
  color: var(--text-dark);
  font-weight: 700;
}
.lead_foot {
  flex-wrap: wrap;
  margin-top: 6px;
}
.foot_item {
  display: flex;
  align-items: center;
  margin: 0 14px 4px 0;
  color: var(--text-light2);
  font-size: 0.82rem !important;
  font-weight: 600;
}
.foot_item ion-icon {
  margin-right: 5px;
  font-size: 1.05rem !important;
}
.foot_item.booked {
  color: var(--primary);
}
.lead_body {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px dashed var(--border-line-color);
}
.body_block {
  margin-bottom: 16px;
}
.body_block:last-child {
  margin-bottom: 0;
}
.body_block h5 {
  margin: 0 0 8px 0;
  color: var(--text-dark);
  font-size: 0.95rem !important;
  font-weight: 700;
}
.block_head {
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.block_head h5 {
  margin: 0;
}
.mini_btn {
  padding: 4px 11px;
  border: 1px solid var(--primary);
  border-radius: 20px;
  color: var(--primary);
  font-size: 0.78rem !important;
  font-weight: 700;
}
.stage_chips {
  flex-wrap: wrap;
}
.qual_grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.qual_item {
  padding: 9px 11px;
  border: 1px solid var(--border-line-color);
  border-radius: 10px;
}
.qual_item span {
  display: block;
  color: var(--text-light2);
  font-size: 0.76rem !important;
  font-weight: 600;
}
.qual_item strong {
  display: block;
  margin-top: 3px;
  color: var(--text-dark);
  font-size: 0.9rem !important;
  font-weight: 700;
}
.appt_line {
  display: flex;
  align-items: center;
  margin: 0;
  color: var(--text-dark);
  font-size: 0.9rem !important;
  font-weight: 600;
}
.appt_line ion-icon {
  margin-right: 6px;
  color: var(--primary);
  font-size: 1.15rem !important;
}
.timeline {
  border-left: 2px solid var(--border-line-color);
  padding-left: 14px;
}
.tl_row {
  position: relative;
  padding-bottom: 14px;
}
.tl_row:last-child {
  padding-bottom: 0;
}
.tl_dot {
  position: absolute;
  left: -21px;
  top: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #9aa0a6;
}
.tl_dot.tl_blue {
  background: #5b9bd5;
}
.tl_dot.tl_violet {
  background: #9b7fd4;
}
.tl_dot.tl_green {
  background: #7ec850;
}
.tl_dot.tl_orange {
  background: #FF7110;
}
.tl_body h6 {
  margin: 0;
  color: var(--text-dark);
  font-size: 0.9rem !important;
  font-weight: 700;
}
.tl_body p {
  margin: 2px 0 0 0;
  color: var(--text-light2);
  font-size: 0.85rem !important;
  line-height: 1.4;
}
.tl_when {
  display: block;
  margin-top: 3px;
  color: var(--text-light2);
  font-size: 0.76rem !important;
  font-weight: 600;
}
.sheet_backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.45);
}
.lead_sheet {
  position: fixed;
  left: 12px;
  right: 12px;
  bottom: calc(76px + env(safe-area-inset-bottom));
  z-index: 100;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
  padding: 20px;
  border-radius: 20px;
  background: var(--bg-white);
  box-shadow: 0 -12px 24px rgba(0, 0, 0, 0.2);
}
.lead_sheet h3 {
  margin: 0;
  color: var(--text-dark);
  font-size: 1.05rem !important;
  font-weight: 700;
}
.sheet_sub {
  margin: 4px 0 14px 0;
  color: var(--text-light2);
  font-size: 0.9rem !important;
}
.qual_field {
  margin-bottom: 12px;
}
.qual_field label {
  display: block;
  margin-bottom: 5px;
  color: var(--text-light2);
  font-size: 0.8rem !important;
  font-weight: 600;
}
.field {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px;
  border: 1px solid var(--border-line-color);
  border-radius: 10px;
  background: var(--bg-white);
  color: var(--text-dark);
  font-family: inherit;
  font-size: 1rem !important;
}
.sheet_actions {
  margin-top: 16px;
}
.sheet_actions button {
  flex: 1;
  padding: 12px;
  border: 0;
  border-radius: 12px;
  font-family: inherit;
  font-size: 1rem !important;
  font-weight: 700;
}
.sheet_actions button:first-child {
  margin-right: 10px;
}
.ghost_btn {
  background: var(--border-line-color);
  color: var(--text-dark);
}
.primary_btn {
  background: var(--primary);
  color: #ffffff;
}
.activity_stats {
  margin: 14px 0 2px 0;
  gap: 10px;
}
.activity_stat {
  flex: 1 1 0;
  padding: 12px 8px;
  border-radius: 12px;
  background: rgba(255, 113, 16, 0.08);
  text-align: center;
}
.activity_stat strong {
  display: block;
  color: var(--text-dark);
  font-size: 1.35rem !important;
  font-weight: 700;
  line-height: 1.1;
}
.activity_stat span {
  display: block;
  margin-top: 3px;
  color: var(--text-light2);
  font-size: 0.8rem !important;
  font-weight: 600;
}
.activity_note {
  margin: 10px 0 4px 0;
  color: var(--text-light2);
  font-size: 0.85rem !important;
  line-height: 1.45;
}
.activity_row {
  align-items: center;
  padding: 7px 0;
  border-top: 1px solid var(--border-line-color);
}
.activity_dot {
  width: 9px;
  height: 9px;
  margin-right: 8px;
  border-radius: 50%;
  flex: 0 0 auto;
}
.activity_name {
  width: 100%;
  color: var(--text-dark);
  font-size: 0.88rem !important;
  font-weight: 600;
}
.activity_count {
  color: var(--text-light2);
  font-size: 0.88rem !important;
  font-weight: 700;
}
.activity_total {
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding-top: 10px;
  border-top: 1px solid var(--border-line-color);
  color: var(--text-light2);
  font-size: 0.82rem !important;
  font-weight: 600;
}
.activity_total strong {
  color: var(--primary);
  font-size: 0.9rem !important;
  font-weight: 700;
}
.knock_main {
  margin-top: 12px;
}
.knock_total,
.knock_rate {
  flex: 1 1 0;
}
.knock_rate {
  text-align: right;
}
.knock_total strong,
.knock_rate strong {
  display: block;
  color: var(--text-dark);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
}
.knock_rate strong {
  color: var(--primary);
}
.knock_total span,
.knock_rate span {
  display: block;
  margin-top: 4px;
  color: var(--text-light2);
  font-size: 0.8rem !important;
  font-weight: 600;
}
.knock_stats {
  margin-top: 12px;
  gap: 10px;
}
.knock_stat {
  flex: 1 1 0;
  padding: 10px 8px;
  border: 1px solid var(--border-line-color);
  border-radius: 12px;
  text-align: center;
}
.knock_stat strong {
  display: block;
  color: var(--text-dark);
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.1;
}
.knock_stat span {
  display: block;
  margin-top: 3px;
  color: var(--text-light2);
  font-size: 0.78rem !important;
  font-weight: 600;
}
.knock_add {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 12px;
  padding: 13px;
  border: 0;
  border-radius: 12px;
  background: var(--primary);
  color: #ffffff;
  font-family: inherit;
  font-size: 1rem !important;
  font-weight: 700;
}
.knock_add ion-icon {
  margin-right: 6px;
  font-size: 1.2rem;
}
.knock_log {
  margin-top: 12px;
  padding-top: 4px;
  border-top: 1px solid var(--border-line-color);
}
.knock_row {
  align-items: center;
  padding: 7px 0;
}
.knock_dot {
  flex: 0 0 auto;
  width: 9px;
  height: 9px;
  margin-right: 8px;
  border-radius: 50%;
  background: #9aa0a6;
}
.knock_name {
  width: 100%;
  color: var(--text-dark);
  font-size: 0.88rem !important;
  font-weight: 600;
}
.knock_time {
  color: var(--text-light2);
  font-size: 0.82rem !important;
  font-weight: 600;
}
.lb_me {
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  color: var(--text-light2);
  font-size: 0.82rem !important;
  font-weight: 600;
}
.lb_me strong {
  color: var(--text-dark);
  font-weight: 700;
}
.lb_rows {
  margin-top: 12px;
}
.lb_row {
  align-items: center;
  padding: 8px 0;
  border-top: 1px solid var(--border-line-color);
}
.lb_row.lb_you .lb_name {
  color: var(--primary);
}
.lb_rank {
  flex: 0 0 18px;
  color: var(--text-light2);
  font-size: 0.82rem !important;
  font-weight: 700;
}
.lb_avatar {
  flex: 0 0 auto;
  width: 28px;
  height: 28px;
  margin-right: 9px;
  border-radius: 50%;
  background: rgba(255, 113, 16, 0.14);
  color: var(--primary);
  font-size: 0.78rem !important;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
}
.lb_body {
  width: 100%;
}
.lb_head {
  align-items: center;
  justify-content: space-between;
}
.lb_name {
  color: var(--text-dark);
  font-size: 0.88rem !important;
  font-weight: 600;
}
.lb_count {
  color: var(--text-dark);
  font-size: 0.9rem !important;
  font-weight: 700;
}
.lb_track {
  height: 5px;
  margin-top: 6px;
  border-radius: 3px;
  background: var(--border-line-color);
  overflow: hidden;
}
.lb_bar {
  display: block;
  height: 100%;
  border-radius: 3px;
  background: var(--primary);
}
.lb_note {
  margin: 10px 0 0 0;
  color: var(--text-light2);
  font-size: 0.82rem !important;
  font-weight: 600;
}
.lb_join {
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  border: 1px dashed var(--primary);
  border-radius: 12px;
  background: rgba(255, 113, 16, 0.08);
  color: var(--primary);
  font-family: inherit;
  font-size: 0.95rem !important;
  font-weight: 700;
}
.knock_outcomes {
  display: flex;
  flex-wrap: wrap;
}
.outcome_chip {
  margin: 0 8px 8px 0;
  padding: 8px 13px;
  border: 1px solid var(--border-line-color);
  border-radius: 20px;
  color: var(--text-light2);
  font-size: 0.85rem !important;
  font-weight: 600;
}
.outcome_chip.active {
  border-color: var(--primary);
  background: rgba(255, 113, 16, 0.12);
  color: var(--primary);
}`;

let LeadsPage = class LeadsPage {
    constructor() {
        this.leads = [];
        this.stages = [];
        this.stageNames = LEAD_STAGES.map(stage => stage.name);
        this.qualFields = QUAL_FIELDS;
        this.activityTypes = ACTIVITY_TYPES;
        this.consultTypes = CONSULT_TYPES;
        this.stageFilter = '';
        this.openLeadId = '';
        this.sheet = '';
        this.activeLead = null;
        this.qualDraft = {};
        this.bookDraft = { date: '', time: '09:00', type: CONSULT_TYPES[0] };
        this.activityDraft = { type: 'Call', text: '' };
        this.openLabel = '';
        this.records = {};
        this.activity = { knocks: 0, avgPerDay: '0.0', converted: 0, conversionRate: 0, statusRows: [] };
        this.knockOutcomes = KNOCK_OUTCOMES;
        this.knockDraft = KNOCK_OUTCOMES[0].key;
        this.knockEntries = [];
        this.knock = { total: 0, contacts: 0, leads: 0, appointments: 0, contactRate: 0, entries: [] };
        this.repName = '';
        this.repDraft = '';
        this.leaderboard = { reps: [], total: 0, loading: false, error: '' };
    }
    ngOnInit() {
        const data = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.InquiryStore.snapshot();
        const stored = readLedger();
        this.data = data;
        this.knockEntries = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.KnockLog.entries();
        this.records = {};
        data.inquiries.forEach(inquiry => {
            const note = data.notes[inquiry.id] || {};
            const record = Object.assign({}, seedRecord(note), stored[inquiry.id] || {});
            if (LEGACY_STAGES[record.stage]) {
                record.stage = LEGACY_STAGES[record.stage];
            }
            this.records[inquiry.id] = record;
        });
        this.build();
        this.persist();
        this.repName = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.KnockLog.repName();
        this.syncKnocks();
    }
    // Rebuild the rows the template renders from the ledger. Display-only additions (initials,
    // swatches, formatted dates, activity order) live here, never in the stored record.
    build() {
        this.leads = this.data.inquiries.map(inquiry => {
            const note = this.data.notes[inquiry.id] || {};
            const record = this.records[inquiry.id];
            return {
                id: inquiry.id,
                name: note.customerName || 'New prospect',
                address: note.locationAddress || 'Location not set',
                initials: initialsOf(note.customerName),
                stage: record.stage,
                swatch: this.swatchFor(record.stage),
                consultLabel: record.consultation
                    ? whenLabel(record.consultation.date) + ' at ' + record.consultation.time
                    : 'No consultation booked',
                consultation: record.consultation,
                activities: (record.activities || [])
                    .slice()
                    .sort((a, b) => String(b.at || '').localeCompare(String(a.at || '')))
                    .map(activity => Object.assign({}, activity, {
                        when: whenLabel(activity.at),
                        tone: ACTIVITY_TONES[activity.type] || 'blue'
                    })),
                qualList: QUAL_FIELDS.map(field => ({ label: field.label, value: record.qual[field.key] }))
            };
        });
        this.filtered = this.stageFilter ? this.leads.filter(lead => lead.stage === this.stageFilter) : this.leads;
        this.buildPipeline();
        this.buildActivity();
        this.buildKnock();
    }
    // Today's door-knocking session, read off the logged outcomes: knocks are attempts, contacts
    // are conversations, leads and appointments come from the outcome that was picked.
    buildKnock() {
        const outcomeFor = (entry) => KNOCK_OUTCOMES.filter(item => item.key === entry.outcome)[0];
        const count = (flag) => this.knockEntries.filter(entry => {
            const outcome = outcomeFor(entry);
            return !!(outcome && outcome[flag]);
        }).length;
        const contacts = count('contacted');
        this.knock = {
            total: this.knockEntries.length,
            contacts: contacts,
            leads: count('lead'),
            appointments: count('appointment'),
            contactRate: this.knockEntries.length ? Math.round(contacts / this.knockEntries.length * 100) : 0,
            entries: this.knockEntries
                .slice()
                .reverse()
                .slice(0, 5)
                .map(entry => {
                    const outcome = outcomeFor(entry) || KNOCK_OUTCOMES[0];
                    // A knock logged from a map check-in carries the status the rep picked.
                    return { label: entry.label || outcome.label, swatch: outcome.swatch, time: clockOf(entry.at) };
                })
        };
    }
    // The week's canvassing: one knock per prospect's disposition, counted by status so the
    // summary equals the knock total, plus the daily average and the conversion rate.
    buildActivity() {
        const notes = this.data.inquiries.map(inquiry => this.data.notes[inquiry.id] || {});
        const statusRows = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.STATUS_TILES
            .map(tile => ({
                name: tile.name,
                swatch: tile.swatch,
                count: notes.filter(note => note.status === tile.name).length
            }))
            .filter(row => row.count);
        const knocks = statusRows.reduce((sum, row) => sum + row.count, 0);
        const converted = statusRows
            .filter(row => CONVERTED_STATUSES.indexOf(row.name) >= 0)
            .reduce((sum, row) => sum + row.count, 0);
        this.activity = {
            knocks: knocks,
            avgPerDay: (knocks / WEEK_DAYS).toFixed(1),
            converted: converted,
            conversionRate: knocks ? Math.round(converted / knocks * 100) : 0,
            statusRows: statusRows
        };
    }
    buildPipeline() {
        const total = this.leads.length || 1;
        this.stages = LEAD_STAGES.map(stage => {
            const count = this.leads.filter(lead => lead.stage === stage.name).length;
            return { name: stage.name, swatch: stage.swatch, count: count, width: Math.round(count / total * 100) };
        });
        const booked = this.leads.filter(lead => lead.consultation).length;
        const sold = this.leads.filter(lead => SOLD_STAGES.indexOf(lead.stage) >= 0).length;
        this.openLabel = booked + ' consultations booked \u00b7 ' + sold + ' sold or installed';
    }
    swatchFor(stage) {
        const match = LEAD_STAGES.filter(item => item.name === stage)[0];
        return match ? match.swatch : '#9aa0a6';
    }
    persist() {
        writeLedger(this.records);
    }
    setStageFilter(stage) {
        this.stageFilter = stage;
        this.filtered = stage ? this.leads.filter(lead => lead.stage === stage) : this.leads;
    }
    toggleLead(lead) {
        this.openLeadId = this.openLeadId === lead.id ? '' : lead.id;
    }
    setStage(lead, stage) {
        if (this.records[lead.id].stage === stage) {
            return;
        }
        this.records[lead.id].stage = stage;
        this.persist();
        this.build();
        if (window.solar360Notify) {
            window.solar360Notify('status_change', 'Pipeline stage changed',
                (lead.name || 'Lead') + ' moved to ' + stage + '.',
                { name: lead.name || '', stage: stage });
        }
    }
    openQualSheet(lead) {
        this.activeLead = lead;
        this.qualDraft = Object.assign({}, this.records[lead.id].qual);
        this.sheet = 'qual';
    }
    saveQual() {
        this.records[this.activeLead.id].qual = Object.assign({}, this.qualDraft);
        this.persist();
        this.closeSheetAndRefresh();
    }
    openBookSheet(lead) {
        this.activeLead = lead;
        const booked = this.records[lead.id].consultation;
        this.bookDraft = booked
            ? { date: booked.date, time: booked.time, type: booked.type }
            : { date: src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.offsetDateISO(1), time: '09:00', type: CONSULT_TYPES[0] };
        this.sheet = 'book';
    }
    saveBooking() {
        if (!this.bookDraft.date || !this.bookDraft.time) {
            return;
        }
        const record = this.records[this.activeLead.id];
        record.consultation = { date: this.bookDraft.date, time: this.bookDraft.time, type: this.bookDraft.type };
        record.activities = (record.activities || []).concat([{
            type: 'Meeting',
            text: this.bookDraft.type + ' booked for ' + whenLabel(this.bookDraft.date) + ' at ' + this.bookDraft.time,
            at: new Date().toISOString()
        }]);
        this.persist();
        this.closeSheetAndRefresh();
    }
    openActivitySheet(lead) {
        this.activeLead = lead;
        this.activityDraft = { type: 'Call', text: '' };
        this.sheet = 'activity';
    }
    saveActivity() {
        const text = String(this.activityDraft.text || '').trim();
        if (!text) {
            return;
        }
        const record = this.records[this.activeLead.id];
        record.activities = (record.activities || []).concat([{
            type: this.activityDraft.type,
            text: text,
            at: new Date().toISOString()
        }]);
        this.persist();
        this.closeSheetAndRefresh();
    }
    openKnockSheet() {
        this.knockDraft = KNOCK_OUTCOMES[0].key;
        this.sheet = 'knock';
    }
    saveKnock() {
        src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.KnockLog.add(this.knockDraft);
        this.knockEntries = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.KnockLog.entries();
        this.closeSheet();
        this.buildKnock();
        this.syncKnocks();
    }
    // The team's week: every rep's knocks over the last 7 days, ranked, with this
    // device's rep highlighted so a rep can find themselves in the list.
    loadLeaderboard() {
        this.leaderboard = Object.assign({}, this.leaderboard, { loading: !this.leaderboard.reps.length, error: '' });
        fetch('/api/knocks')
            .then(response => response.json())
            .then(payload => {
                const reps = payload && Array.isArray(payload.reps) ? payload.reps : [];
                const top = reps.length ? reps[0].knocks : 0;
                this.leaderboard = {
                    total: (payload && payload.total) || 0,
                    loading: false,
                    error: '',
                    reps: reps.map((rep, index) => ({
                        rank: index + 1,
                        name: rep.name,
                        knocks: rep.knocks,
                        initials: initialsOf(rep.name),
                        you: !!this.repName && rep.name.toLowerCase() === this.repName.toLowerCase(),
                        width: top ? Math.max(8, Math.round(rep.knocks / top * 100)) : 0
                    }))
                };
            })
            .catch(() => {
                this.leaderboard = Object.assign({}, this.leaderboard, {
                    loading: false,
                    error: 'The team leaderboard could not load. Check the connection and try again.'
                });
            });
    }
    // Send the session's knocks that have not reached the server yet (a knock logged
    // before a name was set counts once the rep joins), then refresh the board.
    syncKnocks() {
        src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.KnockLog.sync().then(() => {
            this.knockEntries = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.KnockLog.entries();
            this.loadLeaderboard();
        });
    }
    openRepSheet() {
        this.repDraft = this.repName;
        this.sheet = 'rep';
    }
    saveRep() {
        const name = String(this.repDraft || '').trim();
        if (!name) {
            return;
        }
        this.repName = name;
        src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_0__.KnockLog.setRepName(name);
        this.closeSheet();
        this.syncKnocks();
    }
    closeSheet() {
        this.sheet = '';
        this.activeLead = null;
    }
    closeSheetAndRefresh() {
        this.closeSheet();
        this.build();
    }
};
LeadsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-leads',
        template: template,
        styles: [styles]
    })
], LeadsPage);



/***/ })

}]);
