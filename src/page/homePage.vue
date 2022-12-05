<template>
    <div class="HomePage">
        <div class="header">
            <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="">
            <div class="search_restaurant">
                <input class="search_restaurant--input" v-model="user_search_restaurant" type="text" placeholder="De quoi avez vous envie ?">
                <div v-if="user_search_restaurant.length > 0" class="search_restaurant--list">
                    <router-link v-for="(restaurant, i) in search_restaurant" :key="i" :to="{name: 'Restaurant', params: {name: restaurant.name}}">
                        <div class="search_restaurant--list--container">
                            <div class="search_restaurant--list--container--image">
                                <img :src="restaurant.image" alt="">
                            </div>
                            <h2 class="search_restaurant--list--container--title">{{restaurant.name}}</h2>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="banniere"></div>
        <div class="all_restaurants">
            <RestaurantRow v-for="(data, i) in data_restaurant" :key="i" :three_restaurant="data"/>
        </div>
    </div>
</template>

<script>
import bdd from '../bdd.js';
import { onMounted, ref, watch } from 'vue'
import RestaurantRow from '../components/RestaurantRow.vue';
export default {
    name: 'HomePage',
    components: {
        RestaurantRow,
    },
    setup(){
        class Restaurant {
            constructor(name, note, image, drive_time){
                this.name = name
                this.note = note
                this.image = image
                this.drive_time = drive_time
            }
        }

        let data_restaurant = ref([])
        let all_restaurant = []

        const makeDataRestaurant = () => {
            let three_restaurant = [];
            for (const restaurant of bdd){
                let new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)

                all_restaurant.push(new_restaurant)

                if(three_restaurant.length === 2){
                    three_restaurant.push(new_restaurant)
                    data_restaurant.value.push(three_restaurant)
                    three_restaurant = []
                }
                else{
                    three_restaurant.push(new_restaurant)
                }
            }
        }
        
        let user_search_restaurant = ref('');
        let search_restaurant = ref([]);
        watch(user_search_restaurant, (newValue) => {
            let regex = RegExp(newValue.toLowerCase());

            let new_search_restaurant = all_restaurant.filter(restaurant => regex.test(restaurant.name.toLowerCase()))

            // if (newValue == 0){
            //     search_restaurant.value = []
            // }
            // else{
            //     search_restaurant.value = new_search_restaurant
            // }

            newValue == 0 ? search_restaurant.value = [] : search_restaurant.value = new_search_restaurant
        })

        onMounted(makeDataRestaurant);

        return {
            data_restaurant,
            user_search_restaurant,
            search_restaurant,
        }
    },
}
</script>

<style lang="scss">
    .HomePage{
        .header{
            position:fixed;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding:0 100px;
            width: 100%;
            height: 100px;
            background: white;
            img{
                width: 100px;
            }
            .search_restaurant{
                position: relative;
                &--input{
                    width:300px;
                    height:50px;
                    padding:0 20px;
                    border-radius: 30px;
                    border:solid #01AE6D;
                }
                &--list{
                    position:absolute;
                    top:calc(100% + 15px);
                    left:0;
                    width:100%; 
                    max-height:400px;
                    min-height:130px;
                    border:solid #01AE6D;
                    background: #fff;
                    border-radius: 30px;
                    padding:25px;
                    overflow-y: scroll;
                    &::-webkit-scrollbar{width:0px}
                    a{
                        // justify-content: space-between;
                        display: block;
                        margin-bottom: 25px;
                        &:last-child{
                            margin-bottom: 0;
                        }
                        .search_restaurant--list--container{
                            display: flex;
                            align-items: center;
                            &--image{
                                img{
                                    height:75px;
                                    width:75px;
                                    border-radius:50%;
                                }
                            }
                            &--title{
                                margin-left: 15px;
                            }
                        }
                    }
                }
            }
            
        }
        .banniere{
            width:100%;
            height:400px;
            margin-top: 100px;
            background-image: url("https://cdn.shopify.com/s/files/1/0619/0274/9931/products/VinylBanner-V1-FastFood_1946x.jpg?v=1649202951");
            background-size: cover;
            background-position: center center;
        }
        .all_restaurants{
            padding:50px;
        }
    }
</style>