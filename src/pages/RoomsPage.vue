<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import ImageGrid from '../components/ImageGrid.vue';
import PageHero from '../components/PageHero.vue';
import PromoBanner from '../components/PromoBanner.vue';

const rooms = [
    { title: 'Queen Courtyard', description: 'Easy pool access with airy interiors and clean lines.' },
    { title: 'Glen Alpine King', description: 'Spacious king rooms with lounge seating and natural light.' },
    { title: 'Bunk House Suite', description: 'Flexible bedding for friends, families, and crews.' },
];

const gallery = [
    { src: '/images/shi-05.jpg', alt: 'King room' },
    { src: '/images/shi-04.jpg', alt: 'Suite' },
    { src: '/images/shi-10.jpg', alt: 'Room detail' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Rooms" title="Rest well, wake up to Tahoe." subtitle="Choose from bright courtyard rooms, suites built for groups, and modern lodge finishes." image="/images/shi-05.jpg" />
        <FeatureGrid eyebrow="Room Types" title="Find your fit" subtitle="Thoughtful layouts with room to recharge between adventures." :items="rooms" />
        <ImageGrid eyebrow="Stay" title="Room highlights" :images="gallery" />
        <PromoBanner title="Ready to book your room?" body="Check seasonal rates and availability for your preferred dates." cta="Check Availability" />
    </div>
</template>
