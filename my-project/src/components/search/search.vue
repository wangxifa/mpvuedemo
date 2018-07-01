<template>  
    <div class="search-container">
      <div class="search-input-container">
        <div class="search-input">
            <icon color="#707070" size="14" type="search"></icon>
            <input autoFocus bindconfirm="doSearch" bindfocus="typing" bindinput="typing" placeholder="请输入景点、目的地" />
            <icon catchtap="clearinput" color="#707070" size="14" type="clear"></icon>
        </div> 
        <div class="search-cancel">
            <div catchtap="clearBack" class="text" hoverClass="hover">取消</div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
       keyword: "",
    };
  },

  components: {},

  methods: {}
};
</script>

<style>
.search-container {
    width: 100%;
    padding: 0 32rpx;
}

.search-container .search-input-container {
    position: relative;
    width: 100%;
    height: 80rpx;
    padding: 12rpx 0;
}

.search-container .search-input-container .search-input {
    display: flex;
    width: 600rpx;
    flex-direction: row;
    justify-content: flex-start;
    height: 60rpx;
    background: #f0f4f7;
    border-radius: 8rpx;
    padding: 0 20rpx;
}

.search-container .search-input-container .search-input icon {
    display: inline-block;
    float: left;
    margin-top: 18rpx;
}

.search-container .search-input-container .search-input input {
    display: inline-block;
    color: #707070;
    margin: 8rpx 0 0 12rpx;
    font-size: 28rpx;
    line-height: 60rpx;
    width: 480rpx;
}

.search-container .search-input-container .search-cancel {
    position: absolute;
    right: 0;
    top: 0;
    height: 80rpx;
    width: 88rpx;
}

.search-container .search-input-container .search-cancel .text {
    text-align: right;
    color: #0c95f7;
    font-size: 28rpx;
    line-height: 80rpx;
}

.search-container .search-input-container .search-cancel .text.hover {
    color: #2387d7;
}

.search-container .history {
    width: 100%;
    margin-top: 22rpx;
}

.search-container .history .header {
    width: 100%;
    height: 60rpx;
    border-bottom: 0.4rpx solid #e5e5e5;
}

.search-container .history .header .title {
    display: inline-block;
    font-size: 36rpx;
    font-weight: 900;
    vertical-align: top;
    float: left;
}

.search-container .history .header .clear {
    display: inline-block;
    float: right;
    font-size: 28rpx;
    color: #333;
    vertical-align: top;
    margin-top: 6rpx;
}

.search-container .history .list {
    width: 100%;
}

.search-container .history .list .item {
    width: 100%;
    height: 80rpx;
    border-bottom: 0.4rpx solid #e5e5e5;
}

.search-container .history .list .item .text {
    display: inline-block;
    color: #222;
    font-size: 28rpx;
    line-height: 80rpx;
}

.search-container .history .list .item .arrow1 {
    overflow: hidden;
    float: right;
    height: 100%;
    margin-right: -2rpx;
}

.search-container .history .list .item .arrow1 image {
    width: 24rpx;
    margin-top: 24rpx;
}

.search-container .search-suggest {
    width: 100%;
}

.search-container .search-suggest .list {
    width: 100%;
    border-top: 0.4rpx solid #e5e5e5;
    margin-top: 24rpx;
}

.search-container .search-suggest .list .item {
    width: 100%;
    height: 80rpx;
    border-bottom: 0.4rpx solid #e5e5e5;
}

.search-container .search-suggest .list .item .text {
    display: inline-block;
    color: #222;
    font-size: 28rpx;
    line-height: 80rpx;
}

.search-container .search-suggest .list .item .arrow1 {
    overflow: hidden;
    float: right;
    height: 100%;
    margin-right: -2rpx;
}

.search-container .search-suggest .list .item .arrow1 image {
    width: 24rpx;
    margin-top: 24rpx;
}
</style>
