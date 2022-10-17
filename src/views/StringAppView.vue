<template>
  <v-container class="bg-gray">
  <v-card
    class="mx-auto"
    max-width="1000"
    variant="outlined"
  >
    <v-card-item>
      <div class="text-outline mb-1">String Manipulation</div>
    
  
  <v-text-field label="String Input" placeholder="Input String Here" variant="outlined" v-model="ftext"></v-text-field>

<v-row>
  <v-col>Number of Text: {{txtcount.length}}</v-col>
  <v-col>Number of Vowels: {{Countvowel}}</v-col>
</v-row>
<v-row>
  <v-col>Number of Consonan: {{Countcons}}</v-col>
  <v-col>Convertion to *: {{convert}}</v-col>
</v-row>
</v-card-item>
<v-card-actions>
  <div class="justify-center">
    <v-btn @click="doCountString">
      RESULT
    </v-btn>
  </div>
</v-card-actions>
</v-card>
</v-container>
</template>

<script setup>
  import {ref} from 'vue'

const ftext=ref('')
const Countvowel=ref(0)
const Countcons=ref(0)
const convert=ref('')
const txtcount=ref(0)

function doCountString(){
 txtcount.value = ftext.value
 Countvowel.value = ftext.value.match(/[aeiou]/gi).length
 Countcons.value = ftext.value.match(/[bcdfghjklmnpqrstvwxyz]/).length
 convert.value = ftext.value.replace(/[aeiou]/gi, '*')
}

</script>
