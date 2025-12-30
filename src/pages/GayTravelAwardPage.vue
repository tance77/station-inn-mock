<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import ImageGrid from '../components/ImageGrid.vue';
import PageHero from '../components/PageHero.vue';

const accolades = [
    { title: 'Welcoming hospitality', description: 'Inclusive service and thoughtful touches for every guest.' },
    { title: 'Community partnerships', description: 'Local collaborations that celebrate Tahoe’s vibrant culture.' },
    { title: 'Design-forward stay', description: 'Boutique interiors with a playful, modern edge.' },
];

const images = [
    { src: '/images/shi-11.jpg', alt: 'Award moment' },
    { src: '/images/shi-13.jpg', alt: 'Guest lounge' },
    { src: '/images/shi-10.jpg', alt: 'Exterior' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Award" title="Honored by Gay Travel 2022." subtitle="Recognition for inclusive hospitality and unforgettable stays in South Lake Tahoe." image="/images/shi-11.jpg" />
        <FeatureGrid title="Why we were recognized" :items="accolades" />
        <ImageGrid eyebrow="Celebration" title="Snapshots" :images="images" />
    </div>
</template>
