import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state() {
    return {
      isLogin: false,
      user: null
    }
  },
  created() {
    console.log('here')
  }
})