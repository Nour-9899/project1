
<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card class="pa-5" width="400">
      <v-card-title class="text-h5   " >Sign Up</v-card-title>
      <v-form @submit.prevent="handleSignup">
        <v-text-field v-model="name" label="Name" required />
        <v-text-field v-model="email" label="Email" required />
        <v-text-field v-model="password" label="Password" type="password" required />
        <v-btn type="submit"color="#CD853F"  block class="mt-3">Sign Up</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/store/authStore'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

function handleSignup() {
  if (name.value && email.value && password.value) {
    authStore.login({ name: name.value, email: email.value })
    router.push('/')
  } else {
    alert('All fields are required')
  }
}
</script>

