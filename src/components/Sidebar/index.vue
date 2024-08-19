<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <logo
        mode="light"
        :show-title="true"
      />
    </div>
    <div class="sidebar-content">
      <sidebar-menu />
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo/index.vue'
import SidebarMenu from '@/components/Sidebar/SidebarMenu.vue'

export default {
  name: 'Sidebar',
  components: {
    Logo,
    SidebarMenu
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--p-zinc-950);
  &-header {
    min-height: 64px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: .5rem;
    padding: 1rem;
    box-shadow: var(--box-shadow);
  }
  &-content {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
  }
}
</style>