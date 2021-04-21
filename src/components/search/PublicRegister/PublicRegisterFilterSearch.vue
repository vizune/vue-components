<template>
    <div class="SearchBar"
    v-bind:class="{ 'SearchBar--light' : theme === 'light'}">
        <form v-on:submit.prevent="searchInput" class="Form">
            <div class="Form-control">
                <input type="text" 
                :id="searchBarName"
                class="SearchBar-input" 
                name="term"
                :placeholder="placeholder" 
                v-model="value">

                <button class="SearchBar-clear"
                type="button" 
                v-if="(value && value.length) && submitted"
                v-on:click="deleteInput"
                title="Clear search"
                >X</button>

                <button type="button" 
                class="SearchBar-btn"
                v-on:click="searchInput">
                    <svg class="Button-svg" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    viewBox="0 0 24 24" 
                    id="search">
                        <path d="M3 11a8 8 0 1016 0 8 8 0 10-16 0m18 10l-4.35-4.35"></path>
                    </svg>
                    <span class="SearchBar-label">Search</span>
                </button>

                <span class="SearchBar-error" v-bind:class="{'is-visible': !valid}">{{message}}</span>
            </div>
        </form>
    </div> 
</template>

<script>
    export default {
        name: 'vue-search-bar',
        data: function () {
            return {
                valid: true,
                message: "",
                value: null,
                submitted: false
            }
        },
        props: {
            input: null,
            error: {
                type: String,
                default: "Please enter search term"
            },
            minimum: {
                type: String,
                default: "Please enter at least 3 characters as your search term"
            },
            action: null,
            placeholder: {
                type: String,
                default: "Search the website"
            },
            theme: {
                type: String,
                default: null
            },
            searchBarName: {
                type: String,
                default: "SearchBar"
            }
        },
        watch: {
            input: function() {
                this.value = this.input;

                if(this.input && this.input.length) {
                    this.submitted = true;
                }
            }
        },
        methods: {
            searchInput: function(e) {
                if(this.value && this.value.length) {
                    if(this.value.length > 2) {
                        this.$emit('searchInput', this.value);
                        this.valid = true;
                        this.message = "";
                        this.submitted = true;
                    }
                    else {
                        this.message = this.minimum;
                        this.valid = false;
                    }
                }
                else {
                    this.message = this.error;
                    this.valid = false;
                }

                if(this.valid) {
                    return true;
                }

                e.preventDefault();
            },
            deleteInput: function() {
                this.value = "";
                this.submitted = false;
                this.$emit('deleteInput', this.value);
            }
        }
    }
</script>