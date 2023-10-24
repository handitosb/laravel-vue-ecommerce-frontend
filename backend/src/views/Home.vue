<template>
    <section class="showcase">
        <header>
            <Navbar></Navbar>
        </header>
        <video
            src="../assets/vecteezy_beach-shot-circle-around-movement_27547193_169.mp4"
            muted
            loop
            autoplay
        ></video>

        <div class="home-overlay"></div>
        <div class="home-text">
            <h2>Travelling with Travel Scroll</h2>
            <p>
                Get the most out of your travels with our comprehensive travel
                guides, written by experts who know the world inside and out. We
                cover everything from must-see attractions to hidden gems, so
                you can plan the perfect trip for you.
            </p>
            <a
                href="/places"
                class="w-4/12 flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600 hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                >Explore places</a
            >
        </div>
    </section>
</template>

<style>
.showcase {
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
.showcase header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    display: flex;
}

.showcase video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
}

.home-text {
    position: relative;
    z-index: 10;
}

.home-text h2 {
    font-size: 3em;
    font-weight: 600;
    line-height: 1em;
}

.home-text p {
    font-size: 1.1em;
    margin: 20px 0;
    font-weight: 400;
    max-width: 700px;
}

.home-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
}
</style>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>
