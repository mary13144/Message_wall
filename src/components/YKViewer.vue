<template>
  <Mask>
      <div class="viewer">
          <div class="image">
              <img :src="props.photo.img" alt="">
          </div>
          <div class="switch">
              <div class="left" @click="emits('reduceIndex')">
                  <span class="iconfont icon-xiangzuo"></span>
              </div>
              <div class="right" @click="emits('addIndex')">
                  <span class="iconfont icon-xiangyou"></span>
              </div>
          </div>
      </div>
  </Mask>
</template>

<script setup>
import Mask from "@/components/Mask.vue";
const props = defineProps(['photo'])
const emits = defineEmits(['reduceIndex','addIndex'])
</script>

<style lang="less" scoped>
.viewer{
    position: relative;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 82px 360px 20px 0;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .image{
        max-width: 70%;
        img{
            max-width: 100%;
        }
    }
    .switch{
        text-align: center;
        line-height: 56px;
        .left{
            cursor: pointer;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            opacity: 0.5;
            background: @gary_3;
            position: fixed;
            left: 40px;
            top: 50%;
            transition: all .3s;
            .icon-xiangzuo{
                font-size: 24px;
                color: @gary_10;
            }
            &:hover{
                opacity: 1;
            }
        }
        .right{
            cursor: pointer;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            opacity: 0.5;
            background: @gary_3;
            position: fixed;
            right: 400px;
            top: 50%;
            transition: all .3s;
            .icon-xiangyou{
                font-size: 24px;
                color: @gary_10;
            }
            &:hover{
                opacity: 1;
            }
        }
    }


}
</style>