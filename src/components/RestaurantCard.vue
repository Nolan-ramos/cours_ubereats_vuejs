<template>
  <div class="restaurant--card">
    <div :style="changeBackground" class="restaurant--card--image">

    </div>
    <div class="restaurant--card--informations">
        <div class="informations--top">
            <p class="informations--top--name"> {{ info_restaurant.name }} </p>
            <p class="informations--top--note"> {{ info_restaurant.note }} </p>
        </div>
        <div class="informations--bottom">
            <p class="informations--bottom--time"> {{ info_restaurant.drive_time }} </p>
        </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
    name: 'RestaurantCard',
    props: {
        info_restaurant: Object
    },
    setup(props){
        const changeBackground = computed(() => {
            return {
                backgroundImage: `url(${props.info_restaurant.image})`
            }
        })
        return {
            changeBackground
        }
    }
}
</script>

<style lang="scss">
    .restaurant--card{
        width:calc(100%/3 - 50px);
        &--image{
            background-image: url("https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8zNzg4MDJiMC1jNTI4LTQ4MjktYjBiNS0wY2M2NDBkZjYzY2QuanBlZw==");
            height:200px;
            background-size: cover;
            background-position: center;
        }
        &--informations{
            padding:10px 0;
            .informations--top{
                display: flex;
                justify-content: space-between;
                align-items: center;
                &--name{
                    font-weight: 700;
                }
                &--note{
                    background: #772CE8;
                    color:white;
                    font-weight: 700;
                    padding:10px;
                    font-size: 0.8rem;
                    border-radius: 50%;
                }
            }
            .informations--bottom{
                font-size: 0.9rem;
            }
            
        }
    }
</style>