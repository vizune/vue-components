<template>
    <div class="Form">
        <!-- TO DO: Working example of form validation -->
        <div class="Form-row">
            <div class="Form-field">
                <div class="Status">
                    <label for="input_id_1" class="Form-label">
                        <slot></slot>
                    </label>
                    <div class="Form-control">    
                        <input type="text" id="input_id_1" class="Input" name="inputName" placeholder="Text field" value="">
                        <span class="Status-iconContainer"></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="Form-row">
            <div class="Form-field">
                <div class="Status Status--disabled">
                    <label for="input_id_2" class="Form-label">
                        <slot></slot>
                    </label>
                    <div class="Form-control">    
                        <input type="text" id="input_id_2" class="Input" name="inputName" placeholder="Text field" value="" disabled>
                        <span class="Status-iconContainer"></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="Form-row">
            <div class="Form-field">
                <div class="Status Status--active Status--success">
                    <label for="input_id_3" class="Form-label">
                        Input with success
                    </label>
                    <div class="Form-control">    
                        <input type="text" id="input_id_3" class="Input" name="inputName" placeholder="Text field" value="">
                        <span class="Status-iconContainer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="Status-icon feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="Form-row">
            <div class="Form-field">
                <div class="Status Status--active Status--warning">
                    <label for="input_id_4" class="Form-label">
                        Input with warning
                    </label>
                    <div class="Form-control">    
                        <input type="text" id="input_id_4" class="Input" name="inputName" placeholder="Text field" value="">
                        <span class="Status-iconContainer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="Status-icon feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="Form-row">
            <div class="Form-field">
                <div class="Status Status--active Status--danger">
                    <label for="input_id_5" class="Form-label">
                        Input with danger
                    </label>
                    <div class="Form-control">    
                        <input type="text" id="input_id_5" class="Input" name="inputName" placeholder="Text field" value="">
                        <span class="Status-iconContainer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="Status-icon feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="Form-row">
            <div class="Form-field">
                <div class="Status">
                    <label for="input_id_6" class="Form-label">
                        Working validation example (type some text in the input below and click submit)
                    </label>
                    <div class="Form-control">    
                        <input type="text" id="input_id_6" class="Input" name="inputName" placeholder="Text field" value="">
                        <span class="Status-iconContainer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="Status-icon feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    export default {
        name: 'vue-text-input',
        data () {
            return {
            }
        }
    }
</script>