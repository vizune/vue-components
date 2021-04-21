<template>
    <article class="Tabs-item"
    role="tabpanel" 
    :id="tabId"
    v-bind:class="{ 'is-active' : active }">
        {{tabId}}
        <slot />
    </article>
</template>

<script>
export default {
    props: {
        tabId: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        }
    }
}
</script>