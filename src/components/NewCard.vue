<template>
  <div class="newCard">
      <div class="sample">
          <div class="color_sample" :class="{color_select:index===color_index}" @click.self="colorSelectHandler(index)" v-for="(bgColor,index) in color_sample" :style="{backgroundColor:bgColor}"></div>
      </div>
      <div class="cardMain">
          <textarea v-model="message" placeholder="留言。。。" class="message" maxlength="96"></textarea>
          <input v-model="name" type="text" placeholder="签名" class="card_input">
      </div>
      <div class="labels">
          <p class="title">选择标签</p>
          <div class="label_item">
              <p class="labelOne" :class="{label_select:index===label_index}" @click="labelSelectHandler(index)" v-for="(item,index) in label[props.id]">{{item}}</p>
          </div>
      </div>
      <div class="prompt">
          <p class="prompt_title">免责声明</p>
          <p class="prompt_mzsm">
              一刻时光是本人独自开发的，为便于与用户交流的留言平台。请不要利用此平台服务制作、上传、下载、复制、发布、传播或者转载如下内容：<br>
              1、反对宪法所确定的基本原则的；<br>
              2、危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；<br>
              3、损害国家荣誉和利益的；<br>
              4、煽动民族仇恨、民族歧视，破坏民族团结的；<br>
              5、破坏国家宗教政策，宣扬邪教和封建迷信的；<br>
              6、散布谣言，扰乱社会秩序，破坏社会稳定的；<br>
              7、散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；<br>
              8、侮辱或者诽谤他人，侵害他人合法权益的；<br>
              9、含有法律、行政法规禁止的其他内容的信息。
          </p>
      </div>
      <div class="foot_bar">
          <YKButton size="max" level="secondary" @click="closeHandler(0)">取消</YKButton>
          <YKButton size="max" style="width: 200px">确认</YKButton>
      </div>
  </div>
</template>

<script setup>
import {color,label} from "@/utils/data";
import {ref} from "vue";
import YKButton from "@/components/YKButton.vue";

const message = ref('');
const name = ref('');
const label_index = ref(-1);
const color_index = ref(-1);
const backgroundColor = ref('rgba(252,175,162,0.3)');
const color_sample = color.slice(0,5).map(item=>{
		return item.slice(0,17)+"1)";
	}
)


const props = defineProps(['id',])
const emits = defineEmits(['closeModel'])


const colorSelectHandler = (index)=>{
    backgroundColor.value = color[index];
    color_index.value = index;
}
const labelSelectHandler = (index)=>{
    label_index.value = index;
}

const closeHandler = (data)=>{
    emits('closeModel');
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
            border: 1px solid @primary_color;
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
        transition: all .3s;
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
    .labels{
        margin-top: 30px;
        .title{
            font-size: @font_size_14;
            color: @gary_1;
            font-weight: bold;
        }
        .label_item{
            display: flex;
            flex-wrap: wrap;
            .labelOne{
				        box-sizing: border-box;
                padding: 2px 10px;
                margin-right: @interval_4;
                margin-top: 16px;
                font-size: @font_size_14;
                color: @gary_2;
                cursor: pointer;
                &:nth-child(6n){
                    margin-right: 0;
                }
			      }
            .label_select{
                background: #EBEBEB;
                border-radius: 14px;
                font-weight: bold;
            }
        }
    }
    .prompt{
        .prompt_title{
            padding-top: 30px;
            padding-bottom: 12px;
            font-size: @font_size_14;
            color: @gary_1;
            font-weight: bold;
        }
        .prompt_mzsm{
            font-size: @font_size_12;
            color: @gary_3;
        }
    }
    .foot_bar{
        padding: 30px 0;
        display: flex;
        justify-content: space-between;
    }
}
</style>