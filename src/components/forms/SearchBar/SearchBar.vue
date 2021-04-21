<template>
    <form @submit="searchInput" 
    class="SearchBar" 
    :action="action" 
    post>
        <input type="text" 
        id="searchBar"
        class="SearchBar-input" 
        name="term"
        placeholder="Search the website" 
        v-model="value">
        <button type="submit" 
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
            <span class="SearchBar-label sr-only">Search</span>
        </button>

        <span class="SearchBar-error" v-bind:class="{'is-visible': !valid}">{{message}}</span>
    </form>
</template>

<script>
    export default {
        name: 'vue-search-bar',
        data () {
            return {
                valid: true,
                message: "",
                value: null
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
            action: null
        },
        watch: {
            input: function() {
                this.value = this.input;
            }
        },
        methods: {
            searchInput: function(e) {
                if(this.value && this.value.length) {

                    if(this.value.length > 2) {
                        //this.$emit('searchInput', this.input);
                        this.valid = true;
                        this.message = "";
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
            }
        }
    }
</script>