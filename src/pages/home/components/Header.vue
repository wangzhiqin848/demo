<template>
  <div>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">
          &#xe632;输入城市/景点/游玩主题
        </span>
      </div>
      <router-link to="/city">
        <div class="header-right">
          {{this.city}}
          <span class="iconfont arrow-icon">&#xe644;</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
/* 1rem=htmln font-szie=50px 86/100 */
@import "../../../assets/styles/varibles.styl"
.header
  display flex
  line-height $headerHeight
  background $bgColor
  color #fff
.header-left
  width .64rem
  float left
.back-icon
  text-align center
  font-size .4rem
.header-input
  flex 1
  height .64rem
  line-height .64rem
  margin-top .12rem
  margin-left .2rem
  padding-left .2rem
  background #fff
  border-radius .1rem
  color #ccc
.header-right
  color #ffffff
  width 1.24rem
  float right
  text-align center
.arrow-icon
  margin-left -.04rem
  font-size .24rem
</style>
