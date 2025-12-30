<script setup lang="ts">
import ImageGrid from '../components/ImageGrid.vue';
import PageHero from '../components/PageHero.vue';

const images = [
    { src: '/images/shi-01.jpg', alt: 'Exterior view' },
    { src: '/images/shi-02.jpeg', alt: 'Pool deck' },
    { src: '/images/shi-10.jpg', alt: 'Lobby lounge' },
    { src: '/images/shi-12.jpg', alt: 'Lake views' },
    { src: '/images/shi-13.jpg', alt: 'Courtyard moments' },
    { src: '/images/shi-14.jpg', alt: 'Seasonal stay' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Gallery" title="Moments at Station House Inn." subtitle="Explore the property, amenities, and South Lake Tahoe scenery." image="/images/shi-11.jpg" />
        <ImageGrid :images="images" />
    </div>
</template>
