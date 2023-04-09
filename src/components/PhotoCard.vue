<template>
  <div class="photo_card">
	    <div class="photo_bg"></div>
      <img :src="photoData.img">
      <div class="love_detail">
          <span class="iconfont icon-aixin1"></span>
          <span class="loveNumber">{{props.photoData.loveNumber}}</span>
      </div>
  </div>
</template>

<script setup>
const props = defineProps(['photoData'])
</script>

<style lang="less" scoped>
  .photo_card{
      position: relative;
      &:hover{
          cursor: pointer;
          .photo_bg{
              opacity: 1;
          }
          .love_detail{
              opacity: 1;
          }
      }
      img{
        width: 100%;
      }
      .photo_bg{
          position: absolute;
          top: 0;
          left: 0;
          background-color: rgba(0,0,0,0.2);
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: all .3s;
      }
      .love_detail{
          opacity: 0;
          transition: all .3s;
          position: absolute;
          top: @interval_8;
          left: @interval_8;
          background-color: rgba(255,255,255,0.8);
          backdrop-filter: blur(20px);
          border-radius: @interval_20;
          height: 28px;
          padding: 0 10px;
          display: flex;
          align-items: center;
          .icon-aixin1{
			        color: @gary_3;
          }
          .loveNumber{
              color: @gary_1;
              padding-left: @interval_4;
          }
      }
  }
</style>