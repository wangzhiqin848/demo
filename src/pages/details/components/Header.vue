<template>
  <div>
    <div class="header">
      <router-link to="/">
        <div class="iconfont header-icon">&#xe624;</div>
      </router-link>
      <img class="img" src="//img1.qunarzz.com/sight/p0/1508/f7/f7c3be996152011c.img.jpg_600x330_dfb694b6.jpg" alt="">
      <span class="p">南京总统府(AAAA景区)</span>
    </div>
    <router-link to="/strategy">
      <p class="pingfen">5.0分</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DetailsHeader'
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"
.header
  position relative
.header-icon
  position absolute
  margin-left .1rem
  margin-top .1rem
  width .3rem
  height .3rem
  border-radius 50%
  padding .21rem
  background rgba(0,0,0,.55)
  color white
.img
  width 100%
.p
  font-size .4rem
  color red
.pingfen
  font-size .4rem
  color #ea8a35
</style>
