<template>
  <header class="app-header">
    <div class="app-header-left">
      <app-drawer />
      <logo :show-title="false"/>
    </div>
    <div class="app-header-right">
      <locale />
      <user />
    </div>
  </header>
</template>

<script>
import AppDrawer from '@/components/AppDrawer/index.vue'
import Logo from '@/components/Logo/index.vue'
import Locale from '@/components/AppHeader/Locale.vue'
import User from '@/components/AppHeader/User.vue'

export default {
  name: 'AppHeader',
  components: {
    AppDrawer,
    Logo,
    Locale,
    User
  },
  data() {
    return {
    }
  },
  methods: {
    toggleUser(event) {
      this.$refs.menu.toggle(event);
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  gap: .5rem;
  padding: 1rem;
  width: 100%;
  box-shadow: var(--box-shadow);
  &-left {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: .5rem;
    .toggle-icon {
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--p-gray-500);
      cursor: pointer;
    }
    .app-header-icon {
      max-height: 2.5rem;
    }
    @media screen and (min-width: 992px) {
      display: none;
    }
  }
  &-right {
    margin-left: auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: .5rem;
  }
}
</style>