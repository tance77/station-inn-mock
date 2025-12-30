<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import ImageGrid from '../components/ImageGrid.vue';
import PageHero from '../components/PageHero.vue';

const perks = [
    { title: 'Private lounging', description: 'Reserved seating and shade for full-day hangs.' },
    { title: 'Poolside service', description: 'Grab towels, drinks, and snacks with ease.' },
    { title: 'Group friendly', description: 'Perfect for celebrations or relaxed afternoons.' },
];

const images = [
    { src: '/images/shi-11.jpg', alt: 'Cabana setup' },
    { src: '/images/shi-13.jpg', alt: 'Poolside view' },
    { src: '/images/shi-10.jpg', alt: 'Lounge detail' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Cabanas" title="Reserve a poolside cabana." subtitle="Relax in style with shaded seating, easy access to the pool, and custom add-ons." image="/images/shi-11.jpg" />
        <FeatureGrid title="Cabana perks" :items="perks" />
        <ImageGrid eyebrow="Pool Deck" title="Cabana moments" :images="images" />
    </div>
</template>
