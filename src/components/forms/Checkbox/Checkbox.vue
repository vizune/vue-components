<template>
    <div class="Form">
        <div class="Form-row">
            <div class="Form-field">
                <div class="Form-control">
                    <div class="Checkbox Checkbox--large Checkbox--alignCenter">
                        <input class="Checkbox-control" type="checkbox" id="exampleCheck" name="exampleCheck">
                        <label class="Checkbox-check" for="exampleCheck"></label>
                        <label class="Checkbox-label" for="exampleCheck">
                            <slot></slot>
                        </label>
                    </div>
                </div>
            </div>  
        </div>
        <div class="Form-row">
            <div class="Form-field">
                <label class="Form-label" for="checkboxList">Which fruit do you like?</label>
                <div class="Checkbox-list" id="checkboxList">
                    <div class="Checkbox-item">
                        <div class="Checkbox">
                            <input class="Checkbox-control" type="checkbox" id="checkboxList_0" name="checkboxList">
                            <label class="Checkbox-check" for="checkboxList_0"></label>
                            <label class="Checkbox-label" for="checkboxList_0">
                                Apple
                            </label>
                        </div>
                    </div>
                    <div class="Checkbox-item">
                        <div class="Checkbox">
                            <input class="Checkbox-control" type="checkbox" id="checkboxList_1" name="checkboxList">
                            <label class="Checkbox-check" for="checkboxList_1"></label>
                            <label class="Checkbox-label" for="checkboxList_1">
                                Banana
                            </label>
                        </div>
                    </div>
                    <div class="Checkbox-item">
                        <div class="Checkbox">
                            <input class="Checkbox-control" type="checkbox" id="checkboxList_2" name="checkboxList">
                            <label class="Checkbox-check" for="checkboxList_2"></label>
                            <label class="Checkbox-label" for="checkboxList_2">
                                Oranges
                            </label>
                        </div>
                    </div>
                    <div class="Checkbox-item">
                        <div class="Checkbox">
                            <input class="Checkbox-control" type="checkbox" id="checkboxList_3" name="checkboxList" disabled>
                            <label class="Checkbox-check" for="checkboxList_3"></label>
                            <label class="Checkbox-label" for="checkboxList_3">
                                Disabled
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Form-row">
            <div class="Form-field">
                <label class="Form-label" for="checkboxList">Which fruit do you like?</label>
                <div class="Checkbox-list Checkbox-list--inline" id="checkboxList2">
                    <div class="Checkbox-item">
                        <div class="Checkbox">
                            <input class="Checkbox-control" type="checkbox" id="checkboxList2_0" name="checkboxList">
                            <label class="Checkbox-check" for="checkboxList2_0"></label>
                            <label class="Checkbox-label" for="checkboxList2_0">
                                Apple
                            </label>
                        </div>
                    </div>
                    <div class="Checkbox-item">
                        <div class="Checkbox">
                            <input class="Checkbox-control" type="checkbox" id="checkboxList2_1" name="checkboxList">
                            <label class="Checkbox-check" for="checkboxList2_1"></label>
                            <label class="Checkbox-label" for="checkboxList2_1">
                                Banana
                            </label>
                        </div>
                    </div>
                    <div class="Checkbox-item">
                        <div class="Checkbox">
                            <input class="Checkbox-control" type="checkbox" id="checkboxList2_2" name="checkboxList">
                            <label class="Checkbox-check" for="checkboxList2_2"></label>
                            <label class="Checkbox-label" for="checkboxList2_2">
                                Oranges
                            </label>
                        </div>
                    </div>
                    <div class="Checkbox-item">
                        <div class="Checkbox">
                            <input class="Checkbox-control" type="checkbox" id="checkboxList2_3" name="checkboxList" disabled>
                            <label class="Checkbox-check" for="checkboxList2_3"></label>
                            <label class="Checkbox-label" for="checkboxList2_3">
                                Disabled
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vue-checkboxes',
        data () {
            return {
            }
        }
    }
    
</script>