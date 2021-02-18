<template>
<div class="header">
  城市选择
  <router-link to="/">
  <div class="iconfont header-icon">&#xe624;</div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"
.header
  position relative
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #ffffff
  background $bgColor
  font-size .32rem

.header-icon
  position absolute
  width .64rem
  top 0
  left 0
  text-align center
  font-size .4rem
  color #ffffff
</style>
