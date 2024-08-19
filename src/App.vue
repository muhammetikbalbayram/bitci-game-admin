<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { mapWritableState } from 'pinia'
import { useMainStore } from './store/main'
import GlobalLayout from '@/layouts/Global/index.vue'
import DefaultLayout from '@/layouts/Default/index.vue'

export default {
  name: 'App',
  components: {
    GlobalLayout,
    DefaultLayout
  },
  computed: {
    ...mapWritableState(useMainStore, ['isLogin', 'user']),
    layout() {
      return this.$route.meta?.layout || 'DefaultLayout'
    }
  },
  mounted() {
    this.setAuth()
  },
  methods: {
    setAuth() {
      const user = localStorage.getItem('user')
      if(user) {
        this.isLogin = true
        this.user = JSON.parse(user)
      } 
    }
  }
}
</script>

<style scoped>
</style>
