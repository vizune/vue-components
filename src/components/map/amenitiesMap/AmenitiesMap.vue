<template>
  <div ref="mainContainer" class="AmenitiesMap u-panoramic">
    <div class="row no-gutters">
      <div class="col-lg-7">
      <GoogleMapLoader
        :mapConfig="mapConfig"
        :apiKey="apiKey"
        :location="developmentMarker.position"
        :activeMarker="activeMarker"
        :previousMarker="previousMarker"
        :markerIconUrl="markerIconUrl"
        :activeMarkerIconUrl="activeMarkerIconUrl"
        :currentFilter="activeFilter"
        :currentKeyword="activeKeyword"
        @create-details="displayDetails"
        @get-current-markers="getCurrentMarkers"
        @marker-click="getClickedMarker"
      />
      </div>
      <div class="col-lg-5 px-3 px-md-2">
        <div class="AmenitiesMap-filterContent">
          <div class="AmenitiesMap-placeFilters">
            <div class="AmenitiesMap-filterItem" v-for="(item, index) in amenities" :key="index">
              <div class="AmenitiesMap-filterPill" :class="{ 'is-active-filter' : index === 0 }" data-radio-wrapper>
                <input type="radio" class="AmenitiesMap-filterCheckbox" :checked="index === 0" :id="item.value" name="amenity" :value="item.value" ref="filterRadio" @click="updateFilter(item, $event);" >
                <label class="AmenitiesMap-filterLabel" :for="item.value">{{item.title}}</label><br>
              </div>
            </div>
          </div>
          <div class="AmenitiesMap-placeDetails" data-place-details>
            <div class="AmenitiesMap-detailsItems">
              <div class="AmenitiesMap-detailsItem" v-for="(item, index) in amenityDetails" :key="index" @click="detailClickHandler(item, $event);" :data-details-item="item.reference">
                <span><h4 class="AmenitiesMap-heading" data-details-item-heading>{{item.name}}</h4></span>
                <span><p class="mb-0">{{item.vicinity}}</p></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMapLoader from '../GoogleMapLoader.vue'
import { mapSettings } from './mapSettings'

export default {
  components: {
    GoogleMapLoader,
  },
  data() {
    return {
      apiKey: this.dataset.apiKey,
      developmentMarker: { 
        id: 'development', 
        position: { 
          lat:Number(this.dataset.lat), 
          lng:Number(this.dataset.lng) 
        } 
      },
      data: null,
      amenities: [
        {
          title: 'Restaurants',
          value: 'restaurant',
          keyword: 'restaurant'
        },
        {
          title: 'Bars',
          value: 'bar',
          keyword: 'bar'
        },
        {
          title: 'Shops',
          value: 'store',
          keyword: 'shop'
        },
        {
          title: 'Transport',
          value: 'train_station',
          keyword: 'train'
        },
        {
          title: 'Schools',
          value: 'school',
          keyword: 'school'
        },
        {
          title: 'Gyms',
          value: 'gym',
          keyword: 'gym'
        }
      ],
      markerIconUrl: '/assets/icons/inactive-pin.svg',
      activeMarkerIconUrl: '/assets/icons/active-pin.svg',
      activeFilter: 'restaurant',
      activeKeyword: 'restaurant',
      amenityDetails: [],
      currentMarkers: [],
      previousMarker: null,
      activeMarker: null,
      isActive: false,
      clickedMarker: null,
      selectedPlace: null,
      isMobile: false
    }
  },
  props: {
    'dataset' : {
    type: Object,
          required: true,
          default: []
    },
  },
  computed: {
    mapConfig () {
      return {
        ...mapSettings,
        center: this.mapCenter
      }
    },
    mapCenter() {
      return this.developmentMarker.position;
    }
  },
  mounted() {
    window.onresize = this.breakpointEval;
    this.breakpointEval();
  },
  methods: {
    breakpointEval() {
      let mql = window.matchMedia('(max-width: 991px)');
      this.isMobile = mql.matches;
    },
    updateFilter(item, event) {
      let wrappers = document.querySelectorAll("[data-radio-wrapper");
      let currentWrapper = event.target.closest("[data-radio-wrapper");

      this.activeFilter = item.value;
      this.activeKeyword = item.keyword;
      
      wrappers.forEach((item) => {
        item.classList.remove("is-active-filter");
      })
      currentWrapper.classList.add("is-active-filter");
    },

    displayDetails(event) {
      this.amenityDetails = event;
    },

    detailClickHandler(item, event) {
      this.toggleSelected(item.reference);
      this.scrollToMap();
    },

    resetSelected() {
      this.selectedPlace = null;
      this.previousMarker = null;
      this.activeMarker = null;

      //Reset Selected Item (if any)
      const selectedItem = document.getElementsByClassName("is-active-detail")[0];

      if(selectedItem)
        selectedItem.classList.remove("is-active-detail");

      //Reset List Scroll
      const placeDetailsWrapper = document.querySelector("[data-place-details]");

      this.scrollElement(placeDetailsWrapper, 0);
    },

    toggleSelected(key, scrollList=false) {

      const selectedItem = document.getElementsByClassName("is-active-detail")[0];
      const itemWrapper = document.querySelector(`[data-details-item='${CSS.escape(key)}']`);
      const targetMarker = this.currentMarkers.find(el => el.reference.includes(key));

      if(this.selectedPlace === key)
        return;

      const selectedMarker = this.selectedPlace !== null
        ? this.currentMarkers.find(el => el.reference.includes(this.selectedPlace))
        : null;

      if(selectedMarker)
      {
        //Toggle OFF previously selected item and icon
        selectedItem.classList.remove("is-active-detail");
        this.previousMarker = selectedMarker;
      }      

      //Toggle ON currently selected item and icon
      itemWrapper.classList.add("is-active-detail");
      this.activeMarker = targetMarker;

      this.selectedPlace = key;

      if(scrollList)
      {
        const scrollTop = itemWrapper.offsetTop - (itemWrapper.offsetHeight + 39);

        this.scrollElement(itemWrapper.parentElement, scrollTop);
      }       
    },

    scrollElement(element, top){
      if(element && 'scroll' in window)
      {
        element.scroll({
          top: top,
          behavior: 'smooth'
        });
      }
    },

    markerClickHandler(item) {
      this.toggleSelected(item.reference, true);
    },

    getCurrentMarkers(event) {
      this.resetSelected();

      this.currentMarkers = event;
    },

    getClickedMarker(event) {
      this.clickedMarker = event;
      this.markerClickHandler(this.clickedMarker);
    },

    scrollToMap() {
      if(this.isMobile) {
        this.$refs.mainContainer.scrollIntoView({behavior:'smooth'});
      }
    }
  }
}
</script>