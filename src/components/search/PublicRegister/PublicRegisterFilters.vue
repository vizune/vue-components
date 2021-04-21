<template>
    <div>
        <h3 class="PublicRegister-sideHeading mb-1">{{filterHeading}}</h3>
        <a href="#" 
        v-on:click.prevent="resetFilters" 
        v-bind:class="filtersActive">{{resetLabel}}</a>
        <h3 class="PublicRegister-filterHeading mt-2 mt-md-4">Register</h3>
        <div class="Radio-list mb-4">
            <label class="Radio">
                <input type="radio" 
                class="Radio-control"
                v-model="registerMainType" 
                id="registerMain_individual"
                value="individuals">
                <span class="Radio-check"></span>
                <label class="Radio-label" for="registerMain_individual">Registrants</label>
            </label>
            <label class="Radio">
                <input type="radio" 
                class="Radio-control"
                v-model="registerMainType" 
                id="registerMain_bodyCorp"
                value="bodyCorp">
                <span class="Radio-check"></span>
                <label class="Radio-label" for="registerMain_bodyCorp">Body corporate</label>
            </label>
        </div>
        <Toggle 
        :labelOne="registerMainType === 'bodyCorp' ? 'Company name': 'Registrants surname'"
        labelTwo="GOC number"
        theme="rounded"
        v-on:changed="toggleSearchType"
        :value="numberSearchType" />
        <div class="mb-4" v-show="!numberSearchType">
            <h3 class="PublicRegister-filterHeading mt-2 mt-md-4">
                {{registerMainType === "bodyCorp" ? "Company name" : "Registrants surname" }}
            </h3>
            <search-bar
                :action="action"
                :input="nameQuery"
                searchBarName="SearchBarName"
                v-on:searchInput="searchName"
                v-on:deleteInput="searchName"
                :placeholder="registerMainType === 'bodyCorp' ? 'Company name': 'Registrants surname'"
                theme="light">
            </search-bar>
            <div class="Checkbox mt-2 pt-1">
                <input class="Checkbox-control" 
                type="checkbox"
                v-model="filterFuzzySearch"
                id="filterFuzzySearch"
                v-on:change="changeFuzzySearch">
                <label class="Checkbox-check" for="filterFuzzySearch"></label>
                <label class="Checkbox-label" for="filterFuzzySearch">
                    Sounds like
                </label>
            </div>
        </div>
        <div v-show="numberSearchType">
            <h3 class="PublicRegister-filterHeading mt-2 mt-md-4">GOC number</h3>
            <search-bar
                :action="action"
                :input="numberQuery"
                v-on:searchInput="searchNumber"
                v-on:deleteInput="searchNumber"
                searchBarName="SearchBarGOCNumber"
                placeholder="GOC number"
                theme="light"
                class="mb-2">
            </search-bar>
            <tooltip buttonText="Search for multiple numbers"
            :textStyle="true">
            You can search for multiple users by separating the numbers with a comma (,)
            </tooltip>
        </div>
        <details class="PublicRegister-details" v-bind:open="mobileAccordion">
            <summary class="PublicRegister-summary d-lg-none mt-3">
                <h2 class="PublicRegister-advancedHeading">Advanced Filters</h2>
            </summary>
            <div v-if="registerMainType === 'individuals' && genderFilterEnabled">
                <h3 class="PublicRegister-filterHeading mt-2 mt-md-4">{{genderHeading}}</h3>
                <div class="Checkbox-group">
                    <div class="Checkbox-item">
                        <div class="Checkbox">
                            <input class="Checkbox-control" 
                            type="checkbox"
                            v-model="filterGender"
                            id="filterGender_0"
                            value="Male">
                            <label class="Checkbox-check" for="filterGender_0"></label>
                            <label class="Checkbox-label" for="filterGender_0">
                                Male
                            </label>
                        </div>
                    </div>
                    <div class="Checkbox-item">
                        <div class="Checkbox">
                            <input class="Checkbox-control" 
                            type="checkbox"
                            v-model="filterGender"
                            id="filterGender_1"
                            value="Female">
                            <label class="Checkbox-check" for="filterGender_1"></label>
                            <label class="Checkbox-label" for="filterGender_1">
                                Female
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 class="PublicRegister-filterHeading mt-4">{{postcodeHeading}}</h3>
                <search-bar
                    :action="action"
                    searchBarName="SearchBarPostcode"
                    v-on:searchInput="searchPostcode"
                    placeholder="Postcode"
                    :input="postcodeQuery"
                    theme="light"
                    class="mb-2">
                </search-bar>
                <span v-show="invalidPostcode" class="Form-note Form-note--error">Invalid postcode</span>
                <div class="Select mt-3">
                    <select class="Select-control" 
                    v-model="distanceSelected"
                    v-on:change="selectDistance($event)">
                        <option 
                        class="Select-option"
                        v-for="option in distance" 
                        v-bind:key="option.value"
                        :value="option.value"
                        >{{option.name}}</option>
                    </select>
                    <svg class="Select-icon">
                        <use xlink:href="/assets/icons/_icons.svg#chevron-down"></use>
                    </svg>
                </div>
            </div>
            <div v-if="registerMainType === 'individuals'">
                <div v-if="registeredAsFilters">
                    <h3 class="PublicRegister-filterHeading mt-4">{{registeredAsHeading}}</h3>
                    <div class="Checkbox-group mb-4">
                        <div class="Checkbox-item" 
                        v-for="(filter, index) in registeredAsFilters"
                        v-bind:key="index">
                            <div class="Checkbox">
                                <input class="Checkbox-control" 
                                type="checkbox"
                                v-model="filterRegisteredAs"
                                :id="'filterRegisteredAs_' + index"
                                :value="filter">
                                <label class="Checkbox-check" 
                                :for="'filterRegisteredAs_' + index"></label>
                                <label class="Checkbox-label" 
                                :for="'filterRegisteredAs_' + index">
                                    {{filter}}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="specialtyFilters">
                    <h3 class="PublicRegister-filterHeading mt-4">{{specialtyHeading}}</h3>
                    <div class="Checkbox-group">
                        <div class="Checkbox-item" 
                        v-for="(filter, index) in specialtyFilters"
                        v-bind:key="index">
                            <div class="Checkbox">
                                <input class="Checkbox-control" 
                                type="checkbox"
                                v-model="filterSpecialty"
                                :id="'filterSpecialty' + index"
                                :value="filter + ' Specialty'">
                                <label class="Checkbox-check" :for="'filterSpecialty' + index"></label>
                                <label class="Checkbox-label" :for="'filterSpecialty' + index">
                                    {{filter}}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </details>
    </div>
</template>

<script>
import SearchBar from './PublicRegisterFilterSearch.vue';
import Tooltip from '../../icons/tooltip.vue';
import Toggle from '../../forms/Toggle/Toggle.vue';
import axios from 'axios';

export default {
    components: {
        SearchBar,
        Tooltip,
        Toggle
    },
    data() {
        return {
            action: "/public-register",
            registerMainType: "individuals",
            mobileAccordion: false,
            timeout: null,
            filterGender: [],
            filterRegisteredAs: [],
            filterSpecialty: [],
            filtersSelected: null,
            filterFuzzySearch: false,
            postcodeQuery: null,
            postcodeInput: null,
            invalidPostcode: false,
            numberSearchType: false,
            distanceSelected: 1,
            distance: [
                {
                    name: "1 KM from postcode",
                    value: "1"
                },
                {
                    name: "10 KM from postcode",
                    value: "10"
                },
                {
                    name: "20 KM from postcode",
                    value: "20"
                },
                {
                    name: "30 KM from postcode",
                    value: "30"
                },
                {
                    name: "40 KM from postcode",
                    value: "40"
                },
                {
                    name: "50 KM from postcode",
                    value: "50"
                },
                {
                    name: "60 KM from postcode",
                    value: "60"
                },
                {
                    name: "70 KM from postcode",
                    value: "70"
                },
                {
                    name: "80 KM from postcode",
                    value: "80"
                },
                {
                    name: "90 KM from postcode",
                    value: "90"
                },
                {
                    name: "100 KM from postcode",
                    value: "100"
                }
            ]
        }
    },
    props: {
        nameQuery: {
            type: String
        },
        numberQuery: {
            type: String
        },
        genderOptions: {
            type: Object
        },
        registeredAsOptions: {
            type: Object
        },
        specialityOptions: {
            type: Object
        },
        genderFilterEnabled: {
            type: Boolean,
            required: true
        },
        registeredAsFilters: {
            type: Array
        },
        specialtyFilters: {
            type: Array
        },
        selectedMainType: {
            type: String
        },
        genderHeading: {
            type: String
        },
        postcodeHeading: {
            type: String
        },
        registeredAsHeading: {
            type: String
        },
        specialtyHeading: {
            type: String
        },
        resetLabel: {
            type: String
        },
        filterHeading: {
            type: String
        },
        searchTypeNumberSelected: {
            type: Boolean
        }
    },
    mounted() {
        this.accordionCheck();

        window.addEventListener("resize", () => {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.accordionCheck();
                }, 300);
        })
    },
    watch: {
        registerMainType: function (val) {
            // Clear filters that are exclusive to "individuals"
            if(val != null) {
                if(val !== "individuals" && 
                ((this.filterSpecialty && this.filterSpecialty.length) || 
                (this.filterRegisteredAs && this.filterRegisteredAs.length) || 
                (this.filterGender && this.filterGender.length) || this.postcodeInput != null) ) {
                    this.resetFilters();
                }

                // Cache / Emit selected filter when changed
                this.$emit('filterMainType', this.registerMainType);
            }
        },
        selectedMainType: function(val) {
            // Used to receive type from parent component
            // especially when "&bodyCorporate=true" in URL
            this.registerMainType = val;
        },
        filterGender: function(val) {
            // Emits value of gender to parent component
            this.$emit('filterGender', this.filterGender);
        },
        filterRegisteredAs: function(val) {
            // Emits value of gender to parent component
            this.$emit('filterRegisteredAs', this.filterRegisteredAs);
        },
        filterSpecialty: function(val) {
            // Emits value of gender to parent component
            this.$emit('filterSpecialty', this.filterSpecialty);
        },
        searchTypeNumberSelected: function(val) {
            this.numberSearchType = val;
        }
    },
    computed: {
        filtersActive: function() {
            // Displays "Reset filters" if filters are active
            // Reset filters will remove the following filters:
            // Postcode, Registered As, Specialty, Gender
            // Name & GOC number search will still persist.  
            return (this.filterSpecialty && this.filterSpecialty.length) || 
            (this.filterRegisteredAs && this.filterRegisteredAs.length) || 
            (this.filterGender && this.filterGender.length) || 
            this.postcodeInput != null ? "is-visible" : "is-hidden";
        }
    },
    methods: {
        accordionCheck: function() {
            // Turns the filters into an accordion for mobile
            let desktop = window.matchMedia("(min-width: 768px)").matches;
            this.mobileAccordion = desktop ? true : false;
        },
        resetFilters: function() {
            // Resets filters - v-model of their form fields set to null
            this.filterGender = [];

            this.filterRegisteredAs = [];

            this.filterSpecialty = [];

            this.postcodeInput = null;
            
            document.querySelector('#SearchBarPostcode').value = "";

            this.distanceSelected = 1;

            this.$emit('searchPostcode', null);

            this.$emit('filterReset', null);
        },
        searchName: function(name) {
            // Emits the name searched to parent component
            this.$emit('searchName', name);

            // If name has been cleared then reset filters and reset fuzzy filter
            if(name.length === 0) {
                this.filterFuzzySearch = false;
                this.resetFilters();
            }
        },
        changeFuzzySearch: function() {
            // Emits the "fuzzy search" filter on change
            this.$emit('fuzzySearch', this.filterFuzzySearch)
        },
        searchNumber: function(number) {
            // Emits the GOC number searched to the parent component (PublicRegister.vue)
            // If it's a comma separated list in order to find multiple numbers, remove any spaces
            this.$emit('searchNumber', number.replace(/\s/g, ''));

            if(number.length === 0) {
                this.resetFilters();
            }
        },
        searchPostcode: function(code) {
            // Remove any special characters that could break the API URL
            let postcode = code.replace(/[^a-zA-Z0-9]/g, '');
            this.postcodeInput = postcode;

            // API checks if postcode is valid
            axios.get("http://api.postcodes.io/postcodes/" + postcode + "/validate")
                .then((resp) => {
                    if(resp.data.result && resp.data.result === true) {
                        // Emits Postcode and distance to the parent component 
                        this.invalidPostcode = false;
                        this.getLongLat(postcode);
                    }
                    else {
                        // Validation error triggered
                        this.invalidPostcode = true;
                    }
                })
                .catch((err) => {
                    console.log(`Error : ${err}`)
                    this.invalidPostcode = true;
                })
        },
        selectDistance: function(event) {
            this.distanceSelected = event.target.value;
        },
        convertToMiles: function(value) {
            // API uses miles however component specs says to use KM
            // so we need to convert the KM from the front end to Miles

            const factor = 0.621371;

            return Math.round(value * factor);
        },
        getLongLat: function(postcode) {
            // API get longitude / latitude of entered postcode
            axios.get("http://api.postcodes.io/postcodes/" + postcode)
                .then((resp) => {
                    if(resp.data.result) {
                        const longitude = resp.data.result.longitude;
                        const latitude = resp.data.result.latitude;

                        let distance = this.convertToMiles(this.distanceSelected);

                        // Emits Postcode and distance to the parent component 
                        this.$emit('searchPostcode', longitude, latitude, distance);
                    }
                })
                .catch((err) => {
                    console.log(`Error : ${err}`)
                })
        },
        setSearchType: function() {
            this.numberSearchType = this.searchTypeNumberSelected;
        },
        toggleSearchType(val) {
            /*
            if(this.nameQuery.length || this.numberQuery.length) {
                if(this.numberSearchType !== val) {
                    this.resetFilters();

                    if(val == false) {
                        this.searchName("");
                        this.filterFuzzySearch = false;
                    }
                    else {
                        this.searchNumber("");
                    }
                }
            }
            
            */
            this.numberSearchType = val;
        }
    }
}
</script>

<style lang="scss" scoped>
    .is-hidden {
        opacity: 0;
        visibility: hidden;
        transition: opacity .25s ease, visibility .25s step-end;
    }

    .is-visible {
        opacity: 1;
        visibility: visible;
        transition: opacity .25s ease, visibility .25s step-start;
    }
</style>