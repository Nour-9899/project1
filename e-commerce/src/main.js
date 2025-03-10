
import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'

// استيراد Vuetify
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

// استيراد أيقونات Material Design Icons
import '@mdi/font/css/materialdesignicons.css'

// استيراد Pinia وإضافة persist
import { createPinia } from 'pinia'
import persistedState from 'pinia-plugin-persistedstate'

// استيراد Vue Router
import router from './router'

// إعداد Vuetify مع الأيقونات والثيم المخصص
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: false,
        colors: {
          primary: '#F5F5DC',
          secondary: '#CD853F',
          accent: '#B5C18E',
          background: '#FAFAF5',
          surface: '#FFFFFF',
          error: '#E57373',
          info: '#64B5F6',
          success: '#388e3c',
          warning: '#FFB74D'
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi',
  }
})

// إنشاء Pinia وتفعيل الإضافة لحفظ الحالة بشكل دائم
const pinia = createPinia()
pinia.use(persistedState)

// إنشاء التطبيق وربطه مع Vuetify وPinia وRouter
const app = createApp(App)

app.use(vuetify)
app.use(pinia)
app.use(router)

app.mount('#app')