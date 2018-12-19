<template>
<div class="wrapper">
     <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.img">
        </swiper-slide>
       
        <div class="swiper-pagination"  slot="pagination"></div>
        
    </swiper>
</div>
</template>
<script>
export default {
    name:'HomeSwiper',
    data () {
        return {
            swiperOption:{
               pagination: '.swiper-pagination',
               loop: true,
            //    autoplay: true
                   
               
            },
           
            swiperList: [
                {
                id: '0001',
                img: 'http://img1.qunarzz.com/piao/fusion/1810/6e/4a5551bbb189d902.jpg_750x200_25257467.jpg'
            },{
                id: '0002',
                img: 'http://img1.qunarzz.com/piao/fusion/1810/af/30ffcf34e9819f02.jpg_750x200_736b7236.jpg'
            }
            
            ]
        }
    }
}
</script>
<style scoped>
.wrapper{
    /* width:100%;
    height:0;
    overflow: hidden;
    padding-bottom:31.25%; */
    background:#ccc;
}
.swiper-img{
    width:100%;
}
.wrapper >>> .swiper-pagination-bullet-active{
    background:#fff !important;
}
</style>
