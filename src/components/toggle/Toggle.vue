<template>
    <label class="Toggle"
    v-bind:class="{ 'Toggle--rounded' : theme === 'rounded' }">
        <input type="checkbox" 
        class="Toggle-checkbox"
        :value="value"
        @input="emitValue">
        <span class="Toggle-slider"></span>
    </label>
</template>

<script>
export default {
    name: 'Toggle',
    props: {
        theme: {
            // Possible themes: "rounded"
            type: String,
            default: null
        },
        value: {
            type: String
        }
    },
    methods: {
        emitValue: function(event) {
            this.$emit('changed', event.target.value)
        }
    }
}
</script>