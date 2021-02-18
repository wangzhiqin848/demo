<template>
  <div>
    <estimate-header></estimate-header>
    <estimate-view :list="estList"></estimate-view>
    <estimate-spot :list="spotList" :swiper="swiperList"></estimate-spot>
  </div>
</template>

<script>
import EstimateHeader from './components/Header'
import EstimateView from './components/View'
import EstimateSpot from './components/Spot'

import axios from 'axios'
export default {
  name: 'Estimate',
  components: {
    EstimateHeader,
    EstimateView,
    EstimateSpot
  },
  data () {
    return {
      estList: [],
      spotList: [],
      swiperList: []
    }
  },
  methods: {
    getEstimateInfo () {
      axios.get('/api/estimate.json').then(this.getEstimateInfoSucc)
    },
    getEstimateInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.estList = data.estList
        this.spotList = data.spotList
        this.swiperList = data.swiperList
      }
    }
  },
  mounted () {
    this.getEstimateInfo()
  }
}
</script>

<style scoped>

</style>
