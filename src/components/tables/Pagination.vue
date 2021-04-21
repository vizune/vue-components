<template>
    <div class="container">
        <div class="Table-wrapper">
            <table class="Table">
                <colgroup>
                    <col>
                    <col>
                    <col>
                    <col>
                    <col>
                    <col>
                </colgroup>
                <thead class="Table-head">
                    <tr class="Table-row">
                        <th v-for="heading in headings" v-bind:key="heading">
                            {{heading}}
                        </th>
                    </tr>
                </thead>
                <tbody class="Table-body">
                    <tr v-for="item in data" 
                        v-bind:key="item" 
                        class="Table-row"
                        ref="dataRow">
                        <td v-for="cell in item" v-bind:key="cell">
                            {{cell}}
                        </td>
                        <td>
                            <button type="button">Edit</button>
                            <button type="button">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <pagination :items="items" @changePage="onChangePage" :styles="customStyles" :labels="customLabels"></pagination>
    </div>
</template>

<script>
    import data from "./data-large.json"
    import pagination from "../pagination/Pagination"

    export default {
        name: 'table-pagination',
        components: {
            pagination
        },
        data () {
            return {
                headings: data.headings,
                data: data.items,
                page: 1,
                items: [...this.$refs["dataRow"]],
                customLabels: {
                    first: '<<',
                    last: '>>',
                    previous: '<',
                    next: '>'
                },
                customStyles: {
                    ul: {
                            border: '2px solid red'
                        },
                    li: {
                            display: 'inline-block',
                            border: '2px dotted green'
                        },
                    a: {
                            color: 'blue'
                        }
                }
            }
        },
        methods: {
            onChangePage(page) {
                // update page of items
                this.page = page;
            }
        }
    }
</script>
