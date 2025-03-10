

<template>
  <v-container class="cart-container">
    <h2 class="cart-title">Your Cart</h2>

    <v-alert
      v-if="cartStore.items.length === 0" 
      type="info" 
      class="cart-alert"
      variant="outlined"
    >
      <v-icon class="cart-icon">mdi-cart-off</v-icon>
      Your cart is empty. Browse products to add some items!
    </v-alert>

    <v-table class="cart-table" v-else>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartStore.items" :key="item.id">
          <td>{{ item.title }}</td>
          <td>${{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
          <td>
            <v-icon 
              class="delete-icon" 
              @click="cartStore.removeFromCart(item.id)"
            >
              mdi-trash-can-outline
            </v-icon>
          </td>
        </tr>
      </tbody>
    </v-table>

    <div v-if="cartStore.items.length > 0" class="cart-total">
      <h3 class="total-text">Total: ${{ cartStore.totalPrice.toFixed(2) }}</h3>

    </div>
  </v-container>
</template>

<script setup>
import { useCartStore } from '@/store/cartStore'

const cartStore = useCartStore()
</script>

<style scoped>

.cart-container {
  background-color: #fafaf5;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
  max-width: 900px;
  margin: 40px auto;
  border: 1px solid #e0e0e0;
}

.cart-title {
  font-size: 28px;
  font-weight: bold;
  color: #8b4513;
  margin-bottom: 24px;
  text-align: center;
}

.cart-alert {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  font-weight: 500;
  background-color: #f5f5dc;
  border: 1px solid #cd853f;
  border-radius: 8px;
  color: #8b4513;
  margin-bottom: 24px;
}


.cart-icon {
  font-size: 32px;
  color: #5c3d2e;
}

.cart-table th {
  background-color: #cd853f;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  padding: 12px;
}

.cart-table td {
  color: #5c3d2e;
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

.delete-icon {
  font-size: 24px;
  color: #8b4513;
  cursor: pointer;
  transition: color 0.3s;
}

.delete-icon:hover {
  color: #cd853f;
}


.cart-total {
  text-align: right;
  margin-top: 20px;
}

.total-text {
  font-size: 20px;
  font-weight: bold;
  color: #8b4513;
}

.checkout-btn {
  background-color: #cd853f !important;
  color: white !important;
  font-weight: bold;
  text-transform: uppercase;
  padding: 12px 24px;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.checkout-btn:hover {
  background-color: #b36b2c !important;
}
</style>