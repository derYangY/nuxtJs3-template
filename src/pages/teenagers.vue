<script setup>
// This will work in both `<script setup>` and `<script>`
import { ref } from 'vue'

definePageMeta({
  layout: 'default',
  alias: ['/teenagers.html'],
})
useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: '%s - ' + '青少课程',
  meta: [
    { name: 'description', content: 'MonsterABC 真人课堂，更有温度的课堂' },
  ],
})

const change_img_active = ref('1')
const chart_img_active = ref('1')

function change_img_click(value) {
  change_img_active.value = value
}
function chart_img_click(value) {
  chart_img_active.value = value
}
</script>

<template>
  <div class="page-index">
    <!-- 头图 -->
    <BaseCoverswipper>
      <template #img>
        <img src="../assets/Images/teenagers/teenagers_1.png" alt="" class="BaseCoverswipper_img">
      </template>
    </BaseCoverswipper>
    <img class="index_1" src="../assets/Images/teenagers/teenagers_2.png" alt="">
    <!-- 三个阶段 -->
    <div class="three">
      <div class="title">
        <img class="index_1" src="../assets/Images/teenagers/3/title.png" alt="">
      </div>
      <div class="changes">
        <div id="change_img1" class="change">
          <img
            v-if="change_img_active != '10' && change_img_active != '1'" class="change_img" src="../assets/Images/teenagers/3/change_10.png"
            alt="" @click="change_img_click('1')"
          >
          <img
            v-if="change_img_active == '1'" class="change_img" src="../assets/Images/teenagers/3/change_1.png"
            alt=""
          >
        </div>
        <div id="change_img2" class="change">
          <img
            v-if="change_img_active != '20' && change_img_active != '2'" class="change_img" src="../assets/Images/teenagers/3/change_20.png"
            alt="" @click="change_img_click('2')"
          >
          <img
            v-if="change_img_active == '2'" class="change_img" src="../assets/Images/teenagers/3/change_2.png"
            alt=""
          >
        </div>
        <div id="change_img3" class="change">
          <img
            v-if="change_img_active != '30' && change_img_active != '3'" class="change_img" src="../assets/Images/teenagers/3/change_30.png"
            alt="" @click="change_img_click('3')"
          >
          <img
            v-if="change_img_active == '3'" class="change_img" src="../assets/Images/teenagers/3/change_3.png"
            alt=""
          >
        </div>
      </div>
      <div class="content">
        <img
          v-if="change_img_active == '1'" class="content_img" src="../assets/Images/teenagers/3/change_111.png"
          alt=""
        >
        <img
          v-if="change_img_active == '2'" class="content_img" src="../assets/Images/teenagers/3/change_211.png"
          alt=""
        >
        <img
          v-if="change_img_active == '3'" class="content_img" src="../assets/Images/teenagers/3/change_311.png"
          alt=""
        >
      </div>
    </div>
    <img class="index_1" src="../assets/Images/teenagers/teenagers_5.png" alt="">
    <!-- 九个级别 -->
    <div class="nine">
      <div class="title">
        <img class="index_1" src="../assets/Images/teenagers/5/1.png" alt="">
      </div>
      <div class="chart">
        <div class="chart_con">
          <div class="bgi">
            <img src="../assets/Images/teenagers/5/2.png" alt="">
          </div>
          <div class="level">
            <div class="level_item level_item1">
              <img
                v-if="chart_img_active != '10' && chart_img_active != '1'" src="../assets/Images/teenagers/5/l10.png" alt=""
                class="level_img level_img1" @click="chart_img_click('1')"
              >
              <img
                v-if="chart_img_active == '1'" src="../assets/Images/teenagers/5/l1.png" alt=""
                class="level_img level_img1"
              >
            </div>
            <div class="level_item level_item2">
              <img
                v-if="chart_img_active != '20' && chart_img_active != '2'" src="../assets/Images/teenagers/5/l20.png" alt=""
                class="level_img level_img2" @click="chart_img_click('2')"
              >
              <img
                v-if="chart_img_active == '2'" src="../assets/Images/teenagers/5/l2.png" alt=""
                class="level_img level_img2"
              >
            </div>
            <div class="level_item level_item3">
              <img
                v-if="chart_img_active != '30' && chart_img_active != '3'" src="../assets/Images/teenagers/5/l30.png" alt=""
                class="level_img level_img3" @click="chart_img_click('3')"
              >
              <img
                v-if="chart_img_active == '3'" src="../assets/Images/teenagers/5/l3.png" alt=""
                class="level_img level_img3"
              >
            </div>
            <div class="level_item level_item4">
              <img
                v-if="chart_img_active != '40' && chart_img_active != '4'" src="../assets/Images/teenagers/5/l40.png" alt=""
                class="level_img level_img4" @click="chart_img_click('4')"
              >
              <img
                v-if="chart_img_active == '4'" src="../assets/Images/teenagers/5/l4.png" alt=""
                class="level_img level_img4"
              >
            </div>
            <div class="level_item level_item5">
              <img
                v-if="chart_img_active != '50' && chart_img_active != '5'" src="../assets/Images/teenagers/5/l50.png" alt=""
                class="level_img level_img5" @click="chart_img_click('5')"
              >
              <img
                v-if="chart_img_active == '5'" src="../assets/Images/teenagers/5/l5.png" alt=""
                class="level_img level_img5"
              >
            </div>
            <div class="level_item level_item6">
              <img
                v-if="chart_img_active != '60' && chart_img_active != '6'" src="../assets/Images/teenagers/5/l60.png" alt=""
                class="level_img level_img6" @click="chart_img_click('6')"
              >
              <img
                v-if="chart_img_active == '6'" src="../assets/Images/teenagers/5/l6.png" alt=""
                class="level_img level_img6"
              >
            </div>
            <div class="level_item level_item7">
              <img
                v-if="chart_img_active != '70' && chart_img_active != '7'" src="../assets/Images/teenagers/5/l70.png" alt=""
                class="level_img level_img7" @click="chart_img_click('7')"
              >
              <img
                v-if="chart_img_active == '7'" src="../assets/Images/teenagers/5/l7.png" alt=""
                class="level_img level_img7"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="chart_content">
        <img v-if="chart_img_active == '1'" src="../assets/Images/teenagers/5/18.png" class="chart_content_img">
        <img v-if="chart_img_active == '2'" src="../assets/Images/teenagers/5/19.png" class="chart_content_img">
        <img v-if="chart_img_active == '3'" src="../assets/Images/teenagers/5/20.png" class="chart_content_img">
        <img v-if="chart_img_active == '4'" src="../assets/Images/teenagers/5/21.png" class="chart_content_img">
        <img v-if="chart_img_active == '5'" src="../assets/Images/teenagers/5/22.png" class="chart_content_img">
        <img v-if="chart_img_active == '6'" src="../assets/Images/teenagers/5/23.png" class="chart_content_img">
        <img v-if="chart_img_active == '7'" src="../assets/Images/teenagers/5/24.png" class="chart_content_img">
      </div>
    </div>
    <img class="index_1" src="../assets/Images/teenagers/teenagers_6.png" alt="">
  </div>
</template>

<style scoped>
.page-index {
    padding-top: 60px;
    text-align: center;
    width: 100%;
    background-color: #fff;
}

.BaseCoverswipper_img {
    width: 100%;
}

.index_1 {
    width: 1220px;
    margin: 0 auto;

}

.three {
    background-color: #FAFAFA;
}

.changes {
    display: flex;
    align-items: center;
    justify-content: center;
}

.change {}

.change_img {
    cursor: pointer;
    width: 300px;
}

.content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 460px;
}

.content_img {
    width: 1000px;
}

.nine {
    background-color: #FAFAFA;
}

.chart {
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
}

.chart_con {
    width: 1220px;
    height: 400px;
    position: relative;
}

.bgi {
    width: 1220px;
    position: absolute;
}

.bgi img {
    width: 1220px;
    height: 400px;
}

.level {
    position: absolute;
    height: 430px;
    width: 100%;
}

.level_item {
    position: absolute;
}

.level_item1 {
    bottom: 49px;
    left: 140px;
}

.level_item2 {
    bottom: 49px;
    left: 210px;
}

.level_item3 {
    bottom: 49px;
    left: 290px;
}

.level_item4 {
    bottom: 49px;
    left: 390px;
}

.level_item5 {
    bottom: 49px;
    left: 490px;
}

.level_item6 {
    bottom: 49px;
    left: 590px;
}

.level_item7 {
    bottom: 47px;
    left: 690px;
}

.level_img {
    cursor: pointer;
}

.level_img1 {
    width: 90px;
}

.level_img2 {
    width: 90px;
}

.level_img3 {
    width: 90px;
}

.level_img4 {
    width: 90px;
}

.level_img5 {
    width: 90px;
}

.level_img6 {
    width: 90px;
}

.level_img7 {
    width: 350px;
}

.chart_content {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: baseline;
    justify-content: center;
}

.chart_content_img {
    width: 1220px;
}
</style>
