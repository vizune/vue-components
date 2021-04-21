<template>
    <section class="PublicRegister">
        <div class="container">
            <div class="row">
                <div class="PublicRegister-sidebar u-pseudo-bg u-pseudo-bg--gray20 col-lg-3 pl-md-0">
                    <register-filters
                    v-on:filterMainType="changeMainFilterType"
                    v-on:fuzzySearch="fuzzySearch"
                    v-on:searchName="searchName"
                    v-on:searchNumber="searchNumber"
                    v-on:searchPostcode="searchPostcode"
                    v-on:filterGender="searchGender"
                    v-on:filterRegisteredAs="searchRegisteredAs"
                    v-on:filterSpecialty="searchSpecialty"
                    v-on:filterReset="searchReset"
                    :selectedMainType="selectedMainType"
                    :nameQuery="nameQuery"
                    :numberQuery="numberQuery"
                    :genderFilterEnabled="showGenderFilter"
                    :registeredAsFilters="registeredAsFilters"
                    :specialtyFilters="specialtyFilters"
                    :genderHeading="genderHeading"
                    :postcodeHeading="postcodeHeading"
                    :registeredAsHeading="registeredAsHeading"
                    :specialtyHeading="specialtyHeading"
                    :resetLabel="resetLabel"
                    :filterHeading="filterHeading"
                    :searchTypeNumberSelected="searchTypeNumberSelected"
                     />
                </div>
                <div class="col-lg-9 pl-md-0 pl-lg-3 pr-md-0 relative">
                    <div class="d-flex flex-wrap justify-content-between align-items-center mb-3">
                        <div>
                            <p class="font-italic mb-0 mt-2 mt-md-0" v-if="resultsCount && resultsCount > 0">
                                <span>{{ resultsCount }} result<span v-if="resultsCount > 1">s</span></span>
                            </p>
                        </div>
                        <div class="PublicRegister-countFilter mt-2 mt-md-0">
                            <span class="text-nowrap">Registrants per page</span>
                            <ul>
                                <li v-for="count in pageCounts" v-bind:key="count">
                                    <button class="PublicRegister-countButton"
                                    v-bind:class="{ 'is-active' : itemsPerPage === count }"
                                    v-on:click="changeCountFilter(count)"
                                    :disabled="loading || !results"
                                    >{{count}}</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Starting screen if no search has been made -->
                    <div v-if="!nameQuery && !numberQuery">
                        <p>To start, please use the filters on the left-hand side</p>
                    </div>

                    <!-- Results table -->
                    <div class="PublicRegister-tableWrapper"
                    v-if="results && resultsCount > 0">
                        <table class="PublicRegister-table TrueResponsiveTable">
                            <colgroup v-if="selectedMainType === 'individuals'">
                                <col style="width: 35%;">
                                <col style="width: 40%;">
                                <col style="width: 20%;">
                                <col style="width: 40%;">
                            </colgroup>
                            <colgroup v-else>
                                <col style="width: 35%;">
                                <col>
                            </colgroup>
                            <thead v-if="selectedMainType === 'individuals'">
                                <tr>
                                    <th>
                                        <div class="d-flex align-items-center">
                                            <span style="white-space: nowrap;">{{nameHeading}}</span>
                                            <tooltip :buttonText="'More information about ' + nameHeading"
                                            :iconStyle="true"
                                            colour="white"
                                            class="ml-2">{{nameAndGocNumberTooltip}}</tooltip>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="d-flex align-items-center">
                                            <span>{{registeredAsHeading}}</span>
                                            <tooltip :buttonText="'More information about ' + registeredAsHeading"
                                            :iconStyle="true"
                                            colour="white"
                                            class="ml-2">{{registeredAsTooltip}}</tooltip>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="d-flex align-items-center">
                                            <span>{{genderHeading}}</span>
                                            <tooltip :buttonText="'More information about ' + genderHeading"
                                            :iconStyle="true"
                                            colour="white"
                                            class="ml-2">{{genderTooltip}}</tooltip>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="d-flex align-items-center">
                                            <span>{{statusHeading}}</span>
                                            <tooltip :buttonText="'More information about ' + statusHeading"
                                            :iconStyle="true"
                                            colour="white"
                                            class="ml-2"
                                            position="bottom">{{statusTooltip}}</tooltip>
                                        </div>
                                    </th>
                                </tr>
                            </thead> 
                            <thead v-else>
                                <tr>
                                    <th>
                                        <div class="d-flex align-items-center">
                                            <span>{{nameHeading}}</span>
                                            <tooltip :buttonText="'More information about ' + nameHeading"
                                            :iconStyle="true"
                                            colour="white"
                                            class="ml-2">{{nameAndGocNumberTooltip}}</tooltip>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="d-flex align-items-center">
                                            <span>{{statusHeading}}</span>
                                            <tooltip :buttonText="'More information about ' + statusHeading"
                                            :iconStyle="true"
                                            colour="white"
                                            class="ml-2">{{statusTooltip}}</tooltip>
                                        </div>
                                    </th>
                                </tr>
                            </thead>                             
                            
                            <register-item 
                            v-for="(item, index) in results.slice(pageSlice, itemsPerPage)" 
                            v-bind:key="index"
                            :item="item"
                            :ftpTooltip="ftpTooltip"
                            :townTooltip="townTooltip"
                            :practiceAddressTooltip="practiceAddressTooltip"
                            :qualificationTooltip="qualificationTooltip"
                            :specialtiesTooltip="specialtiesTooltip"                            
                            :type="selectedMainType"
                            :ftpAPI="ftpAPI"></register-item>
                        </table>               
                    </div>

                    <pagination v-if="results && resultsCount > itemsPerPage"
                    :items="resultsCount"
                    :pageSize="itemsPerPage" 
                    :maxPages="maxPages" 
                    @changePage="changePage" 
                    :disableDefaultStyles="true"></pagination>

                    <!-- If search was submitted but no results returned -->
                    <div v-if="(nameQuery || numberQuery) && !results && !loading">
                        <p>There were no results available, please try another search</p>
                    </div>

                    <!-- loading screen -->
                    <div class="PublicRegister-loading" v-if="loading">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
</template>

<script>
import axios from 'axios';
import PublicRegisterItem from './PublicRegisterItem.vue';
import PublicRegisterFilters from './PublicRegisterFilters.vue';
import PublicRegisterPagination from './PublicRegisterPagination.vue';
import Tooltip from '../../icons/tooltip.vue';

export default {
    name: 'public-register',
    components: {
        "register-item": PublicRegisterItem,
        "register-filters": PublicRegisterFilters,
        "pagination": PublicRegisterPagination,
        Tooltip
    },
    data() {
        return {
            nameQuery: null,
            numberQuery: null,
            bodyCorp: null,
            individuals: null,
            selectedMainType: "individuals",
            results: null,
            resultsCount: 0,
            itemsPerPage: 10,
            error: null,
            fuzzySearchFilter: false,
            loading: false,
            pageCounts: [10, 25, 50],
            pageSlice: 0,
            maxPages: 3,
            currentPage: 1,
            showGenderFilter: false,
            registeredAsFilters: null,
            specialtyFilters: null,
            ftpAPI: null,
            genderFilter: null,
            registeredAsFilter: null,
            specialtyFilter: null,
            genderHeading: 'Gender',
            nameHeading: 'Name & GOC Number',
            postcodeHeading: 'Postcode',
            registeredAsHeading: 'Registered as',
            specialtyHeading: 'Specialty',
            statusHeading: 'Status',
            resetLabel: 'Reset',
            filterHeading: 'Filters',
            ftpTooltip : '',
            qualificationTooltip: '',
            specialtiesTooltip: '',
            townTooltip: '',
            practiceAddressTooltip: '',
            nameAndGocNumberTooltip: '',
            registeredAsTooltip: '',
            genderTooltip: '',
            statusTooltip: '',
            searchTypeNumberSelected: false
        }
    },
    props: {
        'dataset' : {
			type: Object,
            required: true,
            default: [],
		  }
    },
    mounted() {
        this.data = this.dataset.dataset;

        if(this.data) {
            this.genderHeading = this.data.gender;
            this.nameHeading = this.data.registerName;
            this.postcodeHeading = this.data.postcode;
            this.registeredAsHeading = this.data.registeredas;
            this.specialtyHeading = this.data.specialty;
            this.statusHeading = this.data.registerStatus;
            this.ftpAPI = this.data.endpointFtpdecision;
            this.resetLabel = this.data.reset;
            this.filterHeading = this.data.filt;

            this.ftpTooltip  = this.data.ftpTooltip;
            this.qualificationTooltip = this.data.qualificationTooltip;
            this.specialtiesTooltip = this.data.specialtiesTooltip;
            this.townTooltip = this.data.townTooltip;
            this.practiceAddressTooltip = this.data.practiceAddressTooltip;
            this.nameAndGocNumberTooltip = this.data.nameAndGocNumberTooltip;
            this.registeredAsTooltip = this.data.registeredAsTooltip;
            this.genderTooltip = this.data.genderTooltip;
            this.statusTooltip = this.data.statusTooltip;
        }

        this.queryString();

        if(this.numberQuery || this.nameQuery) {
            this.fetchData();
        }

        if(this.numberQuery) {
            this.searchTypeNumberSelected = true;
        }
        else {
            this.searchTypeNumberSelected = false;
        }
    },
    watch: {
        selectedMainType: function(val) {
            // URL Madness
            // Adds "?bodyCorporate=true" if bodyCorp checked, else removes it
            let url;
            let query;
            // let query = this.selectedMainType === "bodyCorp" ? window.location.href.split("?")[1].split("&")[0] : "?" + window.location.href.split("?")[1];

            if(this.selectedMainType == "bodyCorp") {
                url = window.location.href.split("?")[0];
                query = window.location.href.split("?")[1].split("&")[0];
                window.history.pushState(url, "", "?" + query + "&bodyCorporate=true");
            }
            else {
                url = window.location.href.split("&bodyCorporate=true")[0];
                let query = window.location.href.split("?")[1].split("&")[0];
                window.history.pushState(url, "", "?" + query);
            }
            // When the search "type" (individuals or bodyCorp) has changed
            // fetch data again which will change API url
            //this.fetchData();
        },
        fuzzySearchFilter: function(val) {
            // Only fetch if name has been provided
            if(this.nameQuery) {
                this.currentPage = 1;
                this.fetchData();
            }
        },
        genderFilter: function(val) {
            if(this.selectedMainType === "individuals") {
                this.currentPage = 1;
                this.fetchData();
            }
        },
        specialtyFilter: function(val) {
            if(this.selectedMainType === "individuals") {
                this.currentPage = 1;
                this.fetchData();
            }
        },
        registeredAsFilter: function(val) {
            if(this.selectedMainType === "individuals") {
                this.currentPage = 1;
                this.fetchData();
            }
        }
    },
    methods: {
        queryString: function() {
            // Gets search query string from URL e.g. /register?search=test
            // and caches it to this.searchQuery to be used across component
            // this depends on the public register search bar having name="search" in the HTML markup
            const params = new URLSearchParams(window.location.search);
            let querySearch = params.get("search");
            let queryBodyCorporate = params.get("bodyCorporate");

            // Configured the type (individuals or bodyCorp) depending on URL with &bodyCorporate=true
            this.selectedMainType = queryBodyCorporate ? "bodyCorp" : "individuals";

            // If URL has "?search" means the search bar was used to take them to /register
            // It is possible to use the search bar for both GOC number and Name
            if(querySearch) {
                // If there are numbers in the query
                // it is assumed the user intends to search for a GOC number
                // depending on the type of query, we assign string to the appropriate variable
                let number = /\d/.test(querySearch);

                if(number) {
                    this.numberQuery = querySearch;
                }
                else {
                    this.nameQuery = querySearch;
                }

                let type = this.numberQuery ? "?number=" : "?name=";
                let value = this.numberQuery ? this.numberQuery : this.nameQuery;

                // Also need to determine whether individual or body corporate search is needed
                if(queryBodyCorporate) {
                    value = value + "&bodyCorporate=true";
                }

                window.history.pushState(window.location.pathname, "", type + value);
                
            }

            // If name or number is present in URL, assign value to matching variable
            let queryNumber = params.get("number");
            let queryName = params.get("name");

            if(queryNumber) {
                this.numberQuery = queryNumber;
            }

            if(queryName) {
                this.nameQuery = queryName;
            }

        },
        assignUrlQueries: function() {
            // Need to amend the "search" query string to the name or number depending on results above
            // that way it's easier to search using both name and number when further filtering results after homepage search
            const params = new URLSearchParams(window.location.search);
            let value;
            let type = this.selectedMainType === "bodyCorp" ? "&bodyCorporate=true" : "";

            if(this.numberQuery && this.nameQuery) {
                value = "?name=" + this.nameQuery + "&number=" + this.numberQuery + type;
            }
            else if(this.numberQuery && !this.nameQuery) {
                value = "?number=" + this.numberQuery;
            }
            else {
                value = this.nameQuery ? "?name=" + this.nameQuery : "?name=";
            }

            window.history.pushState(window.location.pathname, "", value + type);
        },
        fetchData() {
            // Loading screen triggered
            this.loading = true;


            // API URL is determined whether the search is filtered for "Individuals / Registrants" or "Body Corporate"
            let url = this.selectedMainType === "bodyCorp" ? this.data.endpointBodycorp : this.data.endpointIndividual;

            let fullApiUrl = this.buildApiUrl(url);

            //console.log(fullApiUrl)

            // Gathers data from URL
            axios.get(fullApiUrl)
                .then((resp) => {
                    if(resp.data) {
                        // Always keep original results from API, does not change
                        // Used to reset manipulation with filters / pagination
                        this.results = resp.data.results;
                        this.resultsCount = resp.data.totalrows;
                        //console.log(this.result)

                        // Detect additional filters for individuals 
                        // (gender, registered as, specialities)
                        if(this.selectedMainType === "individuals") {
                            this.displayGenderFilter();
                            this.displayRegisteredAsFilter();
                            this.displaySpecialitiesFilter();
                        }
                        else {
                            this.showGenderFilter = false;
                            this.registeredAsFilters = null;
                            this.specialtyFilters = null;
                        }
                        this.loading = false;
                    }
                })
                .catch((err) => {
                    console.log(`Error : ${err}`)

                    this.resetSearch();
                })
        },
        buildApiUrl: function(url, page) {
            // This functions builds upon the base API urls provided by component's dataset
            // It adds based on query strings and filters selected
            let fullUrl;
            let fuzzySearch = this.fuzzySearchFilter ? "&fuzzysearch=true" : "&fuzzysearch=false";
            let genderSearch = this.genderFilter && this.selectedMainType === "individuals" ? "&gender=" + this.genderFilter : "";
            let specialtySearch = this.specialtyFilter && this.selectedMainType === "individuals" ? "&specialty=" + this.specialtyFilter : "";
            let registeredAsSearch = this.registeredAsFilter && this.selectedMainType === "individuals" ? "&regtype=" + this.registeredAsFilter : "";
            let postcodeSearch = this.longitudeSearch && this.latitudeSearch && this.distanceSearch ? "&longitude=" + this.longitudeSearch + "&latitude=" + this.latitudeSearch + "&distance=" + this.distanceSearch : "";

            // If only GOC number has been searched
            if(this.numberQuery && !this.nameQuery) {
                fullUrl = url + "?gocNumber=" + this.numberQuery 
            }
            // If only name has been searched
            if(this.nameQuery && !this.numberQuery) {
                let nameLabel = this.selectedMainType === "bodyCorp" ? "?name=" : "?surname="
                fullUrl = url + nameLabel + this.nameQuery + fuzzySearch;
            }
            // If both GOC number and name has been searched
            if(this.numberQuery && this.nameQuery) {
                let nameLabel = this.selectedMainType === "bodyCorp" ? "&name=" : "&surname="
                fullUrl = url + "?gocNumber=" + this.numberQuery + nameLabel + this.nameQuery + fuzzySearch;
            }

            // If there is nothing, usually when someone has done a search then cleared it
            if(!this.numberQuery && !this.nameQuery) {
                fullUrl = url + "?gocNumber=";
            }

            return fullUrl + genderSearch + specialtySearch + registeredAsSearch + "&pageSize=" + this.itemsPerPage + "&page=" + this.currentPage + postcodeSearch;
        },
        changeCountFilter: function(number) {
            this.itemsPerPage = number;
            this.fetchData();
        },
        changePage: function(currentPage) {
            // Used for pagination sub-component
            if(currentPage !== this.currentPage) {
                this.currentPage = currentPage;
                this.fetchData();
            }
        },
        changeMainFilterType(type) {
            // Handles displaying Individuals or Body Corporate results
            this.selectedMainType = type;
            
            // If a new search has been made, reset to page 1
            this.currentPage = 1;

            this.fetchData();
        },
        searchName(name) {
            // Registrants name search bar is used in PublicRegisterFilters.vue
            // child component emits the value and triggers this method
            // Updated the name query and recall the fetchData method
            this.nameQuery = name;
            this.numberQuery = null;

            // If a new search has been made, reset to page 1
            this.currentPage = 1;

            this.assignUrlQueries();
            this.fetchData();
        },
        searchNumber(number) {
            // Registrants name search bar is used in PublicRegisterFilters.vue
            // child component emits the value and triggers this method
            // First we find out if Registrants or Body corporate is selected
            // then we call the corresponding API with the GOC number searched
            this.numberQuery = number;
            this.nameQuery = null;

            // If a new search has been made, reset to page 1
            this.currentPage = 1;

            this.assignUrlQueries();
            this.fetchData();
        },
        searchPostcode(...args) {
            //this.postcodeSearch = code;

            if(args.length == 3) {
                this.longitudeSearch = args[0];
                this.latitudeSearch = args[1];
                this.distanceSearch = args[2];
            }
            else {
                this.longitudeSearch = null;
                this.latitudeSearch = null;
                this.distanceSearch = null;
            }

            // If a new search has been made, reset to page 1
            this.currentPage = 1;

            this.fetchData();
        },
        fuzzySearch(val) {
            // "Sounds like" checkbox
            // child component emits value on change
            this.fuzzySearchFilter = val;
        },
        searchGender(val) {
            if(this.selectedMainType === "individuals") {
                this.genderFilter = val.toString();
            }
        },
        searchRegisteredAs(val) {
            if(this.selectedMainType === "individuals") {
                this.registeredAsFilter = val.toString();
            }
        },
        searchSpecialty(val) {
            if(this.selectedMainType === "individuals") {
                this.specialtyFilter = val.toString();
            }
        },
        displayGenderFilter: function() {
            // Need to determine whether to display gender filter
            let genderArr = ["Male", "Female"];
            
            this.showGenderFilter = genderArr.includes("Female") || genderArr.includes("Male");
        },
        displayRegisteredAsFilter: function() {
            // Gather the registered as filters from results

            let registerTypeArr = [
                "Optometrist",
                "Dispensing Optician",
                "Student Optometrist",
                "Student Dispensing Optician",
                "Dispensing Optician, Student Optometrist",
                "Student Dispensing Optician, Student Optometrist"
                ];
            

            this.registeredAsFilters = registerTypeArr;
        },
        displaySpecialitiesFilter: function() {
            // Gather the specialities filters from results
            // Specialities are a little different, data provided is one string with commas after each item
            // e.g. "specialties":"Additional Supply Specialty, Supplementary Prescribing Specialty, Independent Prescribing Specialty"
            // So we have to extract items from string and remove "Speciality" from each item

            let specialTypeArr = [
                "Additional Supply",
                "Contact Lens",
                "Independent Prescribing",
                "Supplementary Prescribing"
            ];
            this.specialtyFilters = specialTypeArr;
        },
        searchReset(val) {
            this.genderFilter = null;
            this.specialtyFilter = null;
            this.registeredAsFilter = null;
            this.currentPage = 1;
            this.fetchData();
        },
        resetSearch: function() {
            this.loading = false;
            this.results = null;
            this.resultsCount = null;
            this.currentPage = 1;
        }
    }
}
</script>