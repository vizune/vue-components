<template>
    <!-- 
        TO DO:
        on button -> aria-labelledby="[id from tooltip-content]" -> id as prop
        prop -> action = click or hover to activate the tooltip. Class names with CSS :hover or :focus
        aria-hidden or aria-expanded (needs more researching) true / false on tooltip done by Vue
    -->
    <div class="Tooltip"
    v-bind:class="[
        { 'Tooltip--text' : textStyle }, 
        { 'Tooltip--icon' : iconStyle },
        { 'Tooltip--white' : colour === 'white' },
        { 'Tooltip--blue' : colour === 'blue' }]">
        <button class="Tooltip-button"
        type="button"
        v-bind:class="{'Button' : !textStyle && !iconStyle}">
            <span v-bind:class="{ 'sr-only' : iconStyle }">{{buttonText}}</span>
        </button>
        <div class="Tooltip-content" role="tooltip">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: "tooltip",
    props: {
        buttonText: {
            type: String,
            required: true
        },
        textStyle: {
            type: Boolean,
            default: false
        },
        iconStyle: {
            type: Boolean,
            default: false
        },
        colour: {
            type: String
        }
    }
}
</script>