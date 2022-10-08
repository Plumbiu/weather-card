import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    weatherData: {}
  },
  mutations: {
    setData(state, result) {
      state.weatherData = result
    }
  },
  actions: {
    async getData(state, location) {
      const queryStr = location[0] + ',' + location[1]
      const { data: res } = await axios.get(`http://127.0.0.1:8001/${queryStr}`)
      // const { data: res } = await axios.get(`http://43.143.123.6:8001/${queryStr}`)
      state.commit('setData', res.result)
  }
}
})
