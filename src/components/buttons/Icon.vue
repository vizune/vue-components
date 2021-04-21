<template>
    <div>
        <button class="Button Button--icon">
            {{iconName}}
            <slot />
        </button>
    </div>
</template>

<script>
import { Icon } from '../icons/Icon';

export default ({
    components: {
        Icon
    },
    props: {
        iconName: string
    },
    computed: {
        iconComponent() {
            //return Vue.component(this.iconName);
        }
    }
})
</script>
