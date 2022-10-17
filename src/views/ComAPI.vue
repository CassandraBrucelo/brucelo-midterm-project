<template>
  <v-container class="bg-black">
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-img
        src="https://img.youtube.com/vi/0pwL89YdqRE/maxresdefault.jpg"
        height="200px"
        cover
      ></v-img>
  
      <v-card-title>
        What is the composition API in Vue?
      </v-card-title>
  
      <v-card-subtitle>
        We need to know...
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          variant="text"
        >
          Explore
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            Composition API is a set of APIs that allows us to author Vue components using imported functions instead of declaring options. It is an umbrella term that covers the following APIs: Reactivity API, e.g. ref() and reactive() , that allows us to directly create reactive state, computed state, and watchers.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-img
        src="https://img.youtube.com/vi/0pwL89YdqRE/maxresdefault.jpg"
        height="200px"
        cover
      ></v-img>
  
      <v-card-title>
        Why is Vue 3 Composition API?
      </v-card-title>
  
      <v-card-subtitle>
        Why...
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          variant="text"
        >
          Explore
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            Vue 3 introduced Composition API which allows developers to write components in a better way. Using this API, developers can group the logical pieces of code together, which in turn helps write readable code. Composition API is a built in feature in Vue 3 and is also available in Vue 2 via @vue/composition-api plugin.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
  </template>

<script>
    export default {
      data: () => ({
        show: false,
      }),
    }
  </script>