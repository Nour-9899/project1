
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    categories: [],
  }),
  actions: {
    async fetchProducts() {
      const res = await fetch('https://dummyjson.com/products?limit=100')
      const data = await res.json()
      this.products = data.products
      this.categories = [...new Set(data.products.map(p => p.category))]
    },
    async fetchProductById(id) {
      const res = await fetch(`https://dummyjson.com/products/${id}`)
      return res.json()
    },
  }
})