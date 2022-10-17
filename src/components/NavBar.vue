<template>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://avatars.githubusercontent.com/u/114380382?s=400&u=a140650f9517040ac09a4a77be16c827eafd0a21&v=4"
          title="Cassandra Brucelo"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="Home" href="/dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi-calculator" title="Simple Clculator" value="cal" href="/calculator"></v-list-item>
          <v-list-item prepend-icon="mdi-alphabetical-variant" title="String Manipulation" value="stringman" href="/string"></v-list-item>
          <v-list-item prepend-icon="mdi-chart-areaspline" title="Compute the Area" value="compa" href="/area"></v-list-item>
          <v-list-item prepend-icon="mdi-api" title="Axios API" value="compa" href="/axios"></v-list-item>
          <v-list-item prepend-icon="mdi-vuetify" title="About Vuetify" value="aboutv" href="/aboutvuetify"></v-list-item>
          <v-list-item prepend-icon="mdi-api" title="Composition API" value="abouta" href="/composition"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 10px"></v-main>
</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'Simple Clculator', icon: 'mdi-calculator' },
          { title: 'String Manipulation', icon: 'mdi-alphabetical-variant' },
          { title: 'Compute the Area', icon: 'mdi-chart-areaspline' },
          { title: 'Axios API', icon: 'mdi-api' },
          { title: 'About Vuetify', icon: 'mdi-vuetify' },
          { title: 'Composition API', icon: 'mdi-api' },
        ],
        rail: true,
      }
    },
  }
</script>