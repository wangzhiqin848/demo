<template>
  <div>
    <div class="item" v-for="item of list" :key="item.id">
      <span>
        <img class="pic" :src="item.imgUrl" alt="">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowPicture',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.item
  margin .2rem
  display inline
.pic
  width 43%
  margin-top .3rem
</style>
