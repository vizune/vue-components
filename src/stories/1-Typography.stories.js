import Typography from './typography';

export default {
  title: 'Typography',
};

export const toStorybook = () => ({
  components: { Typography },
  template: '<typography></typography>',
});
