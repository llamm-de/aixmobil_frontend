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
      markers: [
        { id: "m1", longlat: [50.775555, 6.083611] },
        { id: "m2", longlat: [50.775555, 6.082011] },
      ],
    };
  },
  mounted() {
    this.fetchData().then((data) => {
      console.log(data);
    });
  },
  methods: {
    async fetchData(
      url = "https://platform.tier-services.io/v1/vehicle?zoneId=AACHEN"
    ) {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-Api-Key": "bpEUTJEBTf74oGRWxaIcW7aeZMzDDODe1yBoSxi2",
        },
      });
      return response.json();
    },
  },
};
</script>
