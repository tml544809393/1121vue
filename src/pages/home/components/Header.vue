<template>
<div>
<div class="header">
<div class="header-left">
    <span class="iconfont">&#xe624;</span>
    <!-- 返回 -->
    </div>
<div class="header-input">
    <span class="iconfont">&#xe632;</span>
    输入景点
</div>
<div class="header-right">
    <!-- {{this.city}} -->
    城市
    <span class="iconfont icon">&#xe64a;</span>
    
    </div>
    
</div>

</div>
</template>
<script>
export default {
        name:"Header",
        props: {
            city:String  
        }
    }
</script>
<style lang="stylus" spoped> 
    .header
        background:blue
        color:#fff
        display:flex
        height:.86rem
        line-height :.86rem
        .header-left
            float:left
            width:.64rem
        .header-input
            flex:1
            background:#fff
            margin-top:.12rem
            margin-left:.2rem
            border-radius:.2rem
            corlor:#fff
            height: 0.64rem
            line-height :.64rem
            background #ccc
        .header-right
            float:right
            width:1.24rem
            text-align:center
    .serch
        background:red;
        height:.5rem;
        padding:0 .1rem;
        .serch-input
            box-sizing:border-box;
            width:100%;
            border-radius:.06rem;
            padding:0 .1rem;
            height:.5rem;
            line-height .5rem;
            text-align:center;

</style>