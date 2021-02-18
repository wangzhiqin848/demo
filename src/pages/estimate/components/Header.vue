<template>
  <div>
    <div class="header">
      <router-link to="/details">
        <div class="iconfont header-icon border-bottom">&#xe624;</div>
      </router-link>
      <router-link to="/strategy">
        <div class="gong">
          攻略
        </div>
      </router-link>
      <div class="dian">
        点评
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EstimateHeader'
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"
.header
  display flex
  margin .25rem .25rem 0 .25rem
.header-icon
  flex 1
  color black
  font-size .45rem
  padding-bottom .3rem
.gong
  padding-left 60px
  text-align center
  font-size .4rem
  color black
.dian
  display block
  margin 0 auto
  text-align center
  font-size .4rem
  color $bgColor
  border-bottom .05rem solid $bgColor
</style>
