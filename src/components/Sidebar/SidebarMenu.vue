<template>
  <div class="sidebar-menu">
    <sidebar-menu-item
      v-for="(item, index) in menuList"
      :key="index"
      :data="item"
    />
  </div>
</template>

<script>
import SidebarMenuItem from '@/components/Sidebar/SidebarMenuItem.vue';

export default {
  name: 'SidebarMenu',
  components: {
    SidebarMenuItem
  },
  data() {
    return {
      /*
      menuList: [
        {
          label: 'Dashboard',
          to: 'Dashboard'
        },
        {
          label: 'Pages 1 asd dsa asd dsa asd dsa',
          children: [
            {
              label: 'Reports',
              to: 'Reports'
            },
            {
              label: 'Notifications',
              children: [
                {
                  label: 'App Notifications',
                  to: 'Notifications'
                },
              ]
            },
          ]
        },
        {
          label: 'Pages 2',
          children: [
            {
              label: 'Games',
              to: 'Games'
            },
          ]
        }
      ]
        */
    }
  },
  computed: {
    menuList() {
      return [
        {
          label: this.$t('global.dashboard'),
          to: 'Dashboard'
        },
        {
          label: this.$t('global.games'),
          to: 'Games'
        },
        {
          label: this.$t('global.reports'),
          to: 'Reports'
        },
        {
          label: this.$t('global.notifications'),
          to: 'Notifications'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-menu {
  display: flex;
  flex-direction: column;
}
</style>