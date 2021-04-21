<template>
    <div class="Form">
        <div class="Form-row">
            <div class="Form-field">
            <div class="text-field">
                <label for="input_id" class="Form-label">
                    <slot></slot>
                </label>
                <div class="Form-control"> 
                    <div class="MiniForm">
                        <input type="text" id="input_id" class="MiniForm-input" name="inputName" placeholder="Email address..." value="">
                        <button type="submit" class="MiniForm-submit Button Button--round Button--primary Button--icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </button>
                    </div>
                </div>
            </div>  
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vue-mini-form',
        data () {
            return {
            }
        }
    }
</script>