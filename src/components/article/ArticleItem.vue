<script>
export default {
  props: {
    article: {}
  }
}
</script>

<template>
  <div class="article-item">
    <router-link :to="'/article/' + article.id">
      <div class="article-title" v-text="article.title"></div>
    </router-link>
    <div class="article-desc" v-text="article.desc"></div>
    <div>
      <span v-text="article.createdAt"></span> 丨
      <span v-text="article.authorName"></span> 丨
      <span v-text="article.readTimes + '次阅读'"></span> 丨
      <span v-text="article.commentTimes + '条评论'"></span> 丨
      <span v-text="article.likeTimes + '人喜欢'"></span>
    </div>
    <div class="article-division"></div>
  </div>
</template>

<style lang="stylus" scoped>
  @import "../../assets/styles/article/article_item.styl"
</style>
