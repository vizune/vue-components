<template>
    <div class="Form">
        <!-- TO DO: Custom Select Dropdown -->
        <div class="Form-row">
            <div class="Form-field">
                <label class="Form-label" for="unique_id">
                    <slot></slot>
                </label>
                <div class="Form-control">
                    <select class="Select">
                        <option class="Select-option" value="sunny">-- Please select --</option>
                        <option class="Select-option" value="sunny">Sunny</option>
                        <option class="Select-option" value="cloudy">Cloudy</option>
                        <option class="Select-option" value="rain">Rain</option>
                        <option class="Select-option" value="snow">Snow</option>
                    </select>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vue-select-dropdown',
        data () {
            return {
            }
        }
    }
</script>