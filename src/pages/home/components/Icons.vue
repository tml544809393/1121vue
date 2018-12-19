<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide >

    
        <div class="icon">
            <div class="icon-img">
                <img class='icon-img-conent' src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" />
            </div>
            <p class='desc'>抖音热门</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class='icon-img-conent' src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" />
            </div>
            <p class='desc'>抖音热门</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class='icon-img-conent' src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" />
            </div>
            <p class='desc'>抖音热门</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class='icon-img-conent' src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" />
            </div>
            <p class='desc'>抖音热门</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class='icon-img-conent' src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" />
            </div>
            <p class='desc'>抖音热门</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class='icon-img-conent' src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" />
            </div>
            <p class='desc'>抖音热门</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class='icon-img-conent' src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" />
            </div>
            <p class='desc'>抖音热门</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class='icon-img-conent' src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" />
            </div>
            <p class='desc'>抖音热门</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class='icon-img-conent' src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" />
            </div>
            <p class='desc'>抖音热门</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class='icon-img-conent' src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" />
            </div>
            <p class='desc'>抖音热门</p>
        </div>
      </swiper-slide>
    </swiper>
    </div>
</template>
<script>
export default {
    name:"HomeIcons",

}
</script>
<style scoped>
.icons{
    height:0; 
    padding-bottom:50%;
    background:#ccc;
    overflow:hidden;
}
.icon{
    position: relative;
    height:0;
    width:25%;
    float:left;
    padding-bottom:25%;
    overflow: hidden;
}

.icon-img{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:.4rem;
    padding:.1rem;
    box-sizing:border-box;
}
.icon-img-conent{
    height:100%;
    display:block;
    margin:auto;
}
.desc{
    text-align:center;
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    height:.4rem;
    line-height:.4rem;
    color:#fff;
}
</style>
