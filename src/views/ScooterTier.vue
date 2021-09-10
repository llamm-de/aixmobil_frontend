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
};
</script>
