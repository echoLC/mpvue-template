<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ counter }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/index/main" class="home">去往首页</a>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import * as types from '@/store/mutations-type'

export default {
  computed: {
    ...mapState('counter', {
      counter: state => state.counter
    })
  },
  methods: {
    ...mapMutations('counter', {
      increment: types.INCREMENT,
      decrement: types.DECREMENT
    })
  },
  async created () {
    await this.$wx.setStorage({
      key: 'test',
      data: 'test'
    })
    const storage = await this.$wx.getStorage({ key: 'test' })
    console.log(storage.data)
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
