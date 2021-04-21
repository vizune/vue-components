<template>
    <div class="DarkTableDemo">
        <div class="container">
            <div class="Table-wrapper">
                <table class="Table Table--dark">
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
                            class="Table-row">
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
        </div>
    </div>
</template>

<script>
    import data from "./data.json"
    export default {
        name: 'table-dark',
        data () {
            return {
                headings: data.headings,
                data: data.items
            }
        },
        computed: {
        }
    }
</script>

<style lang="scss">
    // For demo purposes, background-color would typically be controlled by page theme
    .DarkTableDemo {
        background: #494A49;
        padding-bottom: 1.5rem;
    }
</style>