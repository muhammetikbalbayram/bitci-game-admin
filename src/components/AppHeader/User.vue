<template>
  <Button 
    icon="pi pi-user"
    type="button"
    severity="dark" 
    @click="toggle" 
  />
  <Menu 
    ref="userMenu"
    class="user-menu"
    :model="menuList" 
    :popup="true" 
  />
</template>

<script>
import { mapWritableState } from 'pinia'
import { useMainStore } from '@/store/main'

export default {
  name: 'Language',
  data() {
    return {
      items: [
        {
          label: 'Log out',
          icon: 'pi pi-sign-out',
          command: () => {
            this.logout()
          }
        }
      ]
    }
  },
  computed: {
    ...mapWritableState(useMainStore, ['isLogin', 'user']),
    menuList() {
      return [
        {
          label: this.$t('global.logout'),
          icon: 'pi pi-sign-out',
          command: () => {
            this.logout()
          }
        }
      ]
    }
  },
  methods: {
    toggle(event) {
      this.$refs.userMenu.toggle(event)
    },
    logout() {
      this.isLogin = false
      this.user = null
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style lang="scss">
.user-menu.p-menu {
  min-width: fit-content;
}
</style>