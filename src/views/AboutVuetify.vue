<template>
<v-container class="bg-black">
    <v-row no-gutters>
      <v-col>
        
        <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://syndicode.com/wp-content/uploads/2019/08/vuetify-1.png"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      WHY VUETIFY?
    </v-card-title>

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
            Vuetify is developed exactly according to Material Design specification with every component meticulously crafted to be modular, responsive, and performant. Customize your application with unique and dynamic Layouts and customize the styles of your components using SASS variables
        </v-card-text>
        </div>
    </v-expand-transition>
  </v-card>
      </v-col>
      <v-col>
        
        <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/vuet-dark_870x220.png?sfvrsn=83bce1fb_3"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      FEATURES GUIDELINES
    </v-card-title>

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
            Learn more about the inner workings of Vuetify and become a skilled v-developer with our detailed feature guides. Each guide is designed to teach you how to get the most out of your development experience with information on: how to build responsive pages using Layouts, how to customize the style of your application with SASS variables, and how to slim down your application’s package size via Treeshaking
        </v-card-text>
        </div>
    </v-expand-transition>
  </v-card>
      </v-col>
    </v-row>
    <br>
    <v-row no-gutters>
      <v-col>
        
        <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn-ak.f.st-hatena.com/images/fotolife/y/yfp5521/20180730/20180730160701.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
        Is Vuetify better?
    </v-card-title>

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
            According to the StackShare community, Bootstrap has a broader approval, being mentioned in 7047 company stacks & 1101 developers stacks; compared to Vuetify, which is listed in 36 company stacks and 32 developer stacks.
        </v-card-text>
        </div>
    </v-expand-transition>
  </v-card>
      </v-col>
      <v-col>
       
        <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://th.bing.com/th/id/OIP.M4M-8zO5fpgv9LnRyP1NDgHaEe?pid=ImgDet&rs=1"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
        Is Vuetify a plugin?
    </v-card-title>

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
            To install the vuetify plugin simply navigate to your application folder and add Vuetify. If you run into any issues, reach out to us in our Discord Community server.
        </v-card-text>
        </div>
    </v-expand-transition>
  </v-card>
      </v-col>
      <v-col>
        
        <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://blog.techlab-xe.net/wp-content/uploads/2020/10/hello-vuetify.png"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      WHY VUETIFY?
    </v-card-title>

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
            Vuetify is developed exactly according to Material Design specification with every component meticulously crafted to be modular, responsive, and performant. Customize your application with unique and dynamic Layouts and customize the styles of your components using SASS variables
        </v-card-text>
        </div>
    </v-expand-transition>
  </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
      data: () => ({
        show: false,
      }),
    }
  </script>