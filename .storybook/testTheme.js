import { create } from '@storybook/theming/create';

export default create({
    base: 'dark',
  
    colorPrimary: '#3544b1',
    colorSecondary: '#64E70F',
  
    // UI
    //appBg: '#F7F7F7',
    appContentBg: '#FAFAFA',
    //appBorderColor: '#D5D1D1',
    appBorderRadius: 5,
  
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
  
    // Text colors
    textColor: '#fff',
    //textInverseColor: 'rgba(255,255,255,0.8)',
  
    // Toolbar default and active colors
    barTextColor: '#fff',
    //barSelectedColor: '#FFF',
    barBg: '#3544b1',
  
    // Form colors
    inputBg: '#F9F7F4',
    //inputBorder: '#D5D1D1',
    inputTextColor: '#333',
    //inputBorderRadius: 4,
  
    brandTitle: 'Umbraco Umbrella',
    //brandUrl: 'https://example.com',
    brandImage: 'https://via.placeholder.com/150'
  });