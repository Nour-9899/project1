

<template>
  <v-container class="about-container" fluid>
    <v-row class="d-flex justify-center" no-gutters>
      <v-col cols="12" md="8">
        <h2 class="about-title">About Us</h2>

        <!-- Swiper Component -->
        <swiper :slides-per-view="1" :space-between="20" class="mySwiper" >
          <swiper-slide>
            <v-card class="about-slide" elevation="3" >
              <v-img 
                src="/src/assets/img/Screenshot_20250301_210042_Chrome.jpg"
                alt="Shopping Cart" 
                class="slide-image" 
                height="250px" 
                
              />
              <v-card-title class="slide-title">Who We Are</v-card-title>
              <v-card-text class="slide-description">
                We are a team of passionate individuals who believe in making shopping
                accessible, enjoyable, and exciting. Our mission is to provide the best 
                products at affordable prices to our customers around the world.
              </v-card-text>
            </v-card>
          </swiper-slide>

          <swiper-slide>
            <v-card class="about-slide" elevation="3">
              <v-img 
                src="/src/assets/img/Screenshot_20250301_210605_Chrome.jpg"
                alt="Mission"
                class="slide-image"
                height="250px" 
              />
              <v-card-title class="slide-title">Our Mission</v-card-title>
              <v-card-text class="slide-description">
                Our mission is simple – to empower people with high-quality products
                delivered with exceptional customer service. We strive to be a brand that
                inspires trust and loyalty.
              </v-card-text>
            </v-card>
          </swiper-slide>

          <swiper-slide>
            <v-card class="about-slide" elevation="3">
              <v-img 
                src=""
                alt="Why Choose Us" 
                class="slide-image"
                height="250px"
              />
              <v-card-title class="slide-title">Why Choose Us</v-card-title>
              <v-card-text class="slide-description">
                We offer a wide range of carefully curated products with the best deals.
                Our customer support team is always ready to assist you, ensuring a seamless
                shopping experience.
              </v-card-text>
            </v-card>
          </swiper-slide>

          <swiper-slide>
            <v-card class="about-slide" elevation="3">
              <v-img 
                src="https://images.unsplash.com/photo-1560292721-fb4a973bd88b?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhY2h8Mnx8aGVscGZ1bCUyMHB1Y2hhd2lkfGVufDB8fHx8fDE2NzQwMzE5NzA&ixlib=rb-1.2.1&q=80&w=1080"
                alt="Our Values" 
                class="slide-image"
                height="250px" 
              />
              <v-card-title class="slide-title">Our Values</v-card-title>
              <v-card-text class="slide-description">
                We value quality, affordability, and customer satisfaction. We believe in
                integrity, transparency, and delivering value to our customers in every
                interaction.
              </v-card-text>
            </v-card>
          </swiper-slide>
        </swiper>

        <div class="about-footer">
          <v-btn class="explore-btn" color="primary" text to="/products" >Explore Our Store</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="gaza-support-container">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="support-title">Support Gaza</h2>
        <p class="support-description">
          Stand with Gaza. A portion of every purchase goes to support families in need.
          Together, we can make a difference.
        </p>
        <v-btn class="donate-btn" href="https://www.unrwa.org/donate" target="_blank">
          Donate Now
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>
<script setup>
 import { Swiper, SwiperSlide } from 'swiper/vue';
  import'swiper/swiper-bundle.css'; // استدعاء الـ CSS الخاص بـ Swiper
</script>

<style scoped>
/* تحسين تصميم الصفحة */
.about-container {
  background-color: #fafaf5;
  padding: 40px 20px;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 40px auto;
  border: 1px solid #e0e0e0;
}

.about-title {
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  font-weight: 600;
  color: #8b4513;
  text-align: center;
  margin-bottom: 30px;
}

.about-slide {
  text-align: center;
  padding: 25px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.about-slide:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.slide-title {
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #8b4513;
  margin-bottom: 18px;
}

.slide-description {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #5c3d2e;
  line-height: 1.8;
  margin-bottom: 20px;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
}

.about-footer {
  text-align: center;
  margin-top: 30px;
}

/* تحسين تنسيق الزر */
.explore-btn {
  background-color: #cd853f !important;
  color: white !important;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 25px;
  border-radius: 50px;
  transition: background-color 0.3s, transform 0.3s ease-in-out;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.explore-btn:hover {
  background-color: #b36b2c !important;
  transform: translateY(-4px);
}

.mySwiper {
  margin-top: 30px;
}

.slide-image {
  width: 1024px;
  background-size: auto;
  height: auto;
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.gaza-support-container {
  background-color: #fafaf5;
  padding: 40px 20px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 50px auto;
  border: 1px solid #e0e0e0;
}

.support-title {
  font-family: 'Poppins', sans-serif;
  font-size: 26px;
  font-weight: bold;
  color: #8b4513;
  margin-bottom: 12px;
}

.support-description {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #5c3d2e;
  line-height: 1.6;
  margin-bottom: 20px;
}

.donate-btn {
  background-color: #cd853f !important;
  color: #fff !important;
  font-weight: bold;
  padding: 12px 24px;
  text-transform: uppercase;
  border-radius: 30px;
  transition: background-color 0.3s ease;
}

.donate-btn:hover {
  background-color: #b36b2c !important;
}
</style>