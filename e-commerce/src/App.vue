<template>
  <v-app>
    <v-app-bar color="primary" dark prominent>
      <v-container class="d-flex align-center">
        <v-toolbar-title class="font-weight-bold custom-title" @click="$router.push('/')">
          MyStore
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn text to="/about" color="#8b4513">About</v-btn>
        <v-btn text to="/products" color="#8b4513">Products</v-btn>
        <v-btn text to="/profile" color="#8b4513">Profile</v-btn>

        <!-- زر السلة مع Badge لعدد المنتجات -->
        <v-btn text to="/cart" color="#8b4513" class="cart-btn">
          <v-badge
            :content="cartStore.totalItems"
            color="red"
            offset-x="56"
            offset-y="-10"
            v-if="cartStore.totalItems > 0"
          >
            <v-icon class="mr-2">mdi-cart</v-icon>
            Cart
          </v-badge>
          <template v-else>
            <v-icon class="mr-2">mdi-cart</v-icon>
            Cart
          </template>
        </v-btn>

        <!-- إظهار زر "Logout" لو المستخدم مسجل دخول -->
        <template v-if="authStore.isAuthenticated">
          <v-btn text color="#8b4513" @click="handleLogout">Logout</v-btn>
        </template>

        <!-- إظهار Sign Up و Login فقط لو مو مسجل دخول -->
        <template v-else>
          <v-btn text to="/signup" color="#8b4513">Sign Up</v-btn>
          <v-btn text to="/login" color="#8b4513">Login</v-btn>
        </template>

      </v-container>
    </v-app-bar>

    <v-main class="main-content">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { useCartStore } from '@/store/cartStore'
import { useAuthStore } from '@/store/authStore'

const cartStore = useCartStore()
const authStore = useAuthStore()

function handleLogout() {
  authStore.logout()
}
</script>

<style scoped>
.main-content {
  background-color: #f5f5f5;
  min-height: 100vh;
}

.cart-btn {
  position: relative;
  z-index: 999;
}
</style>