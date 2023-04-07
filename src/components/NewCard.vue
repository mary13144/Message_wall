<template>
  <div class="newCard">
      <div class="sample">
          <div class="color_sample" :class="{color_select:index===select_index}" @click="colorSelectHandler(index)" v-for="(bgColor,index) in color_sample" :style="{backgroundColor:bgColor}"></div>
      </div>
      <div class="cardMain">
          <textarea placeholder="留言。。。" class="message" maxlength="96"></textarea>
          <input type="text" placeholder="签名" class="card_input">
      </div>
  </div>
</template>

<script setup>
import {color} from "@/utils/data";
import {ref} from "vue";
const select_index = ref(-1)
const backgroundColor = ref('rgba(252,175,162,0.3)')
const color_sample = color.slice(0,5).map(item=>{
		return item.slice(0,17)+"1)";
	}
)
const colorSelectHandler = (index)=>{
	backgroundColor.value = color[index];
	select_index.value = index;
}
</script>

<style lang="less" scoped>
@font-face {
	font-family: HanziPenSC-W3;
	src: url("@/assets/fonts/hyppt.ttf");
}
.newCard{
    box-sizing: border-box;
    .sample{
        display: flex;
        justify-content: left;
        margin-bottom: @interval_12;
        .color_sample{
            box-sizing: border-box;
            width: 24px;
            height: 24px;
            margin-right: 8px;
            cursor: pointer;
        }
        .color_select{
            border: 1px solid rgba(59,115,240,1);
        }
    }
    .cardMain{
        box-sizing: border-box;
        width: 100%;
        height: 240px;
        background: v-bind(backgroundColor);
        display: flex;
        flex-direction: column;
        padding: @interval_12;
        .message{
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            padding: @interval_8;
            border: none;
            background: transparent;
            font-family: HanziPenSC-W3,sans-serif;
            font-size: @font_size_16;
            color: @gary_2;
            resize: none;
        }
        .card_input{
			      box-sizing: border-box;
            width: 100%;
            margin: 0 auto;
            line-height: 18px;
            border: 1px solid rgba(255,255,255,1);
            padding:  @interval_8;
            background: transparent;
            font-family: HanziPenSC-W3,sans-serif;
            font-size: @font_size_14;
        }
    }
}
</style>