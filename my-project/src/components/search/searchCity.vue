<template>
    <div class="container">
      <div class="Gps"  data-text="南昌" v-bind="wxSortPickerViewItemTap">

      </div>

        <div style="margin-left: 15px;margin-bottom: 15px">
        <text class="hor" >热门城市</text>
        <div >
            <div class="select" data-text="北京" bindtap = "wxSortPickerViewItemTap">北京</div>
            <div class="select" data-text="上海" bindtap = "wxSortPickerViewItemTap">上海</div>
            <div class="select" data-text="广州" bindtap = "wxSortPickerViewItemTap">广州</div>
            <div class="select" data-text="深圳" bindtap = "wxSortPickerViewItemTap">深圳</div>
            <div class="select" data-text="天津" bindtap = "wxSortPickerViewItemTap">天津</div>          
            <div class="select" data-text="成都" bindtap = "wxSortPickerViewItemTap">西安</div>
            <div class="select" data-text="杭州" bindtap = "wxSortPickerViewItemTap">杭州</div>           
            <div class="select" data-text="苏州" bindtap = "wxSortPickerViewItemTap">成都</div>
            <div class="select" data-text="重庆" bindtap = "wxSortPickerViewItemTap">南京</div>
        </div>
</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.hor{
  font-size: 14px;
  color: #999999;
  font-weight: 500;
  display: block;
  padding: 14px 25px 5px 0px;
}
.select{
  height: 30px;
  width: 28%;
  text-align: center;
  line-height: 30px;
  color: #444;
  font-weight: 500;
  display: inline-block;
  margin: 10px 10px 0 0;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 2px;
}
</style>
