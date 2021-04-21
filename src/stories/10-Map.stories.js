import Map from 'Src/components/map/Map.vue';

export default {
    title: 'Map',
};


const data = {
    "zoom": 5,
    "focalPoint": {
      "lat": 53.48824,
      "lng": -2.23311
    },
    "markers": [
      {
        "heading": "Manchester Victoria",
        "coordinates": {
          "lat": 53.487688,
          "lng": -2.240652
        },
        "isValid": true,
        "documentType": "mapMarker",
        "key": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "isValid": true,
    "documentType": "map",
    "key": "00000000-0000-0000-0000-000000000000"
  };


export const MapMain = () => ({
    components: { Map },
    template: `<Map :item='${JSON.stringify(data)}' />`,
});








