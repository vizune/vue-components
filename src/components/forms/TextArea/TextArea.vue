<template>
    <div class="Form">
        <div class="Form-row">
            <div class="Form-field">
                <label class="Form-label" for="unique_id">
                    <slot></slot>
                </label>
                <div class="Form-control">
                    <textarea rows="4" cols="50" id="unique_id" class="Textarea" name="Textarea" placeholder="Text area" value=""></textarea>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vue-textarea',
        data () {
            return {
            }
        }
    }
</script>