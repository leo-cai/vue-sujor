<script>
import articleItem from '../components/article/ArticleItem.vue'
export default {
  data () {
    return {
      indexArticle: [
        {
          id: 1,
          title: '设计模式在 TypeScript 中的应用 - 中介者模式',
          desc: '简单介绍中介者模式，及举例。',
          createdAt: '2018-02-02',
          authorName: 'leo',
          readTimes: '2',
          commentTimes: '2',
          likeTimes: '2'
        },
        {
          id: 2,
          title: '设计模式在 TypeScript 中的应用 - 中介者模式',
          desc: '简单介绍中介者模式，及举例。',
          createdAt: '2018-02-02',
          authorName: 'leo',
          readTimes: '2',
          commentTimes: '2',
          likeTimes: '2'
        }
      ]
    }
  },
  components: {
    articleItem
  },
  methods: {
    //
  },
  computed: {
    // indexArticle () {
    //   return this.$store.getters.indexArticle
    // }
  },
  created () {
  }
}
</script>

<template>
  <div class="app-container">
    <div class="index-left">
      <div class="index-banner">
        <h5>Recent Article</h5>
        <div></div>
      </div>
      <div class="clear-fix"></div>
      <div class="index-articles">
        <ul>
          <li v-for="article in indexArticle" :key="article.id">
            <article-item :article="article"></article-item>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <div class="index-banner">
        <h5>Recent Replies</h5>
        <div></div>
      </div>

      <div class="index-banner">
        <h5>Tags</h5>
        <div></div>
      </div>
    </div>
    <div class="clear-fix"></div>
  </div>
</template>

<style lang="stylus" scoped>
  @import "../assets/styles/index.styl"
</style>
