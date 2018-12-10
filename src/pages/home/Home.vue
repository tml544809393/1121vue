<template>
<div>
    <home-header :city="city"></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
</div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import axios from 'axios'
export default {
        name:"Home",
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
        },
        data(){
            return{
               city: ''   
            }
        },
        methods:{
            getHomeInfo(){
                axios.get('/static/mock/index.json')
                .then(this.getHomeInfosuss)
            },
            getHomeInfosuss(res){
                res = res.data
                if(res.ret && res.data){
                    const data = res.data
                    this.city = data.city
                }
                console.log(res)
            }
        },
        mounted(){
            this.getHomeInfo()
        }
    }
</script>
<style>

</style>