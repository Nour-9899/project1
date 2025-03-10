<template>
  <v-container>
    <v-progress-circular v-if="loading" indeterminate color="primary" />

    <v-card v-else class="pa-5">
      <v-row>
        <v-col cols="12" md="6">
          <v-img :src="product.thumbnail" cover class="rounded-lg" />
        </v-col>
        <v-col cols="12" md="6">
          <v-card-title class="text-h4 font-weight-bold">{{ product.title }}</v-card-title>
          <v-rating :model-value="product.rating" color="amber" dense />
          <v-card-subtitle class="mt-3 text-h6">
            Price: {{ product.price }}$
          </v-card-subtitle>
          <v-card-text>{{ product.description }}</v-card-text>

          <v-card-actions>
            <v-btn color="success" @click="addToCart" :disabled="!authStore.isAuthenticated">
              Add to Cart
            </v-btn>
            <v-btn @click="$router.push('/products')">Back to Products</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-container>

  <!-- Snackbar for feedback -->
  <v-snackbar v-model="snackbar" :timeout="3000" color="success" bottom>
    {{ snackbarMessage }}
  </v-snackbar>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/store/productStore'
import { useCartStore } from '@/store/cartStore'
import { useAuthStore } from '@/store/authStore'

const route = useRoute()
const productStore = useProductStore()
const cartStore = useCartStore()
const authStore = useAuthStore()

const product = ref({})
const loading = ref(true)
const snackbar = ref(false)
const snackbarMessage = ref('')

onMounted(async () => {
  const id = route.params.id
  product.value = await productStore.fetchProductById(id)
  loading.value = false
})

function addToCart() {
  if (authStore.isAuthenticated) {
    cartStore.addToCart(product.value)
    snackbarMessage.value = 'Added to Cart'
    snackbar.value = true
  } else {
    snackbarMessage.value = 'Please login to add products to the cart'
    snackbar.value = true
  }
}
</script>