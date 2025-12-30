<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const slides = [
    { src: '/images/shi-09.jpg', alt: 'Station House Inn exterior' },
    { src: '/images/shi-11.jpg', alt: 'Station House outdoor fire pit' },
    { src: '/images/shi-06.jpg', alt: 'Station House Inn patio seating' },
    // { src: '/images/shi-14.jpg', alt: 'Station House mountain overlook' },
    // { src: '/images/shi-15.jpg', alt: 'Station House Room' },
    { src: '/images/shi-12.jpg', alt: 'Station House pool' },
    { src: '/images/shi-17.jpg', alt: 'Station House outdoor fire pit' },
    { src: '/images/shi-08.jpg', alt: 'Station House outdoor grassy knoll' },
    { src: '/images/shi-18.jpg', alt: 'Station House Inn poolside view' },
];

const activeIndex = ref(0);
let timer: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
    timer = setInterval(() => {
        activeIndex.value = (activeIndex.value + 1) % slides.length;
    }, 5000);
});

onUnmounted(() => {
    if (timer) {
        clearInterval(timer);
    }
});
</script>

<template>
    <section class="relative z-0 -mt-20 min-h-[35dvh] lg:min-h-[60dvh] overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(80,110,130,0.16),transparent_60%)]"></div>
        <div class="absolute inset-0">
            <div class="absolute inset-0"></div>
            <img
                v-for="(slide, index) in slides"
                :key="slide.src"
                :alt="slide.alt"
                class="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000"
                :class="index === activeIndex ? 'opacity-100' : 'opacity-0'"
                :aria-hidden="index === activeIndex ? 'false' : 'true'"
                :src="slide.src"
            />
        </div>
        <div class="relative min-h-[35dvh] lg:min-h-[60dvh]"></div>
    </section>
</template>
