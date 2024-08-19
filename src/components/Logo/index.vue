<template>
  <div 
    class="app-logo" 
    :style="propStyle"
  >
    <img  
      src="/icon.svg" 
      alt="bitci-game-logo" 
      class="app-logo-icon"
    />
    <h5 
      v-if="showTitle"
      class="app-logo-title"
    >
      Bitci Game Admin
    </h5>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    mode: {
      type: String,
      default: 'dark'
    },
    showTitle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    propStyle() {
      return {
        '--title-color': this.mode == 'dark' ? 'var(--p-black)' : 'var(--p-white)'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-logo {
  width: fit-content;
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  &-icon {
    height: 2.5rem;
  }
  &-title {
    color: var(--title-color);
    text-align: center;
  }
}
</style>