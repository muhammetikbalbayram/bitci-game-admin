import { definePreset, palette } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

const preset = definePreset(Aura, {
  primitive: {
    white: '#FFFFFF',
    black: '#000000'
  },
  semantic: {
    primary: palette('{blue}'),
  }
})

export const primeVueConfig = {
  theme: {
    preset,
    options: {
      darkModeSelector: 'light'
    }
  }
}