import * as types from '../mutations-type'

const state = {
  counter: 1
}

const mutations = {
  [types.INCREMENT] (state) {
    state.counter += 1
  },
  [types.DECREMENT] (state) {
    if (state.counter > 0) {
      state.counter -= 1
      return
    }
    state.counter = 0
  }
}

export default {
  state,
  mutations
}
