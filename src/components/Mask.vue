<template>
  <div class="mask">
      <slot></slot>
  </div>
</template>

<script setup>
import {ref} from "vue";
const props = defineProps({
    top:{
		    type:String,
        default: '0'
    },
    bottom:{
        type:String,
        default: '0'
    },
    right:{
        type:String,
        default: '0'
    },
    left:{
        type:String,
        default: '0'
    },
})
</script>

<style scoped>
.mask{
    position: fixed;
    top: v-bind(top);
    bottom: v-bind(bottom);
    left: v-bind(left);
	  right: v-bind(right);
    background-color: rgba(255,255,255,.3);
    backdrop-filter: blur(10px);
    z-index: 9999;
}
</style>