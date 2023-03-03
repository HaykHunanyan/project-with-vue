import { createStore } from 'vuex'
import { stateVariables } from './stateVariables'
import { PercentCalc, strokeDashoffsetCalc } from '../helpers'

export default createStore({
  state: {
    ...stateVariables,
  },
  mutations: {
    toggleCard(state) {
      state.cardVisible = !state.cardVisible
    },
    increment(state, n) {
      state.percent += n
    },
    deleteItem(state, value) {
      const { itemList, monthList } = state
      const { id, month } = value
      // get index
      const itemIndex = itemList.findIndex((el) => el.id === id)
      const monthIndex = monthList.findIndex((el) => el.name === month)
      //remove object in array
      if (itemIndex !== -1 && monthIndex !== -1) {
        itemList.splice(itemIndex, 1)
        monthList[monthIndex].status.splice(0, 1)
        state.monthList = monthList
        state.itemList = itemList
        state.percent = PercentCalc(itemList)
        state.strokeDashoffset = strokeDashoffsetCalc(state.percent)
      }
    },
  },
  actions: {},
  modules: {},
})
