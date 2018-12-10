<template>
<div class="wrapper">
     <swiper :options="swiperOption">
        <swiper-slide>
            <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1810/6e/4a5551bbb189d902.jpg_750x200_25257467.jpg">
        </swiper-slide>
        <swiper-slide>
            <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1810/af/30ffcf34e9819f02.jpg_750x200_736b7236.jpg">
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
                pagination:{
                    el:'swiper-pagination'
                } 
                
            },
            swiperSlides: [1, 2, 3, 4, 5]
        }
    }
}
</script>
<style>
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
</style>
