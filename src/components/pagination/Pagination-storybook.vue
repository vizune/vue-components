<template>
    <ul class="Pagination" >
        <li class="Pagination-item" 
        :class="{'is-disabled': currentPage === 1}" >
            <a class="Pagination-link" 
            @click="setPage(1)">
                <span class="sr-only">{{labels.first}}</span>
                <span class="Pagination-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"/></svg>
                </span>
            </a>
        </li>
        <li class="Pagination-item Pagination-item--previous" 
        :class="{'is-disabled': currentPage === 1}" >
            <a class="Pagination-link" 
            @click="setPage(currentPage - 1)">
                <span class="sr-only">{{labels.previous}}</span>
                <span class="Pagination-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </span>
            </a>
        </li>
        <li v-for="page in pages" 
        :key="page" 
        class="Pagination-item Pagination-item--number" 
        :class="{'is-active': currentPage === page}" >
            <a class="Pagination-link" 
            @click="setPage(page)">
                {{page}}
            </a>
        </li>
        <li class="Pagination-item Pagination-item--next" 
        :class="{'is-disabled': currentPage === totalPages}" >
            <a class="Pagination-link" 
            @click="setPage(currentPage + 1)">
                <span class="sr-only">{{labels.next}}</span>
                <span class="Pagination-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><path d="M9 18l6-6-6-6"/></svg>
                </span>
            </a>
        </li>
        <li class="Pagination-item" 
        :class="{'is-disabled': currentPage === totalPages}" >
            <a class="Pagination-link" 
            @click="setPage(totalPages)">
                <span class="sr-only">{{labels.last}}</span>
                <span class="Pagination-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>
                </span>
            </a>
        </li>
    </ul>
</template>

<script>

export default {
    data () {
        return {
            currentPage: 1,
            totalPages: 10,
            pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            labels: [
                { first: "First" },
                { last: "Last" },
                { previous: "Previous" },
                { next: "Next" }
            ]
        }
    },
    methods: {
        setPage: function(val) {
            this.currentPage = val;
        }
    }
}
</script>
