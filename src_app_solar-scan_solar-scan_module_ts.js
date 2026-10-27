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
            <h2>Houses with solar</h2>
            <p class="hero_text">Every prospect on the map is checked against Google's roof data and an AI look at the satellite image. The houses that already have panels are the ones flagged here.</p>
            <div class="hero_actions">
                <ion-button class="scan_btn" [disabled]="scanning" (click)="runScan()">
                    <ion-icon slot="start" class="zmdi zmdi-sun"></ion-icon>
                    <span *ngIf="!scanning">Scan houses</span>
                    <span *ngIf="scanning">Scanning</span>
                </ion-button>
                <strong class="hero_count" *ngIf="scannedCount()">{{ hasSolarCount() }} of {{ scannedCount() }} have solar</strong>
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
            <div class="house_row" *ngFor="let row of group.rows" [class.has_solar]="row.verdict === 'installed'">
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
                <div class="map_block">
                    <ion-button size="small" fill="outline" color="primary" (click)="showOnMap(row)">
                        <ion-icon slot="start" class="zmdi zmdi-map"></ion-icon>
                        Show me on the map
                    </ion-button>
                </div>
            </div>
        </div>
    </div>
</ion-content>

<div class="sheet_backdrop" *ngIf="mapOpen" (click)="closeMap()"></div>
<div class="map_sheet" *ngIf="mapOpen">
    <div class="map_sheet_head d-flex">
        <div class="map_sheet_text">
            <h3>{{ mapName }}</h3>
            <p>{{ mapAddress }}</p>
        </div>
        <ion-icon class="map_sheet_close zmdi zmdi-close" (click)="closeMap()"></ion-icon>
    </div>
    <div class="radius_row d-flex">
        <span class="radius_label">Map radius</span>
        <span class="radius_chip" [class.active]="radiusMiles === 0.25" (click)="setRadius(0.25)">1/4 mile</span>
        <span class="radius_chip" [class.active]="radiusMiles === 0.5" (click)="setRadius(0.5)">1/2 mile</span>
    </div>
    <div class="map_box" id="solar_nb_map"></div>
    <div class="map_stats d-flex">
        <span class="map_stat"><span class="map_dot has"></span>{{ mapStats.hasSolar }} with solar</span>
        <span class="map_stat"><span class="map_dot none"></span>{{ mapStats.noSolar }} without</span>
        <span class="map_stat muted">{{ mapStats.pending }} not scanned</span>
    </div>
    <p class="map_note" *ngIf="mapNote">{{ mapNote }}</p>
</div>`;

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
.house_row.has_solar {
  background: rgba(255, 113, 16, 0.1);
  border-left: 3px solid var(--primary);
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
.map_block {
  margin-top: 10px;
}
.sheet_backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1200;
  background: rgba(20, 20, 24, 0.4);
}
/* Docked above the floating tab bar: the bar lives in the shell, so the sheet is offset
   instead of relying on a higher z-index inside the page. */
.map_sheet {
  position: fixed;
  left: 12px;
  right: 12px;
  bottom: calc(76px + env(safe-area-inset-bottom));
  z-index: 1201;
  padding: 14px;
  border-radius: 16px;
  background: var(--bg-white);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.3);
}
.map_sheet_head {
  align-items: flex-start;
  justify-content: space-between;
}
.map_sheet_text h3 {
  margin: 0 0 2px 0;
  color: var(--text-dark);
  font-size: 0.95rem;
  font-weight: 600;
}
.map_sheet_text p {
  margin: 0;
  color: var(--text-light2);
  font-size: 0.78rem;
}
.map_sheet_close {
  padding: 4px;
  color: var(--text-light2);
  font-size: 1.2rem;
}
.radius_row {
  align-items: center;
  margin-top: 10px;
}
.radius_label {
  margin-right: 8px;
  color: var(--text-light2);
  font-size: 0.75rem;
  font-weight: 600;
}
.radius_chip {
  margin-right: 8px;
  padding: 4px 12px;
  border: 1px solid var(--border-line-color);
  border-radius: 20px;
  color: var(--text-light2);
  font-size: 0.75rem;
  font-weight: 600;
}
.radius_chip.active {
  border-color: var(--primary);
  background: rgba(255, 113, 16, 0.12);
  color: var(--primary);
}
.map_box {
  height: 210px;
  margin-top: 10px;
  border-radius: 12px;
  background: var(--border-line-color);
  overflow: hidden;
}
.map_stats {
  flex-wrap: wrap;
  margin-top: 10px;
}
.map_stat {
  display: flex;
  align-items: center;
  margin-right: 12px;
  color: var(--text-dark);
  font-size: 0.75rem;
  font-weight: 600;
}
.map_stat.muted {
  color: var(--text-light2);
  font-weight: 500;
}
.map_dot {
  width: 9px;
  height: 9px;
  margin-right: 5px;
  border-radius: 50%;
}
.map_dot.has {
  background: #FF7110;
}
.map_dot.none {
  background: #9aa0a6;
}
.map_note {
  margin: 8px 0 0 0;
  color: var(--text-light2);
  font-size: 0.75rem;
}`;

// The map's radius around the tapped house, the way Project Sunroof frames a neighbourhood.
const MILES_TO_METERS = 1609.34;
const EARTH_RADIUS_MILES = 3958.8;
const RADIUS_CHOICES = [0.25, 0.5];

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
        this.status = null;
        this.radiusMiles = RADIUS_CHOICES[0];
        this.mapOpen = false;
        this.mapName = '';
        this.mapAddress = '';
        this.mapCenter = null;
        this.mapStats = { hasSolar: 0, noSolar: 0, pending: 0 };
        this.mapNote = '';
        this.mapsPromise = null;
        this.nbMap = null;
        this.radiusCircle = null;
        this.nbMarkers = [];
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
                busy: false
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
        // The houses that already have panels lead the list: they are what this scan looks for.
        const installed = this.rows.filter(row => row.scanned && row.verdict === HAS_SOLAR);
        const noSolar = this.rows.filter(row => row.scanned && row.verdict === NO_SOLAR);
        const pending = this.rows.filter(row => !row.scanned);
        this.groups = [];
        if (installed.length) {
            this.groups.push({ key: HAS_SOLAR, title: 'Solar already installed', rows: installed });
        }
        if (noSolar.length) {
            this.groups.push({ key: NO_SOLAR, title: 'No solar yet', rows: noSolar });
        }
        if (pending.length) {
            this.groups.push({ key: UNKNOWN, title: 'Not scanned yet', rows: pending });
        }
        if (this.mapOpen) {
            this.drawNeighbourhood();
        }
    }
    scannedCount() {
        return this.rows.filter(row => row.scanned).length;
    }
    hasSolarCount() {
        return this.rows.filter(row => row.scanned && row.verdict === HAS_SOLAR).length;
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
                this.notice = 'Scan finished: ' + this.hasSolarCount() + ' of ' + queue.length + ' houses already have solar.';
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
    // --- neighbourhood map ---------------------------------------------------
    // Instead of booking a site visit, the house is shown on a satellite map inside a
    // 1/4 or 1/2 mile ring, with every scanned prospect around it flagged by verdict.
    showOnMap(row) {
        this.mapName = row.name;
        this.mapAddress = row.address || '';
        this.mapCenter = { lat: Number(row.lat), lng: Number(row.lng) };
        this.mapNote = '';
        this.mapOpen = true;
        this.loadMaps().then(ready => {
            if (ready && this.mapOpen) {
                this.drawNeighbourhood(0);
            }
        });
    }
    closeMap() {
        this.mapOpen = false;
        this.nbMarkers.forEach(marker => marker.setMap(null));
        this.nbMarkers = [];
        this.radiusCircle = null;
        this.nbMap = null;
    }
    setRadius(miles) {
        if (this.radiusMiles === miles) {
            return;
        }
        this.radiusMiles = miles;
        this.drawNeighbourhood(0);
    }
    // Google Maps is loaded once, the first time a house is shown on the map.
    loadMaps() {
        if (this.mapsPromise) {
            return this.mapsPromise;
        }
        this.mapsPromise = fetch('/api/config')
            .then(response => response.ok ? response.json() : {})
            .then(config => {
                const key = (config && config.googleMapsApiKey) || '';
                if (!key) {
                    this.mapNote = 'Add a Google Maps key to draw the radius map.';
                    return false;
                }
                if (window.google && window.google.maps) {
                    return true;
                }
                return new Promise(resolve => {
                    const script = document.createElement('script');
                    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + encodeURIComponent(key) + '&v=weekly';
                    script.async = true;
                    script.onload = () => resolve(true);
                    script.onerror = () => {
                        this.mapNote = 'The map could not load.';
                        resolve(false);
                    };
                    document.head.appendChild(script);
                });
            })
            .catch(() => {
                this.mapNote = 'The map could not load.';
                return false;
            });
        return this.mapsPromise;
    }
    drawNeighbourhood(attempt) {
        if (!this.mapOpen || !this.mapCenter) {
            return;
        }
        const host = document.getElementById('solar_nb_map');
        if (!host) {
            return;
        }
        // The sheet is rendered by Angular after the click, so wait for the box to have a size.
        if (!host.getBoundingClientRect().height) {
            if ((attempt || 0) < 20) {
                setTimeout(() => this.drawNeighbourhood((attempt || 0) + 1), 60);
            }
            return;
        }
        if (!(window.google && window.google.maps)) {
            return;
        }
        if (!this.nbMap) {
            this.nbMap = new window.google.maps.Map(host, {
                center: this.mapCenter,
                zoom: 16,
                mapTypeId: 'hybrid',
                disableDefaultUI: true,
                gestureHandling: 'greedy',
                clickableIcons: false
            });
        }
        this.nbMap.setCenter(this.mapCenter);
        this.nbMap.setZoom(this.radiusZoom(host));
        this.drawRadius();
        this.drawMarkers();
    }
    radiusMeters() {
        return this.radiusMiles * MILES_TO_METERS;
    }
    // Frame the ring so it fills most of the map box, the way Project Sunroof frames a neighbourhood.
    radiusZoom(host) {
        const box = host.getBoundingClientRect();
        const span = Math.max(120, Math.min(box.width, box.height) * 0.82);
        const metersPerPixel = (this.radiusMeters() * 2) / span;
        const lat = this.mapCenter ? this.mapCenter.lat : 0;
        const zoom = Math.log(156543.03392 * Math.cos(lat * Math.PI / 180) / metersPerPixel) / Math.LN2;
        return Math.max(12, Math.min(20, Math.round(zoom * 100) / 100));
    }
    drawRadius() {
        if (!this.nbMap) {
            return;
        }
        if (!this.radiusCircle) {
            this.radiusCircle = new window.google.maps.Circle({
                map: this.nbMap,
                center: this.mapCenter,
                radius: this.radiusMeters(),
                strokeColor: '#FF7110',
                strokeOpacity: 0.9,
                strokeWeight: 2,
                fillColor: '#FF7110',
                fillOpacity: 0.12,
                clickable: false
            });
        }
        this.radiusCircle.setCenter(this.mapCenter);
        this.radiusCircle.setRadius(this.radiusMeters());
    }
    drawMarkers() {
        if (!this.nbMap) {
            return;
        }
        this.nbMarkers.forEach(marker => marker.setMap(null));
        this.nbMarkers = [];
        const stats = { hasSolar: 0, noSolar: 0, pending: 0 };
        this.rows.forEach(row => {
            const lat = Number(row.lat);
            const lng = Number(row.lng);
            if (!lat || !lng) {
                return;
            }
            const inside = this.distanceMiles(this.mapCenter, { lat: lat, lng: lng }) <= this.radiusMiles;
            if (inside) {
                if (row.verdict === HAS_SOLAR) {
                    stats.hasSolar += 1;
                }
                else if (row.verdict === NO_SOLAR) {
                    stats.noSolar += 1;
                }
                else {
                    stats.pending += 1;
                }
            }
            // Solar houses carry the brand colour; everything else stays grey so the panels stand out.
            let colour = '#c9ccd1';
            if (row.verdict === HAS_SOLAR) {
                colour = '#FF7110';
            }
            else if (row.verdict === NO_SOLAR) {
                colour = '#9aa0a6';
            }
            this.nbMarkers.push(new window.google.maps.Marker({
                map: this.nbMap,
                position: { lat: lat, lng: lng },
                title: row.name + (row.verdict === HAS_SOLAR ? ' - solar installed' : ''),
                icon: {
                    path: window.google.maps.SymbolPath.CIRCLE,
                    scale: inside ? 7 : 4,
                    fillColor: colour,
                    fillOpacity: inside ? 1 : 0.45,
                    strokeColor: '#ffffff',
                    strokeWeight: inside ? 2 : 1
                },
                zIndex: inside ? 2 : 1
            }));
        });
        this.mapStats = stats;
    }
    distanceMiles(from, to) {
        const rad = (degrees) => degrees * Math.PI / 180;
        const dLat = rad(to.lat - from.lat);
        const dLng = rad(to.lng - from.lng);
        const a = Math.pow(Math.sin(dLat / 2), 2)
            + Math.cos(rad(from.lat)) * Math.cos(rad(to.lat)) * Math.pow(Math.sin(dLng / 2), 2);
        return 2 * EARTH_RADIUS_MILES * Math.asin(Math.min(1, Math.sqrt(a)));
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
