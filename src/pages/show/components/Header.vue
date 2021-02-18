<template>
  <div class="header border-bottom">
    <router-link to="/strategy">
      <div class="icon iconfont">&#xe624;</div>
    </router-link>
    <div class="desc">景区图片</div>
  </div>
</template>

<script>
export default {
  name: 'ShowHeader'
}
</script>

<style lang="stylus" scoped>
.header
  display flex
.icon
  margin .2rem
  font-size .45rem
  color black
.desc
  margin 0 30%
  line-height .88rem
  font-size .36rem
</style>
