<template>
  <div>
    <show-header></show-header>
    <show-picture :list="showList"></show-picture>
  </div>
</template>

<script>
import ShowHeader from './components/Header'
import ShowPicture from './components/Picture'
import axios from 'axios'
export default {
  name: 'Show',
  components: {
    ShowHeader,
    ShowPicture
  },
  data () {
    return {
      showList: []
    }
  },
  methods: {
    getShowInfo () {
      axios.get('/api/show.json').then(this.getShowInfoSucc)
    },
    getShowInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.showList = data.showList
      }
    }
  },
  mounted () {
    this.getShowInfo()
  }
}
</script>

<style scoped>

</style>
