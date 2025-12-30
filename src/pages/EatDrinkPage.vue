<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import ImageGrid from '../components/ImageGrid.vue';
import PageHero from '../components/PageHero.vue';

const offerings = [
    { title: 'Lobby bar', description: 'Evening cocktails and local pours in a relaxed setting.' },
    { title: 'Morning coffee', description: 'Grab-and-go fuel before hitting the lake or slopes.' },
    { title: 'Local favorites', description: 'Walkable dining spots and neighborhood gems.' },
];

const images = [
    { src: '/images/shi-10.jpg', alt: 'Lobby bar' },
    { src: '/images/shi-13.jpg', alt: 'Coffee service' },
    { src: '/images/shi-12.jpg', alt: 'Local dining' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Eat + Drink" title="Sip, snack, and savor Tahoe." subtitle="From cozy lobby cocktails to walkable restaurants, every craving is covered." image="/images/shi-10.jpg" />
        <FeatureGrid title="On-property options" :items="offerings" />
        <ImageGrid eyebrow="Taste" title="Gather around" :images="images" />
    </div>
</template>
