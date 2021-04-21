import Vue from 'vue';

// Documentation: https://www.npmjs.com/package/@storybook/addon-knobs //
import { withKnobs, text, boolean, number, select, color } from '@storybook/addon-knobs';

import * as Icons from 'Src/components/icons/Icon.vue';

Object.keys(Icons).map(iconName => {
    return Vue.component(iconName);
});

export default { 
  title: 'Icons',
  decorators: [withKnobs],
    parameters: {
        options: {
            panelPosition: 'right',
            selectedAddonPanel: 'storybooks/storybook-addon-knobs'
        }
    },
}

export const IconList = () => ({
    components: {Icons},
    //template: '<icon-list></icon-list>',
    props: {
        color: {
            type: String,
            default: color('Color', '#007fff'),
        },
        width: {
            type: Number,
            default: number('Width (px)', 80, {
              range: true,
              min: 20,
              max: 200,
              step: 1,
            }),
        },
        height: {
            type: Number,
            default: number('Height (px)', 80, {
              range: true,
              min: 20,
              max: 200,
              step: 1,
            }),
        },
    },
    render(h) {
        return (
          <div class="Icon-list">
            {Object.keys(Icons).map(iconName => {
              if (iconName !== 'default')
                return (
                  <div class="Icon-item">
                    {h(Icons[iconName], { props: { width: this.width, height: this.height, color: this.color } })}
                    <span class="Icon-label">{iconName}</span>
                  </div>
                );
            })}
          </div>
        );
    },
})