"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 5089:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9460);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 2711:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 5089);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 9460);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 9460:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/inquiry-store */ 9200);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let HomePage = class HomePage {
    constructor(route) {
        this.route = route;
        this.segment = "near_by";
        this.spotsSliderClass = false;
        this.selectedNote = null;
        this.selectedNoteId = null;
        this.noteExpanded = false;
        this.noteEditing = false;
        this.checkInElapsed = '';
        this.checkInTimeLabel = '';
        this.checkInTimer = null;
        // Sales-agent sheet, opened by tapping one of the agent photo pins on the map.
        // null = closed; the other two fields are the sheet's own content.
        this.agentSheet = null;
        this.agentCoords = '';
        this.agentAddress = '';
        // Sample houses along the Mason - Montgomery corridor (Cincinnati, OH). Each one is
        // seeded as a normal inquiry, so it renders and behaves exactly like a pin added by
        // tapping the map: it filters by status and opens its own note sheet. The list itself
        // lives in the shared inquiry store (src/app/inquiry-store.ts) so the Dashboard can
        // summarise exactly the same records.
        this.houseSamples = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_5__.HOUSE_SAMPLES;
        this.addedInquiries = this.houseSamples.map((house, index) => ({
            id: 'inquiry' + (index + 1),
            lat: house.lat,
            lng: house.lng,
            top: house.top,
            left: house.left
        }));
        this.inquiryCount = this.addedInquiries.length;
        // Field agents shown on the map as photo pins, drawn like the "My location" marker.
        // lat/lng keep a pin on its ground position while the live map pans/zooms; top/left
        // are the fallback percentages used until the map reports its bounds.
        // Each agent also carries the content of the sheet that opens when their pin is tapped:
        // name, title and their solar milestones. lat/lng double as the "exact location" shown
        // there (reverse geocoded to a street address when the Maps key is available).
        this.agentPins = [
            {
                lat: 39.30000,
                lng: -84.32500,
                top: 47.6,
                left: 53.6,
                photo: 'assets/images/agent_photo_1.jpg',
                name: 'Marcus Reed',
                title: 'Senior Solar Consultant',
                phone: '+1 513-555-0142',
                milestones: [
                    { label: '500th roof surveyed', detail: 'August 2026' },
                    { label: 'Top closer, Q2 2026', detail: '68 deals · $412k commissioned' },
                    { label: 'Certified solar designer', detail: 'Since 2019' }
                ]
            },
            {
                lat: 39.27500,
                lng: -84.34000,
                top: 53.5,
                left: 48.7,
                photo: 'assets/images/agent_photo_2.jpg',
                name: 'Dana Whitfield',
                title: 'Solar Sales Manager',
                phone: '+1 513-555-0178',
                milestones: [
                    { label: '1 MW of systems sold', detail: 'June 2026' },
                    { label: 'Team of the quarter', detail: 'Q1 2026' },
                    { label: 'Referral champion', detail: '42 referrals this year' }
                ]
            }
        ];
        // Field-agent motion (showcase): each agent patrols a closed loop of real prospect
        // houses, so the map shows the crew travelling from one location to the next. The
        // waypoints reuse the seeded house coordinates - lat/lng drive the pin against the
        // live map, top/left are the percentage fallback used without a Maps key.
        const routeFor = indexes => indexes.map(index => {
            const house = this.houseSamples[index % this.houseSamples.length];
            return { lat: house.lat, lng: house.lng, top: house.top, left: house.left };
        });
        this.agentPins[0].route = routeFor([0, 3, 6]);
        this.agentPins[1].route = routeFor([4, 7, 2]);
        this.agentPins.forEach((agent, index) => {
            agent.segment = index % agent.route.length;
            agent.progress = 0;
        });
        // One 40ms tick advances a leg by 1/200, so an agent takes about 8 seconds per hop —
        // slow enough to read as a drive between houses rather than a jump.
        this.agentLegStep = 0.005;
        this.agentTimer = null;
        this.statusFilter = 'All';
        this.pendingFilter = 'All';
        this.filterOpen = false;
        // The colour ids are legacy keys: 'blue' renders lime, 'green' orange, 'red' coral and
        // 'yellow', 'gray' and 'violet' all render light grey (see the .map_pin and
        // .status_tile rules in the stylesheet at the bottom of this file).
        this.pipelineStages = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_5__.PIPELINE_STAGES;
        this.statusTiles = [
            { name: 'In Progress', colour: 'blue' },
            { name: 'Installed', colour: 'green' },
            { name: 'Cancelled', colour: 'red' },
            { name: 'New', colour: 'yellow' },
            { name: 'Not Home', colour: 'gray' },
            { name: 'Renter', colour: 'violet' }
        ];
        this.pinColourStatus = {
            blue: 'In Progress',
            green: 'Installed',
            red: 'Cancelled',
            yellow: 'New',
            gray: 'Not Home',
            violet: 'Renter'
        };
        this.pinConcerns = {
            spot1: ['Old Roof'],
            spot2: ['HOA'],
            spot3: [],
            spot4: ['Tree Shading'],
            spot5: ['HOA'],
            spot6: ['Old Roof'],
            spot7: [],
            blue: ['Old Roof'],
            green: [],
            red: ['Credit Fail'],
            yellow: ['Tree Shading'],
            gray: ['HOA']
        };
        // Where the pins sit on the bundled image, as percentages. Only used as the base
        // for the conversions below and when no live map is running.
        this.pinDefaults = {
            spot1: { top: 23, left: 12 },
            spot2: { top: 30, left: 60 },
            spot3: { top: 33, left: 28 },
            spot4: { top: 45, left: 70 },
            spot5: { top: 55, left: 21 },
            spot6: { top: 61, left: 82 },
            spot7: { top: 72, left: 12 },
            blue: { top: 14, left: 40 },
            green: { top: 37, left: 76 },
            red: { top: 50, left: 7 },
            yellow: { top: 64, left: 57 },
            gray: { top: 80, left: 30 }
        };
        // The same spots as real coordinates, converted from the percentages above at the
        // default view, so the pins keep their place on the ground when the map moves.
        this.pinLocations = {
            spot1: { lat: 39.15066, lng: -84.56940 },
            spot2: { lat: 39.13809, lng: -84.49689 },
            spot3: { lat: 39.13271, lng: -84.54523 },
            spot4: { lat: 39.11116, lng: -84.48179 },
            spot5: { lat: 39.09320, lng: -84.55581 },
            spot6: { lat: 39.08242, lng: -84.46366 },
            spot7: { lat: 39.06266, lng: -84.56940 },
            blue: { lat: 39.16681, lng: -84.52711 },
            green: { lat: 39.12552, lng: -84.47272 },
            red: { lat: 39.10218, lng: -84.57696 },
            yellow: { lat: 39.07703, lng: -84.50143 },
            gray: { lat: 39.04828, lng: -84.54221 },
        };
        this.pinPositions = Object.keys(this.pinDefaults).reduce((positions, id) => {
            positions[id] = { top: this.pinDefaults[id].top, left: this.pinDefaults[id].left };
            return positions;
        }, {});
        // Opened on the Mason - Montgomery corridor so the seeded houses are on screen.
        this.mapDefaultCenter = { lat: 39.29, lng: -84.336 };
        this.mapDefaultZoom = 11;
        this.searchMessage = '';
        this.googleMapsApiKey = '';
        this.searchMap = null;
        this.mapMarker = null;
        this.mapHost = null;
        this.mapDragStart = null;
        this.mapDownFromSearch = false;
        this.lastMapTapAt = 0;
        this.milesOptions = ['Small (up to 3.7 kW)', 'Medium (3.7 - 20 kW)', 'Large (20 - 43 kW)', 'Extra large (over 43 kW)'];
        this.concernsOptions = [
            { name: 'Old Roof', icon: 'zmdi-home' },
            { name: 'HOA', icon: 'zmdi-balance' },
            { name: 'Tree Shading', icon: 'zmdi-nature' },
            { name: 'Credit Fail', icon: 'zmdi-card' }
        ];
        this.selectedMiles = [];
        this.selectedConcerns = [];
        this.installationNotes = {
            spot1: {
                customerName: 'Harborview Logistics LLC',
                locationAddress: '4820 West Chester Rd, West Chester, OH 45069',
                status: 'Completed',
                statusClass: 'status_completed',
                systemSize: '4.8 kW - 12 panels',
                technicianNotes: 'Roof mount above the carport. Keep 3 ft clearance and inspect quarterly.'
            },
            spot2: {
                customerName: 'Birchwood Family Dental',
                locationAddress: '128 Meridian Ave, New York, NY 10001',
                status: 'In progress',
                statusClass: 'status_in_progress',
                systemSize: '6.2 kW - 16 panels',
                technicianNotes: 'Ground mount behind the parking deck; ladder access required.'
            },
            spot3: {
                customerName: 'Meridian Cold Storage',
                locationAddress: '240 Market St, Cincinnati, OH 45202',
                status: 'Completed',
                statusClass: 'status_completed',
                systemSize: '3.6 kW - 9 panels',
                technicianNotes: 'Carport mount; torque check completed on the last visit.'
            },
            spot4: {
                customerName: 'Lakeshore Auto Group',
                locationAddress: '915 Oak Ave, Columbus, OH 43215',
                status: 'Planned',
                statusClass: 'status_planned',
                systemSize: '5.4 kW - 14 panels',
                technicianNotes: 'Shaded before 10 am; clean panels each quarter.'
            },
            spot5: {
                customerName: 'Cedar Ridge Apartments',
                locationAddress: '76 Riverside Dr, Covington, KY 41011',
                status: 'In progress',
                statusClass: 'status_in_progress',
                systemSize: '8.0 kW - 20 panels',
                technicianNotes: 'Two strings feed the battery backup; verify inverter status LEDs.'
            },
            spot6: {
                customerName: 'Northgate Medical Plaza',
                locationAddress: '330 Lakeview Blvd, Newport, KY 41071',
                status: 'Completed',
                statusClass: 'status_completed',
                systemSize: '4.2 kW - 11 panels',
                technicianNotes: 'Roof anchors inspected; replace one cable clip on the next visit.'
            },
            spot7: {
                customerName: 'Riverbend Brewing Co.',
                locationAddress: '1288 Airport Rd, Erlanger, KY 41018',
                status: 'Planned',
                statusClass: 'status_planned',
                systemSize: '7.1 kW - 18 panels',
                technicianNotes: 'Ground mount with gravel ballast; clear snow in winter.'
            },
            blue: {
                customerName: 'Summit Fitness Club',
                locationAddress: '1420 Pike St, Seattle, WA 98101',
                status: 'In progress',
                statusClass: 'status_in_progress',
                systemSize: '5.0 kW - 13 panels',
                technicianNotes: 'Roof mount on the north-east corner; keep 3 ft clearance.'
            },
            green: {
                customerName: 'Cardinal Street Grocers',
                locationAddress: '455 Mission St, San Francisco, CA 94105',
                status: 'Completed',
                statusClass: 'status_completed',
                systemSize: '6.8 kW - 17 panels',
                technicianNotes: 'Tilted rack on the west roof; check wind bracing.'
            },
            red: {
                customerName: 'Ironwood Machine Works',
                locationAddress: '612 Congress Ave, Austin, TX 78701',
                status: 'Planned',
                statusClass: 'status_planned',
                systemSize: '9.2 kW - 23 panels',
                technicianNotes: 'High-heat site; verify module spacing for airflow.'
            },
            yellow: {
                customerName: 'Foxglove Residence',
                locationAddress: '88 Peachtree St, Atlanta, GA 30303',
                status: 'In progress',
                statusClass: 'status_in_progress',
                systemSize: '4.4 kW - 11 panels',
                technicianNotes: 'Partial tree shading; recommend trimming before summer.'
            },
            gray: {
                customerName: 'Beacon Hill Property Group',
                locationAddress: '310 N Michigan Ave, Chicago, IL 60601',
                status: 'Planned',
                statusClass: 'status_planned',
                systemSize: '5.8 kW - 15 panels',
                technicianNotes: 'Roof access via freight elevator; log in at the front desk.'
            }
        };
        // The seeded houses carry real note sheets, so tapping one opens the same detail
        // view as an inquiry added by hand.
        this.houseSamples.forEach((house, index) => {
            const id = 'inquiry' + (index + 1);
            this.installationNotes[id] = {
                customerName: house.customerName,
                locationAddress: house.locationAddress,
                status: house.status,
                statusClass: 'status_' + house.colour,
                colour: house.colour,
                systemSize: house.systemSize,
                technicianNotes: house.technicianNotes,
                decisionReason: house.decisionReason,
                electricBills: house.electricBills || [],
                appointmentDate: src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_5__.offsetDateISO(house.appointmentInDays),
                appointmentTime: house.appointmentTime,
                visitDate: house.visitInDays === null || house.visitInDays === undefined ? null : src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_5__.offsetDateISO(house.visitInDays),
                visitMinutes: house.visitMinutes === undefined ? null : house.visitMinutes,
                visitTime: house.visitTime || null,
                pipelineStage: house.pipelineStage,
                files: [],
                isNew: false
            };
        });
        this.slideOptions = {
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            }
        };
        this.sliderOne =
            {
                isBeginningSlide: true,
                isEndSlide: false,
                slidesItems: []
            };
        // Publish what is on the map so the Dashboard summarises these same inquiries.
        src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_5__.InquiryStore.publish(this.addedInquiries, this.installationNotes);
    }
    ngOnInit() {
        this.loadMapsConfig();
    }
    filter() {
        this.pendingFilter = this.statusFilter;
        this.filterOpen = true;
    }
    selectFilterTile(status) {
        this.pendingFilter = this.pendingFilter === status ? 'All' : status;
    }
    applyFilter() {
        this.statusFilter = this.pendingFilter;
        this.filterOpen = false;
        // An address search can leave the map panned away from the pins, so the chosen
        // statuses would appear to do nothing. Fit the view to what the filter leaves on.
        this.fitVisiblePins();
    }
    cancelFilter() {
        this.filterOpen = false;
    }
    toggleMile(mile) {
        const index = this.selectedMiles.indexOf(mile);
        if (index === -1) { this.selectedMiles.push(mile); } else { this.selectedMiles.splice(index, 1); }
    }
    isMileSelected(mile) {
        return this.selectedMiles.indexOf(mile) > -1;
    }
    toggleConcern(concern) {
        const index = this.selectedConcerns.indexOf(concern);
        if (index === -1) { this.selectedConcerns.push(concern); } else { this.selectedConcerns.splice(index, 1); }
    }
    isConcernSelected(concern) {
        return this.selectedConcerns.indexOf(concern) > -1;
    }
    isPinVisible(pinId) {
        if (this.statusFilter !== 'All' && this.pinStatus(pinId) !== this.statusFilter) {
            return false;
        }
        if (this.selectedMiles.length && this.selectedMiles.indexOf(this.pinSpeedBucket(pinId)) === -1) {
            return false;
        }
        if (this.selectedConcerns.length && !this.concernsForPin(pinId).some(concern => this.selectedConcerns.indexOf(concern) > -1)) {
            return false;
        }
        return true;
    }
    pinSpeedBucket(pinId) {
        const note = this.installationNotes[pinId];
        const size = note ? parseFloat(note.systemSize) : NaN;
        if (isNaN(size)) {
            return null;
        }
        if (size <= 3.7) {
            return this.milesOptions[0];
        }
        if (size <= 20) {
            return this.milesOptions[1];
        }
        if (size <= 43) {
            return this.milesOptions[2];
        }
        return this.milesOptions[3];
    }
    concernsForPin(pinId) {
        return this.pinConcerns[pinId] || [];
    }
    activeSpotPositions() {
        // Only pins that really sit on the map count, so the total tracks the visible pins.
        return this.addedInquiries
            .filter(inquiry => this.isPinVisible(inquiry.id))
            .map(inquiry => ({ id: inquiry.id, lat: inquiry.lat, lng: inquiry.lng }));
    }
    activeSpotCount() {
        return this.activeSpotPositions().length;
    }
    mapDistance(a, b) {
        // Great-circle distance in km between two pins, from their real coordinates.
        const radius = 6371;
        const toRad = value => value * Math.PI / 180;
        const dLat = toRad(b.lat - a.lat);
        const dLng = toRad(b.lng - a.lng);
        const h = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
        return 2 * radius * Math.asin(Math.sqrt(h));
    }
    totalSpotDistanceKm() {
        const points = this.activeSpotPositions();
        if (points.length < 2) {
            return 0;
        }
        const remaining = points.slice(1);
        let current = points[0];
        let total = 0;
        while (remaining.length) {
            let nearest = 0;
            for (let i = 1; i < remaining.length; i++) {
                if (this.mapDistance(current, remaining[i]) < this.mapDistance(current, remaining[nearest])) {
                    nearest = i;
                }
            }
            total += this.mapDistance(current, remaining[nearest]);
            current = remaining.splice(nearest, 1)[0];
        }
        return Math.round(total);
    }

    loadMapsConfig() {
        fetch('/api/config')
            .then(response => response.ok ? response.json() : {})
            .then(config => {
                const key = (config && config.googleMapsApiKey) || '';
                if (!key) {
                    return;
                }
                this.googleMapsApiKey = key;
                return this.loadGoogleMapsScript(key);
            })
            .catch(() => { });
    }
    loadGoogleMapsScript(key) {
        if (window.google && window.google.maps) {
            this.initSearchMap();
            return Promise.resolve();
        }
        return new Promise(resolve => {
            const script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + encodeURIComponent(key) + '&v=weekly';
            script.async = true;
            script.onload = () => {
                this.initSearchMap();
                resolve();
            };
            script.onerror = () => resolve();
            document.head.appendChild(script);
        });
    }
    initSearchMap(attempt) {
        if (this.searchMap || !(window.google && window.google.maps)) {
            return;
        }
        const host = document.getElementById('volt_gmap');
        if (!host || !host.getBoundingClientRect().width) {
            // At boot the map screen may not be mounted yet and Ionic keeps the page hidden
            // until it has hydrated, so a map created now would never render. Retry shortly.
            if ((attempt || 0) < 30) {
                setTimeout(() => this.initSearchMap((attempt || 0) + 1), 500);
            }
            return;
        }
        // The live map pans and zooms normally; the pins are re-placed from their coordinates
        // on every view change so they stay on the same ground. Revealed only once tiles really
        // load, so a missing or rejected API key leaves the bundled satellite image in place.
        this.searchMap = new window.google.maps.Map(host, {
            center: this.mapDefaultCenter,
            zoom: this.mapDefaultZoom,
            mapTypeId: 'satellite',
            disableDefaultUI: true,
            draggable: true,
            scrollwheel: true,
            disableDoubleClickZoom: true,
            gestureHandling: 'greedy',
            clickableIcons: false
        });
        this.mapHost = host.closest('.map');
        window.google.maps.event.addListener(this.searchMap, 'bounds_changed', () => this.syncPinsToMap());
        // A tap on the live map arrives both from Google and from the click on the image, and
        // a pan ends in a click too, so taps are de-duplicated and pans are filtered out.
        this.searchMap.addListener('click', event => this.tapMap({ lat: event.latLng.lat(), lng: event.latLng.lng() }));
        this.mapHost.addEventListener('pointerdown', event => this.mapPointerDown(event));
        // The image pin layers are static, so a pin's percentage would resolve against a larger
        // box than the one it is measured in. Anchor each layer to the map's own box.
        this.pinLayers().forEach(layer => {
            layer.style.position = 'absolute';
            layer.style.top = '0';
            layer.style.left = '0';
            layer.style.width = '100%';
            layer.style.height = '100%';
            layer.style.pointerEvents = 'none';
        });
        this.syncPinsToMap();
        const reveal = () => {
            const live = this.mapHost && !host.querySelector('.gm-err-container') && host.getBoundingClientRect().width;
            if (live) {
                this.mapHost.classList.add('map_live');
            }
        };
        window.google.maps.event.addListenerOnce(this.searchMap, 'idle', reveal);
        window.google.maps.event.addListenerOnce(this.searchMap, 'tilesloaded', reveal);
    }
    // --- pin coordinates -----------------------------------------------------
    // Pins are held as lat/lng. Google's world coordinates are used for the projection maths,
    // so no Google object is needed when the live map is not running.
    worldPoint(lat, lng) {
        const s = Math.sin(lat * Math.PI / 180);
        return { x: (lng + 180) / 360, y: 0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI) };
    }
    latLngFromWorldPoint(x, y) {
        const n = Math.PI - 2 * Math.PI * y;
        return { lat: Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))) * 180 / Math.PI, lng: x * 360 - 180 };
    }
    mapBox() {
        const host = this.mapHost || document.getElementById('volt_gmap') || document.querySelector('.map');
        return host ? host.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
    }
    defaultView() {
        return { center: this.mapDefaultCenter, zoom: this.mapDefaultZoom, box: this.mapBox() };
    }
    liveView() {
        if (!this.searchMap) {
            return null;
        }
        const center = this.searchMap.getCenter();
        return { center: { lat: center.lat(), lng: center.lng() }, zoom: this.searchMap.getZoom(), box: this.mapBox() };
    }
    screenPoint(latLng, view) {
        const from = this.worldPoint(view.center.lat, view.center.lng);
        const to = this.worldPoint(latLng.lat, latLng.lng);
        const scale = 256 * Math.pow(2, view.zoom);
        return {
            x: (to.x - from.x) * scale + view.box.width / 2 + view.box.left,
            y: (to.y - from.y) * scale + view.box.height / 2 + view.box.top
        };
    }
    latLngAt(point, view) {
        const from = this.worldPoint(view.center.lat, view.center.lng);
        const scale = 256 * Math.pow(2, view.zoom);
        return this.latLngFromWorldPoint(from.x + (point.x - view.box.left - view.box.width / 2) / scale,
            from.y + (point.y - view.box.top - view.box.height / 2) / scale);
    }
    percentIn(point, rect) {
        return { top: (point.y - rect.top) / rect.height * 100, left: (point.x - rect.left) / rect.width * 100 };
    }
    pinLayers() {
        const layers = [];
        Array.prototype.forEach.call(document.querySelectorAll('.charging_spot'), element => {
            const layer = element.parentElement;
            if (!element.closest('.inquiry_pins') && layers.indexOf(layer) === -1) {
                layers.push(layer);
            }
        });
        return layers;
    }
    pinPercent(latLng, element, view) {
        // A pin's percentage resolves against its own layer, so measure against that.
        const box = element && element.parentElement ? element.parentElement.getBoundingClientRect() : view.box;
        return this.percentIn(this.screenPoint(latLng, view), box);
    }
    offScreen(percent) {
        return percent.top < -3 || percent.top > 103 || percent.left < -3 || percent.left > 103;
    }
    movePin(element, location, view) {
        const percent = this.pinPercent(location, element, view);
        element.style.top = percent.top + '%';
        element.style.left = percent.left + '%';
        element.style.visibility = this.offScreen(percent) ? 'hidden' : 'visible';
        return percent;
    }
    placePins(view) {
        const spotIds = ['spot1', 'spot2', 'spot3', 'spot4', 'spot5', 'spot6', 'spot7'];
        this.pinLayers().forEach(layer => {
            Array.prototype.forEach.call(Array.prototype.filter.call(layer.children, child => child.classList.contains('charging_spot')), (element, index) => {
                const id = spotIds[index];
                if (!id || !this.pinLocations[id]) {
                    return;
                }
                const percent = this.movePin(element, this.pinLocations[id], view);
                this.pinPositions[id].top = percent.top;
                this.pinPositions[id].left = percent.left;
            });
        });
        Array.prototype.forEach.call(document.querySelectorAll('.inquiry_pins > .charging_spot'), (element, index) => {
            const inquiry = this.addedInquiries[index];
            if (!inquiry) {
                return;
            }
            const percent = this.movePin(element, inquiry, view);
            inquiry.top = percent.top;
            inquiry.left = percent.left;
        });
        // The agent layer fills the map box itself, so its percentages are measured against
        // that box rather than against the (zero-height) wrapper the inquiry pins sit in.
        const box = view.box;
        if (!box.width || !box.height) {
            return;
        }
        Array.prototype.forEach.call(document.querySelectorAll('.agent_pins > .agent_pin'), (element, index) => {
            const agent = this.agentPins[index];
            if (!agent) {
                return;
            }
            const percent = this.percentIn(this.screenPoint(agent, view), box);
            element.style.top = percent.top + '%';
            element.style.left = percent.left + '%';
            element.style.visibility = this.offScreen(percent) ? 'hidden' : 'visible';
            agent.top = percent.top;
            agent.left = percent.left;
        });
    }
    // One step of the field-agent motion: walk every agent along its route, then write the new
    // position straight to its pin. The pin is projected through the live map so it stays on
    // its real ground while the map pans/zooms, falling back to the route's own percentages
    // when no Maps key is running. Straight style writes keep this off Angular's change
    // detection, exactly like placePins() above.
    agentTick() {
        const smooth = t => t * t * (3 - 2 * t);
        this.agentPins.forEach(agent => {
            const route = agent.route;
            if (!route || route.length < 2) {
                return;
            }
            agent.progress += this.agentLegStep;
            if (agent.progress >= 1) {
                agent.progress = 0;
                agent.segment = (agent.segment + 1) % route.length;
            }
            const from = route[agent.segment];
            const to = route[(agent.segment + 1) % route.length];
            const t = smooth(agent.progress);
            agent.lat = from.lat + (to.lat - from.lat) * t;
            agent.lng = from.lng + (to.lng - from.lng) * t;
            agent.top = from.top + (to.top - from.top) * t;
            agent.left = from.left + (to.left - from.left) * t;
        });
        const view = this.liveView();
        const live = view && view.box.width && view.box.height;
        Array.prototype.forEach.call(document.querySelectorAll('.agent_pins > .agent_pin'), (element, index) => {
            const agent = this.agentPins[index];
            if (!agent) {
                return;
            }
            const percent = live ? this.percentIn(this.screenPoint(agent, view), view.box) : { top: agent.top, left: agent.left };
            element.style.top = percent.top + '%';
            element.style.left = percent.left + '%';
            element.style.visibility = this.offScreen(percent) ? 'hidden' : 'visible';
            agent.top = percent.top;
            agent.left = percent.left;
        });
    }
    startAgentMotion() {
        if (this.agentTimer) {
            return;
        }
        this.agentTimer = setInterval(() => this.agentTick(), 40);
    }
    stopAgentMotion() {
        if (this.agentTimer) {
            clearInterval(this.agentTimer);
            this.agentTimer = null;
        }
    }
    // The map moves on its own events, outside the app's change detection, so the new
    // positions are written straight to the pin elements as well as to the bound data.
    syncPinsToMap() {
        const view = this.liveView();
        if (view) {
            this.placePins(view);
        }
    }
    // Brings the pins the current filter leaves on show back into sight: after an address
    // search has panned the map elsewhere they sit off-screen, and off-screen pins are hidden.
    fitVisiblePins() {
        if (!this.searchMap) {
            return;
        }
        const points = this.activeSpotPositions();
        if (!points.length) {
            return;
        }
        if (points.length === 1) {
            // A single-point fitBounds would zoom all the way in, so centre it instead.
            this.searchMap.panTo(points[0]);
            this.searchMap.setZoom(this.mapDefaultZoom);
            return;
        }
        const bounds = new window.google.maps.LatLngBounds();
        points.forEach(point => bounds.extend(point));
        this.searchMap.fitBounds(bounds, 60);
    }
    searchAddress(query) {
        const text = (query || '').trim();
        if (!text) {
            return;
        }
        this.initSearchMap();
        if (!this.searchMap) {
            this.searchMessage = 'Address search isn\'t connected yet - add your Google Maps API key to turn it on.';
            return;
        }
        this.geocodeAddress(text, result => this.showFoundAddress(result));
    }
    // Shared by the near-by search bar and the two route fields: geocodes an address and hands
    // the first match to the caller, reporting failures through the search result card.
    geocodeAddress(text, onFound) {
        this.searchMessage = 'Searching for "' + text + '"...';
        let answered = false;
        const timeout = setTimeout(() => {
            if (!answered) {
                this.searchMessage = 'Google Maps did not answer the search - make sure Maps JavaScript API and Geocoding API are enabled for your key.';
            }
        }, 8000);
        new window.google.maps.Geocoder().geocode({ address: text }, (results, status) => {
            answered = true;
            clearTimeout(timeout);
            if (status === 'OK' && results && results.length) {
                onFound(results[0]);
                return;
            }
            this.searchMessage = status === 'ZERO_RESULTS'
                ? 'No address found for "' + text + '"'
                : 'Google Maps refused the search (' + status + ') - check that Maps JavaScript API and Geocoding API are enabled for your key.';
        });
    }
    // The route tab has no live map, so a route point is looked up and confirmed in the
    // search result card instead of being dropped on a map.
    searchRoutePoint(field, query) {
        const text = (query || '').trim();
        if (!text) {
            return;
        }
        if (!(window.google && window.google.maps)) {
            this.searchMessage = 'Address search isn\'t connected yet - add your Google Maps API key to turn it on.';
            return;
        }
        this.geocodeAddress(text, result => {
            this.searchMessage = (field === 'end' ? 'Destination' : 'Starting point') + ': ' + result.formatted_address;
        });
    }
    showFoundAddress(result) {
        const position = result.geometry.location;
        if (this.mapMarker) {
            this.mapMarker.setMap(null);
        }
        this.mapMarker = new window.google.maps.Marker({ position: position, map: this.searchMap });
        this.searchMap.panTo(position);
        this.searchMap.setZoom(16);
        this.searchMessage = result.formatted_address;
    }
    clearSearch() {
        this.searchMessage = '';
        if (this.mapMarker) {
            this.mapMarker.setMap(null);
            this.mapMarker = null;
        }
        if (this.searchMap) {
            this.searchMap.panTo(this.mapDefaultCenter);
            this.searchMap.setZoom(12);
        }
    }
    pinStatus(pinId) {
        if (this.addedInquiries.some(inquiry => inquiry.id === pinId)) {
            const note = this.installationNotes[pinId];
            return note && note.status ? note.status : 'Renter';
        }
        return this.pinColourStatus[pinId];
    }
    pinCountFor(status) {
        return this.addedInquiries.filter(inquiry => this.pinStatus(inquiry.id) === status).length;
    }
    chargeSpotInfo() {
        this.route.navigate(['./charge-spot-info']);
    }
    reset() {
        this.showSpot1 = false;
        this.showSpot2 = false;
        this.showSpot3 = false;
        this.showSpot4 = false;
        this.showSpot5 = false;
        this.showSpot6 = false;
        this.showSpot7 = false;
        this.spotsSliderClass = false;
    }
    showSpotToggle1() {
        this.reset();
        this.showSpot1 = !this.showSpot1;
        this.spotsSliderClass = !this.spotsSliderClass;
        this.selectNote('spot1');
    }
    showSpotToggle2() {
        this.reset();
        this.showSpot2 = !this.showSpot2;
        this.spotsSliderClass = !this.spotsSliderClass;
        this.selectNote('spot2');
    }
    showSpotToggle3() {
        this.reset();
        this.showSpot3 = !this.showSpot3;
        this.spotsSliderClass = !this.spotsSliderClass;
        this.selectNote('spot3');
    }
    showSpotToggle4() {
        this.reset();
        this.showSpot4 = !this.showSpot4;
        this.spotsSliderClass = !this.spotsSliderClass;
        this.selectNote('spot4');
    }
    showSpotToggle5() {
        this.reset();
        this.showSpot5 = !this.showSpot5;
        this.spotsSliderClass = !this.spotsSliderClass;
        this.selectNote('spot5');
    }
    showSpotToggle6() {
        this.reset();
        this.showSpot6 = !this.showSpot6;
        this.spotsSliderClass = !this.spotsSliderClass;
        this.selectNote('spot6');
    }
    showSpotToggle7() {
        this.reset();
        this.showSpot7 = !this.showSpot7;
        this.spotsSliderClass = !this.spotsSliderClass;
        this.selectNote('spot7');
    }
    openSpotsSlider(pinId) {
        this.reset();
        this.selectNote(pinId);
        this.spotsSliderClass = true;
    }
    // Tapping a sales agent's photo pin opens their sheet: exact location, name, title and solar
    // milestones. The location is the pin's own coordinates - reverse geocoded to a street
    // address when the Maps key is available - and the coordinates always show underneath.
    openAgentSheet(agent) {
        this.reset();
        this.agentSheet = agent;
        this.agentCoords = agent.lat.toFixed(5) + ', ' + agent.lng.toFixed(5);
        this.agentAddress = '';
        this.resolveAgentAddress(agent);
    }
    closeAgentSheet() {
        this.agentSheet = null;
    }
    // The contact actions on the sheet. Both are plain tel: / sms: links (schemes Angular
    // keeps), built from the agent's own number with the formatting stripped.
    agentCallHref(agent) {
        return 'tel:' + String(agent.phone || '').replace(/[^+0-9]/g, '');
    }
    agentTextHref(agent) {
        return 'sms:' + String(agent.phone || '').replace(/[^+0-9]/g, '');
    }
    resolveAgentAddress(agent) {
        if (!(window.google && window.google.maps)) {
            return;
        }
        new window.google.maps.Geocoder().geocode({ location: { lat: agent.lat, lng: agent.lng } }, (results, status) => {
            // A sheet closed - or another agent opened - while Google was answering must not
            // fill this one in.
            if (this.agentSheet !== agent || status !== 'OK' || !results || !results.length) {
                return;
            }
            this.agentAddress = results[0].formatted_address;
        });
    }
    selectNote(pinId) {
        this.selectedNote = this.installationNotes[pinId] || null;
        this.selectedNoteId = pinId;
        this.noteExpanded = false;
        this.noteEditing = false;
        // A house that is already checked in keeps its timer running when you come back to it.
        if (this.selectedNote && this.selectedNote.checkInAt) {
            this.checkInTimeLabel = this.timeLabel(this.selectedNote.checkInAt);
            this.startCheckInTimer();
        } else {
            this.stopCheckInTimer();
            this.checkInTimeLabel = '';
            this.checkInElapsed = '';
        }
    }
    toggleNoteDetails() {
        this.noteExpanded = !this.noteExpanded;
    }
    editInquiry() {
        this.noteEditing = true;
        this.noteExpanded = false;
    }
    // Site-visit check-in: press Check in on arrival and Check out on leaving. The elapsed time is
    // stored on the house as visitDate + visitMinutes, which the Dashboard's "Houses visited" card
    // (and its visit sheet) then reads back.
    checkIn() {
        if (!this.selectedNote || this.selectedNote.checkInAt) {
            return;
        }
        this.selectedNote.checkInAt = Date.now();
        this.checkInTimeLabel = this.timeLabel(this.selectedNote.checkInAt);
        this.startCheckInTimer();
        // Stamp where the technician is standing, so the Dashboard's Status overview can show the
        // site visit's own coordinates and not just the house on file.
        this.captureCheckInLocation(this.selectedNote);
        // Publish straight away (not only on checkout) so the Dashboard can show the visit in progress.
        src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_5__.InquiryStore.publish(this.addedInquiries, this.installationNotes);
    }
    // Best-effort device location at check-in. A denied or unsupported browser leaves the
    // coordinates unset, and the Dashboard falls back to the house's own pin.
    captureCheckInLocation(note) {
        if (!navigator.geolocation) {
            return;
        }
        navigator.geolocation.getCurrentPosition(position => {
            if (!note.checkInAt) {
                return;
            }
            note.checkInLat = position.coords.latitude;
            note.checkInLng = position.coords.longitude;
            src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_5__.InquiryStore.publish(this.addedInquiries, this.installationNotes);
        }, () => { }, { enableHighAccuracy: true, timeout: 10000 });
    }
    checkOut() {
        const note = this.selectedNote;
        if (!note || !note.checkInAt) {
            return;
        }
        const arrivedAt = note.checkInAt;
        const minutes = Math.max(1, Math.round((Date.now() - arrivedAt) / 60000));
        note.visitDate = src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_5__.offsetDateISO(0);
        note.visitMinutes = (note.visitMinutes || 0) + minutes;
        note.checkInAt = null;
        this.stopCheckInTimer();
        this.checkInTimeLabel = '';
        this.checkInElapsed = '';
        // Keep the Dashboard's copy of the visits in step with the map.
        src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_5__.InquiryStore.publish(this.addedInquiries, this.installationNotes);
        // ...and log it for the Site visits page. That log is the one visit record that outlives
        // a reload, so the arrival time is captured here before checkInAt is cleared.
        this.recordVisit(arrivedAt, note);
    }
    // Write the finished visit into the persistent site-visit log (localStorage), which the Site
    // visits page reads back: where the visit happened, when the technician checked in, and the
    // notes written while they were on site.
    recordVisit(arrivedAt, note) {
        const inquiry = this.addedInquiries.find(item => item.id === this.selectedNoteId) || {};
        const hasCoords = note.checkInLat !== undefined && note.checkInLat !== null;
        src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_5__.VisitLog.record({
            id: this.selectedNoteId,
            customerName: note.customerName || 'New inquiry',
            locationAddress: note.locationAddress || 'Location not set',
            lat: hasCoords ? note.checkInLat : inquiry.lat,
            lng: hasCoords ? note.checkInLng : inquiry.lng,
            checkInTime: this.timeLabel(arrivedAt),
            visitDate: note.visitDate,
            notes: note.technicianNotes || ''
        });
    }
    timeLabel(timestamp) {
        const date = new Date(timestamp);
        return String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0');
    }
    startCheckInTimer() {
        this.stopCheckInTimer();
        this.updateCheckInElapsed();
        this.checkInTimer = setInterval(() => this.updateCheckInElapsed(), 1000);
    }
    stopCheckInTimer() {
        if (this.checkInTimer) {
            clearInterval(this.checkInTimer);
            this.checkInTimer = null;
        }
    }
    // mm:ss under an hour, h:mm:ss beyond it.
    updateCheckInElapsed() {
        const note = this.selectedNote;
        if (!note || !note.checkInAt) {
            return;
        }
        let total = Math.floor((Date.now() - note.checkInAt) / 1000);
        if (total < 0) {
            total = 0;
        }
        const hours = Math.floor(total / 3600);
        const minutes = Math.floor((total % 3600) / 60);
        const seconds = total % 60;
        const mm = String(minutes).padStart(2, '0');
        const ss = String(seconds).padStart(2, '0');
        this.checkInElapsed = hours ? hours + ':' + mm + ':' + ss : mm + ':' + ss;
    }
    ngOnDestroy() {
        this.stopCheckInTimer();
        this.stopAgentMotion();
    }
    placeInquiry(event) {
        if (event.target.closest('.charging_spot, .map_pin, .my_location, .agent_pin')) {
            return;
        }
        const start = this.mapDragStart;
        if (start && Date.now() - start.time < 1000 && (Math.abs(event.clientX - start.x) > 8 || Math.abs(event.clientY - start.y) > 8)) {
            return;
        }
        this.tapMap(this.latLngAt({ x: event.clientX, y: event.clientY }, this.liveView() || this.defaultView()));
    }
    mapPointerDown(event) {
        this.mapDragStart = { x: event.clientX, y: event.clientY, time: Date.now() };
        // The address field is still focused here - the browser moves the focus on the mousedown
        // that follows - so this records that the tap belongs to a search being typed.
        const active = document.activeElement;
        this.mapDownFromSearch = !!(active && active.closest && active.closest('ion-searchbar'));
    }
    // The live map and the image both report the same tap, so only the first one counts.
    tapMap(latLng) {
        // A tap that starts while an address is being typed in the search bar only dismisses the
        // keyboard it opened: typing a search must never drop a new inquiry pin.
        if (this.mapDownFromSearch) {
            return;
        }
        const now = Date.now();
        if (this.lastMapTapAt && now - this.lastMapTapAt < 400) {
            return;
        }
        this.lastMapTapAt = now;
        this.addInquiry(latLng, this.mapBox());
    }
    addInquiry(latLng, area) {
        const id = 'inquiry' + (++this.inquiryCount);
        this.installationNotes[id] = {
            customerName: '',
            locationAddress: '',
            status: this.statusTiles[0].name,
            statusClass: 'status_' + this.statusTiles[0].colour,
            colour: this.statusTiles[0].colour,
            systemSize: '',
            technicianNotes: '',
            files: [],
            pipelineStage: 'Lead', isNew: true
        };
        const percent = this.percentIn(this.screenPoint(latLng, this.liveView() || this.defaultView()), area);
        this.addedInquiries.push({
            id: id,
            lat: latLng.lat,
            lng: latLng.lng,
            top: percent.top,
            left: percent.left
        });
        this.filterOpen = false;
        this.statusFilter = 'All';
        this.selectedMiles = [];
        this.selectedConcerns = [];
        this.selectNote(id);
        this.spotsSliderClass = true;
    }
    setInquiryStage(stage) {
        if (this.selectedNote) {
            this.selectedNote.pipelineStage = stage;
        }
    }
    setInquiryStatus(status) {
        const tile = this.statusTiles.find(item => item.name === status);
        const colour = tile ? tile.colour : this.statusTiles[0].colour;
        this.selectedNote.status = status;
        this.selectedNote.colour = colour;
        this.selectedNote.statusClass = 'status_' + colour;
    }
    saveInquiry() {
        if (!this.selectedNote) {
            return;
        }
        if (!this.selectedNote.customerName) this.selectedNote.customerName = 'New inquiry';
        if (!this.selectedNote.locationAddress) this.selectedNote.locationAddress = 'Location not set';
        if (!this.selectedNote.systemSize) this.selectedNote.systemSize = 'Not sized yet';
        if (!this.selectedNote.technicianNotes) this.selectedNote.technicianNotes = 'No notes yet';
        this.selectedNote.isNew = false;
        this.noteEditing = false;
        this.noteExpanded = false;
        // Keep the Dashboard's copy of the inquiries in step with the map.
        src_app_inquiry_store__WEBPACK_IMPORTED_MODULE_5__.InquiryStore.publish(this.addedInquiries, this.installationNotes);
    }
    onInquiryFiles(event) {
        const files = event.target.files || [];
        this.selectedNote.files = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const entry = { name: file.name, url: '' };
            this.selectedNote.files.push(entry);
            fetch('/api/uploads?name=' + encodeURIComponent(file.name), {
                method: 'POST',
                headers: { 'Content-Type': file.type || 'application/octet-stream' },
                body: file
            })
                .then((res) => res.json())
                .then((data) => { entry.url = data.url; })
                .catch(() => { });
        }
    }
    closedSpotsSlider() {
        this.spotsSliderClass = !this.spotsSliderClass;
    }
    addTofavorite() {
        this.spotsSliderClass = !this.spotsSliderClass;
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HomePage.propDecorators = {
    slideWithNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['slideWithNav', { static: false },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  background: var(--white_gradient);\n}\nion-header ion-toolbar ion-title .title-inner {\n  min-height: 70px;\n}\nion-header ion-toolbar ion-title .title-inner .app_logo {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n}\nion-header ion-toolbar ion-title .title-inner .app_logo img {\n  margin: auto;\n  width: 90px;\n}\nion-header ion-toolbar ion-title .title-inner .icon {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\nion-header ion-toolbar ion-title .title-inner .icon img {\n  width: 18px;\n}\nion-header .search_box {\n  width: calc(100% - 40px);\n  margin: 0 auto;\n  background: var(--bg-white);\n  border-radius: 7px;\n  padding: 12px 17px;\n  box-shadow: 0 15px 10px -5px rgba(0, 0, 0, 0.1);\n}\nion-header .search_box ion-icon {\n  color: var(--text-light2);\n  font-size: 1.3rem;\n  min-width: 30px;\n  opacity: 0.8;\n}\nion-header .search_box ion-searchbar {\n  padding: 0;\n  font-weight: 500;\n  --color: var(--text-black);\n  --placeholder-color: var(--text-light2);\n  --placeholder-font-weight: 500;\n  --placeholder-opacity: .8;\n  --background: var(--transparent) !important;\n  position: relative;\n}\nion-header .add_destination {\n  width: calc(100% - 40px);\n  margin: 0 auto;\n  background: var(--bg-white);\n  border-radius: 7px;\n  box-shadow: 0 15px 10px -5px rgba(0, 0, 0, 0.1);\n  padding: 0px 17px;\n  position: relative;\n}\nion-header .add_destination::after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  width: calc(100% - 48px);\n  height: 1px;\n  background: var(--border-line-color);\n}\nion-header .add_destination .dotts {\n  position: absolute;\n  top: 47px;\n  left: 23px;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nion-header .add_destination .dotts span {\n  display: block;\n  width: 10px;\n  height: 6px;\n  position: relative;\n}\nion-header .add_destination .dotts span::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 3px;\n  height: 3px;\n  background: var(--text-light2);\n  border-radius: 50%;\n}\nion-header .add_destination .search_item {\n  padding: 12px 0;\n}\nion-header .add_destination .search_item ion-icon {\n  color: var(--text-light2);\n  font-size: 1.3rem;\n  min-width: 30px;\n  opacity: 0.8;\n  padding: 0 2px;\n}\nion-header .add_destination .search_item ion-searchbar {\n  padding: 0;\n  font-size: 1rem;\n  font-weight: 500;\n  --color: var(--text-black);\n  --placeholder-color: var(--text-light2);\n  --placeholder-font-weight: 500;\n  --placeholder-opacity: .8;\n  --background: var(--transparent) !important;\n  position: relative;\n}\nion-header .add_destination .search_item ion-searchbar.searchbar-has-focus ion-icon, ion-header .add_destination .search_item ion-searchbar.searchbar-has-value ion-icon {\n  opacity: 1;\n}\nion-header .add_destination .search_item ion-searchbar.searchbar-has-focus ion-icon.zmdi-pin, ion-header .add_destination .search_item ion-searchbar.searchbar-has-value ion-icon.zmdi-pin {\n  color: var(--primary);\n}\nion-header .add_destination .search_item ion-searchbar.searchbar-has-focus ion-icon.zmdi-navigation, ion-header .add_destination .search_item ion-searchbar.searchbar-has-value ion-icon.zmdi-navigation {\n  color: var(--yellow-color);\n}\n.map {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.my_location {\n  position: absolute;\n  z-index: 9999;\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n}\n.my_location ion-icon {\n  color: var(--white);\n  display: block;\n  margin: auto;\n  text-align: center;\n  font-size: 1.4rem;\n  position: relative;\n  z-index: 99;\n  background: var(--primary);\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  border-radius: 50%;\n}\n.my_location .my_location_photo {\n  display: block;\n  margin: auto;\n  position: relative;\n  z-index: 99;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  object-fit: cover;\n  background: var(--primary);\n  border: 3px solid var(--white);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);\n}\n.my_location .animation_box {\n  position: absolute;\n  width: 110px;\n  height: 110px;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  border-radius: 50%;\n  margin: auto;\n  transition: all 0.3s;\n  background: var(--white);\n  z-index: -99;\n}\n.my_location .animation_box.a {\n  width: 110px;\n  height: 110px;\n  opacity: 0.7;\n  animation: a 1.5s both infinite;\n}\n.my_location .animation_box.b {\n  width: 70px;\n  height: 70px;\n  animation: b 2s both infinite;\n  opacity: 0.8;\n}\n@keyframes a {\n  from {\n    height: 0%;\n    width: 0;\n  }\n  to {\n    height: 110px;\n    width: 110px;\n  }\n}\n@keyframes b {\n  from {\n    height: 0%;\n    width: 0;\n  }\n  to {\n    width: 110px;\n    height: 110px;\n  }\n}\n.agent_pins {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  /* Decorative layer: it fills the map, so it must never capture touches - doing so blocked panning, pinching and pin taps. */\n  pointer-events: none;\n}\n.agent_pin {\n  position: absolute;\n  z-index: 9998;\n  width: 44px;\n  height: 44px;\n  margin: -22px 0 0 -22px;\n  /* The agent layer ignores touches (it covers the whole map), so each photo pin re-enables them. */\n  pointer-events: auto;\n  cursor: pointer;\n}\n.agent_pin img {\n  display: block;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  object-fit: cover;\n  background: var(--primary);\n  border: 3px solid var(--white);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);\n}\n.agent_pin .animation_box {\n  position: absolute;\n  width: 96px;\n  height: 96px;\n  left: 50%;\n  top: 50%;\n  border-radius: 50%;\n  margin: 0;\n  transform: translate(-50%, -50%);\n  transition: all 0.3s;\n  background: var(--white);\n  z-index: -99;\n}\n.agent_pin .animation_box.a {\n  width: 96px;\n  height: 96px;\n  opacity: 0.7;\n  animation: agent_a 1.5s both infinite;\n}\n.agent_pin .animation_box.b {\n  width: 61px;\n  height: 61px;\n  animation: agent_b 2s both infinite;\n  opacity: 0.8;\n}\n@keyframes agent_a {\n  from {\n    height: 0%;\n    width: 0;\n  }\n  to {\n    height: 96px;\n    width: 96px;\n  }\n}\n@keyframes agent_b {\n  from {\n    height: 0%;\n    width: 0;\n  }\n  to {\n    width: 96px;\n    height: 96px;\n  }\n}\n.charging_spot {\n  position: absolute;\n  pointer-events: auto;\n}\n.charging_spot img {\n  width: 45px;\n}\n.charging_spot img.before {\n  display: block;\n}\n.charging_spot img.after {\n  display: none;\n}\n.charging_spot .tool_teep {\n  position: absolute;\n  background: var(--bg-dark);\n  top: -43px;\n  left: -30px;\n  padding: 9px 14px;\n  text-align: center;\n  border-radius: 7px;\n  min-width: 103px;\n  display: none;\n}\n.charging_spot .tool_teep::after {\n  content: \"\";\n  position: absolute;\n  bottom: -4px;\n  left: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  background: var(--bg-dark);\n  margin: 0 auto;\n  transform: rotate(45deg);\n}\n.charging_spot .tool_teep h3 {\n  margin: 0;\n  color: var(--white);\n  white-space: nowrap;\n  font-size: 0.65rem;\n  font-weight: 400;\n  text-align: center;\n  position: relative;\n  z-index: 999;\n}\n.charging_spot.active img.before {\n  display: none;\n}\n.charging_spot.active img.after {\n  display: block;\n}\n.charging_spot.active .tool_teep {\n  display: block;\n}\n.map_pin {\n  position: absolute;\n}\n.map_pin img {\n  width: 45px;\n}\n.map_pin.blue img, .inquiry_pins .charging_spot.blue img, .status_chip.blue img {\n  filter: hue-rotate(62deg) saturate(0.8) brightness(1.05);\n}\n.map_pin.green img, .inquiry_pins .charging_spot.green img, .status_chip.green img {\n  filter: hue-rotate(9deg) saturate(0.85) brightness(1.05);\n}\n.map_pin.red img, .inquiry_pins .charging_spot.red img, .status_chip.red img {\n  filter: hue-rotate(-13deg) saturate(0.85) brightness(1.1);\n}\n.map_pin.yellow img, .inquiry_pins .charging_spot.yellow img, .status_chip.yellow img {\n  filter: grayscale(1);\n}\n.map_pin.gray img, .inquiry_pins .charging_spot.gray img, .status_chip.gray img {\n  filter: grayscale(1);\n}\n.map_pin.violet img, .inquiry_pins .charging_spot.violet img, .status_chip.violet img {\n  filter: grayscale(1);\n}\n.pin_legend {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 10px 14px;\n  position: relative;\n}\n.pin_legend .legend_item {\n  display: flex;\n  align-items: center;\n}\n.pin_legend .map_pin {\n  position: static;\n}\n.pin_legend .map_pin img {\n  width: 15px;\n}\n.pin_legend .legend_item span {\n  font-size: 0.62rem;\n  font-weight: 600;\n  color: var(--text-light2);\n  text-transform: none;\n  margin: 0 4px 0 5px;\n}\n.pin_legend .legend_item b {\n  font-size: 0.7rem;\n  color: var(--text-black);\n}\n.pin_hidden {\n  display: none !important;\n}\n.filter_panel {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--bg-white);\n  z-index: 100000;\n  overflow-y: auto;\n}\n.filter_panel .filter_panel_head {\n  position: relative;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 70px;\n  padding: 0 20px;\n  box-shadow: 0 8px 12px -10px rgba(0, 0, 0, 0.35);\n}\n.filter_panel .filter_panel_head ion-icon {\n  font-size: 1.4rem;\n  color: var(--text-black);\n}\n.filter_panel .filter_panel_head span {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: fit-content;\n  margin: 0 auto;\n  font-size: 1.1rem;\n  font-weight: 500;\n  color: var(--text-black);\n}\n.filter_panel .filter_panel_head strong {\n  color: var(--primary);\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: none;\n  letter-spacing: 1.5px;\n}\n.filter_panel .filter_panel_body {\n  padding: 25px 20px;\n}\n.filter_panel .filter_summary {\n  background: var(--primary);\n  border-radius: 12px;\n  padding: 18px 20px;\n  margin-bottom: 25px;\n}\n.filter_panel .filter_summary h3 {\n  margin: 0;\n  color: var(--white);\n  font-size: 1.6rem;\n  font-weight: 600;\n}\n.map .map_google {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  pointer-events: none;\n}\n.map.map_live .map_img {\n  display: none;\n}\n.map.map_live .map_google {\n  opacity: 1;\n  pointer-events: auto;\n}\n.search_result_box {\n  width: calc(100% - 40px);\n  margin: 10px auto 0;\n  background: var(--bg-white);\n  border-radius: 7px;\n  padding: 11px 14px;\n  align-items: center;\n  box-shadow: 0 10px 8px -5px rgba(0, 0, 0, 0.1);\n}\n.search_result_box ion-icon {\n  color: var(--primary);\n  font-size: 1.1rem;\n  min-width: 26px;\n}\n.search_result_box span {\n  flex: 1;\n  font-size: 0.72rem;\n  font-weight: 500;\n  color: var(--text-black);\n  line-height: 1.4;\n}\n.search_result_box .zmdi-close {\n  color: var(--text-light2);\n  opacity: 0.8;\n}\n.filter_panel .filter_summary span {\n  display: block;\n  margin-top: 3px;\n  color: var(--white);\n  opacity: 0.85;\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: none;\n  letter-spacing: 1px;\n}\n.filter_panel .filter_panel_body h2 {\n  margin: 0 0 16px;\n  font-size: 1.05rem;\n  font-weight: 500;\n  color: var(--text-black);\n}\n.filter_panel .filter_panel_body h2:not(:first-child) {\n  padding-top: 28px;\n}\n.filter_panel .status_tiles {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -6px;\n}\n.filter_panel .status_tile {\n  position: relative;\n  width: calc(33.333% - 12px);\n  margin: 0 6px 12px;\n  min-height: 108px;\n  border-radius: 14px;\n  padding: 12px;\n  overflow: hidden;\n  transition: all 0.3s;\n}\n.filter_panel .status_tile span {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #333333;\n}\n.filter_panel .status_tile.green span {\n  color: #ffffff;\n}\n.filter_panel .status_tile .tile_pin {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n}\n.filter_panel .status_tile .tile_pin img {\n  width: 26px;\n}\n.filter_panel .status_tile.blue {\n  background: #b7e06b;\n}\n.filter_panel .status_tile.green {\n  background: #FF7110;\n}\n.filter_panel .status_tile.red {\n  background: #e87869;\n}\n.filter_panel .status_tile.yellow {\n  background: #f5f5f5;\n}\n.filter_panel .status_tile.gray {\n  background: #f5f5f5;\n}\n.filter_panel .status_tile.violet {\n  background: #f5f5f5;\n}\n.filter_panel .status_tile.selected {\n  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.45);\n}\n.filter_panel .miles_list {\n  padding-bottom: 5px;\n}\n.filter_panel .mile_item {\n  align-items: center;\n  padding: 10px 0;\n}\n.filter_panel .check_box {\n  position: relative;\n  width: 18px;\n  height: 18px;\n  border: 1.5px solid #808080;\n  border-radius: 3px;\n  margin-right: 16px;\n  box-sizing: border-box;\n  transition: all 0.3s;\n}\n.filter_panel .check_box.checked {\n  background: var(--primary);\n  border-color: var(--primary);\n}\n.filter_panel .check_box ion-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: fit-content;\n  height: fit-content;\n  font-size: 0.8rem;\n  color: var(--white);\n}\n.filter_panel .mile_item h3 {\n  margin: 0;\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--text-black);\n}\n.filter_panel .concerns_row {\n  display: flex;\n  margin: 0 -5px;\n}\n.filter_panel .concern_item {\n  width: 25%;\n  padding: 0 5px;\n  box-sizing: border-box;\n  text-align: center;\n}\n.filter_panel .concern_icon {\n  position: relative;\n  width: 46px;\n  margin: 0 auto;\n}\n.filter_panel .concern_icon > ion-icon {\n  font-size: 1.7rem;\n  color: var(--text-black);\n}\n.filter_panel .concern_icon .check_box {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  width: 15px;\n  height: 15px;\n  margin: 0;\n}\n.filter_panel .concern_icon .check_box ion-icon {\n  font-size: 0.6rem;\n}\n.filter_panel .concern_item h3 {\n  margin: 0;\n  padding-top: 9px;\n  font-size: 0.75rem;\n  font-weight: 400;\n  color: var(--text-light2);\n}\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 20px 0;\n}\nion-list ion-item {\n  padding: 0;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  background: var(--bg-white);\n  --background: var(--transparent);\n  transition: all 0.5s;\n  width: calc(100% - 50px);\n  margin: 0 auto;\n  margin-bottom: 20px;\n  border-radius: 10px;\n  box-shadow: 0 15px 12px -8px rgba(0, 0, 0, 0.1);\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item .item_inner .item_img {\n  width: 100%;\n  height: 125px;\n}\nion-list ion-item .item_inner .item_img::after {\n  content: \"\";\n  position: absolute;\n  bottom: -5px;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 40px);\n  background: var(--white_gradient);\n  transform: rotate(180deg);\n}\nion-list ion-item .item_inner .item_img .spot_status {\n  background: #00000070;\n  color: var(--white);\n  font-size: 0.7rem;\n  min-width: 65px;\n  text-align: center;\n  font-weight: 500;\n  padding: 6px 4px;\n  border-radius: 0 0 15px 0;\n}\nion-list ion-item .item_inner .item_img ion-icon {\n  color: var(--red-color);\n  min-width: 30px;\n  font-size: 1.15rem;\n  position: relative;\n  top: 7px;\n}\nion-list ion-item .item_inner .itme_text {\n  padding: 0px 15px 15px 15px;\n}\nion-list ion-item .item_inner .itme_text h2 {\n  margin: 0;\n  color: var(--text-dark);\n  font-weight: 600;\n  font-size: 1.2rem;\n  padding-bottom: 3px;\n}\nion-list ion-item .item_inner .itme_text h3 {\n  margin: 0;\n  color: var(--text-light2);\n  font-size: 0.8rem;\n}\nion-list ion-item .item_inner .itme_text .facility {\n  padding-top: 15px;\n}\nion-list ion-item .item_inner .itme_text .facility ion-row {\n  margin: 0 -5px;\n}\nion-list ion-item .item_inner .itme_text .facility ion-row ion-col {\n  padding: 0 5px;\n}\nion-list ion-item .item_inner .itme_text .facility ion-row ion-col h3 {\n  padding-bottom: 7px;\n}\nion-list ion-item .item_inner .itme_text .facility ion-row ion-col h2 {\n  font-size: 0.95rem;\n  padding: 0;\n}\nion-list ion-item .item_inner .itme_text .facility ion-row ion-col h2 img {\n  width: 18px;\n  margin-right: 13px;\n}\nion-list ion-item .item_inner .itme_text .facility ion-row ion-col h2 ion-icon {\n  background: var(--primary);\n  text-align: center;\n  color: var(--white);\n  font-size: 1.3rem;\n  min-width: 38px;\n  min-height: 38px;\n  line-height: 38px;\n  border-radius: 6px;\n}\nion-footer {\n  padding: 35px 20px 20px 20px;\n  transition: all 0.5s;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\nion-footer::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: calc(100% + 100px);\n  background: var(--white_gradient);\n  transform: rotate(180deg);\n  display: block !important;\n  top: unset;\n}\nion-footer ion-segment {\n  border: none !important;\n  background: none !important;\n  width: 100%;\n  margin: 0;\n  position: relative;\n  top: 5px;\n}\nion-footer ion-segment ion-segment-button {\n  background: none !important;\n  position: relative;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--text-light2);\n  text-transform: none !important;\n  --color-checked: var(--primary) !important;\n  --background-checked: var(--transparent) !important;\n  --ripple-color: var(--transparent) !important;\n  --border-width: 0 !important;\n  --border-radius: 0 !important;\n  box-shadow: none !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  letter-spacing: 1.5px;\n}\nion-footer ion-segment ion-segment-button::after {\n  content: \"\";\n  position: absolute;\n  bottom: 4px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 0;\n  height: 5px;\n  border-radius: 3px;\n  background: var(--primary);\n  transition: all 0.4s;\n}\nion-footer ion-segment ion-segment-button ion-label {\n  opacity: 1;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n}\nion-footer ion-segment ion-segment-button ion-label ion-icon {\n  font-size: 1.1rem;\n  min-width: 25px;\n}\nion-footer ion-segment ion-segment-button.segment-button-checked {\n  color: var(--text-dark);\n}\nion-footer ion-segment ion-segment-button.segment-button-checked::after {\n  width: 25px;\n}\nion-footer ion-segment ion-segment-button.segment-button-checked ion-label {\n  color: var(--secondary) !important;\n}\nion-footer.active {\n  bottom: -100%;\n}\n.spots_slider {\n  position: fixed;\n  bottom: -100%;\n  left: 0;\n  width: 100%;\n  z-index: 9999;\n  transition: all 0.5s;\n}\n.spots_slider .closedSpotsSlider {\n  position: absolute;\n  right: 2px;\n  z-index: 99;\n  top: -18px;\n  background: #4a49497d;\n  text-align: center;\n  min-width: 30px;\n  height: 30px;\n  border-radius: 30px;\n  -webkit-backdrop-filter: blur(14px);\n          backdrop-filter: blur(14px);\n}\n.spots_slider .closedSpotsSlider ion-icon {\n  color: var(--white);\n  font-size: 1.5rem;\n  line-height: 29px;\n}\n.spots_slider ion-list {\n  margin: 0;\n  padding: 0;\n}\n.spots_slider ion-list ion-item {\n  width: calc(100% - 20px);\n  margin-bottom: 15px;\n}\n.install_notes {\n  width: calc(100% - 20px);\n  margin: 0 auto 15px auto;\n  background: var(--bg-white);\n  border-radius: 10px;\n  box-shadow: 0 15px 12px -8px rgba(0, 0, 0, 0.1);\n  padding: 15px;\n}\n.install_notes h2 {\n  margin: 0 0 6px 0;\n  color: var(--text-dark);\n  font-weight: 600;\n  font-size: 1rem;\n}\n.install_notes p {\n  margin: 0 0 4px 0;\n  color: var(--text-light2);\n  font-size: 0.8rem;\n  line-height: 1.45;\n}\n.install_notes p:last-child {\n  margin-bottom: 0;\n}\n.install_notes p strong {\n  color: var(--text-dark);\n  font-weight: 600;\n}\n.install_status {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.status_planned {\n  background: #eceff1;\n  color: #546e7a;\n}\n.status_in_progress {\n  background: #fff3e0;\n  color: #FF7110;\n}\n.status_completed {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status_blue {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.status_green {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status_red {\n  background: #ffebee;\n  color: #c62828;\n}\n.status_yellow {\n  background: #fffde7;\n  color: #f9a825;\n}\n.status_gray {\n  background: #eceff1;\n  color: #546e7a;\n}\n.status_violet {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.status_chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.status_chip {\n  display: flex;\n  align-items: center;\n  background: var(--white);\n  border: 1px solid var(--border-line-color);\n  border-radius: 20px;\n  padding: 6px 12px;\n}\n.status_chip img {\n  width: 14px;\n}\n.status_chip span {\n  font-size: 0.68rem;\n  font-weight: 600;\n  color: var(--text-light2);\n  text-transform: none;\n  margin-left: 5px;\n}\n.status_chip.selected {\n  border-color: var(--primary);\n  box-shadow: 0 4px 10px -6px var(--primary);\n}\n.status_chip.selected span {\n  color: var(--text-black);\n}\n.spots_slider.active {\n  bottom: 0px;\n}\n.inquiry_pins {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.note_input {\n  width: 100%;\n  border: 1px solid #dfe3e6;\n  border-radius: 7px;\n  padding: 7px 9px;\n  margin-top: 3px;\n  font-size: 0.8rem;\n  color: var(--text-dark);\n  background: var(--bg-white);\n}\n.save_inquiry_btn {\n  width: 100%;\n  margin-top: 10px;\n  background: #FF7110;\n  color: var(--white);\n  border: none;\n  border-radius: 7px;\n  padding: 10px 0;\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n.note_actions {\n  display: flex;\n  gap: 8px;\n  margin-top: 10px;\n}\n.note_actions button {\n  flex: 1;\n  background: transparent;\n  border: 1px solid var(--primary);\n  color: var(--primary);\n  border-radius: 7px;\n  padding: 9px 0;\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n.note_actions .note_edit_btn {\n  background: #FF7110;\n  border-color: #FF7110;\n  color: var(--white);\n}\n.install_notes.note_card {\n  padding: 0;\n  overflow: hidden;\n  border-radius: 16px;\n}\n.install_notes .note_hero {\n  position: relative;\n  width: 100%;\n  height: 155px;\n  overflow: hidden;\n}\n.install_notes .note_hero_img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.install_notes .note_hero::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 55%;\n  background: var(--white_gradient);\n  transform: rotate(180deg);\n  pointer-events: none;\n}\n.install_notes .note_status_badge {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  background: #000000;\n  border-radius: 20px;\n  padding: 5px 12px 5px 5px;\n  color: #ffffff;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.install_notes .note_badge_icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  margin-right: 6px;\n  border-radius: 50%;\n  background: #FF7110;\n}\n.install_notes .note_badge_icon ion-icon {\n  color: #ffffff;\n  font-size: 0.72rem;\n}\n.install_notes .note_heart {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  z-index: 2;\n  color: #ffffff;\n  font-size: 1.1rem;\n}\n.install_notes .note_body {\n  padding: 14px 16px 16px 16px;\n}\n.install_notes .note_name {\n  margin: 0 0 2px 0;\n  color: var(--text-dark);\n  font-size: 1.15rem !important;\n  font-weight: 700;\n}\n.install_notes .note_addr {\n  margin: 0 0 12px 0;\n  color: var(--text-light2);\n  font-size: 0.78rem !important;\n}\n.install_notes .note_details_btn {\n  background: #FF7110;\n  border-color: #FF7110;\n  color: #ffffff;\n  border-radius: 12px;\n  padding: 12px 0;\n  font-size: 0.85rem;\n}\n.install_notes .note_edit_btn {\n  background: #f1f3f5;\n  border-color: #f1f3f5;\n  color: var(--text-dark);\n  border-radius: 12px;\n}\n\n.checkin_block {\n  margin-top: 11px;\n  padding-top: 11px;\n  border-top: 1px solid var(--border-line-color);\n}\n.checkin_block p {\n  margin: 0 0 4px 0;\n}\n.checkin_btn, .checkout_btn {\n  width: 100%;\n  border: none;\n  border-radius: 7px;\n  padding: 10px 0;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--white);\n}\n.checkin_btn {\n  background: #FF7110;\n}\n.checkout_btn {\n  background: #2e7d32;\n}\n.checkin_elapsed {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--primary);\n}\n.checkin_hint {\n  color: var(--text-light2);\n  font-size: 0.72rem;\n}\n.file_chips {\n  margin-top: 8px;\n}\n.file_chip {\n  display: inline-block;\n  background: #f1f3f5;\n  color: var(--text-dark);\n  border-radius: 12px;\n  padding: 3px 10px;\n  margin: 0 4px 4px 0;\n  font-size: 0.72rem;\n}\n.file_chip a {\n  color: inherit;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vUGx1Z1BWJTIwLSUyMEFwcCUyMC9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtBQ0NKO0FERVk7RUFDSSxnQkFBQTtBQ0FoQjtBRENnQjtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ3BCO0FEQW9CO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNFeEI7QURDZ0I7RUFDSSwyQkFBQTtFQUFBLHNCQUFBO0FDQ3BCO0FEQW9CO0VBQ0ksV0FBQTtBQ0V4QjtBRElJO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7QUNGUjtBREdRO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRFo7QURHUTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQ0RaO0FES0k7RUFDSSx3QkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSFI7QURJUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBQ0ZaO0FESVE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQ0ZaO0FER1k7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RoQjtBREVnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUNBcEI7QURJUTtFQUNJLGVBQUE7QUNGWjtBREdZO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0RoQjtBREdZO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQ0RoQjtBRElvQjtFQUNJLFVBQUE7QUNGeEI7QURHd0I7RUFDSSxxQkFBQTtBQ0Q1QjtBREd3QjtFQUNJLDBCQUFBO0FDRDVCO0FEVUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1BKO0FEVUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDUEo7QURRSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNOUjtBRFFJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQ05SO0FET1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSwrQkFBQTtBQ0xaO0FET1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDZCQUFBO0VBQ0EsWUFBQTtBQ0xaO0FEVUE7RUFDSTtJQUNJLFVBQUE7SUFDQSxRQUFBO0VDUE47RURTRTtJQUNJLGFBQUE7SUFDQSxZQUFBO0VDUE47QUFDRjtBRFVBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsUUFBQTtFQ1JOO0VEVUU7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ1JOO0FBQ0Y7QURXQTtFQUNJLGtCQUFBO0FDVEo7QURVSTtFQUNJLFdBQUE7QUNSUjtBRFNRO0VBQ0ksY0FBQTtBQ1BaO0FEU1E7RUFDSSxhQUFBO0FDUFo7QURVSTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ1JSO0FEU1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FDUFo7QURTUTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDUFo7QURZWTtFQUNJLGFBQUE7QUNWaEI7QURZWTtFQUNJLGNBQUE7QUNWaEI7QURhUTtFQUNJLGNBQUE7QUNYWjtBRGdCQTtFQUNJLHlDQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNiSjtBRGNJO0VBQ0ksVUFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQ1pSO0FEYVE7RUFDSSxXQUFBO0FDWFo7QURZWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDVmhCO0FEV2dCO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FDVHBCO0FEV2dCO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDVHBCO0FEV2dCO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNUcEI7QURZWTtFQUNJLDJCQUFBO0FDVmhCO0FEV2dCO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDVHBCO0FEV2dCO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNUcEI7QURXZ0I7RUFDSSxpQkFBQTtBQ1RwQjtBRFVvQjtFQUNJLGNBQUE7QUNSeEI7QURTd0I7RUFDSSxjQUFBO0FDUDVCO0FEUTRCO0VBQ0ksbUJBQUE7QUNOaEM7QURRNEI7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNOaEM7QURPZ0M7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNMcEM7QURPZ0M7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNMcEM7QURnQkE7RUFDSSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNiSjtBRGNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ1pSO0FEY0k7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNaUjtBRGFRO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSxtREFBQTtFQUNBLDZDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDWFo7QURZWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQ1ZoQjtBRFlZO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0FDVmhCO0FEV2dCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDVHBCO0FEWVk7RUFDSSx1QkFBQTtBQ1ZoQjtBRFdnQjtFQUNJLFdBQUE7QUNUcEI7QURXZ0I7RUFDSSxrQ0FBQTtBQ1RwQjtBRGNJO0VBQ0ksYUFBQTtBQ1pSO0FEZ0JBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ2JKO0FEbUJJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNqQlI7QURrQlE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNoQlo7QURtQkk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ2pCUjtBRGtCUTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7QUNoQlo7QURtQkk7RUFDSSxXQUFBO0FDakJSIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGVfZ3JhZGllbnQpO1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgaW9uLXRpdGxlIHtcbiAgICAgICAgICAgIC50aXRsZS1pbm5lciB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNzBweDtcbiAgICAgICAgICAgICAgICAuYXBwX2xvZ28ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2VhcmNoX2JveCB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXdoaXRlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDE3cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTVweCAxMHB4IC01cHggcmdiKDAgMCAwIC8gMTAlKTtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAuODtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAvLyB0b3A6IDFweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYWRkX2Rlc3RpbmF0aW9uIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmctd2hpdGUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTVweCAxMHB4IC01cHggcmdiKDAgMCAwIC8gMTAlKTtcbiAgICAgICAgcGFkZGluZzogMHB4IDE3cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDA7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDhweCk7XG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1saW5lLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAuZG90dHMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA0N3B4O1xuICAgICAgICAgICAgbGVmdDogMjNweDtcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGV4dC1saWdodDIpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2hfaXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tc2VhcmNoYmFyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgICAgICAgICAgICAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAuODtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAmLnNlYXJjaGJhci1oYXMtZm9jdXMsXG4gICAgICAgICAgICAgICAgJi5zZWFyY2hiYXItaGFzLXZhbHVlIHtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICYuem1kaS1waW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICYuem1kaS1uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1hcCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm15X2xvY2F0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIC5hbmltYXRpb25fYm94IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgei1pbmRleDogLTk5O1xuICAgICAgICAmLmEge1xuICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGEgMS41cyBib3RoIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBhIDEuNXMgYm90aCBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgICAmLmIge1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogYiAycyBib3RoIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBiIDJzIGJvdGggaW5maW5pdGU7XG4gICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBhIHtcbiAgICBmcm9tIHtcbiAgICAgICAgaGVpZ2h0OiAwJTtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBiIHtcbiAgICBmcm9tIHtcbiAgICAgICAgaGVpZ2h0OiAwJTtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgIH1cbn1cblxuLmNoYXJnaW5nX3Nwb3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgJi5iZWZvcmUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgJi5hZnRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC50b29sX3RlZXAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWRhcmspO1xuICAgICAgICB0b3A6IC00M3B4O1xuICAgICAgICBsZWZ0OiAtMzBweDtcbiAgICAgICAgcGFkZGluZzogOXB4IDE0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICBtaW4td2lkdGg6IDEwM3B4O1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAtNHB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1kYXJrKTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICB9XG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjY1cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICAmLmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuYWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC50b29sX3RlZXAge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy13aGl0ZSk7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxNXB4IDEycHggLThweCByZ2IoMCAwIDAgLyAxMCUpO1xuICAgICAgICAuaXRlbV9pbm5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC5pdGVtX2ltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGVfZ3JhZGllbnQpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3BvdF9zdGF0dXMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwNzA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNjVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggNHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDdweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaXRtZV90ZXh0IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTVweCAxNXB4IDE1cHg7XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmFjaWxpdHkge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgLTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC45NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAzNXB4IDIwcHggMjBweCAyMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlICsgMTAwcHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZV9ncmFkaWVudCk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogdW5zZXQ7XG4gICAgfVxuICAgIGlvbi1zZWdtZW50IHtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDRweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJvdHRvbTogLTEwMCU7XG4gICAgfVxufVxuXG4uc3BvdHNfc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAtMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICAvLyBpb24tc2xpZGVzIHtcbiAgICAvLyAgICAgaW9uLXNsaWRlIHtcbiAgICAvLyAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KSAhaW1wb3J0YW50O1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC5jbG9zZWRTcG90c1NsaWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDJweDtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIHRvcDogLTE4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0YTQ5NDk3ZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE0cHgpO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjlweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgIH1cbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGVfZ3JhZGllbnQpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlLWlubmVyIHtcbiAgbWluLWhlaWdodDogNzBweDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZS1pbm5lciAuYXBwX2xvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZS1pbm5lciAuYXBwX2xvZ28gaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTIwcHg7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSAudGl0bGUtaW5uZXIgLmljb24ge1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlLWlubmVyIC5pY29uIGltZyB7XG4gIHdpZHRoOiAxOHB4O1xufVxuaW9uLWhlYWRlciAuc2VhcmNoX2JveCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nOiAxMnB4IDE3cHg7XG4gIGJveC1zaGFkb3c6IDAgMTVweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuaW9uLWhlYWRlciAuc2VhcmNoX2JveCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG9wYWNpdHk6IDAuODtcbn1cbmlvbi1oZWFkZXIgLnNlYXJjaF9ib3ggaW9uLXNlYXJjaGJhciB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC0tY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDUwMDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAuODtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWhlYWRlciAuYWRkX2Rlc3RpbmF0aW9uIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctd2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJveC1zaGFkb3c6IDAgMTVweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiAwcHggMTdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWhlYWRlciAuYWRkX2Rlc3RpbmF0aW9uOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG8gMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLWxpbmUtY29sb3IpO1xufVxuaW9uLWhlYWRlciAuYWRkX2Rlc3RpbmF0aW9uIC5kb3R0cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0N3B4O1xuICBsZWZ0OiAyM3B4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5pb24taGVhZGVyIC5hZGRfZGVzdGluYXRpb24gLmRvdHRzIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24taGVhZGVyIC5hZGRfZGVzdGluYXRpb24gLmRvdHRzIHNwYW46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWxpZ2h0Mik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmlvbi1oZWFkZXIgLmFkZF9kZXN0aW5hdGlvbiAuc2VhcmNoX2l0ZW0ge1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG5pb24taGVhZGVyIC5hZGRfZGVzdGluYXRpb24gLnNlYXJjaF9pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIG1pbi13aWR0aDogMzBweDtcbiAgb3BhY2l0eTogMC44O1xuICBwYWRkaW5nOiAwIDJweDtcbn1cbmlvbi1oZWFkZXIgLmFkZF9kZXN0aW5hdGlvbiAuc2VhcmNoX2l0ZW0gaW9uLXNlYXJjaGJhciB7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLS1jb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNTAwO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IC44O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24taGVhZGVyIC5hZGRfZGVzdGluYXRpb24gLnNlYXJjaF9pdGVtIGlvbi1zZWFyY2hiYXIuc2VhcmNoYmFyLWhhcy1mb2N1cyBpb24taWNvbiwgaW9uLWhlYWRlciAuYWRkX2Rlc3RpbmF0aW9uIC5zZWFyY2hfaXRlbSBpb24tc2VhcmNoYmFyLnNlYXJjaGJhci1oYXMtdmFsdWUgaW9uLWljb24ge1xuICBvcGFjaXR5OiAxO1xufVxuaW9uLWhlYWRlciAuYWRkX2Rlc3RpbmF0aW9uIC5zZWFyY2hfaXRlbSBpb24tc2VhcmNoYmFyLnNlYXJjaGJhci1oYXMtZm9jdXMgaW9uLWljb24uem1kaS1waW4sIGlvbi1oZWFkZXIgLmFkZF9kZXN0aW5hdGlvbiAuc2VhcmNoX2l0ZW0gaW9uLXNlYXJjaGJhci5zZWFyY2hiYXItaGFzLXZhbHVlIGlvbi1pY29uLnptZGktcGluIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuaW9uLWhlYWRlciAuYWRkX2Rlc3RpbmF0aW9uIC5zZWFyY2hfaXRlbSBpb24tc2VhcmNoYmFyLnNlYXJjaGJhci1oYXMtZm9jdXMgaW9uLWljb24uem1kaS1uYXZpZ2F0aW9uLCBpb24taGVhZGVyIC5hZGRfZGVzdGluYXRpb24gLnNlYXJjaF9pdGVtIGlvbi1zZWFyY2hiYXIuc2VhcmNoYmFyLWhhcy12YWx1ZSBpb24taWNvbi56bWRpLW5hdmlnYXRpb24ge1xuICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcbn1cblxuLm1hcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubXlfbG9jYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm15X2xvY2F0aW9uIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubXlfbG9jYXRpb24gLmFuaW1hdGlvbl9ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgei1pbmRleDogLTk5O1xufVxuLm15X2xvY2F0aW9uIC5hbmltYXRpb25fYm94LmEge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTEwcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgLXdlYmtpdC1hbmltYXRpb246IGEgMS41cyBib3RoIGluZmluaXRlO1xuICBhbmltYXRpb246IGEgMS41cyBib3RoIGluZmluaXRlO1xufVxuLm15X2xvY2F0aW9uIC5hbmltYXRpb25fYm94LmIge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogYiAycyBib3RoIGluZmluaXRlO1xuICBhbmltYXRpb246IGIgMnMgYm90aCBpbmZpbml0ZTtcbiAgb3BhY2l0eTogMC44O1xufVxuXG5Aa2V5ZnJhbWVzIGEge1xuICBmcm9tIHtcbiAgICBoZWlnaHQ6IDAlO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIHRvIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIHdpZHRoOiAxMTBweDtcbiAgfVxufVxuQGtleWZyYW1lcyBiIHtcbiAgZnJvbSB7XG4gICAgaGVpZ2h0OiAwJTtcbiAgICB3aWR0aDogMDtcbiAgfVxuICB0byB7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogMTEwcHg7XG4gIH1cbn1cbi5jaGFyZ2luZ19zcG90IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNoYXJnaW5nX3Nwb3QgaW1nIHtcbiAgd2lkdGg6IDQ1cHg7XG59XG4uY2hhcmdpbmdfc3BvdCBpbWcuYmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY2hhcmdpbmdfc3BvdCBpbWcuYWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNoYXJnaW5nX3Nwb3QgLnRvb2xfdGVlcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctZGFyayk7XG4gIHRvcDogLTQzcHg7XG4gIGxlZnQ6IC0zMHB4O1xuICBwYWRkaW5nOiA5cHggMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG1pbi13aWR0aDogMTAzcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY2hhcmdpbmdfc3BvdCAudG9vbF90ZWVwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctZGFyayk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG4uY2hhcmdpbmdfc3BvdCAudG9vbF90ZWVwIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDAuNjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTk7XG59XG4uY2hhcmdpbmdfc3BvdC5hY3RpdmUgaW1nLmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY2hhcmdpbmdfc3BvdC5hY3RpdmUgaW1nLmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY2hhcmdpbmdfc3BvdC5hY3RpdmUgLnRvb2xfdGVlcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMDtcbiAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy13aGl0ZSk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAxNXB4IDEycHggLThweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTI1cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9pbWc6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC01cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZV9ncmFkaWVudCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9pbWcgLnNwb3Rfc3RhdHVzIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDcwO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgbWluLXdpZHRoOiA2NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDZweCA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDA7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9pbWcgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA3cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRtZV90ZXh0IHtcbiAgcGFkZGluZzogMHB4IDE1cHggMTVweCAxNXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0bWVfdGV4dCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0bWVfdGV4dCBoMyB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQyKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRtZV90ZXh0IC5mYWNpbGl0eSB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0bWVfdGV4dCAuZmFjaWxpdHkgaW9uLXJvdyB7XG4gIG1hcmdpbjogMCAtNXB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0bWVfdGV4dCAuZmFjaWxpdHkgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRtZV90ZXh0IC5mYWNpbGl0eSBpb24tcm93IGlvbi1jb2wgaDMge1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0bWVfdGV4dCAuZmFjaWxpdHkgaW9uLXJvdyBpb24tY29sIGgyIHtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0bWVfdGV4dCAuZmFjaWxpdHkgaW9uLXJvdyBpb24tY29sIGgyIGltZyB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRtZV90ZXh0IC5mYWNpbGl0eSBpb24tcm93IGlvbi1jb2wgaDIgaW9uLWljb24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWluLXdpZHRoOiAzOHB4O1xuICBtaW4taGVpZ2h0OiAzOHB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgcGFkZGluZzogMzVweCAyMHB4IDIwcHggMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1mb290ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlICsgMTAwcHgpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZV9ncmFkaWVudCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIHRvcDogdW5zZXQ7XG59XG5pb24tZm9vdGVyIGlvbi1zZWdtZW50IHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbn1cbmlvbi1mb290ZXIgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodDIpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuICAtLXJpcHBsZS1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbn1cbmlvbi1mb290ZXIgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA0cHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbmlvbi1mb290ZXIgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIGlvbi1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5pb24tZm9vdGVyIGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24tbGFiZWwgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbWluLXdpZHRoOiAyNXB4O1xufVxuaW9uLWZvb3RlciBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xufVxuaW9uLWZvb3RlciBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZDo6YWZ0ZXIge1xuICB3aWR0aDogMjVweDtcbn1cbmlvbi1mb290ZXIgaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbn1cbmlvbi1mb290ZXIuYWN0aXZlIHtcbiAgYm90dG9tOiAtMTAwJTtcbn1cblxuLnNwb3RzX3NsaWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAtMTAwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLnNwb3RzX3NsaWRlciAuY2xvc2VkU3BvdHNTbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAycHg7XG4gIHotaW5kZXg6IDk5O1xuICB0b3A6IC0xOHB4O1xuICBiYWNrZ3JvdW5kOiAjNGE0OTQ5N2Q7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNHB4KTtcbn1cbi5zcG90c19zbGlkZXIgLmNsb3NlZFNwb3RzU2xpZGVyIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xufVxuLnNwb3RzX3NsaWRlciBpb24tbGlzdCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5zcG90c19zbGlkZXIgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uc3BvdHNfc2xpZGVyLmFjdGl2ZSB7XG4gIGJvdHRvbTogMHB4O1xufSJdfQ== */.stage_chips {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n}\n.stage_chip {\n  padding: 6px 12px;\n  margin: 0 8px 8px 0;\n  border: 1px solid var(--border-line-color);\n  border-radius: 20px;\n  color: var(--text-light2);\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n.stage_chip.selected {\n  border-color: #FF7110;\n  background: #FF7110;\n  color: var(--white);\n}\n";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"bg_transparent\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            <div class=\"title-inner d-flex\">\n                <div class=\"app_logo\">\n                    <img src=\"assets/images/logo_vault360.png\" class=\"lightThemeImg\">\n                    <img src=\"assets/images/logo_vault360dark.png\" class=\"darkThemeImg\">\n                </div>\n\n<div class=\"icon end\" (click)=\"filter()\">\n                    <img src=\"assets/images/ic_filter.png\" class=\"lightThemeImg\">\n                    <img src=\"assets/images/ic_filter_wt.png\" class=\"darkThemeImg\">\n                </div>\n            </div>\n        </ion-title>\n    </ion-toolbar>\n\n    <div class=\"search_box d-flex animate__animated animate__zoomIn\" *ngIf=\"segment == 'near_by'\">\n        <ion-icon class=\"zmdi zmdi-pin\"></ion-icon>\n        <ion-searchbar mode=\"md\" class=\"\" searchIcon=\"hide\" clear-icon=\"string\" placeholder=\"Search an address or prospect\" (keyup.enter)=\"searchAddress($event.target.value)\" (ionChange)=\"searchAddress($event.detail.value)\"></ion-searchbar>\n    </div>\n    <div class=\"search_result_box d-flex\" *ngIf=\"searchMessage\">\n        <ion-icon class=\"zmdi zmdi-pin\"></ion-icon>\n        <span>{{searchMessage}}</span>\n        <ion-icon class=\"zmdi zmdi-close\" (click)=\"clearSearch()\"></ion-icon>\n    </div>\n    <div class=\"filter_panel\" *ngIf=\"filterOpen\">\n        <div class=\"filter_panel_head d-flex\">\n            <ion-icon class=\"zmdi zmdi-arrow-left\" (click)=\"cancelFilter()\"></ion-icon>\n            <span>Filters</span>\n            <strong (click)=\"applyFilter()\">Apply</strong>\n        </div>\n        <div class=\"filter_panel_body\">\n            <div class=\"filter_summary\">\n                <h3>{{totalSpotDistanceKm()}} km</h3>\n                <span>Total travel across {{activeSpotCount()}} active spots</span>\n            </div>\n            <h2>Status</h2>\n            <div class=\"status_tiles\">\n                <div class=\"status_tile\" *ngFor=\"let tile of statusTiles\" [ngClass]=\"tile.colour\" [class.selected]=\"pendingFilter === tile.name\" (click)=\"selectFilterTile(tile.name)\">\n                    <span>{{tile.name}}</span>\n                    <div class=\"tile_pin\" [ngClass]=\"['map_pin', tile.colour]\"><img src=\"assets/images/pinorange.png\"></div>\n                </div>\n            </div>\n            <h2>System size</h2>\n            <div class=\"miles_list\">\n                <div class=\"mile_item d-flex\" *ngFor=\"let mile of milesOptions\" (click)=\"toggleMile(mile)\">\n                    <div class=\"check_box\" [ngClass]=\"isMileSelected(mile) ? 'checked' : ''\">\n                        <ion-icon class=\"zmdi zmdi-check\" *ngIf=\"isMileSelected(mile)\"></ion-icon>\n                    </div>\n                    <h3>{{mile}}</h3>\n                </div>\n            </div>\n            <h2>Potential Concerns</h2>\n            <div class=\"concerns_row\">\n                <div class=\"concern_item\" *ngFor=\"let concern of concernsOptions\" (click)=\"toggleConcern(concern.name)\">\n                    <div class=\"concern_icon\">\n                        <ion-icon [ngClass]=\"'zmdi ' + concern.icon\"></ion-icon>\n                        <div class=\"check_box\" [ngClass]=\"isConcernSelected(concern.name) ? 'checked' : ''\">\n                            <ion-icon class=\"zmdi zmdi-check\" *ngIf=\"isConcernSelected(concern.name)\"></ion-icon>\n                        </div>\n                    </div>\n                    <h3>{{concern.name}}</h3>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"add_destination animate__animated animate__zoomIn\" *ngIf=\"segment == 'evroute'\">\n        <div class=\"search_item d-flex\">\n            <ion-searchbar mode=\"md\" class=\"\" searchIcon=\"hide\" clear-icon=\"string\" placeholder=\"{{'enter_strting_point' | translate}}\" (keyup.enter)=\"searchRoutePoint('start', $event.target.value)\">\n                <ion-icon class=\"zmdi zmdi-pin\"></ion-icon>\n            </ion-searchbar>\n            <!-- <ion-icon class=\"zmdi zmdi-gps-dot ion-text-end end\"></ion-icon> -->\n        </div>\n        <div class=\"dotts\">\n            <span></span>\n            <span></span>\n            <span></span>\n        </div>\n        <div class=\"search_item d-flex\">\n            <ion-searchbar mode=\"md\" class=\"\" searchIcon=\"hide\" clear-icon=\"string\" placeholder=\"{{'enter_destion_point' | translate}}\" (keyup.enter)=\"searchRoutePoint('end', $event.target.value)\" value=\"\">\n                <ion-icon class=\"zmdi zmdi-navigation\"></ion-icon>\n            </ion-searchbar>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content class=\"bg_color\" [ngSwitch]=\"segment\" fullscreen>\n    <!-- NearBy section start -->\n    <div class=\"\" *ngSwitchCase=\"'near_by'\">\n        <div class=\"map center_img\" (click)=\"placeInquiry($event)\">\n            <img src=\"https://media.base44.com/images/public/6ac30101bafb286df39acc86/a2467db72_generated_5142b236.png\" class=\"map_img crop_img lightThemeImg\">\n            <img src=\"assets/images/map-dark.png\" class=\"map_img crop_img darkThemeImg\">\n            <div class=\"map_google\" id=\"volt_gmap\"></div>\n            <div class=\"inquiry_pins\">\n                <div class=\"charging_spot animate__animated animate__zoomIn\" *ngFor=\"let inquiry of addedInquiries\" [style.top.%]=\"inquiry.top\" [style.left.%]=\"inquiry.left\" [class.pin_hidden]=\"!isPinVisible(inquiry.id)\" [ngClass]=\"installationNotes[inquiry.id].colour\" (click)=\"openSpotsSlider(inquiry.id)\">\n                    <img src=\"assets/images/pinorange.png\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"\">\n                                                                                    \n            <div class=\"my_location animate__animated animate__zoomIn\" style=\"top:70%; left: 40%;\">\n                <div class=\"animation_box a\"></div>\n                <div class=\"animation_box b\"></div>\n                <img src=\"assets/images/profile.png\" class=\"my_location_photo\" alt=\"My profile photo\">\n            </div>\n        </div>\n    </div>\n    <!-- NearBy section end -->\n\n    <!-- Evroute section start -->\n    <div class=\"\" *ngSwitchCase=\"'evroute'\">\n        <div class=\"map center_img\">\n            <img src=\"https://media.base44.com/images/public/6ac30101bafb286df39acc86/a2467db72_generated_5142b236.png\" class=\"map_img crop_img lightThemeImg\">\n            <img src=\"assets/images/map-dark.png\" class=\"map_img crop_img darkThemeImg\">\n        </div>\n\n        <div class=\"\">\n                                                                                    \n            <div class=\"my_location animate__animated animate__zoomIn\" style=\"top:70%; left: 40%;\">\n                <div class=\"animation_box a\"></div>\n                <div class=\"animation_box b\"></div>\n                <img src=\"assets/images/profile.png\" class=\"my_location_photo\" alt=\"My profile photo\">\n            </div>\n        </div>\n    </div>\n    <!-- Evroute section end -->\n\n    <!-- Favorite section start -->\n    <ion-list lines=\"none\" *ngSwitchCase=\"'favorite'\">\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"chargeSpotInfo()\">\n            <div class=\"item_inner\">\n                <div class=\"item_img center_img\">\n                    <img src=\"assets/images/spot_img/img_7.jpg\" class=\"crop_img\">\n                    <div class=\"d-flex\" style=\"position: relative; z-index: 99; align-items: flex-start;\">\n                        <div class=\"spot_status\">\n                            {{'open' | translate}}\n                        </div>\n                        <ion-icon class=\"zmdi zmdi-favorite end\"></ion-icon>\n                    </div>\n                </div>\n                <div class=\"itme_text\">\n                    <br>\n                    <h2>Cincinnati, OH</h2>\n                    <h3>Call enter Park, Business Streetm Downtown</h3>\n                   \n\n                    <div class=\"facility\">\n                        <ion-row>\n                            <ion-col size=\"4\">\n                                <h3>{{'connections' | translate}}</h3>\n                                <h2>8 Points</h2>\n                            </ion-col>\n                            <ion-col size=\"5\">\n                                <h3>{{'amenities' | translate}}</h3>\n                                <h2 class=\"d-flex\">\n                                    <ion-icon class=\"zmdi zmdi-battery\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-car\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-chart\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-balance\"></ion-icon>\n                                </h2>\n                            </ion-col>\n                            <ion-col size=\"3\">\n                                <h2 class=\"d-flex\">\n                                    <ion-icon class=\"zmdi zmdi-navigation end\" style=\"background-color: #FF7110;\"></ion-icon>\n                                </h2>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </div>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"chargeSpotInfo()\">\n            <div class=\"item_inner\">\n                <div class=\"item_img center_img\">\n                    <img src=\"assets/images/spot_img/img_6.jpg\" class=\"crop_img\">\n                    <div class=\"d-flex\" style=\"position: relative; z-index: 99; align-items: flex-start;\">\n                        <div class=\"spot_status\">\n                            {{'closed' | translate}}\n                        </div>\n                        <ion-icon class=\"zmdi zmdi-favorite-outline end\" ></ion-icon>\n                    </div>\n                </div>\n                <div class=\"itme_text\">\n                    <br>\n                    <h2>Cleveland, OH</h2>\n                    <h3>Call enter Park, Business Streetm Downtown</h3>\n\n                    <div class=\"facility\">\n                        <ion-row>\n                            <ion-col size=\"4\">\n                                <h3>{{'connections' | translate}}</h3>\n                                <h2>12 Points</h2>\n                            </ion-col>\n                            <ion-col size=\"5\">\n                                <h3>{{'amenities' | translate}}</h3>\n                                <h2 class=\"d-flex\">\n                                    <ion-icon class=\"zmdi zmdi-battery\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-car\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-chart\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-balance\"></ion-icon>\n                                </h2>\n                            </ion-col>\n                            <ion-col size=\"3\">\n                                <h2 class=\"d-flex\">\n                                    <ion-icon class=\"zmdi zmdi-navigation end\" style=\"background-color: #FF7110;\"></ion-icon>\n                                </h2>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </div>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"chargeSpotInfo()\">\n            <div class=\"item_inner\">\n                <div class=\"item_img center_img\">\n                    <img src=\"assets/images/spot_img/img_8.jpg\" class=\"crop_img\">\n                    <div class=\"d-flex\" style=\"position: relative; z-index: 99; align-items: flex-start;\">\n                        <div class=\"spot_status\">\n                            {{'open' | translate}}\n                        </div>\n                        <ion-icon class=\"zmdi zmdi-favorite-outline end\"></ion-icon>\n                    </div>\n                </div>\n                <div class=\"itme_text\">\n                    <br>\n                    <h2>Columbus, OH</h2>\n                    <h3>A23, World Trade Park, Downtown</h3>\n\n                    <div class=\"facility\">\n                        <ion-row>\n                            <ion-col size=\"4\">\n                                <h3>{{'connections' | translate}}</h3>\n                                <h2>10 Points</h2>\n                            </ion-col>\n                            <ion-col size=\"5\">\n                                <h3>{{'amenities' | translate}}</h3>\n                                <h2 class=\"d-flex\">\n                                    <ion-icon class=\"zmdi zmdi-battery\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-car\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-chart\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-balance\"></ion-icon>\n                                </h2>\n                            </ion-col>\n                            <ion-col size=\"3\">\n                                <h2 class=\"d-flex\">\n                                    <ion-icon class=\"zmdi zmdi-navigation end\" style=\"background-color: #FF7110;\"></ion-icon>\n                                </h2>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </div>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"chargeSpotInfo()\">\n            <div class=\"item_inner\">\n                <div class=\"item_img center_img\">\n                    <img src=\"assets/images/spot_img/img_9.jpg\" class=\"crop_img\">\n                    <div class=\"d-flex\" style=\"position: relative; z-index: 99; align-items: flex-start;\">\n                        <div class=\"spot_status\">\n                            {{'open' | translate}}\n                        </div>\n                        <ion-icon class=\"zmdi zmdi-favorite end\"></ion-icon>\n                    </div>\n                </div>\n                <div class=\"itme_text\">\n                    <br>\n                    <h2>Florida</h2>\n                    <h3>A23, World Trade Park, Downtown</h3>\n\n                    <div class=\"facility\">\n                        <ion-row>\n                            <ion-col size=\"4\">\n                                <h3>{{'connections' | translate}}</h3>\n                                <h2>4 Points</h2>\n                            </ion-col>\n                            <ion-col size=\"5\">\n                                <h3>{{'amenities' | translate}}</h3>\n                                <h2 class=\"d-flex\">\n                                    <ion-icon class=\"zmdi zmdi-battery\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-car\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-chart\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-balance\"></ion-icon>\n                                </h2>\n                            </ion-col>\n                            <ion-col size=\"3\">\n                                <h2 class=\"d-flex\">\n                                    <ion-icon class=\"zmdi zmdi-navigation end\" style=\"background-color: #FF7110;\"></ion-icon>\n                                </h2>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </div>\n        </ion-item>\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"chargeSpotInfo()\">\n            <div class=\"item_inner\">\n                <div class=\"item_img center_img\">\n                    <img src=\"assets/images/spot_img/img_10.jpg\" class=\"crop_img\">\n                    <div class=\"d-flex\" style=\"position: relative; z-index: 99; align-items: flex-start;\">\n                        <div class=\"spot_status\">\n                            {{'open' | translate}}\n                        </div>\n                        <ion-icon class=\"zmdi zmdi-favorite-outline end\"></ion-icon>\n                    </div>\n                </div>\n                <div class=\"itme_text\">\n                    <br>\n                    <h2>North Carolina</h2>\n                    <h3>A23, World Trade Park, Downtown</h3>\n\n                    <div class=\"facility\">\n                        <ion-row>\n                            <ion-col size=\"4\">\n                                <h3>{{'connections' | translate}}</h3>\n                                <h2>8 Points</h2>\n                            </ion-col>\n                            <ion-col size=\"5\">\n                                <h3>{{'amenities' | translate}}</h3>\n                                <h2 class=\"d-flex\">\n                                    <ion-icon class=\"zmdi zmdi-battery\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-car\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-chart\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-balance\"></ion-icon>\n                                </h2>\n                            </ion-col>\n                            <ion-col size=\"3\">\n                                <h2 class=\"d-flex\">\n                                    <ion-icon class=\"zmdi zmdi-navigation end\" style=\"background-color: #FF7110;\"></ion-icon>\n                                </h2>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </div>\n        </ion-item>\n\n        <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"chargeSpotInfo()\">\n            <div class=\"item_inner\">\n                <div class=\"item_img center_img\">\n                    <img src=\"assets/images/spot_img/img_11.jpg\" class=\"crop_img\">\n                    <div class=\"d-flex\" style=\"position: relative; z-index: 99; align-items: flex-start;\">\n                        <div class=\"spot_status\">\n                            {{'closed' | translate}}\n                        </div>\n                        <ion-icon class=\"zmdi zmdi-favorite end\"></ion-icon>\n                    </div>\n                </div>\n                <div class=\"itme_text\">\n                    <h2>Massachusetts</h2>\n                    <h3>Call enter Park, Business Streetm Downtown</h3>\n\n                    <div class=\"facility\">\n                        <ion-row>\n                            <ion-col size=\"4\">\n                                <h3>{{'connections' | translate}}</h3>\n                                <h2>12 Points</h2>\n                            </ion-col>\n                            <ion-col size=\"5\">\n                                <h3>{{'amenities' | translate}}</h3>\n                                <h2 class=\"d-flex\">\n                                    <ion-icon class=\"zmdi zmdi-battery\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-car\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-chart\"></ion-icon>\n                                    <ion-icon class=\"zmdi zmdi-balance\"></ion-icon>\n                                </h2>\n                            </ion-col>\n                            <ion-col size=\"3\">\n                                <h2 class=\"d-flex\">\n                                    <ion-icon class=\"zmdi zmdi-navigation end\" style=\"background-color: #FF7110;\"></ion-icon>\n                                </h2>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </div>\n        </ion-item>\n\n    </ion-list>\n    <!-- Favorite section end -->\n</ion-content>\n\n<ion-footer class=\"ion-no-border\" [ngClass]=\"spotsSliderClass ? 'active' : '' \">\n    <div class=\"pin_legend\">\n        <div class=\"legend_item\">\n            <div class=\"map_pin blue\"><img src=\"assets/images/pinorange.png\"></div>\n            <span>In Progress</span><b>{{pinCountFor('In Progress')}}</b>\n        </div>\n        <div class=\"legend_item\">\n            <div class=\"map_pin green\"><img src=\"assets/images/pinorange.png\"></div>\n            <span>Installed</span><b>{{pinCountFor('Installed')}}</b>\n        </div>\n        <div class=\"legend_item\">\n            <div class=\"map_pin red\"><img src=\"assets/images/pinorange.png\"></div>\n            <span>Cancelled</span><b>{{pinCountFor('Cancelled')}}</b>\n        </div>\n        <div class=\"legend_item\">\n            <div class=\"map_pin yellow\"><img src=\"assets/images/pinorange.png\"></div>\n            <span>New</span><b>{{pinCountFor('New')}}</b>\n        </div>\n        <div class=\"legend_item\">\n            <div class=\"map_pin gray\"><img src=\"assets/images/pinorange.png\"></div>\n            <span>Not Home</span><b>{{pinCountFor('Not Home')}}</b>\n        </div>\n        <div class=\"legend_item\">\n            <div class=\"map_pin violet\"><img src=\"assets/images/pinorange.png\"></div>\n            <span>Renter</span><b>{{pinCountFor('Renter')}}</b>\n        </div>\n    </div>\n</ion-footer>\n\n<div class=\"spots_slider\" [ngClass]=\"spotsSliderClass ? 'active' : '' \">\n    <div class=\"closedSpotsSlider\" (click)=\"closedSpotsSlider()\">\n        <ion-icon class=\"zmdi zmdi-close\"></ion-icon>\n    </div>\n    <div class=\"install_notes\" [ngClass]=\"(!selectedNote.isNew && !noteEditing) ? 'note_card' : ''\" *ngIf=\"selectedNote\">\n        <h2 *ngIf=\"selectedNote.isNew || noteEditing\">{{selectedNote.isNew ? 'New Installation Inquiry' : 'Solar Installation Notes'}}</h2>\n        <ng-container *ngIf=\"!selectedNote.isNew && !noteEditing\">\n            <div class=\"note_hero\">\n                <img class=\"note_hero_img\" src=\"assets/images/spot_img/img_7.jpg\">\n                <div class=\"note_status_badge\">\n                    <span class=\"note_badge_icon\"><ion-icon class=\"zmdi zmdi-flash\"></ion-icon></span>\n                    <span>{{selectedNote.status}}</span>\n                </div>\n                <ion-icon class=\"zmdi zmdi-favorite-outline note_heart\"></ion-icon>\n            </div>\n            <div class=\"note_body\">\n                <h2 class=\"note_name\">{{selectedNote.customerName}}</h2>\n                <p class=\"note_addr\">{{selectedNote.locationAddress}}</p>\n                <ng-container *ngIf=\"noteExpanded\">\n                    <p *ngIf=\"selectedNote.pipelineStage\"><strong>Sales stage</strong> {{selectedNote.pipelineStage}}</p>\n                    <p><strong>System size</strong> {{selectedNote.systemSize}}</p>\n                    <p><strong>Technician notes</strong> {{selectedNote.technicianNotes}}</p>\n                    <p *ngIf=\"selectedNote.files && selectedNote.files.length\"><strong>Files</strong></p>\n                    <div class=\"file_chips\" *ngIf=\"selectedNote.files && selectedNote.files.length\">\n                        <span class=\"file_chip\" *ngFor=\"let file of selectedNote.files\"><a [href]=\"file.url\" target=\"_blank\">{{file.name}}</a></span>\n                    </div>\n                </ng-container>\n                <div class=\"note_actions\">\n                    <button class=\"note_details_btn\" (click)=\"toggleNoteDetails()\">{{noteExpanded ? 'Hide details' : 'View details'}}</button>\n                    <button class=\"note_edit_btn\" (click)=\"editInquiry()\">Edit</button>\n                </div>\n                <div class=\"checkin_block\" *ngIf=\"!selectedNote.checkInAt\">\n                    <button class=\"checkin_btn\" (click)=\"checkIn()\">Check in</button>\n                    <p class=\"checkin_hint\" *ngIf=\"selectedNote.visitMinutes\">Last visit: {{selectedNote.visitMinutes}} min</p>\n                </div>\n                <div class=\"checkin_block\" *ngIf=\"selectedNote.checkInAt\">\n                    <p><strong>Checked in</strong> {{checkInTimeLabel}}</p>\n                    <p class=\"checkin_elapsed\">{{checkInElapsed}}</p>\n                    <button class=\"checkout_btn\" (click)=\"checkOut()\">Check out</button>\n                </div>\n            </div>\n        </ng-container>\n        <ng-container *ngIf=\"selectedNote.isNew || noteEditing\">\n            <p><strong>Customer</strong><br>\n                <input class=\"note_input\" placeholder=\"Customer name\" [value]=\"selectedNote.customerName\" (input)=\"selectedNote.customerName = $event.target.value\">\n            </p>\n            <p><strong>Status</strong></p>\n            <div class=\"status_chips\">\n                <div class=\"status_chip\" *ngFor=\"let tile of statusTiles\" [ngClass]=\"[tile.colour, selectedNote.status === tile.name ? 'selected' : '']\" (click)=\"setInquiryStatus(tile.name)\">\n                    <img src=\"assets/images/pinorange.png\">\n                    <span>{{tile.name}}</span>\n                </div>\n            </div>\n            \n            <p><strong>Sales stage</strong></p>\n            <div class=\"stage_chips\">\n                <div class=\"stage_chip\" *ngFor=\"let stage of pipelineStages\" [ngClass]=\"selectedNote.pipelineStage === stage.name ? \'selected\' : \'\'\" (click)=\"setInquiryStage(stage.name)\">{{stage.name}}</div>\n            </div>\n            <p><strong>Location</strong><br>\n                <input class=\"note_input\" placeholder=\"Address\" [value]=\"selectedNote.locationAddress\" (input)=\"selectedNote.locationAddress = $event.target.value\">\n            </p>\n            <p><strong>System size</strong><br>\n                <input class=\"note_input\" placeholder=\"e.g. 5.0 kW - 13 panels\" [value]=\"selectedNote.systemSize\" (input)=\"selectedNote.systemSize = $event.target.value\">\n            </p>\n            <p><strong>Technician notes</strong><br>\n                <input class=\"note_input\" placeholder=\"Site details\" [value]=\"selectedNote.technicianNotes\" (input)=\"selectedNote.technicianNotes = $event.target.value\">\n            </p>\n            <p><strong>Files</strong><br>\n                <input class=\"note_input\" type=\"file\" multiple accept=\"image/*,application/pdf\" (change)=\"onInquiryFiles($event)\">\n            </p>\n            <div class=\"file_chips\" *ngIf=\"selectedNote.files && selectedNote.files.length\">\n                <span class=\"file_chip\" *ngFor=\"let file of selectedNote.files\"><a [href]=\"file.url\" target=\"_blank\">{{file.name}}</a></span>\n            </div>\n            <button class=\"save_inquiry_btn\" (click)=\"saveInquiry()\">Save inquiry</button>\n        </ng-container>\n    </div>\n    <ion-list lines=\"none\" *ngIf=\"!selectedNote\">\n        <ion-slides pager=\"false\">\n            <ion-slide>\n                <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"chargeSpotInfo()\">\n                    <div class=\"item_inner\">\n                        <div class=\"item_img center_img\">\n                            <img src=\"assets/images/spot_img/img_7.jpg\" class=\"crop_img\">\n                            <div class=\"d-flex\" style=\"position: relative; z-index: 99; align-items: flex-start;\">\n                                <div class=\"spot_status\">\n                                    {{'open' | translate}}\n                                </div>\n                                <ion-icon class=\"zmdi zmdi-favorite-outline end\" style=\"color: var(--white); padding:2px;\"></ion-icon>\n                            </div>\n                        </div>\n                        <div class=\"itme_text\">\n                            <br>\n                            <h2>Solar360 - Cincinnati</h2>\n                            <h3>West Chester </h3>\n\n                            <div class=\"facility\">\n                                <ion-row>\n                                    <ion-col size=\"4\">\n                                        <h3>Site visits</h3>\n                                        <h2>7 Completed</h2>\n                                    </ion-col>\n                                    <ion-col size=\"5\">\n                                        <h3>{{'amenities' | translate}}</h3>\n                                        <h2 class=\"d-flex\">\n                                            <ion-icon class=\"zmdi zmdi-battery\"></ion-icon>\n                                            <ion-icon class=\"zmdi zmdi-car\"></ion-icon>\n                                            <ion-icon class=\"zmdi zmdi-chart\"></ion-icon>\n                                            <ion-icon class=\"zmdi zmdi-balance\"></ion-icon>\n                                        </h2>\n                                    </ion-col>\n                                    <ion-col size=\"3\">\n                                        <h2 class=\"d-flex\">\n                                            <ion-icon class=\"zmdi zmdi-navigation end\"></ion-icon>\n                                        </h2>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </div>\n                    </div>\n                </ion-item>\n            </ion-slide>\n            <ion-slide>\n                <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"chargeSpotInfo()\">\n                    <div class=\"item_inner\">\n                        <div class=\"item_img center_img\">\n                            <img src=\"assets/images/spot_img/img_2.png\" class=\"crop_img\">\n                            <div class=\"d-flex\" style=\"position: relative; z-index: 99; align-items: flex-start;\">\n                                <div class=\"spot_status\">\n                                    {{'closed' | translate}}\n                                </div>\n                                <ion-icon class=\"zmdi zmdi-favorite-outline end\" style=\"color: var(--white); padding:2px;\"></ion-icon>\n                            </div>\n                        </div>\n                        <div class=\"itme_text\">\n                            <h2>CCD Basement</h2>\n                            <h3>Call enter Park, Business Streetm New York</h3>\n\n                            <div class=\"facility\">\n                                <ion-row>\n                                    <ion-col size=\"4\">\n                                        <h3>{{'connections' | translate}}</h3>\n                                        <h2>12 Points</h2>\n                                    </ion-col>\n                                    <ion-col size=\"5\">\n                                        <h3>{{'amenities' | translate}}</h3>\n                                        <h2 class=\"d-flex\">\n                                            <ion-icon class=\"zmdi zmdi-battery\"></ion-icon>\n                                            <ion-icon class=\"zmdi zmdi-car\"></ion-icon>\n                                            <ion-icon class=\"zmdi zmdi-chart\"></ion-icon>\n                                            <ion-icon class=\"zmdi zmdi-balance\"></ion-icon>\n                                        </h2>\n                                    </ion-col>\n                                    <ion-col size=\"3\">\n                                        <h2 class=\"d-flex\">\n                                            <ion-icon class=\"zmdi zmdi-navigation end\"></ion-icon>\n                                        </h2>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </div>\n                    </div>\n                </ion-item>\n            </ion-slide>\n\n            <ion-slide>\n                <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"chargeSpotInfo()\">\n                    <div class=\"item_inner\">\n                        <div class=\"item_img center_img\">\n                            <img src=\"assets/images/spot_img/img_4.png\" class=\"crop_img\">\n                            <div class=\"d-flex\" style=\"position: relative; z-index: 99; align-items: flex-start;\">\n                                <div class=\"spot_status\">\n                                    {{'open' | translate}}\n                                </div>\n                                <ion-icon class=\"zmdi zmdi-favorite-outline end\" style=\"color: var(--white); padding:2px;\"></ion-icon>\n                            </div>\n                        </div>\n                        <div class=\"itme_text\">\n                            <h2>Amusive Park</h2>\n                            <h3>A23, World Trade Park, New York</h3>\n\n                            <div class=\"facility\">\n                                <ion-row>\n                                    <ion-col size=\"4\">\n                                        <h3>{{'connections' | translate}}</h3>\n                                        <h2>10 Points</h2>\n                                    </ion-col>\n                                    <ion-col size=\"5\">\n                                        <h3>{{'amenities' | translate}}</h3>\n                                        <h2 class=\"d-flex\">\n                                            <ion-icon class=\"zmdi zmdi-battery\"></ion-icon>\n                                            <ion-icon class=\"zmdi zmdi-car\"></ion-icon>\n                                            <ion-icon class=\"zmdi zmdi-chart\"></ion-icon>\n                                            <ion-icon class=\"zmdi zmdi-balance\"></ion-icon>\n                                        </h2>\n                                    </ion-col>\n                                    <ion-col size=\"3\">\n                                        <h2 class=\"d-flex\">\n                                            <ion-icon class=\"zmdi zmdi-navigation end\"></ion-icon>\n                                        </h2>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </div>\n                    </div>\n                </ion-item>\n            </ion-slide>\n\n            <ion-slide>\n                <ion-item class=\"animate__animated animate__fadeInUp\" (click)=\"chargeSpotInfo()\">\n                    <div class=\"item_inner\">\n                        <div class=\"item_img center_img\">\n                            <img src=\"assets/images/spot_img/img_3.png\" class=\"crop_img\">\n                            <div class=\"d-flex\" style=\"position: relative; z-index: 99; align-items: flex-start;\">\n                                <div class=\"spot_status\">\n                                    {{'open' | translate}}\n                                </div>\n                                <ion-icon class=\"zmdi zmdi-favorite-outline end\" style=\"color: var(--white); padding:2px;\"></ion-icon>\n                            </div>\n                        </div>\n                        <div class=\"itme_text\">\n                            <h2>CCD Basement</h2>\n                            <h3>A23, World Trade Park, New York</h3>\n\n                            <div class=\"facility\">\n                                <ion-row>\n                                    <ion-col size=\"4\">\n                                        <h3>{{'connections' | translate}}</h3>\n                                        <h2>4 Points</h2>\n                                    </ion-col>\n                                    <ion-col size=\"5\">\n                                        <h3>{{'amenities' | translate}}</h3>\n                                        <h2 class=\"d-flex\">\n                                            <ion-icon class=\"zmdi zmdi-battery\"></ion-icon>\n                                            <ion-icon class=\"zmdi zmdi-car\"></ion-icon>\n                                            <ion-icon class=\"zmdi zmdi-chart\"></ion-icon>\n                                            <ion-icon class=\"zmdi zmdi-balance\"></ion-icon>\n                                        </h2>\n                                    </ion-col>\n                                    <ion-col size=\"3\">\n                                        <h2 class=\"d-flex\">\n                                            <ion-icon class=\"zmdi zmdi-navigation end\"></ion-icon>\n                                        </h2>\n                                    </ion-col>\n                                </ion-row>\n                            </div>\n                        </div>\n                    </div>\n                </ion-item>\n            </ion-slide>\n        </ion-slides>\n    </ion-list>\n\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map