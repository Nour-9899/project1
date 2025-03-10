<template>
  <v-container class="fill-height d-flex align-center justify-center" style="background-color: #f5f5f5;">
    <v-card class="pa-5" width="400" elevation="10" style="border-radius: 12px;">
      <v-card-title class="text-center">
        <v-avatar size="64" class="mb-3" style="background-color: #D2B48C;">
          <v-icon size="36" color="white">mdi-account</v-icon>
        </v-avatar>
        <div class="text-h6">Login</div>
      </v-card-title>

      <v-form @submit.prevent="handleLogin">
        <v-text-field 
          v-model="email" 
          label="Email" 
          variant="outlined" 
          density="comfortable" 
          required 
        />
        <v-text-field 
          v-model="password" 
          label="Password" 
          type="password" 
          variant="outlined" 
          density="comfortable" 
          required 
        />
        <v-btn 
          type="submit" 
          block 
          class="mt-3" 
          color="#CD853F" 
          variant="elevated"
        >
          Login
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/store/authStore'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

function handleLogin() {
  if (email.value && password.value) {
    authStore.login({ name: 'nour', email: email.value })
    router.push('/')
  } else {
    alert('Please enter valid credentials')
  }
}
</script>