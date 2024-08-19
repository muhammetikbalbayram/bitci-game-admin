<template>
  <router-link 
    v-if="data.to" 
    :to="{ name: data.to }"
    class="sidebar-link"
  >
    {{ data.label }}
  </router-link>
  <div 
    v-else-if="data.children?.length"
    class="sidebar-accordion"
  >
    <div 
      class="sidebar-accordion-header"
      @click="isOpen = !isOpen"
    >
      <div class="sidebar-accordion-header-label">{{ data.label }}</div>
      <i class="pi pi-angle-down" />
    </div>
    <div 
      class="sidebar-accordion-content"
      :class="{ 'sidebar-accordion-content-active': isOpen }"
    >
      <sidebar-menu-item
        v-for="(item, index) in data.children"
        :key="index"
        :data="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenuItem',
  props: {
    data: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  created() {
    const routeName = this.$route.name
    const isParent = JSON.stringify(this.data).includes(`"to":"${routeName}"`)
    this.isOpen = isParent
  }
}
</script>

<style lang="scss" scoped>
.sidebar-link {
  padding: 1rem;
  color: var(--p-gray-200);
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sidebar-link.router-link-exact-active {
  color: var(--p-gray-50)! important;
  background-color: var(--p-gray-900);
  border-radius: .2rem;
}
.sidebar-accordion {
  &-header {
    padding: 1rem;
    color: var(--p-gray-200);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &-label {
      flex: 1;
    }
  }
  &-content {
    display: none;
    padding-left: 1rem;
    transition: 2s all;
  }
  &-content-active {
    display: flex;
    flex-direction: column;
  }
}
</style>