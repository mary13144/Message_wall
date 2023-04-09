<template>
  <div class="wall_message">
      <div class="wall_head">
	      <h1 class="message_title">
		      {{wallType[id].name}}
	      </h1>
	      <p class="slogan">{{wallType[id].slogan}}</p>
      </div>
      <div class="label">
          <p class="label_list " :class="{label_select:label_index===-1}" @click="labelIndexHandler(-1)">全部</p>
          <p class="label_list" :class="{label_select:label_index===index}" v-for="(item,index) in label[id]" @click="labelIndexHandler(index)">{{item}}</p>
      </div>
      <div class="card_main" v-show="id===0">
          <NodeCard class="main_inner" :key="data.id" :class="{cardSelect:wallIndex === index}" @click="IndexHandler(index)" :note="data" v-for="(data,index) in note.data" />
      </div>
      <div class="photo_main" v-show="id===1">
          <PhotoCard class="photo_item" :key="data.id" :photo-data="data" @click="IndexHandler(index)" v-for="(data,index) in photo.data" ></PhotoCard>
      </div>
      <div class="add" @click="isShowHandler" v-show="!isShow">
          <span class="iconfont icon-tianjia" ></span>
      </div>
      <YKModel :isShow="isShow" @isShowHandler="isShowHandler" :title="title">
          <NewCard :id="id" @closeModel="isShowHandler" v-if="wallIndex===-1"></NewCard>
          <CardDetail :data="dataType" v-else></CardDetail>
      </YKModel>
      <Transition name="fade_view">
        <YKViewer :photo="photo.data[wallIndex]" v-if="id===1&&wallIndex!==-1" @addIndex="addIndex" @reduceIndex="reduceIndex"></YKViewer>
      </Transition>
  </div>
</template>

<script setup>
import {label, wallType} from "@/utils/data";
import {computed, inject, onBeforeUnmount, onMounted, ref, watch} from "vue";
import NodeCard from "@/components/NoteCard.vue";
import  {note,photo} from "../../mock"
import YKModel from "@/components/YKModel.vue";
import NewCard from "@/components/NewCard.vue";
import CardDetail from "@/components/CardDetail.vue";
import PhotoCard from "@/components/PhotoCard.vue";
import YKViewer from "@/components/YKViewer.vue";

const id = inject('key');
const label_index = ref(-1);
const wallIndex = ref(-1);
const addBottom = ref('30px');
const isShow = ref(false);
const title = ref('留言');

const addIndex = ()=>{
    if (wallIndex.value===photo.data.length-1)
        return
    wallIndex.value+=1;
}

const reduceIndex = ()=>{
    if (wallIndex.value===0)
        return
    wallIndex.value-=1;
}

watch(id,async (newId,oldId)=>{
    if (newId!==oldId){
        wallIndex.value=-1;
        label_index.value=-1;
        isShow.value = false;
        title.value = '留言'
        document.documentElement.scrollTop = 0;
    }
})

//侧边栏的注入数据为留言还是图片
const dataType = computed(()=>{
    return id.value===0?note.data[wallIndex.value]:photo.data[wallIndex.value];
})

//侧边栏是否展示
const isShowHandler = ()=>{
    isShow.value = !isShow.value;
    wallIndex.value = -1;
    title.value = '留言';
}

//label标签的选择
const labelIndexHandler = (index)=>{
	label_index.value = index;
}

//card卡片的选择
const IndexHandler = (index)=>{
  if (isShow.value&&wallIndex.value===-1)
      return
  if (wallIndex.value!==index){
      wallIndex.value = index;
      isShow.value = true;
      title.value = '详情'
  }else {
      wallIndex.value = -1;
      isShow.value = false;
  }
}


//动态获取屏幕宽度
const localWidth = ref(document.body.clientWidth);
const getScreenWidth = ()=>{
	return localWidth.value = document.body.clientWidth;
}
const screenWidth = computed(()=>{
    return Math.floor((localWidth.value-120)/300)*300 + "px";
})


//动态获取添加按钮的bottom值
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
.fade_view{
    &-enter{
        &-from{
            opacity: 0;
        }

        &-active{
            transition: all 0.5s ease-in;
        }

        &-to{
            opacity: 1;
        }
    }

    &-leave{
        &-from{
            opacity: 1;
        }

        &-active{
            transition: all 0.5s ease-out;
        }

        &-to{
            opacity: 0;
        }
    }
}

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
    .card_main{
        display: flex;
        flex-wrap: wrap;
        width: v-bind(screenWidth);
        margin: 28px auto 40px;
        .main_inner{
            border: 1px solid transparent;
            margin: 6px;
        }
        .cardSelect{
            border: 1px solid @primary_color;
        }
    }
    .photo_main{
        width: 88%;
        margin: 28px auto 40px;
        columns: 6;
        column-gap: 4px;

        .photo_item{
            margin-bottom: @interval_4;
            break-inside: avoid;
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