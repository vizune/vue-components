<template>
  <div class="mapContainer" ref="mapContainer"></div>
</template>

<script>
import gmapsInit from "./gmaps.js";

export default {
  props: {
    item: Object
  },
  async mounted() {
    const google = await gmapsInit();
    const map = new google.maps.Map(this.$refs["mapContainer"], {
      center: { lat: this.item.focalPoint.lat, lng: this.item.focalPoint.lng },
      zoom: this.item.zoom
    });

    const hasMarkers = this.item.markers && this.item.markers.length;
    
    if (hasMarkers) {
      this.item.markers.forEach(marker => {
        new google.maps.Marker({
          position: new google.maps.LatLng(
            marker.coordinates.lat,
            marker.coordinates.lng
          ),
          map: map,
          title: marker.heading
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mapContainer {
  margin: 20px 0 20px 0;
  height: 600px;
}
</style>