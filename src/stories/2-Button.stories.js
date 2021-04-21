import ButtonDefault from 'Src/components/buttons/Default.vue';
import ButtonSoftEdge from 'Src/components/buttons/SoftEdge.vue';
import ButtonRounded from 'Src/components/buttons/Rounded.vue';
import ButtonShadow from 'Src/components/buttons/Shadow.vue';

export default {
  title: 'Buttons',
};

export const Default = () => ({
  components: { ButtonDefault },
  template: '<vue-button-default @click="action">Default</vue-button-default>',
});

export const SoftEdge = () => ({
  components: { ButtonSoftEdge },
  template: '<vue-button-soft-edge></vue-button-soft-edge>',
});

// TO DO: Refactor hover transition for rounded button //
export const Rounded = () => ({
  components: { ButtonRounded },
  template: '<vue-button-rounded></vue-button-rounded>',
});

export const Shadow = () => ({
  components: { ButtonShadow },
  template: '<vue-button-shadow></vue-button-shadow>',
});

