<template>
    <ul class="Pagination" 
    v-if="pager.pages && pager.pages.length">
        <li class="Pagination-item" 
        :class="{'is-disabled': pager.currentPage === 1}" 
        :style="liStyles">
            <a class="Pagination-link" 
            @click="setPage(1)" 
            :style="aStyles">
                <span class="sr-only">{{labels.first}}</span>
                <span class="Pagination-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"/></svg>
                </span>
            </a>
        </li>
        <li class="Pagination-item Pagination-item--previous" 
        :class="{'is-disabled': pager.currentPage === 1}" 
        :style="liStyles">
            <a class="Pagination-link" 
            @click="setPage(pager.currentPage - 1)" 
            :style="aStyles">
                <span class="sr-only">{{labels.previous}}</span>
                <span class="Pagination-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </span>
            </a>
        </li>
        <li v-for="page in pager.pages" 
        :key="page" 
        class="Pagination-item Pagination-item--number" 
        :class="{'is-active': pager.currentPage === page}" 
        :style="liStyles">
            <a class="Pagination-link" 
            @click="setPage(page)" 
            :style="aStyles">{{page}}</a>
        </li>
        <li class="Pagination-item Pagination-item--next" 
        :class="{'is-disabled': pager.currentPage === pager.totalPages}" 
        :style="liStyles">
            <a class="Pagination-link" 
            @click="setPage(pager.currentPage + 1)" 
            :style="aStyles">
                <span class="sr-only">{{labels.next}}</span>
                <span class="Pagination-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><path d="M9 18l6-6-6-6"/></svg>
                </span>
            </a>
        </li>
        <li class="Pagination-item" 
        :class="{'is-disabled': pager.currentPage === pager.totalPages}" 
        :style="liStyles">
            <a class="Pagination-link" 
            @click="setPage(pager.totalPages)" 
            :style="aStyles">
                <span class="sr-only">{{labels.last}}</span>
                <span class="Pagination-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>
                </span>
            </a>
        </li>
    </ul>
</template>

<script>
    const defaultLabels = {
        first: 'First',
        last: 'Last',
        previous: 'Previous',
        next: 'Next'
    };

    const defaultStyles = {
        ul: {
            margin: 0,
            padding: 0,
            display: 'inline-block'
        },
        li: {
            listStyle: 'none',
            display: 'inline',
            textAlign: 'center'
        },
        a: {
            cursor: 'pointer',
            padding: '6px 12px',
            display: 'block',
            float: 'left'
        }
    };

    export default {
        name: 'pagination',
        data () {
            return {
                pager: {},
                ulStyles: {},
                liStyles: {},
                aStyles: {}
            }
        },
        props: {
            items: {
                type: Array,
                required: true
            },
            initialPage: {
                type: Number,
                default: 1
            },
            pageSize: {
                type: Number,
                default: 10
            },
            maxPages: {
                type: Number,
                default: 10
            },
            labels: {
                type: Object,
                default: () => defaultLabels
            },
            styles: {
                type: Object
            },
            disableDefaultStyles: {
                type: Boolean,
                default: false
            }
        },
        created() {
            if(!this.$listeners.changePage) {
                throw 'Missing required event listener: "changePage"';
            }

            // set default styles unless disabled
            if (!this.disableDefaultStyles) {
                this.ulStyles = defaultStyles.ul;
                this.liStyles = defaultStyles.li;
                this.aStyles = defaultStyles.a;
            }

            // merge custom styles with default styles
            if (this.styles) {
                this.ulStyles = { ...this.ulStyles, ...this.styles.ul };
                this.liStyles = { ...this.liStyles, ...this.styles.li };
                this.aStyles = { ...this.aStyles, ...this.styles.a };
            }

            // set to initial page
            this.setPage(this.initialPage);
        },
        methods: {
            setPage(page) {
                const { items, pageSize, maxPages } = this;

                // get new pager object for specified page
                const pager = this.paginate(items.length, page, pageSize, maxPages);

                // get new page of items from items array
                const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

                // update pager
                this.pager = pager;

                // emit change page event to parent component
                this.$emit('changePage', pageOfItems);
            },
            paginate(
                totalItems,
                currentPage = 1,
                pageSize = 10,
                maxPages = 10) {
                    
                    // calculate total pages
                    let totalPages = Math.ceil(totalItems / pageSize);

                    // ensure current page isn't out of range
                    if (currentPage < 1) {
                        currentPage = 1;
                    } else if (currentPage > totalPages) {
                        currentPage = totalPages;
                    }

                    let startPage, endPage;
                    if (totalPages <= maxPages) {
                        // total pages less than max so show all pages
                        startPage = 1;
                        endPage = totalPages;
                    } else {
                        // total pages more than max so calculate start and end pages
                        let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
                        let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
                        if (currentPage <= maxPagesBeforeCurrentPage) {
                            // current page near the start
                            startPage = 1;
                            endPage = maxPages;
                        } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
                            // current page near the end
                            startPage = totalPages - maxPages + 1;
                            endPage = totalPages;
                        } else {
                            // current page somewhere in the middle
                            startPage = currentPage - maxPagesBeforeCurrentPage;
                            endPage = currentPage + maxPagesAfterCurrentPage;
                        }
                    }

                    // calculate start and end item indexes
                    let startIndex = (currentPage - 1) * pageSize;
                    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

                    // create an array of pages to ng-repeat in the pager control
                    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

                    // return object with all pager properties required by the view
                    return {
                        totalItems: totalItems,
                        currentPage: currentPage,
                        pageSize: pageSize,
                        totalPages: totalPages,
                        startPage: startPage,
                        endPage: endPage,
                        startIndex: startIndex,
                        endIndex: endIndex,
                        pages: pages
                    };
            }
        },
        watch: {
            items() {
                this.setPage(this.initialPage);
            }
        }
    }
</script>