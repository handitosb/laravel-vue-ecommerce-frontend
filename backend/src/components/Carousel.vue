<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide" />

        <div class="navigate">
            <div class="toggle-page left">
                    <font-awesome-icon
                        @click="prevSlide"
                        class="slider-icon"
                        icon="fa-solid fa-chevron-left"
                    />
            </div>
            <div class="toggle-page right">
                    <font-awesome-icon
                        @click="nextSlide"
                        class="slider-icon"
                        icon="fa-solid fa-chevron-right"
                    />
            </div>
        </div>

        <div class="pagination">
            <span
                v-for="(slide, index) in getSlideCount"
                :key="index"
                :class="{ active: index + 1 === currentSlide }"
            >
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const currentSlide = ref(1);
const getSlideCount = ref(null);

const nextSlide = () => {
    if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
    } else {
        currentSlide.value += 1;
    }
};

const prevSlide = () => {
    if (currentSlide.value === 1) {
        currentSlide.value = 1;
    } else {
        currentSlide.value -= 1;
    }
};

onMounted(() => {
    getSlideCount.value = document.querySelectorAll(".slide").length;
});
</script>

<style>
.navigate {
    padding: 0 16px;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}

.toggle-page {
    display: flex;
    flex: 1;
}

.right {
    justify-content: flex-end;
}

.slider-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    background: none;
    width: 40px;
    height: 40px;
}

.pagination {
    position: absolute;
    bottom: 24px;
    width: 100%;
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
}

.pagination span {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
</style>
