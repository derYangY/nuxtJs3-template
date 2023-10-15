<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: 'default',
  alias: ['/index.html'],
})
useHead({
  titleTemplate: '%s - ' + '首页',
  meta: [
    { name: 'description', content: 'MonsterABC 随时随地开启在线课程' },
  ],
})
</script>

<template>
  <div class="page-index">
    <!-- 头图 -->
    <BaseCoverswipper>
      <template #img>
        <img src="../assets/Images/index/index_cover.png" alt="" class="BaseCoverswipper_img">
      </template>
    </BaseCoverswipper>
    <!-- 课程优势介绍 -->
    <img class="index_1" src="../assets/Images/index/index_1.png" alt="">
    <div class="bg">
      <img class="index_1" src="../assets/Images/index/index_2.png" alt="">
    </div>
    <img class="index_1" src="../assets/Images/index/index_3.png" alt="">
    <div class="bg">
      <img class="index_1" src="../assets/Images/index/index_4.png" alt="">
    </div>
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
</style>
