<template>
<div>
    <div class="recommend-title">
        <div class="title">
            热销中
        </div>
            <ul>
                <li class="item">
                    <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" >
                    <div class="item-info">
                        <p class="item-title">嘎嘎嘎</p>
                        <p class="item-desc">大姐夫了的房间里的解放路的</p>
                        <button class="item-button">查看详情</button>
                    </div>
                </li>
            </ul>


    </div>
</div>
</template>
<script>
    export default {
        name: 'HomeRecommend',
       
    }
</script>
<style>
.title {
    line-height:.8rem;
    margin-top:.2rem;
    background:#ccc;
    text-indent:.2rem;
}
.item{
    display:flex;
    height:1.9rem;
    overflow:hidden;
    border-bottom:1px solid #ccc;
}
.item-img{
    width:1.7rem;
    height:1.7rem;
    padding:.1rem;
    
}
.item-info{
    flex:1;
}
.item-title{
    line-height:.7rem;
    font-size:.32rem;
}
.item-desc{
    line-height:.4rem;
    color:#ccc;
}
.item-button{
    background:burlywood;
    padding:.1rem;
    border-radius:.06rem;
    padding:10px;
    line-height:10px;
}
</style>
