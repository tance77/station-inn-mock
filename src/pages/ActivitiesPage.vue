<script setup lang="ts">
import ActivitiesSection from '../components/ActivitiesSection.vue';
import FeatureGrid from '../components/FeatureGrid.vue';
import ImageGrid from '../components/ImageGrid.vue';
import PageHero from '../components/PageHero.vue';

const experiences = [
    { title: 'Lake days', description: 'Paddle, swim, or cruise the shoreline just minutes away.' },
    { title: 'Winter adventures', description: 'Quick access to Heavenly, Sierra-at-Tahoe, and Kirkwood.' },
    { title: 'Après moments', description: 'Return to fire pits, hot tubs, and cozy evenings.' },
];

const images = [
    { src: '/images/shi-12.jpg', alt: 'Lake activity' },
    { src: '/images/shi-14.jpg', alt: 'Snowy trail' },
    { src: '/images/shi-13.jpg', alt: 'Fire pit' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Experience" title="Adventure starts at Station House Inn." subtitle="From lake days to ski nights, everything Tahoe is within reach." image="/images/shi-12.jpg" />
        <ActivitiesSection />
        <FeatureGrid title="Seasonal highlights" :items="experiences" />
        <ImageGrid eyebrow="Explore" title="Tahoe adventures" :images="images" />
    </div>
</template>
