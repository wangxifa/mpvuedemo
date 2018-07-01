<template>
   <div class="user">
    <div class="user-info">
        <!-- <div class="avatar">
            <image src="{{userInfo.avatarUrl}}" v:if="{{userInfo.avatarUrl}}" />
        </div> -->
        <div class="nick-name">
            <text>{{userInfo.nickName}}</text>
        </div>
     </div>
    <!-- <div class="list-panel">
        <div bindtap="go" class="list-item" data-url="/pages/orderlist/orderlist">
            <div class="left">
                <image class="icon icon-order" src="../../image/icon-order.png" />
                <text>订单</text>
            </div>
            <div class="right">
                <image class="icon icon-arrow" src="https://p1.meituan.net/codeman/7db0bc2de370d7ca3262ebfcf37142ee881.png" />
            </div>
        </div>
        <div bindtap="go" class="list-item" data-url="/pages/voucher/index">
            <div class="left">
                <image class="icon icon-vouchers" src="../../image/icon-vouchers.png" />
                <text>抵用券</text>
            </div>
            <div class="right">
                <image class="icon icon-arrow" src="https://p1.meituan.net/codeman/7db0bc2de370d7ca3262ebfcf37142ee881.png" />
            </div>
        </div>
    </div> -->
</div>

</template>

<script>
export default {
 data(){
   return {
     userInfo: {}
   }
 },

}
</script>

<style>
 page {
    background-color: #f0f4f7;
}

.user .user-info {
    padding: 16rpx 0 34rpx;
    background-color: #fff;
    text-align: center;
}

.user .user-info image {
    width: 140rpx;
    height: 140rpx;
    border-radius: 50%;
}

.user .user-info .nick-name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.user .list-panel .list-item {
    margin-top: 20rpx;
    height: 112rpx;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 36rpx 32rpx;
    line-height: 1;
    font-size: 32rpx;
}

.user .list-panel .list-item .tips,.user .list-panel .list-item text {
    display: inline-block;
    line-height: 40rpx;
}

.user .list-panel .list-item .tips {
    border-radius: 20rpx;
    border: 1rpx solid #f8ab93;
    font-size: 24rpx;
    color: #ff6230;
    padding: 0 16rpx;
    margin-right: 20rpx;
}

.user .list-panel .list-item .icon {
    display: inline-block;
}

.user .list-panel .list-item .icon.icon-arrow {
    width: 16rpx;
    height: 24rpx;
}

.user .list-panel .list-item .icon.icon-order,.user .list-panel .list-item .icon.icon-vouchers {
    width: 40rpx;
    height: 40rpx;
}

.user .list-panel .list-item image {
    vertical-align: middle;
}

.user .list-panel .list-item text {
    vertical-align: top;
    margin-left: 20rpx;
}

</style>
