<template>  
    <div class="container-homepage">
      <div class="with-location-container">
         <div class="header-bar">
           <div class="city-selected" bindtap="openCitySelectPanel">   <!--wx:if="{{showCitySelectedBar}}" ?? -->        
             <text class="city-label">{{selectedCity}}</text>
             <text class="arrow arrow-down"></text>
           </div>
           <div bindtap="gotoSearch" class="search-input-container">
               <div class="search-input-box middle">   <!--{{!search?'middle':'left'}}  ?? -->
                    <div class="search-state">
                        <icon color="#707070" size="14" type="search"></icon>
                        <text>{{!search?'景点/目的地':search}}</text>
                    </div>
              </div>
           </div>
         </div>
         <div class="banner-con" > <!-- wx:if="{{!search}}" ?? -->

        </div>
        <div class="tuijian-title" >景点推荐</div>   <!--v-if="!search&&iconList.length" -->

        <div class="poi-list-container" >
          <div v-for="item in list" :key="item">
             <form reportSubmit bindsubmit="gotoDetail" > <!-- data-poiid="{{item.poiIdStr||item.poiid}}" ??-->
              <button class="poi-list-item push-btn" formType="submit">
                <div class="image">
                  <image src="/static/images/home-selected.png" /> <!--  mode="aspectFill" -->
                </div>
                <div class="info">
                   <div class="title">
                      <div>{{item.name}}</div>
                      <div :if="item.tourPlaceStar">({{item.tourPlaceStar}})</div>
                  </div>
                   <div class="action">
                      <div class="score" ><!-- wx:if="{{!item.rate}}" -->
                          <!-- <template is="score" ></template> data="{{...item}} -->
                      </div>
                      <div class="score-txt">{{item.rate}}</div> <!-- wx:if="{{item.rate}}" -->
                      <text >{{item.solds}}</text>  <!--wx:if="{{item.solds}}"-->
                  </div>
                  <div class="template-tags">
                    <div class="tag-text" style="border:0.5px solid #a4d6ff;color: #49adff;background:#ffffff;">
                        {{item.icon1}}
                    </div>
                    <div class="tag-text" style="border:0.5px solid #a4d6ff;color: #49adff;background:#ffffff;">
                        {{item.icon2}}
                    </div>
                  </div>
                  <!-- <template is="tags" data="{{...item}}"></template> -->
                  <div class="consume">
                     <div class="price">
                        <div class="symble">￥</div>
                        <div class="number">{{item.lowestPrice}}</div>
                        <div class="suffix">起</div>
                     </div>
                      <!-- <text class="distance" wx:if="{{item.distance}}">距我{{item.distance}}</text> -->
                      <text class="distance" :if="item.areaName">{{item.areaName}}/{{item.cityName}}</text>
                  </div>
                </div>
              </button>
            </form>
          </div>
        </div>
        
<!-- <search></search>  -->
<!-- <headerList></headerList> -->
    </div>
    </div>
</template>

<script>
import search from "@/components/search/search"
import searchCity from "@/components/search/searchCity"
import headerList from "@/components/headerList/headerList"


export default {
  data() {
    return {
      views:[],
      page: 1,
      list:[
        {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
     {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
       {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
     {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
       {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
     {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
       {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
     {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
       {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
     {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
       {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
     {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      {
          frontImg:"",
          name:"魅力赣江水上乐园",
          tourPlaceStar:"4",
          rate:"好，4.4分",
          solds:"5000+人消费",
          lowestPrice:"50",
          icon1:"随买随用",
          icon2:"随买随用",
          areaName:"新建区",
          cityName:"南昌"
      },
      ],
      selectedCity: "北京", 
    };
  },

  components: {
    search,
    searchCity,
    headerList
  },

  methods: {

  },
  onReachBottom() {
        let nextPage = this.page +1;
        this.page = nextPage
                    wx.showLoading({
            title: '加载中',
        })
        this.$http.get('sell#!method=get').then((res)=>{
        this.views =[...res.data.data.views,...this.views]
        wx.hideLoading();
        }).catch((e)=>{
        console.log(e)
        })
    },
        onPullDownRefreash(){
          this.isShow = !this.isShow
        }
};
</script>

<style>
.nav {
    background: #fff;
    width: 100%;
    height: 88rpx;
    z-index: 10000;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
    box-sizing: content-box;
}

.nav-btn {
    display: inline-block;
    box-sizing: border-box;
    font-size: 28rpx;
    font-weight: 500;
    color: #666;
    height: 88rpx;
    line-height: 88rpx;
}

.nav .active {
    color: #06c1ae;
    border-bottom: 6rpx solid #06c1ae;
}

.banner-con {
    margin-bottom: 20rpx;
}

.container-homepage {
    background: #fff;
    width: 100%;
    overflow-x: hidden;
}

.container-homepage .with-location-container {
    width: 100%;
}

.container-homepage .with-location-container .header-bar {
    display: flex;
    padding: 0 32rpx;
}

.container-homepage .with-location-container .header-bar .city-selected {
    font-size: 28rpx;
    width: 120rpx;
    height: 60rpx;
    color: #43494d;
    align-items: center;
    line-height: 60rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.container-homepage .with-location-container .header-bar .city-selected .city-label {
    margin-right: 12rpx;
}

.container-homepage .with-location-container .header-bar .search-input-container {
    flex: 1;
    height: 60rpx;
}

.container-homepage .with-location-container .header-bar .search-input-container .search-input-box {
    display: flex;
    flex-direction: row;
    height: 60rpx;
    background: #f1f4f7;
    border-radius: 30rpx;
    padding: 0 20rpx;
}

.container-homepage .with-location-container .header-bar .search-input-container .search-input-box.left {
    justify-content: flex-start;
}

.container-homepage .with-location-container .header-bar .search-input-container .search-input-box .search-state {
    height: 100%;
    overflow: hidden;
}

.container-homepage .with-location-container .header-bar .search-input-container .search-input-box .search-state icon {
    display: inline-block;
    float: left;
    margin-top: 18rpx;
}

.container-homepage .with-location-container .header-bar .search-input-container .search-input-box .search-state text {
    display: inline-block;
    color: #93999f;
    margin-left: 12rpx;
    font-size: 28rpx;
    line-height: 64rpx;
}

.container-homepage .with-location-container .banner-poi-container {
    position: relative;
    width: 100%;
    border-radius: 8rpx;
    margin-top: 20rpx;
}

.container-homepage .with-location-container .banner-poi-container .image {
    position: relative;
    width: 100%;
    height: 280rpx;
    overflow: hidden;
    border-radius: 8rpx 8rpx 0 0;
    background: url(https://p0.meituan.net/codeman/4306d9f4bd25f61a88178b8b009cb24b412.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.container-homepage .with-location-container .banner-poi-container .image .main-image {
    display: block;
    width: 100%;
    height: 100%;
}

.container-homepage .with-location-container .banner-poi-container .image .info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 108rpx;
    padding: 0 20rpx;
    background: linear-gradient(transparent,rgba(0,0,0,.7));
}

.container-homepage .with-location-container .banner-poi-container .image .info .title {
    display: inline-block;
    font-size: 36rpx;
    color: #fff;
    height: 44rpx;
    font-weight: 800;
}

.container-homepage .with-location-container .banner-poi-container .image .info .action {
    width: 100%;
    padding: 12rpx 0 0;
    overflow: hidden;
}

.container-homepage .with-location-container .banner-poi-container .image .info .action .score {
    float: left;
    overflow: hidden;
    margin-right: 20rpx;
}

.container-homepage .with-location-container .banner-poi-container .image .info .action .score .template-srore-noscore {
    font-size: 24rpx;
    color: #ddd;
}

.container-homepage .with-location-container .banner-poi-container .image .info .action text {
    display: inline-block;
    font-size: 24rpx;
    color: #ddd;
    vertical-align: top;
    margin-top: 3rpx;
    line-height: 24rpx;
}

.container-homepage .with-location-container .banner-poi-container .image .info .action text.sold {
    float: left;
}

.container-homepage .with-location-container .banner-poi-container .image .info .action text.distance {
    float: right;
}

.container-homepage .with-location-container .banner-poi-container .deal-container {
    width: 100%;
    padding: 0 20rpx;
    padding-right: 16rpx;
    border-left: 1rpx solid #e1e1e1;
    border-right: 1rpx solid #e1e1e1;
    border-bottom: 1rpx solid #e1e1e1;
    border-bottom-left-radius: 8rpx;
    border-bottom-right-radius: 8rpx;
}

.container-homepage .with-location-container .banner-poi-container .deal-container .deal-item {
    padding: 28rpx 0;
    padding-bottom: 32rpx;
    width: 100%;
    overflow: hidden;
}

.container-homepage .with-location-container .banner-poi-container .deal-container .deal-item.border {
    border-bottom: 1rpx solid #e1e1e1;
}

.container-homepage .with-location-container .banner-poi-container .deal-container .deal-item .info {
    width: 90%;
    float: left;
    vertical-align: top;
    font-size: 0;
}

.container-homepage .with-location-container .banner-poi-container .deal-container .deal-item .info .text {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    vertical-align: top;
    color: #222;
    font-size: 28rpx;
    line-height: 28rpx;
    height: 28rpx;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.container-homepage .with-location-container .banner-poi-container .deal-container .deal-item .info .text .highlight {
    color: #ff6230;
    font-weight: 400;
}

.container-homepage .with-location-container .banner-poi-container .deal-container .deal-item .arrow1 {
    overflow: hidden;
    float: right;
    height: 100%;
}

.container-homepage .with-location-container .banner-poi-container .deal-container .deal-item .arrow1 image {
    width: 16rpx;
    height: 24rpx;
    margin-top: 24rpx;
}

.container-homepage .with-location-container .poi-list-container {
    width: 100%;
    padding: 0 32rpx;
}

.container-homepage .with-location-container .poi-list-container .template-tags {
    font-size: 0;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 238rpx;
    padding: 20rpx 0;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .image {
    width: 224rpx;
    height: 196rpx;
    background: url(https://p1.meituan.net/codeman/a8fb15493acbbf27f5fddc42e536020d316.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .image image {
    display: block;
    width: 100%;
    height: 100%;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .info {
    flex: 1;
    height: 100%;
    max-width: 462rpx;
    padding: 16rpx 2rpx 16rpx 20rpx;
    font-size: 0;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .info .title {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .info .title div {
    display: inline-block;
    vertical-align: top;
    color: #222;
    font-size: 30rpx;
    line-height: 34rpx;
    height: 34rpx;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .info .action {
    width: 100%;
    margin-top: 10rpx;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .info .action .score {
    display: inline-block;
    margin: 2rpx 20rpx 2rpx 0;
    vertical-align: middle;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .info .action .score-txt {
    display: inline-block;
    vertical-align: top;
    margin: 2rpx 20rpx 2rpx 0;
    font-size: 24rpx;
    margin-top: 3rpx;
    line-height: 28rpx;
    color: #2a99f1;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .info .action .score-txt:after {
    content: "";
    display: inline-block;
    vertical-align: top;
    background: #999;
    margin-left: 20rpx;
    width: 1px;
    height: 18rpx;
    margin-top: 5rpx;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .info .action text {
    display: inline-block;
    font-size: 24rpx;
    color: #666;
    vertical-align: top;
    margin-top: 3rpx;
    line-height: 28rpx;
    height: 28rpx;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .info .template-tags {
    margin-top: 10rpx;
    height: auto;
    display: block;
    padding: 0;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .info .consume {
    width: 100%;
    margin-top: 13rpx;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .info .consume .price {
    display: inline-block;
    line-height: 36rpx;
    color: #ff6230;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .info .consume .price div {
    display: inline-block;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .info .consume .price .number {
    font-size: 32rpx;
    line-height: 36rpx;
    color: #ff6230;
    font-weight: 700;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .info .consume .price .symble {
    font-size: 24rpx;
    line-height: 24rpx;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .info .consume .price .suffix {
    margin-left: 4rpx;
    font-size: 24rpx;
    line-height: 24rpx;
    color: #666;
}

.container-homepage .with-location-container .poi-list-container .poi-list-item .info .consume .distance {
    display: inline-block;
    float: right;
    vertical-align: top;
    padding-top: 4rpx;
    font-size: 24rpx;
    color: #666;
}

.container-homepage .with-location-container .poi-list-container .loadmore {
    padding: 20rpx;
    text-align: center;
    color: #999;
    font-size: 26rpx;
}

.container-homepage .without-location-container {
    width: 100%;
}

.container-homepage .icon-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40rpx;
    padding: 0 12rpx;
}

.container-homepage .icon-list-one {
    text-align: center;
    width: 20%;
    max-height: 150rpx;
    font-size: 0;
}

.container-homepage .icon-list-one image {
    width: 100rpx;
    max-height: 100rpx;
    min-height: 100rpx;
}

.container-homepage .icon-list-one-name {
    font-size: 24rpx;
    margin-top: 4rpx;
    margin-bottom: 45.2rpx;
    color: #333d48;
}

.container-homepage .icon-list-one-sm {
    margin-top: 20rpx;
    max-height: 120rpx!important;
}

.container-homepage .icon-list-one-sm image {
    width: 44rpx;
    max-height: 44rpx;
    min-height: 44rpx;
}

.container-homepage .self-icon {
    margin-top: 10rpx;
}

.container-homepage .self-icon .icon-list-one {
    max-height: 200rpx;
}

.container-homepage .self-icon .icon-list-one image {
    width: 148rpx;
    max-height: 156rpx;
    min-height: 156rpx;
}

.container-homepage .self-icon .icon-list-one-name {
    margin-top: -4rpx;
}

.container-homepage .self-icon .icon-list-one-sm {
    margin-bottom: 18rpx;
}

.container-homepage .self-icon .icon-list-one-sm image {
    width: 64rpx;
    max-height: 64rpx;
    min-height: 64rpx;
}

.container-homepage .self-icon .icon-list-one-sm .icon-list-one-name {
    margin-top: -4rpx;
    font-size: 22rpx;
}

.container-homepage .tuijian-title {
    color: #93999f;
    font-size: 28rpx;
    text-align: center;
    font-weight: 300;
    display: flex;
    justify-content: center;
    width: 100%;
}

.container-homepage .tuijian-title:after,.container-homepage .tuijian-title:before {
    content: "";
    width: 40rpx;
    height: .5px;
    background: #c7ced4;
    margin-left: 30rpx;
    margin-top: 18rpx;
}

.container-homepage .tuijian-title:before {
    margin-right: 30rpx!important;
    margin-left: 0rpx!important;
}
</style>
