<template>
  <v-container class="profile-container">
    <h2 class="profile-title">Profile Information</h2>

    <v-form ref="profileForm" class="profile-form">
      <v-row dense>
        <!-- الاسم -->
        <v-col cols="12" md="6">
          <v-text-field 
            label="Full Name" 
            v-model="profile.name" 
            variant="outlined"
            class="profile-field"
          ></v-text-field>
        </v-col>

        <!-- رقم الهاتف -->
        <v-col cols="12" md="6">
          <v-text-field 
            label="Phone Number" 
            v-model="profile.phone" 
            variant="outlined"
            class="profile-field"
          ></v-text-field>
        </v-col>

        <!-- البريد الإلكتروني (قراءة فقط) -->
        <v-col cols="12">
          <v-text-field 
            label="Email" 
            v-model="profile.email" 
            variant="outlined" 
            readonly
            class="profile-field"
          ></v-text-field>
        </v-col>

        <!-- عنوان الشحن -->
        <v-col cols="12">
          <v-textarea 
            label="Shipping Address" 
            v-model="profile.address" 
            variant="outlined"
            class="profile-field"
          ></v-textarea>
        </v-col>

        <!-- إعدادات الحساب -->
        <v-col cols="12">
          <v-checkbox 
            label="Receive Promotional Emails" 
            v-model="profile.receiveEmails"
            class="profile-checkbox"
          ></v-checkbox>
        </v-col>

        <v-col cols="12">
          <v-btn class="save-btn" @click="saveProfile">Save Changes</v-btn>
        </v-col>
      </v-row>
    </v-form>

    <!-- الطلبات السابقة -->
    <div class="order-history">
      <h3 class="section-title">Order History</h3>
      <v-table class="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.date }}</td>
            <td>{{ order.status }}</td>
            <td>
              <v-btn variant="text" color="primary" @click="viewOrder(order.id)">
                View
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const profile = ref({
  name: 'Nour hadid',
  phone: '+966 50 123 4567',
  email: 'nour@example.com',
  address: 'syria',
  receiveEmails: true,
})

const orders = ref([
  { id: '12345', date: '2025-02-01', status: 'Completed' },
  { id: '12346', date: '2025-02-15', status: 'Pending' },
])

function saveProfile() {
  // Simulate saving
  alert('Profile saved successfully!')
}


</script>

<style scoped>
.profile-container {
  background-color: #fafaf5;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
  max-width: 900px;
  margin: 40px auto;
  border: 1px solid #e0e0e0;
}

.profile-title {
  font-size: 28px;
  font-weight: bold;
  color: #8b4513;
  margin-bottom: 24px;
  text-align: center;
}

.profile-field {
  background-color: #fff;
}

.profile-checkbox {
  color: #8b4513;
}

.save-btn {
  background-color: #cd853f !important;
  color: white !important;
  font-weight: bold;
  text-transform: uppercase;
  padding: 12px 24px;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.save-btn:hover {
  background-color: #b36b2c !important;
}

/* الطلبات السابقة */
.order-history {
  margin-top: 32px;
}

.section-title {
  font-size: 22px;
  font-weight: bold;
  color: #8b4513;
  margin-bottom: 12px;
}

.orders-table th {
  background-color: #cd853f;
  color: white;
  text-transform: uppercase;
  padding: 10px;
}

.orders-table td {
  color: #5c3d2e;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}
</style>