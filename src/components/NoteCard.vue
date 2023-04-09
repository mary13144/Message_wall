<template>
  <div class="node_card">
      <div class="top_bar">
          <p class="time">{{props.note.moment}}</p>
          <p class="label">{{label[id][props.note.labelIndex]}}</p>
      </div>
      <div class="main">
          <p>{{props.note.message}}</p>
      </div>
      <div class="foot_bar">
          <div class="foot_left">
              <div class="icon">
                  <span class="iconfont icon-aixin1"></span>
                  <span class="value">{{props.note.loveNumber}}</span>
              </div>

              <div class="icon">
                  <span class="iconfont icon-liuyan"></span>
                  <span class="value">{{props.note.commentNumber}}</span>
              </div>

          </div>
          <div class="foot_right">
              <p class="foot_name">{{props.note.name}}</p>
          </div>
      </div>
  </div>
</template>

<script setup>
import {label,color} from "@/utils/data";
import {computed, inject} from "vue";
const id = inject('key')
const props = defineProps({
    width:{
		    type:String,
        default:'288px'
    },
    note:{
        type:Object
    }
})

const bgColor = computed(()=>{
    return color[props.note.imgUrl];
})

</script>

<style lang="less" scoped>
@font-face {
    font-family: HanziPenSC-W3;
    src: url("@/assets/fonts/hyppt.ttf");
}
  .node_card{
      box-sizing:border-box;
      width: v-bind(width);
      height: 240px;
      padding: 10px 20px 16px;
      background-color: v-bind(bgColor);
      .top_bar{
          display: flex;
          justify-content: space-between;
          font-size: @font_size_12;
          font-weight: 400;
          color: @gary_3;
          padding-bottom: 19px;
      }
      .main{
          cursor: pointer;
          min-height: 140px;
          font-family: HanziPenSC-W3,sans-serif;
          font-size: @font_size_16;
          line-height: 22px;
          color: @gary_1;
          p{
              text-indent: 2em;
          }
      }
      .foot_bar{
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          padding-top: 18px;

          .foot_left{
              display: flex;
              color: @gary_3;
              font-size: @font_size_16;
              .iconfont{
                  font-size: @font_size_16;
              }
              .value{
                  font-size: @font_size_12;
                  color: @gary_3;
                  line-height: 16px;
                  padding-left: @interval_4;
              }
              .icon{
                  display: flex;
                  margin-right: @interval_8;
                  align-items: center;
              }
              .icon-aixin1{
                  cursor: pointer;
                  transition: all .3s;
                  &:hover{
                      color: @warning_color;
                  }
              }
          }
          .foot_right{
              font-size: @font_size_16;
              color: @gary_1;
              font-weight: bold;
          }
      }
  }
</style>