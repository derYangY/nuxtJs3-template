<script setup>
import { ref } from 'vue'

const { menu, change_menu } = useMenu()
change_menu('article')

const route = useRoute()
const active_category = ref('')
const active_article = ref('')
const article = ref('')
const alias_link = ref('')
const { data: lists, pending, error } = await useFetch('/officialWebsite/getList', {
  method: 'GET',
  baseURL: 'https://manager.islepal.cn',
})

// console.log(lists._rawValue);
active_article.value = route.params.name
// console.log('active_article---', active_article.value);
// 根据路由地址中的文章名，查询到对应的分类与文章内容
lists._rawValue.forEach((element) => {
  // console.log(element);
  element.subcategory.forEach((ele) => {
    // console.log(ele.name);
    if (active_article.value == ele.name) {
      // console.log(ele.name);
      active_category.value = element.name
      article.value = ele.content
      alias_link.value = `${element.name}.html`
      // console.log(alias_link.value);
      // console.log('active_category---', active_category.value);
      useHead({
        // as a string,
        // where `%s` is replaced with the title
        titleTemplate: `%s - ${active_article.value}`,
        meta: [
          { name: 'description', content: `${active_article.value} ` + 'MonsterABC' },
        ],
      })
      definePageMeta({
        // alias: [element.name + '.html'],
      })
    }
  })
})

function navigate(value) {
  return navigateTo({
    path: `/article/${value}`,
  })
}
function change_active_category(value) {
  active_category.value = value.name
}
function change_active_article(value) {
  active_article.value = value.name
  article.value = value.content
  navigate(value.name)
}
</script>

<template>
  <div class="page-index">
    <div class="content">
      <div class="left">
        <div v-for="item in lists" class="lists">
          <div class="title_border">
            <div
              class="title" :class="active_category == item.name ? 'title_active' : ''"
              @click="change_active_category(item)"
            >
              {{ item.name }}
            </div>
          </div>
          <div v-for="item1 in item.subcategory" v-if="active_category == item.name" class="subtitles">
            <div
              class="subtitle" :class="active_article == item1.name ? 'subtitle_active' : ''"
              @click="change_active_article(item1)"
            >
              {{ item1.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="article">
          <div class="html" v-html="article" />
          <!-- <div class="html">{{ $route.params.name }}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-index {
    padding-top: 60px;
    width: 100%;
    background-color: #fff;
    color: black;
    display: flex;
    justify-content: center;
}

.content {
    width: 900px;
    min-height: 500px;
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
}

.left {
    border-right: 1px solid #E6E6E6;
    padding-right: 20px;
}

.lists {}

.title_active {
    background-color: #F15A24;
    color: #fff;
}

.title_border {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #E6E6E6;
}

.title {
    font-size: 18px;
    padding: 5px 2px;
    cursor: pointer;
    width: 150px;
    white-space: nowrap;
    /* 防止文本换行 */
    overflow: hidden;
    /* 隐藏超出宽度的文本 */
    text-overflow: ellipsis;
    /* 显示省略号 */
}

.subtitles {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    border-bottom: 1px solid #E6E6E6;
}

.subtitle_active {
    /* background-color: #F15A24;
    color: #fff; */
    color: black !important;
}

.subtitle {
    font-size: 16px;
    padding: 5px 2px;
    cursor: pointer;
    width: 150px;
    white-space: nowrap;
    /* 防止文本换行 */
    overflow: hidden;
    /* 隐藏超出宽度的文本 */
    text-overflow: ellipsis;
    /* 显示省略号 */
    text-align: start;
    color: #797979;
}

.subtitle:hover {
    text-overflow: clip;
}

.right {
    margin-left: 20px;
    width: 700px;
    height: 100%;
}
</style>
