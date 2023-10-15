<script>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: 'default',
  alias: ['/cooperation.html'],
})
useHead({
  titleTemplate: '%s - ' + '商务合作',
  meta: [
    { name: 'description', content: '配合MonsterABC 统一市场推广策略' },
  ],
})
</script>

<template>
  <div class="page-index">
    <div class="content">
      <div class="title">
        <div class="name">
          渠道合作
        </div>
        <img src="../assets/Images/reservation/4.png" alt="">
      </div>
      <div class="title1">
        寻求合作
      </div>
      <div class="p">
        我们寻找在全国各地具有教育背景的公司或个人进行渠道合作，如果您具备相关条件，请与我们联系。
      </div>
      <div class="p">
        1、认同互联网教育以及Monster ABC的发展方向，能够长期共同发展；
      </div>
      <div class="p">
        2、熟悉教育市场，在当地有较好的教育资源；
      </div>
      <div class="p">
        3、有较好的市场开拓能力，有相关产品代理经验优先；
      </div>
      <div class="p">
        4、能够配合Monster ABC统一市场推广策略。
      </div>
      <div class="title1">
        联系我们
      </div>
      <div class="p">
        邮箱：
      </div>
      <div class="p">
        邮编：
      </div>
      <div class="p">
        地址：
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-index {
    padding-top: 60px;
    /* text-align: center; */
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

.content {
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    /* background-color: red; */
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
}

.title {
    width: 800px;
}

.name {
    width: 800px;
    font-size: 20px;
    position: absolute;
}

.title img {
    width: 100px;
    height: 12px;
    position: relative;
    top: 10px;
}

.title1 {
    width: 800px;
    font-size: 18px;
    padding-top: 40px;
    padding-bottom: 20px;
}

.p {
    width: 800px;
    color: #3d3d3d;
    font-size: 16px;
    padding-bottom: 10px;
}
</style>
