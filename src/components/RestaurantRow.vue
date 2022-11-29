<template>
  <div class="restaurant--row">
    <h2 class="restaurant--row--title">Nos restaurants</h2>
    <div class="restaurant--row--card">
        <RestaurantCard v-for="(card, index) in three_restaurant" :info_restaurant="card" :key="index"/>
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
        }
    }
</style>