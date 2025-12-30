<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import ImageGrid from '../components/ImageGrid.vue';
import PageHero from '../components/PageHero.vue';
import PromoBanner from '../components/PromoBanner.vue';

const perks = [
    { title: 'Bridal suite perks', description: 'Complimentary bridal suite when booking select room blocks.' },
    { title: 'Poolside celebrations', description: 'Cabana rentals and beverages for a full day of fun.' },
    { title: 'Concierge connects', description: 'Local spa, nightlife, and lake activity recommendations.' },
];

const images = [
    { src: '/images/shi-13.jpg', alt: 'Pool day' },
    { src: '/images/shi-10.jpg', alt: 'Suite decor' },
    { src: '/images/shi-12.jpg', alt: 'Lake outing' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Bachelorette" title="Camp bach at the lake." subtitle="Celebrate with poolside hangs, curated experiences, and Tahoe adventures." image="/images/shi-13.jpg" />
        <FeatureGrid title="Bachelorette highlights" :items="perks" />
        <ImageGrid eyebrow="Gather" title="Weekend highlights" :images="images" />
        <PromoBanner title="Plan the perfect bach" body="Ask about group rates and custom itineraries." cta="Start Planning" />
    </div>
</template>
