<template>
  <div class="mask">
      <slot></slot>
  </div>
</template>

<script>
export default {
	name: "Mask"
}
</script>

<style scoped>
.mask{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
	  right: 0;
    background-color: rgba(0,0,0,.3);
    z-index: 99999;
}
</style>