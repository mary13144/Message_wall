<template>
  <div class="wall_message">
      <div class="wall_head">
	      <h1 class="message_title">
		      {{wallType[id].name}}
	      </h1>
	      <p class="slogan">{{wallType[id].slogan}}</p>
      </div>
      <div class="label">
          <p class="label_list " :class="{label_select:label_index===-1}" @click="switchIndex(-1)">全部</p>
          <p class="label_list" :class="{label_select:label_index===index}" v-for="(item,index) in label[id]" @click="switchIndex(index)">{{item}}</p>
      </div>
      <div class="main" >
          <NodeCard class="main_inner" v-for="data in noteData.data" :note="data" @click="isShowHandler"/>
      </div>
      <div class="add" @click="isShowHandler" v-show="!isShow">
          <span class="iconfont icon-tianjia" ></span>
      </div>
      <YKModel :isShow="isShow" @isShowHandler="isShowHandler">
          <NewCard></NewCard>
      </YKModel>
  </div>
</template>

<script setup>
import {label, wallType} from "@/utils/data";
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import NodeCard from "@/components/NoteCard.vue";
import  noteData from "../../mock"
import YKModel from "@/components/YKModel.vue";
import NewCard from "@/components/NewCard.vue";

const id = ref(0);
const label_index = ref(2)
const addBottom = ref('30px');
const isShow = ref(false);
const isShowHandler = ()=>{
	isShow.value = !isShow.value;
}


const switchIndex = (index)=>{
	label_index.value = index;
}


const localWidth = ref(document.body.clientWidth);
const screenWidth = computed(()=>{
	return Math.floor((localWidth.value-120)/300)*300 + "px";
})

const getScreenWidth = ()=>{
	return localWidth.value = document.body.clientWidth;
}
const getAddBottom = ()=>{
	  //内容垂直滚动的距离
    let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	  //内容高度
	  let scrollHeight = document.documentElement.scrollHeight;
	  //屏幕高度
    let screenHeight = document.documentElement.clientHeight;
	  if (scrollTop+screenHeight+230>=scrollHeight){
		  addBottom.value = scrollTop+screenHeight+230-scrollHeight+'px';
    }else {
		  addBottom.value = 30+'px'
    }
}
onMounted(()=>{
	  window.addEventListener("resize",getScreenWidth)
    window.addEventListener('scroll',getAddBottom)
})

onBeforeUnmount(()=>{
	  window.removeEventListener("resize",getScreenWidth)
    window.removeEventListener("scroll",getAddBottom)
})

</script>

<style lang="less" scoped>
.wall_message{
    position: relative;
    min-height: 900px;
    padding-top: 52px;

    .wall_head{
        margin:0 auto 44px;
        text-align: center;
        .message_title{
            font-size: 56px;
            color: @gary_1;
            font-weight: 600;
            margin: 0;
            padding: 48px 0 @interval_8;
        }
        .slogan{
            font-size: @font_size_14;
            color: @gary_2;
            font-weight: 400;
        }
    }
    .label{
        display: flex;
        justify-content: center;
        margin-top: 40px;
        .label_list{
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding: 0 14px;
            height: 30px;
            color: @gary_2;
            font-size: @font_size_14;
            font-weight: 400;
            margin: 2px;
        }
        .label_list:hover{
            cursor: pointer;
        }
        .label_select{
            font-weight: 600;
            color: @gary_1;
            border: 1px solid @gary_1;
            border-radius: 14px;
        }
    }
    .main{
        display: flex;
        flex-wrap: wrap;
        width: v-bind(screenWidth);
        margin: 28px auto 40px;
        .main_inner{
            margin: 6px;
        }
    }
    .add{
        position: fixed;
        right: 30px;
        bottom: v-bind(addBottom);
        transition: all .3s;
        width: 56px;
        height: 56px;
        background: @gary_1;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.08);
        border-radius: 50%;
        line-height: 56px;
        text-align: center;
        .icon-tianjia{
            font-size: 24px;
            color: @gary_10;
        }
    }
}
</style>