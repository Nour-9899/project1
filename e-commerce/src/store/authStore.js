

import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),

  actions: {
    login(user) {
      this.user = user
    },
    logout() {
      this.user = null
    }
  },

  getters: {
    isAuthenticated: (state) => !!state.user
  },

  // تفعيل الحفظ الدائم للمتجر باستخدام pinia-plugin-persistedstate
  persist: true
})