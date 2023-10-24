<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->

<template>
    <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="body-box">
        <Navbar></Navbar>
        <div class="overlay"></div>
        <div class="section product-carousel">
            <div class="section product-header">
                <Carousel v-slot="{ currentSlide }">
                    <Slide
                        v-show="currentSlide === index + 1"
                        v-for="(image, index) in carouselSlides"
                        :key="index"
                    >
                        <div class="slide-info">
                            <img :src="image.name" :alt="image.imageAlt" />
                        </div>
                    </Slide>
                </Carousel>
            </div>
        </div>
    </div>
</full-page>
</template>

<style></style>

<script setup>
import Navbar from "../components/Navbar.vue";
import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";

const carouselSlides = [
    {
        name: "src/assets/img/austria.jpg",
        imageAlt: "Travel to Austria with Travel Scroll",
    },
    {
        name: "src/assets/img/indonesia.jpg",
        imageAlt: "Travel to Indonesia with Travel Scroll",
    },
    {
        name: "src/assets/img/italy.jpg",
        imageAlt: "Travel to Italy with Travel Scroll",
    },
    {
        name: "src/assets/img/japan.jpg",
        imageAlt: "Travel to Japan with Travel Scroll",
    },
];

const products = [
    {
        id: 1,
        name: "Basic Tee",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35",
        color: "Black",
    },
    {
        id: 2,
        name: "Basic Tee",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35",
        color: "Black",
    },
    // More products...
];
</script>

<style scoped>
.body-box {
    position: absolute;
    right: 0;
    width: 100%;
    min-height: 100vh;
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background: #111;
    z-index: 2;
    font-family: "Poppins", sans-serif;
}

.body-box header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    display: flex;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
}

.product-carousel {
    max-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
}

.slide-info img {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
