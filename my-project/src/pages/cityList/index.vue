<template>
    <div class="city-list">
        <scroll-view scrollY scrollIntoView="cityid" style="height:stageHeight;">
            <div class="search-bar">
                <div class="search-view">
                    <icon @click="search" color="#707070" size="14" type="search"></icon>
                    <input  type = "text" v-model = "value"  class="search-input" confirmType="done" 
                    placeholder="请输入城市" placeholderStyle="color:##93999F" />
                <!-- value="keyword"  -->
                    <icon @click="clearInput" ref="feedbakcImg" class="search-clear" color="#707070" size="14" type="clear"></icon>
                </div>
                <div class="search-cancel">
                    <div @click="clearBack" class="text" hoverClass="hover">取消</div>
                </div>
            </div>
            <div class="hot" v-if="searchingState">
                <div class="hot-city-title">热门城市</div>
                <div  class="hot-city" data-obj="hotcity" v-for="hotcity in hotCityList" :key="hotcity" >
                  <div @click="clickCity" :id="hotcity.id">
                    {{hotcity.name}}
                  </div>
                
                </div>
            </div>
            <div class="cityLists">
                <div class="title" >A</div>
                <div class="plane"  v-for="city in cityList" :key="city.id">{{city.cityname}}</div>              
            </div>
           
        </scroll-view>
        <div class="select">
            <div class="select-plane" data-name="A" v-for="select in selects" :key="select.id">{{select.name}}</div>           
        </div>
    </div>
</template>
<script>
// var city = require('../../utils/city.js');
var app = getApp()
export default {
  data() {
    return {
      searchingState:true,
      cityList: [
        {
          cityname: "安图"
        },
        {
          cityname: "阿希"
        },
        {
          cityname: "阿鲁旗"
        },
        {
          cityname: "阿尔山"
        },
        {
          cityname: "安图"
        },
        {
          cityname: "阿希"
        },
        {
          cityname: "阿鲁旗"
        },
        {
          cityname: "阿尔山"
        },
        {
          cityname: "安图"
        },
        {
          cityname: "阿希"
        },
        {
          cityname: "阿鲁旗"
        },
        {
          cityname: "阿尔山"
        }
      ],
      name: "",
      searchList: [],
      selects: [],
      searchString :"",
      hotCityList: [
        {
          id: 1,
          divisionStr: "北京--北京",
          name: "北京",
          lng: 116.4081955,
          lat: 39.9046669,
          pinyin: "beijing",
          isOpen: !0
        },
        {
          id: 10,
          divisionStr: "",
          name: "上海",
          lng: 121.4729156,
          lat: 31.2307072,
          pinyin: "shanghai",
          isOpen: !0
        },
        {
          id: 20,
          divisionStr: "",
          name: "广州",
          lng: 113.2644196,
          lat: 23.1290741,
          pinyin: "guangzhou",
          isOpen: !0
        },
        {
          id: 30,
          divisionStr: "",
          name: "深圳",
          lng: 114.0578156,
          lat: 22.5434475,
          pinyin: "shenzhen",
          isOpen: !0
        },
        {
          id: 40,
          divisionStr: "",
          name: "天津",
          lng: 117.2108154,
          lat: 39.1439285,
          pinyin: "tianjin",
          isOpen: !0
        },
        {
          id: 42,
          divisionStr: "",
          name: "西安",
          lng: 108.9530945,
          lat: 34.2778015,
          pinyin: "xian",
          isOpen: !0
        },
        {
          id: 50,
          divisionStr: "",
          name: "杭州",
          lng: 120.1552505,
          lat: 30.2734966,
          pinyin: "hangzhou",
          isOpen: !0
        },
        {
          id: 59,
          divisionStr: "",
          name: "成都",
          lng: 104.0648575,
          lat: 30.6586018,
          pinyin: "chengdu",
          isOpen: !0
        },
        {
          id: 55,
          divisionStr: "",
          name: "南京",
          lng: 118.7964706,
          lat: 32.0583649,
          pinyin: "nanjing",
          isOpen: !0
        }
      ]
    };
  },
  computed: {
        // A computed property that holds only those cityList that match the searchString
    },
  onShow() {
    this.$http
      .get("meituancityselect", { xx: 6 })
      .then(res => {
        //输出请求数据
        this.selects = res.data.selects;
        // console.log(d.data.selects)
        //输出响应头
        // console.log(d.header.selects)
      })
      .catch(err => {
        // console.log(err.status,err.message)
      });
  },
  
  methods: {
    clickCity(e){   
      // console.log(e.currentTarget);
      this.hotcityId = e.currentTarget.id;
      
      
       wx.reLaunch({
        url: `/pages/home/main?id=${e.currentTarget.id}`
      });
      
    },
    typing(e){
      this.keyword = e.detail.value
      // console.log(e);
      
    },
    search () {
      this.company = this.value
      this.start = 0
      // this.getMerchantData()
    },
     clearBack() {
    searchingState: !1,
    // console.log(1);
      wx.navigateBack({
        delta: 1
      });
    },
    clearInput(){
      this.$refs.feedbakcImg.value =''
      // console.log(1);
      
      // this.searchingState = true  
    }
  },
 
};
</script>
<style>
page {
  background: #fff;
}

.city-list {
  height: 100%;
}

.city-list .search-bar {
  width: 100%;
  display: flex;
  height: 80rpx;
  border-bottom: 0.1rpx solid #dfe2e5;
  align-items: center;
}

.city-list .search-bar .search-view {
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60rpx;
  background: #f0f4f7;
  border-radius: 60rpx;
  margin: auto 30rpx;
  padding: 0 20rpx;
  display: flex;
}

.city-list .search-bar .search-view .search-input {
  flex: 1;
  padding-left: 30rpx;
  color: #707070;
  font-size: 28rpx;
}

.city-list .search-bar .search-view .search-clear {
  margin-top: 9rpx;
}

.city-list .search-bar .search-cancel {
  height: 80rpx;
  width: 88rpx;
  line-height: 80rpx;
}

.city-list .search-bar .search-cancel .text {
  color: #0c95f7;
  font-size: 28rpx;
}

.city-list .search-bar .search-cancel .text.hover {
  color: #2387d7;
}

.city-list .hot {
  margin-top: 32rpx;
  margin-left: 30rpx;
}

.city-list .hot-city-title {
  color: #858687;
  font-size: 24rpx;
  line-height: 60rpx;
}

.city-list .hot-city {
  width: 210rpx;
  height: 72rpx;
  line-height: 72rpx;
  color: #202325;
  text-align: center;
  font-size: 28rpx;
  background: #fff;
  display: inline-block;
  border: 0.1rpx solid #dfe2e5;
  margin-right: 18rpx;
  margin-bottom: 18rpx;
  border-radius: 4rpx;
}

.city-list .title {
  color: #858687;
  font-size: 24rpx;
  line-height: 60rpx;
}

.city-list .plane,
.city-list .title {
  border-bottom: 0.1rpx solid #dfe2e5;
  padding-left: 30rpx;
}

.city-list .plane {
  color: #202325;
  font-size: 32rpx;
  background: #fff;
  line-height: 90rpx;
}

.city-list .select {
  position: fixed;
  top: 100rpx;
  right: 0rpx;
  width: 40rpx;
  text-align: center;
}

.city-list .select-plane {
  color: #858687;
  font-size: 22rpx;
  width: 40rpx;
  background: rgba(1, 1, 1, 0.01);
  margin-top: 8rpx;
}

.city-list .search-list {
  width: 100%;
}

.city-list .search-list .search-item {
  color: #202325;
  font-size: 32rpx;
  background: #fff;
  border-bottom: 0.1rpx solid #dfe2e5;
  line-height: 90rpx;
  padding-left: 30rpx;
}

.city-list .search-list .search-item:last-child {
  border-bottom: none;
}
</style>
