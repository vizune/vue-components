<template>
    <div class="container">
        <div class="Table-wrapper">
            <table class="Table Table--stripes">
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
</template>

<script>
    import data from "./data.json"
    export default {
        name: 'table-stripes',
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