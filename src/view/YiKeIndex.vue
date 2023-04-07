<template>
	<div class="wall_index">
		<TopBar></TopBar>
		<video src="@/assets/images/qm1.mp4" autoplay="autoplay" muted="muted" loop="loop" class="bg_video"></video>
		<router-view></router-view>
		<FootBar></FootBar>
	</div>
</template>

<script setup>
import FootBar from "@/components/FootBar.vue";
import TopBar from "@/components/TopBar.vue";
</script>

<style lang="less" scoped>
.wall_index {
  .bg_video {
		height: 880px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
  }
}
</style>