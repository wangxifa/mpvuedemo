<template>
    <div class="poi-list-container">
                <div v-for="item in list" :key="item">
                    <form reportSubmit bindsubmit="gotoDetail">
                        <!-- data-poiid="{{item.poiIdStr||item.poiid}}" ??-->
                        <button class="poi-list-item push-btn" formType="submit">
                            <div class="image">
                                <image mode="aspectFill" :src=item.frontImg />
                                <!--  mode="aspectFill" -->
                            </div>
                            <div class="info">
                                <div class="title">
                                    <div>{{item.name}}</div>
                                    <div v-if="tourPlaceStarIs">{{item.tourPlaceStar}}</div>
                                </div>
                                <div class="action">
                                    <div class="score">
                                        <!-- wx:if="{{!item.rate}}" -->
                                        <!-- <template is="score" ></template> data="{{...item}} -->
                                    </div>
                                    <div class="score-txt">{{item.rate}}</div>
                                    <!-- wx:if="{{item.rate}}" -->
                                    <text>{{item.solds}}</text>
                                    <!--wx:if="{{item.solds}}"-->
                                </div>
                                <div class="template-tags">
                                    <div class="tag-text" style="border:0.5px solid #a4d6ff;color: #49adff;background:#ffffff;">
                                        {{item.icon1}}
                                    </div>
                                    <div class="tag-text" style="border:0.5px solid #a4d6ff;color: #49adff;background:#ffffff;">
                                        {{item.icon2}}
                                    </div>
                                    <!-- <div class="tag-text" v-if="icon3" style="border:0.5px solid #a4d6ff;color: #ff5f5f;background:#ffffff;">
                        {{item.icon3}}
                    </div> -->
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
            
</template>

<script>
export default {

}
</script>

<style>

</style>
