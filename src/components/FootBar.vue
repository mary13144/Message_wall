<template>
	<div class="footBar">
		<div class="footBar_inner">
			<div class="footBar_left">
				<div class="logo">
					<img src="@/assets/images/yksg.svg" alt="logo">
					<p class="title">一刻时光</p>
				</div>

				<div class="description">
					<p class="p_top">一刻时光是本人独自开发的，为便于与用户交流的留言平台。</p>
					<p class="p_mid">用户将留言便签贴在留言墙上，用户可以自定义便签颜色和内容属性，不仅可以用于交流，也是一场记录。</p>
				</div>

				<div class="statement">
					<p>声明</p>
					<p class="p_bottom">备案/许可证粤ICP备19012866号     网站备案/许可证粤ICP备19012866号-1</p>
				</div>

			</div>
			<div class="footBar_mid">
				<p class="mid_title">链接</p>
				<div class="link">
					<a href="https://www.huohuo90.com" target="_blank" class="link_name">逸刻时光</a>
					<a href="https://space.bilibili.com/485469670" target="_blank" class="link_name">b站</a>
				</div>

			</div>
			<div class="footBar_right">
				<p class="right_title">打赏</p>
				<div class="reward">
					<div class="wx">
						<img :src="wx" alt="wx">
						<p>微信支付</p>
					</div>
					<div class="zfb">
						<img :src="zfb" alt="zfb">
						<p>支付宝支付</p>
					</div>
				</div>

			</div>
		</div>

	</div>
</template>

<script setup>
import wx from '@/assets/images/wx.jpg'
import zfb from '@/assets/images/zfb.jpg'
</script>

<style lang="less" scoped>
.footBar{
	box-sizing: border-box;
	width: 100%;
	height: 200px;
	background: @gary_1;
	padding:20px 0;
	.footBar_inner{
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		.footBar_left{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			p{
				font-size: @font_size_12;
				font-weight: 400;
				color: @gary_10;
				opacity: 0.5;
			}
			.logo{
				display: flex;
				.title{
					width: 80px;
					height: 28px;
					font-size: 20px;
					color: @gary_10;
					font-weight: 600;
					margin-left: 10px;
					opacity: 1;
				}
			}
			.description{
				width: 400px;
				height: 59px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

			}
			.statement{
				display: flex;

				.p_bottom{
					margin-left: 20px;
				}
			}
		}
		.footBar_mid{

			.mid_title{
				font-size: @font_size_16;
				font-weight: 400;
				color: @gary_10;
				opacity: 0.5;
			}
			.link{
				margin-top: 8px;
				.link_name{
					font-size: @font_size_12;
					font-weight: 400;
					color: @gary_10;
					opacity: 0.5;
				}
				.link_name:last-of-type{
					margin-left: 20px;
				}
			}

		}
		.footBar_right{
			.right_title{
				font-size: @font_size_16;
				font-weight: 400;
				color: @gary_10;
				opacity: 0.5;
				margin-bottom: 12px;
			}
			.reward{
				display: flex;

				.wx,.zfb{
					width: 100px;
					text-align: center;
					img{
						width: 100%;
					}
					p{
						margin-top: 9px;
						font-size: @font_size_12;
						color: @gary_10;
						opacity: 0.5;
					}
				}
				.zfb{
					margin-left: 40px;
				}
			}

		}
	}

	.statement{
		float: left;
		margin-right: 20px;
	}
}

</style>