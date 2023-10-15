<script setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: 'default',
  alias: ['/introduce.html'],
})
useHead({
  titleTemplate: '%s - ' + '师资介绍',
  meta: [
    { name: 'description', content: 'MonsterABC 专业团队，更懂英语更懂教学' },
  ],
})
const { data: teachers, pending, error } = await useFetch('/officialWebsite/teacher-list', {
  method: 'POST',
  baseURL: 'https://manager.islepal.cn',
  body: {
    postData: {
      isWebRecommend: '1',
    },
    pageSize: '6',
    pageNum: '1',
  },
})
</script>

<template>
  <div class="page-index">
    <!-- 头图 -->
    <BaseCoverswipper>
      <template #img>
        <img src="../assets/Images/introduce/1.png" alt="" class="BaseCoverswipper_img">
      </template>
    </BaseCoverswipper>
    <img class="index_1" src="../assets/Images/introduce/2.png" alt="">
    <img class="index_2" src="../assets/Images/introduce/3.png" alt="">
    <img class="index_1" src="../assets/Images/introduce/4.png" alt="">
    <div>
      <!-- {{ teachers.data.results }} -->
    </div>
    <!-- 教师介绍 -->
    <div class="teachers">
      <div class="teachers-div">
        <div v-for="teacher in teachers.data.results" class="teacher">
          <div class="teacher_img">
            <img
              v-if="teacher.bansImageList[0]" class="teacher_img_img"
              :src="teacher.bansImageList[0].photoUrl" alt=""
            >
          </div>
          <div class="teacher_name">
            <div class="teacher_name_name">
              {{ teacher.name }}
            </div>
          </div>
          <div class="teacher_name">
            <div class="teacher_home_home">
              家乡：{{ teacher.teacherHometown }}
            </div>
            <div class="teacher_home_home">
              教师学历：{{ teacher.education }}
            </div>
            <div class="teacher_home_home">
              教师资质：{{ teacher.qualification }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-index {
    padding-top: 60px;
    text-align: center;
    width: 100%;
    background-color: #fff;
    color: black;
}

.BaseCoverswipper_img {
    width: 100%;
}

.index_1 {
    width: 1220px;
    margin: 0 auto;

}

.index_2 {
    width: 100%;
    margin: 0 auto;

}

.teachers {
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
    justify-content: center;
    background-color: #F0F0F0;
}

.teachers-div {
    width: 1220px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
}

.teacher:hover {
    background-color: #e0e0e0;
}

.teacher {
    height: 350px;
    width: 320px;
    margin-bottom: 60px;
    cursor: pointer;
}

.teacher_img {
    width: 320px;
    height: 240px;
    overflow: hidden;
}

.teacher_img_img {
    width: 320px;
}

.teacher_name {
    width: 100%;
    padding-top: 10px;
    text-align: start;
}

.teacher_name_name {
    font-size: 16px;
}

.teacher_home_home {
    font-size: 14px;
    color: #808080;
    margin-bottom: 5px;
}
</style>
