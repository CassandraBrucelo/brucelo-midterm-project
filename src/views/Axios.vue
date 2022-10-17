<template>
        <section id="download">
    <h1 class="text-center subtitle-2">AXIOS API</h1>
    <h2 class="text-center">FAMOUS GAME NOW</h2>
    <v-img
        src="https://sirus.b-cdn.net/wp-content/uploads/2021/08/call-of-duty-vanguard-01.jpg"
        height="350px"
        cover
      ></v-img>
 
    <h2 class="text-center text-red">ID: {{covidData.id}} </h2>
    <h2 class="text-center text-red">TITLE: {{covidData.title}} </h2>
    <h2 class="text-center text-blue">THUMBNAIL: {{covidData.thumbnail}} </h2>
    <h2 class="text-center text-red">STATUS: {{covidData.status}} </h2>
    <h3 class="text-center">SHORT DESCRIPTION: {{covidData.short_description}} </h3>
    <br>
    <h4 class="l-12px border">DESCRIPTION: {{covidData.description}} </h4>
    <h3 class="text-center text-green">GENRE: {{covidData.genre}} </h3>
    <h3 class="text-center text-green">PLATFORM: {{covidData.platform}} </h3>
    <h3 class="text-center text-green">PUBLISH: {{covidData.publisher}} </h3>
    <h3 class="text-center text-green">DEVELOPER: {{covidData.developer}} </h3>
    <h3 class="text-center text-green">DEVELOPER: {{covidData.release_date}} </h3>

    <v-img
        src="https://static3.gamerantimages.com/wordpress/wp-content/uploads/2019/11/call-of-duty-mobile-characters-1400x700-2.jpg"
        height="350px"
        cover
      ></v-img>
</section>
</template>

<script setup>

  import { ref, onMounted } from 'vue';
  import axios from 'axios'


  const  covidData=ref([])

  
  async function getCovidData () {
       axios({
                method:'get',
                url:'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452', 
                params: {'date':'452'},
                headers: {
                          'X-RapidAPI-Key': '619e91bf9bmsh17a93cd47710960p1d9a05jsn5c6393759c38',
                          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                        }  
            }).then( response => {
       covidData.value=(response.data)
       console.log(covidData.value)
      })
      
  
  }


   onMounted( async () => {
       await getCovidData()
   })

   

  
</script>

<style scoped>
  #download {
    background-color: #F3E0B5;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 1050px;
  }
</style>
