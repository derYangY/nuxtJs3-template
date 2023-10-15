<script>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: 'default',
  alias: ['/mature.html'],
})
useHead({
  titleTemplate: '%s - ' + '成人课程',
  meta: [
    { name: 'description', content: 'MonsterABC 真人课堂，更有温度的课堂' },
  ],
})
</script>

<template>
  <div class="page-index">
    <!-- 头图 -->
    <BaseCoverswipper>
      <template #img>
        <img src="../assets/Images/mature/1.png" alt="" class="BaseCoverswipper_img">
      </template>
    </BaseCoverswipper>
    <img class="index_1" src="../assets/Images/mature/2.png" alt="">
    <img class="index_1" src="../assets/Images/mature/3.png" alt="">
    <img class="index_1" src="../assets/Images/mature/4.png" alt="">
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
    margin: auto;
}
</style>
