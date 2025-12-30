<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import ImageGrid from '../components/ImageGrid.vue';
import PageHero from '../components/PageHero.vue';

const highlights = [
    { title: 'Tag your stay', description: 'Share moments with #stationhouseinn for a chance to be featured.' },
    { title: 'Local creators', description: 'Follow Tahoe photographers and storytellers we love.' },
    { title: 'Seasonal drops', description: 'See the latest events and offers in real time.' },
];

const images = [
    { src: '/images/shi-13.jpg', alt: 'Guest moments' },
    { src: '/images/shi-10.jpg', alt: 'Poolside' },
    { src: '/images/shi-12.jpg', alt: 'Lake day' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Social" title="Follow the Station House story." subtitle="Snapshots from the inn, the lake, and everything in between." image="/images/shi-13.jpg" />
        <FeatureGrid title="Join the community" :items="highlights" />
        <ImageGrid eyebrow="On the feed" title="Recent highlights" :images="images" />
    </div>
</template>
