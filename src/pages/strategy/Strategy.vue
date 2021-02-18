<template>
  <div>
    <strategy-header></strategy-header>
    <strategy-content :list="infoList"></strategy-content>
  </div>
</template>

<script>
import StrategyHeader from './components/Header'
import StrategyContent from './components/Content'
import axios from 'axios'

export default {
  name: 'Strategy',
  components: {
    StrategyContent,
    StrategyHeader,
  },
  data () {
    return {
      infoList: [],
    }
  },
  methods: {
    getStaregyInfo () {
      axios.get('/api/strategy.json').then(this.getStaregyInfoSucc)
    },
    getStaregyInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.infoList = data.infoList
      }
    }
  },
  mounted () {
    this.getStaregyInfo()
  }

}
</script>

<style lang="stylus" scoped>

</style>
