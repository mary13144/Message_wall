<template>
  <button :class="[size,level]" class="buttonBase"><slot></slot></button>
</template>

<script setup>
const props = defineProps({
    size:{
		    type:String,
        default:'base'
    },
    level:{
		    type:String,
        default:'primary'
    }
})
</script>

<style lang="less" scoped>
//按钮基础样式
.buttonBase{
    text-align: center;
	  border: none;
    box-sizing: border-box;
    cursor: pointer;
}
//size
.max{
    min-width: 100px;
    height: 48px;
    border-radius: 24px;
    padding: 0 24px;
    line-height: 48px;
}

.base{
    min-width: 82px;
    height: 36px;
    border-radius: 20px;
    padding: 0 20px;
    line-height: 36px;
}

//level
.primary{
    background-color: @gary_1;
    color: @gary_10;
    border: none;
}
.secondary{
    background-color: @gary_10;
    color: @gary_1;
    border: 1px solid @gary_1;
}
.cPrimary{
    background-color: @primary_color;
    color: @gary_10;
    font-weight: 600;
}
.cSecondary{
    background-color: @gary_10;
    color: @gary_1;
}
</style>