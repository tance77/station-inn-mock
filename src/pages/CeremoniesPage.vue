<script setup lang="ts">
import ImageGrid from '../components/ImageGrid.vue';
import PageHero from '../components/PageHero.vue';
import SplitSection from '../components/SplitSection.vue';

const images = [
    { src: '/images/shi-13.jpg', alt: 'Ceremony seating' },
    { src: '/images/shi-10.jpg', alt: 'Outdoor moments' },
    { src: '/images/shi-12.jpg', alt: 'Lake backdrop' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Ceremonies" title="Intimate Tahoe ceremonies." subtitle="Outdoor settings, thoughtful details, and a serene atmosphere for your vows." image="/images/shi-13.jpg" />
        <SplitSection eyebrow="Celebrate" title="Curated ceremony spaces" body="Choose a courtyard or garden setting and let our team handle the flow." image="/images/shi-10.jpg" />
        <ImageGrid eyebrow="Moments" title="Ceremony gallery" :images="images" />
    </div>
</template>
