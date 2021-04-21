import TopBar from 'Src/components/header/TopBar.vue';
import TopBarButton from 'Src/components/header/TopBarButton.vue';
import Footer from 'Src/components/footer/Footer.vue';

export default {
  title: 'Header & Footer',
};

export const TopBarVariation1 = () => ({
  components: { 
    TopBar,
    TopBarButton },
  template: `
  <top-bar>
    <div class="flex justify-between item-center w-full">
      <div class="flex">
        <p class="mb-0">Welcome to Right at Home Stockport & Didsbury</p>
        <p class="mx-5 mb-0">|</p>
        <p class="mb-0"><a href="tel:01619109343">0161 9109343</p>
      </div>
      <div class="flex items-center">
        <top-bar-button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: none; stroke: currentColor; stroke-width: 2px; stroke-linecap: round; stroke-linejoin: round;">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
          </svg>
          Request callback
        </top-bar-button>
        <top-bar-button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: none; stroke: currentColor; stroke-width: 2px; stroke-linecap: round; stroke-linejoin: round;">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"></path>
          </svg>
          Download Brochure
        </top-bar-button>
      </div>
    </div>
  </top-bar>
  `,
});

export const TopBarVariation2 = () => ({
  components: { 
    TopBar,
    TopBarButton
  },
  template: `
  <top-bar>
    <div class="flex justify-between item-center w-full">
      <div class="flex">
        <p class="mb-0">Welcome to Right at Home National Site</p>
      </div>
      <div class="flex items-center">
        <top-bar-button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: none; stroke: currentColor; stroke-width: 2px; stroke-linecap: round; stroke-linejoin: round;">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
            <path d="M9 22V12h6v10"></path>
          </svg>
          Find Homecare
        </top-bar-button>
        <top-bar-button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: none; stroke: currentColor; stroke-width: 2px; stroke-linecap: round; stroke-linejoin: round;">
            <path d="M2,12a10,10 0 1,0 20,0a10,10 0 1,0 -20,0"></path>
            <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
          </svg>
          English - UK
        </top-bar-button>
      </div>
    </div>
  </top-bar>
  `,
});

export const TopBarVariation3 = () => ({
  components: { TopBar },
  template: `
  <top-bar>
    <div class="flex justify-end item-center w-full">
        <p class="mb-0"><a href="tel:01513050755">0151 305 0755</a></p>
    </div>
  </top-bar>
  `,
});

export const FooterComponent = () => ({
  components: { Footer },
  template: `<vue-footer></vue-footer>`,
});