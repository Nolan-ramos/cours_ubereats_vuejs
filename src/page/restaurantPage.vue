<template>
  <div class="restaurantPage">
    <router-link to="/">
        <div id="return">Retour à l'accueil</div>
    </router-link>
    <div class="infos_restaurant">
        <div class="infos_restaurant--image">
            <img :src="restaurant.image" alt="">
        </div>
        <div class="infos_restaurant--texte">
            <p>{{ restaurant.name }}</p>
            <p>{{ restaurant.note }} &#9829;</p>
            <p>{{ restaurant.drive_time }}</p>
        </div>
    </div>
  </div>
</template>

<script>
// import { onMounted } from "@vue/runtime-core";
import bdd from '../bdd.js'
import { useRoute } from 'vue-router'
export default {
    name: 'restaurantPage',
    setup(){
        const route = useRoute()
        const restaurant = bdd.find((restaurant) => restaurant.name === route.params.name)
        
        return {
            restaurant
        }
    }
}
</script>

<style lang="scss">
    .restaurantPage{
        padding:50px;
        #return{
            font-weight: 700;
        }
        .infos_restaurant{
            margin-top: 50px;
            display: flex;
            &--image{

            }
            &--texte{
                margin-left: 50px;
                :nth-child(1){
                    font-weight: 700;
                    font-size: 32px;
                }
                :nth-child(2){
                    margin:10px 0;
                }
            }
        }
    }
</style>