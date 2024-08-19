<template>
  <i 
    class="pi pi-bars app-drawer-toggle-icon" 
    @click="toggleDrawer"
  />
  <drawer 
    v-model:visible="visible" 
    :show-close-icon="false"
    class="app-drawer"
  >
    <sidebar />
  </drawer>
</template>

<script>
import Sidebar from '@/components/Sidebar/index.vue'

export default {
  name: 'AppDrawer',
  components: {
    Sidebar
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    toggleDrawer() {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
.app-drawer-toggle-icon {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--p-gray-500);
  cursor: pointer;
}
</style>