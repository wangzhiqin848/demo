<template>
  <div>
    <div class="score iconfont border-bottom">
      <span class="fen">综合评分</span>
      <span class="star">&#xe607;&#xe607;&#xe607;&#xe607;&#xe607;</span>
      <span class="wu">5.0</span>
      <span class="wu1">/5分</span>
    </div>
    <ul class="box">
      <li class="item" v-for="item of list" :key="item.id">
        <span class="bor">
           {{item.desc}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EstimateView',
  props: {
    list: Array
  },
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"
.score
  padding .3rem
.fen
  font-size .27rem
.star
  color $xqColor
  font-size .25rem
  margin-left .1rem
.wu
  color $xqColor
  font-size .3rem
  margin-left .2rem
.wu1
  color #6f6969
  font-size .3rem
.box
  margin .2rem
  list-style none
  height 1.35rem
.item
  float left
  line-height .3rem
  margin 0 .08rem .16rem
.bor
  line-height .4rem
  font-size .24rem
  border-radius .08rem
  color #616161
  text-align center
  padding .08rem .12rem
  border .02rem solid #e0e0e0
ul li:hover span{
  background $bgColor
  color white
}
</style>
