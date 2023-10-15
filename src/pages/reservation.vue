<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

definePageMeta({
  layout: 'default',
  alias: ['/reservation.html'],
})
useHead({
  titleTemplate: '%s - ' + '预约试听',
  meta: [
    { name: 'description', content: 'MonsterABC 学习成长伙伴' },
  ],
})

const mobile = ref('')
async function subMobile() {
  const { data, pending, error } = await useFetch('/officialWebsite/webRegisterData-save', {
    method: 'PUT',
    baseURL: 'https://manager.islepal.cn',
    body: {
      mobile,
    },
  })
  console.log(data._rawValue)
  if (data._rawValue.code == 200) {
    ElMessage({
      message: '提交成功！',
      type: 'success',
    })
  }
}
</script>

<template>
  <div class="page-index">
    <!-- 预约 -->
    <div class="yuyue">
      <div class="steps">
        <div class="step">
          <div class="left">
            <div class="left_title">
              Step1
            </div>
            <img class="left_title_line" src="../assets/Images/reservation/4.png" alt="">
            <img class="left_title_down" src="../assets/Images/reservation/11.png" alt="">
          </div>
          <div class="right">
            <div class="right_title">
              注册免费领
            </div>
            <div class="right_sub_title">
              1次专课程规划服务+英语水平测试 30天英文绘本阅读权限 100节外教英语学习视频
            </div>
            <div class="right_input">
              <div class="input">
                <input v-model="mobile" type="text" placeholder="请输入您的手机号">
              </div>
              <div class="button" @click="subMobile()">
                立即领取
              </div>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="left">
            <div class="left_title">
              Step2
            </div>
            <img class="left_title_line" src="../assets/Images/reservation/4.png" alt="">
            <img class="left_title_down" src="../assets/Images/reservation/11.png" alt="">
          </div>
          <div class="right">
            <div class="right_title">
              为您安排预约
            </div>
            <div class="right_sub_title">
              我们会及时与您联络，为您安排英语测试和学习规划服务
            </div>
          </div>
        </div>
        <div class="step">
          <div class="left">
            <div class="left_title">
              Step3
            </div>
            <img class="left_title_line" src="../assets/Images/reservation/4.png" alt="">
            <!-- <img class="left_title_down" src="../assets/Images/reservation/11.png" alt=""> -->
          </div>
          <div class="right">
            <div class="right_title">
              进入在线教室上课
            </div>
            <div class="right_sub_title">
              百万学员选择的多功能学习中心，兼容电脑端&iPad端 操作简单
            </div>
            <div class="right_input">
              <div class="button">
                下载彩岛
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="index_1" src="../assets/Images/reservation/2.png" alt="">
    <img class="index_1" src="../assets/Images/reservation/3.png" alt="">
  </div>
</template>

<style scoped>
.page-index {
    padding-top: 60px;
    text-align: center;
    width: 100%;
    background-color: #fff;
}

.yuyue {
    padding-top: 40px;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    color: black;
}

.steps {
    width: 1220px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    color: black;
}

.step {
    width: 610px;
    display: flex;
    padding-bottom: 10px;
}

.left {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 20px;
}

.left_title {
    font-size: 16px;
}

.left_title_line {
    width: 60px;
    margin-top: -7px;
}

.left_title_down {
    height: 80px;
    padding-top: 5px;
}

.right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.right_title {
    padding-top: 5px;
    font-size: 18px;
    font-weight: 600;
}

.right_sub_title {
    font-size: 14px;
    color: #383838;
    padding-top: 12px;
    padding-bottom: 12px;
}

.right_input {
    display: flex;
    align-items: center;
}

.right_input .input {
    height: 30px;
    width: 230px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    padding-left: 20px;
    border: 1px solid black;
    border-radius: 18px;
    margin-right: 20px;
}

.right_input input {
    width: 210px;
    height: 20px;
    border: none;
    /* background-color: yellow; */
}

.right_input input:focus-visible {
    border: none;
    outline: none;
}

.right_input .button {
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 6px;
    padding-bottom: 6px;
    background-color: #F15A24;
    border-radius: 30px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
}

.index_1 {
    width: 1220px;
    margin: 0 auto;
}
</style>
