<template>
  <Button 
    :label="$i18n.locale.toUpperCase()"
    type="button"
    severity="secondary"
    @click="toggle" 
  />
  <Menu 
    ref="localeMenu"
    class="locale-menu"
    :model="items" 
    :popup="true" 
  />
</template>

<script>
export default {
  name: 'Locale',
  data() {
    return {
      items: [
        {
          label: 'EN',
          command: () => {
            this.changeLocale('en')
          }
        },
        {
          label: 'TR',
          command: () => {
            this.changeLocale('tr')
          }
        }
      ]
    }
  },
  created() {
    const locale = localStorage.getItem('locale')
    if(locale) {
      this.$i18n.locale = locale.toLowerCase()
    }
  },
  methods: {
    toggle(event) {
      this.$refs.localeMenu.toggle(event)
    },
    changeLocale(locale) {
      this.$i18n.locale = locale
      localStorage.setItem('locale', locale)
    }
  }
}
</script>

<style lang="scss">
.locale-menu.p-menu {
  min-width: fit-content;
}
</style>