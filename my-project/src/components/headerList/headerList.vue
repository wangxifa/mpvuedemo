<template>
    <div class="app">
        <div class="headerList" v-for="item in items" :key="item">  
             <div class="image">{{item.image}}</div>

            <div class="text">{{item.text}}</div>
        
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            items:[{
                image:'src:/static/images/1.png',
                text:'222'
            },{
                image:'111',
                text:'222'
            },{
                image:'111',
                text:'222'
            },{
                image:'111',
                text:'222'
            },

                
        ]
        }
        
    }
}
</script>
<style>
.app{
    margin: 30rpx 0 30rpx 30rpx;
}
.headerList image{
    height: 100rpx;
    width: 15%;
}
.headerList .text {
    color: #999999;
    font-size: 14px;

}
</style>
