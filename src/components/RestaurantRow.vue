<template>
  <div class="restaurant--row">
    <h2 class="restaurant--row--title">Nos restaurants</h2>
    <div class="restaurant--row--card">
        <router-link v-for="(restaurant, index) in three_restaurant" :key="index" :to="{name: 'Restaurant', params: {name: restaurant.name}}">
            <RestaurantCard :info_restaurant="restaurant"/>
        </router-link>
    </div>
  </div>
</template>

<script>
import RestaurantCard from './RestaurantCard.vue';
export default {
    name: "RestaurantRow",
    components: {
        RestaurantCard,
    },
    props: {
        three_restaurant: Array
    },
}
</script>

<style lang="scss">
    .restaurant--row{
        margin-bottom: 25px;
        &:last-child{
            margin-bottom: 0;
        }
        &--title{
            font-weight: 700;
            font-size: 32px;
            margin-bottom: 25px;
        }
        &--card{
            display: flex;
            justify-content: space-between;
            a{
                display: block;
                width:calc(100%/3 - 50px);
            }
        }
    }
</style>