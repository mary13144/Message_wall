<template>
    <Transition name="fade">
        <div class="model" v-if="props.isShow">
            <div class="model_head">
                <p class="model_name">{{props.title}}</p>
                <span class="iconfont icon-guanbi" @click.self="()=>{emits('isShowHandler')}"></span>
            </div>
            <div class="model_main">
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>

<script setup>

const props = defineProps({
    isShow:{
		  type:Boolean
    },
    title:{
        type:String
    }
})

const emits = defineEmits(['isShowHandler'])

</script>

<style lang="less" scoped>
.fade{
    &-enter{
        &-from{
            transform: translateX(360px);
        }

        &-active{
            transition: all 0.5s ease-in;
            opacity: 0.5;
        }

        &-to{
            transform: translateX(0px);
        }
    }

    &-leave{
        &-from{
            transform: translateX(0px);
        }

        &-active{
            transition: all 0.5s ease-out;
            opacity: 0.5;
        }

        &-to{
            transform: translateX(360px);
        }
    }
}


.model{
    width: 360px;
    height: 100%;
    background: rgba(255,255,255,0.80);
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.08);
    backdrop-filter: blur(10px);
    position: fixed;
    z-index: 99999;
	  right: 0;
    top: 52px;
    .model_head{
        box-sizing: border-box;
        padding: @interval_20;
        display: flex;
        justify-content: space-between;
        .model_name{
	        font-size: @font_size_16;
	        color: @gary_1;
	        font-weight: bold;
        }
        .icon-guanbi{
            font-size: @font_size_16;
            color: @gary_2;
            &:hover{
                cursor: pointer;
            }
        }

    }

    .model_main{
        box-sizing: border-box;
        padding: 0 20px 116px 20px;
        height: 100%;
        overflow-y: auto;
        //修改默认滚动条
        &::-webkit-scrollbar {
            /*
                滚动条整体样式
            */
            width: 6px;
            height: 6px;
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            /*
                滚动条滑块样式
            */
            background: transparent;
            border-radius: 4px;
        }

        &:hover::-webkit-scrollbar-thumb {
            background: hsla(0, 0%, 53%, 0.4);
        }

        &:hover::-webkit-scrollbar-track {
            /*
                滚动条轨道
            */
            background: hsla(0, 0%, 53%, 0.1);
        }

    }
}
</style>