<template>
	<div class="top-bar">
		<div class="logo">
			<img src="@/assets/images/yksg.svg" alt="logo" class="logo_icon">
			<p class="logo_name">一刻时光</p>
		</div>
		<div class="menu">
			<YKButton size="base" level="cPrimary" >留言墙</YKButton>
			<YKButton size="base" level="cSecondary" class="ykButton">照片墙</YKButton>
		</div>
		<div class="user">
			<div class="user-head">

			</div>
		</div>
	</div>
</template>

<script setup>
import YKButton from "@/components/YKButton.vue";
import {ref} from "vue";

const size = ref('base');
const level = ref('primary');
</script>

<style lang="less" scoped>
.top-bar {
  display: flex;
	justify-content: space-between;
	align-items: center;
  width: 100%;
  height: 52px;
  background: rgba(255, 255, 255, 0.80);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
	padding: 0 30px;
	box-sizing: border-box;
  .logo {
		display: flex;
		align-items: center;
		width: 200px;
		p {
			font-size: 20px;
			color: @gary_1;
			font-weight: 600;
			margin-left: 10px;
		}
  }

	.user{
		width: 200px;
		.user-head{
			float: right;
			border-radius: 50%;
			width: 36px;
			height: 36px;
			background-image: linear-gradient(180deg,#7BE7FF 2%,#1E85E2);
		}
	}

	.menu{
		.ykButton{
			margin-left: 24px;
		}
	}
}
</style>