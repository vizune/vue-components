import FormCheckbox from 'Src/components/forms/Checkbox/Checkbox.vue';
import FormRadioButton from 'Src/components/forms/RadioButton/RadioButton.vue';
import FormTextInput from 'Src/components/forms/TextInput/TextInput.vue';
import FormTextArea from 'Src/components/forms/TextArea/TextArea.vue';
import FormSearchBar from 'Src/components/forms/SearchBar/SearchBar.vue';
import FormSelect from 'Src/components/forms/SelectDropdown/SelectDropdown.vue'
import FormFileUpload from 'Src/components/forms/FileUpload/FileUpload.vue';
import FormDatePicker from 'Src/components/forms/DatePicker/DatePicker.vue';
import FormMini from 'Src/components/forms/MiniForm/MiniForm.vue';

export default { 
  title: 'Form Interface' 
}

export const TextInput = () => ({
    components: { FormTextInput },
    template: `<form-text-input>
    First name
    </form-text-input>`
})

export const TextArea = () => ({
    components: { FormTextArea },
    template: `<form-text-area>
    Please provide further details:
    </form-text-area>`
})

export const Checkbox = () => ({
    components: { FormCheckbox },
    template: `<form-checkbox>
    I have read and accept the <a href="#">Terms & Conditions</a>
    </form-checkbox>`
})

export const RadioButton = () => ({
    components: { FormRadioButton },
    template: `<form-radio-button></form-radio-button>`
})

export const SelectDropdown = () => ({
    components: { FormSelect },
    template: `<form-select></form-select>`
})
  
export const SearchBar = () => ({
    components: { FormSearchBar },
    template: `<form-search-bar></form-search-bar>`
})

export const FileUpload = () => ({
  components: { FormFileUpload },
  template: `<form-file-upload>
  Upload your CV
  </form-file-upload>`
})

export const DatePicker = () => ({
  components: { FormDatePicker },
  template: `<form-date-picker>
  Date of Birth
  </form-date-picker>`
})

export const MiniForm = () => ({
  components: { FormMini },
  template: `<form-mini></form-mini>`
})