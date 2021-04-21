<template>
    <div class="Form">
        <div class="Form-row">
            <div class="Form-field">
                <label class="Form-label" for="radioList">
                    Please select from the options below:
                </label>
                <div class="Form-control">
                    <div class="Radio-list" id="radioList">
                        <label class="Radio">
                            <input type="radio" class="Radio-control" name="radio-group" id="radioList_0" value="Yes">
                            <span class="Radio-check"></span>
                            <label class="Radio-label" for="radioList_0">Yes</label>
                        </label>
                        <label class="Radio">
                            <input type="radio" class="Radio-control" name="radio-group" id="radioList_1" value="No">
                            <span class="Radio-check"></span>
                            <label class="Radio-label" for="radioList_1">No</label>
                        </label>
                        <label class="Radio">
                            <input type="radio" class="Radio-control" name="radio-group" id="radioList_2" value="Disabled" disabled>
                            <span class="Radio-check"></span>
                            <label class="Radio-label" for="radioList_2">Disabled</label>
                        </label>
                    </div>
                </div>
            </div>  
        </div>
        <div class="Form-row">
            <div class="Form-field">
                <label class="Form-label" for="radioListInline">
                    Please select from the options below:
                </label>
                <div class="Form-control">
                    <div class="Radio-list Radio-list--inline" id="radioListInline">
                        <label class="Radio">
                            <input type="radio" class="Radio-control" name="radio-groupInline" id="radioListInline_0" value="Yes">
                            <span class="Radio-check"></span>
                            <label class="Radio-label" for="radioListInline_0">Yes</label>
                        </label>
                        <label class="Radio">
                            <input type="radio" class="Radio-control" name="radio-groupInline" id="radioListInline_1" value="No">
                            <span class="Radio-check"></span>
                            <label class="Radio-label" for="radioListInline_1">No</label>
                        </label>
                        <label class="Radio">
                            <input type="radio" class="Radio-control" name="radio-groupInline" id="radioListInline_2" value="Disabled" disabled>
                            <span class="Radio-check"></span>
                            <label class="Radio-label" for="radioListInline_2">Disabled</label>
                        </label>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vue-radio-button',
        data () {
            return {
            }
        }
    }
</script>