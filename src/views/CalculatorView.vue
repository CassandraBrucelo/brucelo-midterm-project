<template>
  <v-container class="bg-gray">
    <v-card class="mx-auto" max-width="500" variant="outlined">
      <v-card-item>
        <div class="text-outline mb-1">Simple Calculator</div>


        <v-text-field label="First Input" placeholder="0" variant="outlined" v-model.number="fNumber"></v-text-field>
        <v-text-field label="Second Input" placeholder="0" variant="outlined" v-model.number="sNumber"></v-text-field>

        <v-row>
          <v-col>Addition: {{sum}}</v-col>
          <v-col>Subtraction: {{sub}}</v-col>
        </v-row>
        <v-row>
          <v-col>Multiplication: {{mul}}</v-col>
          <v-col>Division: {{quo}}</v-col>
        </v-row>
        <v-row>
          <v-col>Average: {{ave}}</v-col>
        </v-row>
      </v-card-item>
      <v-card-actions>
        <div class="justify-center">
          <v-btn @click="doSum">
            RESULT
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const fNumber = ref(0)
const sNumber = ref(0)
const sum = ref(0)
const sub = ref(0)
const mul = ref(0)
const quo = ref(0)
const ave = ref(0)

function doSum() {
  sum.value = fNumber.value + sNumber.value
  sub.value = fNumber.value - sNumber.value
  mul.value = fNumber.value * sNumber.value
  quo.value = fNumber.value / sNumber.value
  ave.value = (fNumber.value + sNumber.value) / 2
}

</script>
