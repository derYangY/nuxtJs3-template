<script setup>
const { data: lists, pending, error } = await useFetch('/officialWebsite/getList', {
  method: 'GET',
  baseURL: 'https://manager.islepal.cn',
})
function navigate(value) {
  console.log('click')
  return navigateTo({
    path: `/article/${value}`,
  })
}
</script>

<template>
  <div class="footer">
    <div class="footer_items">
      <div class="footer_item">
        <div class="title">
          客服热线
        </div>
        <div class="line">
          <img src="../../assets//Images/footer_line.png" alt="">
        </div>
        <div class="item">
          <div class="name" />
        </div>
      </div>
      <div v-for="item in lists" class="footer_item">
        <div class="title">
          {{ item.name }}
        </div>
        <div class="line">
          <img src="../../assets/Images/footer_line.png" alt="">
        </div>
        <div class="item">
          <div v-for="item1 in item.subcategory" class="name" @click="navigate(item1.name)">
            {{ item1.name }}
          </div>
        </div>
      </div>
      <!-- <div class="footer_item">
                <div class="title"> 关注我们 </div>
                <div class="line">
                    <img src="../../assets/Images/footer_line.png" alt="">
                </div>
                <div class="item">
                    <div class="name">加入我们</div>
                    <div class="name">Facebook</div>
                    <div class="name">Wechat</div>
                </div>
            </div> -->
    </div>
    <!-- <div>{{ lists }}</div> -->
  </div>
</template>

<style scoped>
.footer {
    min-height: 432px;
    box-sizing: border-box;
    background-color: #666666;
    /* color: #CCCCCC; */
    color: #FFFFFF;

    display: flex;
    justify-content: center;
    padding-left: 100px;
    padding-right: 100px;
}

.footer_items {
    width: 1220px;
    height: 100%;
    display: flex;
    justify-content: space-between;
}

.footer_item {
    margin-top: 100px;
}

.title {
    font-size: 20px;
    font-weight: 500;
}

.line img {
    width: 50px;
}

.item {
    margin-top: 10px;
}

.name {
    margin-bottom: 10px;
    cursor: pointer;
}
</style>
