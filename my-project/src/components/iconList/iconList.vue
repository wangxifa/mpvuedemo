<template>
    <div class="icon-list self-icon" >
   
        <div @click="gotoList" class="icon-list-one " v-for="item in iconList" :key="item.id" data-item="item">
               
            <image mode="widthFix" :src=item.iconimage />
            <div class="icon-list-one-name">{{item.iconName}}</div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            iconList:[{
                iconimage:"../../static/images/1.png",
                iconName:'景点/门票',
            },{
                iconimage:"../../static/images/2.gif",
                iconName:'清凉玩水',
            },
            {
                iconimage:"../../static/images/3.png",
                iconName:'公园游乐场',
            },{
                iconimage:"../../static/images/4.png",
                iconName:'门票+酒店',
            },
            {
                iconimage:"../../static/images/5.png",
                iconName:'自然风光',
            },{
                iconimage:"../../static/images/6.png",
                iconName:'温泉',
            },{
                iconimage:"../../static/images/7.png",
                iconName:'海洋馆',
            },{
                iconimage:"../../static/images/8.png",
                iconName:'演出',
            },{
                iconimage:"../../static/images/9.png",
                iconName:'动植物园',
            },{
                iconimage:"../../static/images/10.png",
                iconName:'名胜古迹',
            },
            ]
        }
    },
    methods:{
           gotoList(){
                wx.navigateTo({
                url: "/pages/tuijianTitle/main"
      });
           } 
        }
}
</script>
<style>
.icon-list image{
    height: 76px;
}
</style>
