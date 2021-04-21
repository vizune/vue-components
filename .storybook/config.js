import { configure, addParameters } from '@storybook/vue';

import Vue from 'vue';

// Storybook theme
import testTheme from './testTheme';

// Import global styles
import 'Src/assets/css/storybook.scss';

addParameters({
  options: {
    theme: testTheme,
  }
});

configure(require.context('../src/stories', true, /\.stories\.js$/), module);
