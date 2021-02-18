<template>
  <div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <div>
          <router-link to="/show">
            <img class="item-img" :src="item.imgUrl">
          </router-link>
          <div>
            <img class="item-pic" :src="item.imageUrl">
          </div>
        </div>
        <div class="item-info">
          <p class="item-head">
            <span class="name">{{item.name}}</span>
            <span class="core iconfont">&#xe607;&#xe607;&#xe607;&#xe607;&#xe607;</span>
            <span class="time">{{item.time}}</span>
          </p>
          <div>
            <div>
              <p class="btn">点击查看更多攻略</p>
              <button class="down iconfont" @click="showMore">&#xe603;</button>
              <div v-show="isShow">
                <div class="item-desc">
                  {{item.desc}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StrategyContent',
  props: {
    list: Array
  },
  data () {
    return {
      isShow: false,
      message: '显示'
    }
  },
  methods: {
    showMore () {
      this.isShow = !this.isShow
      if (this.isShow) {
        this.message = '隐藏'
      } else {
        this.message = '显示'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"
.item
  margin-top .08rem
.item-img
  position relative
  width 100%
.item-pic
  position absolute
  width 1.2rem
  height 1.2rem
  border-radius 50%
  border .068rem solid #fff
  margin-left .2rem
  margin-top -.5rem
.item-info
  margin-top .8rem
.item-head
  position absolute
  font-size .3rem
  margin -.45rem 0 0 1.6rem
  color #686464
.core
  margin-left .2rem
  color $xqColor
.time
  float right
  color #999494
  padding-left .28rem
.item-desc
  padding .12rem .22rem .22rem .22rem
  font-size .3rem
  line-height .45rem
  color #5e5b5b
  overflow hidden
.down
  display block
  font-size .55rem
  margin 0 auto
  color #898585
  background white
.btn
  text-align center
  padding-top .3rem
  color #898585
</style>
