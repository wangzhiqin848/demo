<template>
  <div>
    <div class="header">
      <router-link to="/details">
        <div class="iconfont header-icon border-bottom">&#xe624;</div>
      </router-link>
      <div class="gong">
        攻略
      </div>
      <router-link to="/estimate">
        <div class="dian">
          点评
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StrategyHeader'
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
  display block
  margin 0 20%
  text-align center
  font-size .4rem
  color $bgColor
  border-bottom .05rem solid $bgColor
.dian
  flex 1
  text-align center
  font-size .4rem
  color black
</style>
