<template>
  <div class="global-layout">
    <sidebar />
    <div class="global-layout-content">
      <app-header />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar/index.vue'
import AppHeader from '@/components/AppHeader/index.vue'

export default {
  name: 'GlobalLayout',
  components: {
    Sidebar,
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
.global-layout {
  display: flex;
  @media screen and (max-width: 992px) {
    .sidebar {
      display: none;
    }
  }
  @media screen and (min-width: 992px) {
    flex-direction: row;
    .sidebar {
      width: 260px;
      height: 100svh;
    }
  }
  &-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    main {
      padding: 1rem;
    }
  }
}  
</style>