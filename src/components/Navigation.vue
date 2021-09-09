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
        href="https://github.com/llamm-de/aachen_mobil_frontend"
        target="_blank"
        text
      >
        <v-icon large>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Drawer side menu -->

    <v-navigation-drawer clipped class="grey lighten-3" v-model="drawer" app>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item
          link
          router
          :to="link.route"
          v-for="link in drawer_links"
          :key="link.text"
        >
          <v-list-item-icon>
            <v-icon class="large">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-h6">{{ link.text }}</v-list-item-title>
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
      drawer_links: [
        { icon: "mdi-school", text: "VOI", route: "/studentlist" },
        { icon: "mdi-home", text: "TIER", route: "/rooms" },
      ],
    };
  },
};
</script>
