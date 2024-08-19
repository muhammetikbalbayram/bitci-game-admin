<template>
  <div class="login-page">
    <form
      class="login-form"
       @submit.prevent="login"
      >
      <logo 
        mode="dark"
        :show-title="true" 
      />
      <div class="form-item">
        <label for="email">{{ $t('global.email') }} *</label>
        <input-text 
          id="email"
          v-model="model.email"
          :required="true"
        />
      </div>
      <div class="form-item">
        <label for="password">{{ $t('global.password') }} *</label>
        <input-text 
          id="password"
          v-model="model.password"
          type="password"
          :required="true"
        />
      </div>
      <Button 
        :label="$t('global.login')" 
        type="submit"
      />
    </form>
  </div>
</template>

<script>
import { mapWritableState } from 'pinia'
import { useMainStore } from '@/store/main'
import Logo from '@/components/Logo/index.vue'

export default {
  name: 'Login',
  title: ({ $t }) => $t('global.login'),
  components: {
    Logo
  },
  data() {
    return {
      model: {
        email: null,
        password: null
      }
    }
  },
  computed: {
    ...mapWritableState(useMainStore, ['isLogin', 'user'])
  },
  methods: {
    login() {
      this.isLogin = true
      this.user = {
        name: 'John',
        lastname: 'Doe'
      }
      localStorage.setItem('isLogin', true)
      localStorage.setItem('user', JSON.stringify(this.user))
      this.$router.push({ name: 'Dashboard' })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 100svh;
  .login-form {
    background-color: var(--p-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    width: 100%;
    border-radius: 1rem;
    gap: 1rem;
    box-shadow: var(--box-shadow);
    @media screen and (max-width: 992px) {
      padding: 2rem;
    }
    @media screen and (min-width: 992px) {
      padding: 4rem;
    }
    .login-logo {
      width: 100%;
      height: 100%;
      max-height: 36px;
    }
    .form-item, button {
      width: 100%;
    }
  }
}  
</style>