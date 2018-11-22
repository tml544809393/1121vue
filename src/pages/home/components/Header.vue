<template>
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
    前进
    <span class="iconfont icon">&#xe64a;</span>
    
    </div>
</div>
</template>
<script>
export default {
        name:"Header"
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
</style>