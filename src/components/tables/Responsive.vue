<template>
    <div class="ResponsiveTableDemo container">
            <!-- 
                Tables are responsive by default. 
                This is a demo to illustrate responsive functionality on smaller viewport 
            -->
        <div class="Table-wrapper">
            <table class="Table Table--responsive">
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
        name: 'table-responsive',
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

<style lang="scss" scoped>
    .ResponsiveTableDemo {
        // For demo purposes, spacing would typically be controlled by content containers
        .Table-wrapper {
            padding: 2.5rem 1rem;
            width: 320px;
        }

        // Styling to illustrate table in smaller viewports, component sass already handles breakpoints
        .Table-head th {
            font-size: 1.125rem;
            padding: 1.125rem 0.625rem;
        }

        .Table-body td {
            font-size: .875rem;
            padding: 1.125rem 0.625rem;
        }

    }
</style>