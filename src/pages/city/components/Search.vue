<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名/拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          v-for="item of list"
          :key="item.id"
          class="search-item border-bottom">
          {{item.name}}
        </li>
        <!-- 当用户正常搜索的时候不会出现，非正常时出现 -->
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到可匹配的城市
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* 导入   滑动 */
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      /* 节流操作 */
      timer: null
    }
  },
  /* 计算属性 */
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    /* 侦听keyword */
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      /* 实现输入a出现a开头的地方，删除a，a城市跟着没有 */
      if (!this.keyword) {
        this.list = []
        return
      }
      /* 箭头函数 */
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
              result.push(value)
            }
          })
        }
        this.list = result
      } ,100)
    }
  },
  /* 生命周期的钩子函数 */
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"
.search
  height .72rem
  padding .1rem
  background $bgColor
  .search-input
    box-sizing border-box
    width 100%
    height .62rem
    line-height .62rem
    text-align center
    border-radius .06rem
    color #ccc
.search-content
  z-index 1
  overflow hidden
  position absolute
  top 1.58rem
  right 0
  left 0
  bottom 0
  background #eee
  .search-item
    line-height .62rem
    padding-left .2rem
    background #ffffff
    color #666
</style>
