<template>
  <div>
    <div class="item" v-for="item of list" :key="item.id">
      <div class="content border-top">
        <div class="touxiang">
          <img class="pic" :src="item.imgUrl">
        </div>
        <div class="zi">
          <span class="name">{{item.name}}</span>
          <span class="star iconfont">&#xe607;&#xe607;&#xe607;&#xe607;&#xe607;</span>
          <p class="time">{{item.time}}</p>
        </div>
      </div>
      <div class="word">
        <p class="desc">
          {{item.desc}}
        </p>
        <div>
          <div class="ping">
            <swiper :options="swiperOption">
              <swiper-slide v-for="i of swiper" :key="i.id">
                <div>
                  <div class="i">
                    <img class="lunbo" :src="i.imageUrl" alt="">
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <router-link to="/">
          <p class="link">
            {{item.link}}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EstimateSpot',
  methods: {},
  props: {
    list: Array,
    swiper: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"
.content
  margin-top .5rem
  padding .12rem 0
.touxiang
  float left
.pic
  display block
  width .8rem
  height .8rem
  border-radius .4rem
  margin 0 0 .1rem .5rem
.zi
  display block
  margin-left 1.5rem
  padding-top .2rem
  color #9e9e9e
  font-size .24rem
.star
  color $xqColor
  margin-left .1rem
  font-size .24rem
.desc
  margin .1rem .3rem
  font-size .28rem
  line-height .4rem
.link
  font-size .26rem
  color $bgColor
  margin-left .3rem
  margin-top .3rem
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
.ping
  margin .2rem
.i
  float left
  margin-top .2rem
.lunbo
  width 1.4rem
  height 1.4rem
  margin-left .2rem
</style>
