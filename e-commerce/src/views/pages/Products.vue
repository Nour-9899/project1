
<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProductStore } from '@/store/productStore'
import { useRouter } from 'vue-router'

const productStore = useProductStore()
const router = useRouter()

const search = ref('')
const categoryFilter = ref('')
const loading = ref(false)

// Pagination
const currentPage = ref(1)
const itemsPerPage = 15

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredProducts.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage)
})

onMounted(() => {
  fetchProducts()
})

async function fetchProducts() {
  loading.value = true
  await productStore.fetchProducts({ limit: 100 }) // عدلتها لدعم limit أعلى
  loading.value = false
}

const filteredProducts = computed(() => {
  return productStore.products.filter(product => {
    return (
      (product.title.toLowerCase().includes(search.value.toLowerCase()) ||
       product.description.toLowerCase().includes(search.value.toLowerCase())) &&
      (categoryFilter.value ? product.category === categoryFilter.value : true)
    )
  })
})

function goToDetails(id) {
  router.push(`/products/${id}`)
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
</script>

<template>
  <v-container>
    <v-row class="mb-3">
      <v-col cols="6">
        <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" />
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="categoryFilter"
          label="Category"
          :items="productStore.categories"
          clearable
        />
      </v-col>
    </v-row>

    <v-row v-if="loading" class="justify-center">
      <v-progress-circular
        indeterminate
        color="#5d4037"
        size="50"
        width="6"
        
      />
    </v-row>

    <v-row v-else>
      <v-col
        v-for="product in paginatedProducts"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="product-card">
          <v-img :src="product.thumbnail" height="200px" cover />
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-subtitle>{{ product.price }}$</v-card-subtitle>
          <v-card-actions>
            <v-btn color="#CD853F" @click="goToDetails(product.id)">
              View Details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="justify-center mt-4">
      <v-btn :disabled="currentPage === 1" @click="prevPage" color="#CD853F" class="mt-3">Previous</v-btn>
      <v-btn class="ml-2  mt-3 px-6" :disabled="currentPage === totalPages" @click="nextPage" color="#CD853F">Next</v-btn>
    </v-row>

    <v-row class="justify-center mt-2">
      <span class="mt-3" color="#5d4037">Page {{ currentPage }} of {{ totalPages }}</span>
    </v-row>
  </v-container>
</template>

<style scoped>
.product-card {
  transition: transform 0.3s;
}
.product-card:hover {
  transform: translateY(-5px);
}
</style>