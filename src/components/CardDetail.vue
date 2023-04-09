<template>
  <div class="card_detail">
      <div class="detail_top">
          <p class="contact">联系墙主撕掉该便签</p>
          <p class="report">举报</p>
      </div>
      <NoteCard :note="props.cardData" width="100%" class="detail_main"></NoteCard>
      <div class="comment">
          <textarea class="message" placeholder="请输入内容..."></textarea>
          <div class="comment_submit">
	            <input type="text" placeholder="签名" class="comment_name">
              <YKButton>评论</YKButton>
          </div>
      </div>
      <div class="comment_detail">
          <p class="comment_title">评论:{{props.cardData.commentNumber}}</p>
          <div class="comment_li" v-for="data in comment.data">
              <div class="user_head" :style="{backgroundImage:portrait[data.imgUrl]}"></div>
              <div class="comment_main">
                  <div class="comment_head">
                      <p class="user_name">{{data.name}}</p>
                      <p class="comment_time">{{data.moment}}</p>
                  </div>
                  <div class="comment_message">{{data.message}}</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import NoteCard from "@/components/NoteCard.vue";
import YKButton from "@/components/YKButton.vue";
const props = defineProps(['cardData'])
import {comment} from "../../mock";
import {portrait} from "@/utils/data";
</script>

<style lang="less" scoped>
  .card_detail{
      .detail_top{
          display: flex;
          .contact{
              font-size: @font_size_14;
              color: @primary_color;
              font-weight: 400;
              cursor: pointer;
          }
          .report{
              margin-left: 30px;
              font-size: @font_size_14;
              color: @warning_color;
              font-weight: 400;
			        cursor: pointer;
          }
      }
      .detail_main{
          margin-top: 30px;
      }
      .comment{
          margin-top: @interval_12;
          .message{
              box-sizing: border-box;
              width: 100%;
              height: 56px;
              border: 1px solid rgba(148,148,148,1);
              resize: none;
              font-size: @font_size_14;
              color: @gary_3;
              padding: 8px 10px;
          }
          .comment_submit{
              display: flex;
              justify-content: space-between;
              .comment_name{
                  box-sizing: border-box;
                  width: 200px;
                  height: 36px;
				          padding: 8px 10px;
                  font-size: @font_size_14;
                  color: @gary_1;
                  font-weight: bold;
              }

          }
      }
      .comment_detail{
          .comment_title{
			        margin-top: 30px;
              font-size: @font_size_14;
              color: @gary_1;
              font-weight: bold;
              margin-bottom: 20px;
          }
          .comment_li{
              display: flex;
              padding-bottom: 30px;
              justify-content: space-between;
              .user_head{
                  flex: none;
                  margin-right: @interval_8;
                  width: 28px;
                  height: 28px;
                  border-radius: 50%;
              }
              .comment_main{
                  .comment_head{
                      display: flex;
                      align-items: center;
                      .user_name{
                          font-size: @font_size_14;
                          color: @gary_1;
                          font-weight: bold;
                      }
                      .comment_time{
                          margin-left: @interval_8;
                          font-size: @font_size_12;
                          color: @gary_3;
                      }
                  }
                  .comment_message{
                      margin-top: @interval_4;
                  }

              }
          }
      }
  }
</style>