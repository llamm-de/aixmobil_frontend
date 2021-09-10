<template>
  <nav>
    <v-app-bar clipped-left app color="primary" dark>
      <v-app-bar-nav-icon dark @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        @click="$router.push('/')"
        class="font-weight-bold text-h4"
        >AixMobil</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/llamm-de/aixmobil_frontend"
        target="_blank"
        text
      >
        <v-icon large>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Drawer side menu -->

    <v-navigation-drawer clipped class="grey lighten-3" v-model="drawer" app>
      <!-- E-Scooter -->
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-title class="text-subtitle-2">Scooter</v-list-item-title>
        </v-list-item>
        <v-list-item
          link
          router
          :to="link.route"
          v-for="link in scooter_links"
          :key="link.text"
        >
          <v-list-item-icon>
            <v-icon class="large">mdi-scooter-electric</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-subtitle-1">{{
            link.text
          }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <!-- E-Bikes -->
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-title class="text-subtitle-2">E-Bike</v-list-item-title>
        </v-list-item>
        <v-list-item
          link
          router
          :to="link.route"
          v-for="link in bike_links"
          :key="link.text"
        >
          <v-list-item-icon>
            <v-icon class="large">mdi-bicycle-electric</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-subtitle-1">{{
            link.text
          }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <!-- Carsharing -->
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-title class="text-subtitle-2"
            >Carsharing</v-list-item-title
          >
        </v-list-item>
        <v-list-item
          link
          router
          :to="link.route"
          v-for="link in car_links"
          :key="link.text"
        >
          <v-list-item-icon>
            <v-icon class="large">mdi-car</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-subtitle-1">{{
            link.text
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      drawer: false,
      scooter_links: [
        { text: "Tier", route: "/scooter/tier" },
        { text: "Voi", route: "/scooter/voi" },
        { text: "Lime", route: "/scooter/lime" },
        { text: "Dott", route: "/scooter/dott" },
      ],
      bike_links: [{ text: "Velocity", route: "/bike/velocity" }],
      car_links: [{ text: "Cambio", route: "/car/cambio" }],
    };
  },
};
</script>
