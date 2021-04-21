<template>
  <div>
    <div class="GoogleMap" ref="googleMap"></div>
    <div class="text-right">
      <button class="Button--unstyled Button--map text-right" @click="recenterMap()">Recenter<svg class="Icon"><use xlink:href="/assets/icons/_icons.svg#target" /></svg></button>
    </div>
  </div>
</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  data() {
    return {
      google: null,
      map: null,
      bounds: null,
      mapLocation: null,
      markers: [],
      defaultIcon: null,
    }
  },

  props: {
    mapConfig: Object,
    apiKey: String,
    location: Object,
    activeMarker: Object,
    markerIconUrl: String,
    activeMarkerIconUrl: String,
    currentFilter: String,
    currentKeyword: String,
    relatedMarkerIconUrl: String,
    activeMarker: Object,
    previousMarker: Object,
    isActive: Boolean
  },

  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey,
      libraries: ['places']
    })
    this.google = googleMapApi
    this.defaultIcon = {
      url: this.markerIconUrl,
      scaledSize: new google.maps.Size(50, 50),
    }
    this.activeIcon = {
      url: this.activeMarkerIconUrl,
      scaledSize: new google.maps.Size(50, 50),
    }
    this.mapLocation = new google.maps.LatLng(this.location.lat, this.location.lng)
    this.initializeMap()
    if (this.currentFilter) {
      this.getNearbyPlaces(this.mapLocation)
    }
  },

  watch: { 
    currentFilter: function() {
      this.getNearbyPlaces(this.mapLocation);
    },
    activeMarker: function(val) {
      if(this.activeMarker)
       this.setMarker(this.activeMarker, this.activeIcon, 100);
    },
    previousMarker: function(val)
    {
      if(this.previousMarker)
        this.setMarker(this.previousMarker);
    }
  },

  methods: {
    setMarker(marker, icon = this.defaultIcon, zIndex = 0) {
      marker.setIcon(icon);
      marker.setZIndex(zIndex)
    },

    initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(
        mapContainer, this.mapConfig
      );
      this.bounds = new google.maps.LatLngBounds();
      let marker = new google.maps.Marker({
            position: this.mapLocation,
            map: this.map,
            title: 'Development',
        });
    },

    getNearbyPlaces(position) {
      let request = {
        location: position,
        rankBy: google.maps.places.RankBy.DISTANCE,
        type: this.currentFilter,
        keyword: this.currentKeyword
      }
      let service = new google.maps.places.PlacesService(this.map);
      service.nearbySearch(request, this.nearbyCallback);
    },

    nearbyCallback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        this.markers.forEach(marker => {
          marker.setMap(null);
        })
        this.markers = [];
        this.places = [];
        this.createMarkers(results);
        this.emitPlaceData(results);
      }
    },

    createMarkers(places) {
      places.forEach(place => {
        let marker = new google.maps.Marker({
            position: place.geometry.location,
            map: this.map,
            title: place.name,
            icon: this.defaultIcon,
            reference: place.reference
        });
      
        this.bounds.extend(place.geometry.location);
        
        this.markers.push(marker);
        this.places.push(place);
        this.google.maps.event.addListener(marker, 'click', () => {
          this.emitMarkerClick(marker);
        });
      });
      
      this.emitMarkerData(this.markers);
      this.map.fitBounds(this.bounds);

      const idleListener = this.google.maps.event.addListener(this.map, 'idle', () => {
          if (this.map.getZoom() < 14) 
          this.map.setZoom(14);
          this.map.setCenter(this.mapLocation);
          this.google.maps.event.removeListener(idleListener);
        });
    },

    recenterMap() {
      this.map.setCenter(this.mapLocation);      
    },

    emitPlaceData(places) {
      this.$emit('create-details', places);
    },

    emitMarkerData(markers) {
      this.$emit('get-current-markers', markers);
    },

    emitMarkerClick(marker) {
      marker.icon.url = this.activeMarkerIcon;
      this.$emit('marker-click', marker);
    },
  }
}
</script>

<style scoped>
  .GoogleMap {
    width: 100%;
    min-height: 600px;
  }
</style>