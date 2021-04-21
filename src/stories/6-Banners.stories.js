import EmergencyBanner from 'Src/components/banners/EmergencyBanner/EmergencyBanner.vue';
import ImageOverlay from 'Src/components/banners/FullWidthImage.vue';

export default {
  title: 'Banners',
};

export const EmergencyBannerComponent = () => ({
  components: { EmergencyBanner },
  template: `<emergency-banner>Covid-19 Update</emergency-banner>`,
});

export const ImageOverlayComponent = () => ({
  components: { ImageOverlay },
  template: `<image-overlay>Covid-19 Update</image-overlay>`,
});