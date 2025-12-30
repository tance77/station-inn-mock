<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import { nextTick, onMounted, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import HeaderNav from './components/HeaderNav.vue';
import SiteFooter from './components/SiteFooter.vue';
// Pass { disableTransition: false } to enable transitions
useColorMode();

const route = useRoute();
let revealObserver: IntersectionObserver | null = null;

const setupScrollReveal = () => {
    if (revealObserver) {
        revealObserver.disconnect();
    }

    const sections = Array.from(document.querySelectorAll('main section')) as HTMLElement[];
    sections.forEach((section, index) => {
        section.classList.add('scroll-reveal');
        section.classList.remove('is-visible', 'reveal-left', 'reveal-right', 'reveal-zoom');
        const delay = Math.min(index * 60, 240);
        section.style.setProperty('--reveal-delay', `${delay}ms`);
        if (index % 3 === 1) {
            section.classList.add('reveal-left');
        } else if (index % 3 === 2) {
            section.classList.add('reveal-right');
        } else {
            section.classList.add('reveal-zoom');
        }
    });

    revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                revealObserver?.unobserve(entry.target);
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px 20% 0px' },
    );

    sections.forEach((section) => revealObserver?.observe(section));
};

onMounted(() => {
    setupScrollReveal();
});

watch(
    () => route.fullPath,
    async () => {
        await nextTick();
        setupScrollReveal();
    },
);
</script>

<template>
    <div class="bg-background text-foreground">
        <HeaderNav />
        <main>
            <RouterView />
        </main>
        <SiteFooter />
    </div>
</template>
