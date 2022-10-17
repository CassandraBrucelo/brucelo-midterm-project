<template>
    <v-container class="bg-gray">
        <v-card class="mx-auto" max-width="500" variant="outlined">
            <v-card-item>
                <h4 class="text-outline mb-1 text-center">COMPUTATION FOR AREA</h4>
                <v-card-item class="text-center">
                    <div>
                        <h6 class="text-overline">
                            To the user: Greeting Choose a value that works for you when determining the surface area of a shape.
                        </h6>
                        <div>
                            <v-list-item class="font-weight-black">1 : Rectangle</v-list-item>
                            <v-list-item class="font-weight-black">2 : Square</v-list-item>
                            <v-list-item class="font-weight-black">3 : Triangle</v-list-item>
                            <v-list-item class="font-weight-black">4 : Circle</v-list-item>
                        </div>
                        <div class="text-h6 mb-1 text-center">
                            <v-text-field label="Choice" placeholder="Input your CHOICE here!"
                                variant="outlined" hint="just choose any number :D" v-model="ftext"></v-text-field>
                        </div>
                    </div>
                </v-card-item>
            </v-card-item>
        </v-card>
    </v-container>
    <template v-if="ftext == '1'">
        <v-card class="mx-auto" max-width="500" variant="outlined">
            <v-card-item>
                <v-text-field name="side" v-model.number="base" label="Enter the base of rectangle"></v-text-field>
                <v-text-field name="side" v-model.number="height" label="Enter the height of rectangle"></v-text-field>

            <v-btn @click="doAreaofRectangle">Result</v-btn>
                {{areaOfRectangle}}
            </v-card-item>
        
        </v-card>
    </template>

    <template v-if="ftext == '2'">
        <v-card class="mx-auto" max-width="500" variant="outlined">
            <v-card-item>
                <v-text-field name="side" v-model.number="side1" label="Enter the side of square"></v-text-field>

            <v-btn @click="doAreaofSquare">Result</v-btn>
                {{areaOfSquare}}
            </v-card-item>
        
        </v-card>
    </template>

    <template v-if="ftext == '3'">
        <v-card class="mx-auto" max-width="500" variant="outlined">
            <v-card-item>
                <v-text-field name="side" v-model.number="basetri" label="Enter the base of triangle"></v-text-field>
                <v-text-field name="side" v-model.number="heighttri" label="Enter the height of triangle"></v-text-field>

            <v-btn @click="doAreaofTriangle">Result</v-btn>
                {{areaOfTriagle}}
            </v-card-item>
        
        </v-card>
    </template>

    <template v-if="ftext == '4'">
        <v-card class="mx-auto" max-width="500" variant="outlined">
            <v-card-item>
                <v-text-field name="side" v-model.number="radius" label="Enter the radius of circle"></v-text-field>

            <v-btn @click="doAreaofCircle">Result</v-btn>
                {{areaOfCircle}}
            </v-card-item>
        
        </v-card>
    </template>

    <template>

    </template>

</template>

<script setup>
import { ref } from 'vue'

const ftext = ref('')
const height=ref(0)
const base=ref(0)
const side1=ref(0)
const heighttri=ref(0)
const basetri=ref(0)
const radius=ref(0)

const areaOfRectangle=ref(0)
const areaOfSquare=ref(0)
const areaOfTriagle=ref(0)
const areaOfCircle=ref(0)

function doAreaofRectangle(){
    return areaOfRectangle.value=base.value*height.value
}
function doAreaofSquare(){
    return areaOfSquare.value=side1.value*side1.value
}
function doAreaofTriangle(){
    return areaOfTriagle.value=basetri.value*heighttri.value*1/2
}
function doAreaofCircle(){
    return areaOfCircle.value=radius.value*3.142
}




</script>