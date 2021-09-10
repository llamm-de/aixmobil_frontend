<template>
  <MapContainer :marker_list="markers" />
</template>

<script>
import MapContainer from "../components/MapContainer";

export default {
  name: "ScooterTier",

  components: {
    MapContainer,
  },
  data() {
    return {
      markers: [],
    };
  },
  mounted() {
    var ref = this;
    this.fetchData().then((data) => {
      for (let station of data) {
        const longlat = [station.locationLatitude, station.locationLongitude];
        ref.markers.push({ id: station.stationId, longlat: longlat });
      }
    });
  },
  methods: {
    async fetchData(
      url = "https://cms.velocity-aachen.de/backend/app/stations"
    ) {
      const response = await fetch(url, {
        method: "GET",
      });
      return response.json();
    },
  },

  extractMarkersFromData(data) {
    var markers = [];
    for (let station of data) {
      const longlat = [station.locationLatitude, station.locationLongitude];
      markers.push(longlat);
    }
    return markers;
  },
};
</script>