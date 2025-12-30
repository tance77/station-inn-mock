<script setup lang="ts">
import PageHero from '../components/PageHero.vue';
import PromoBanner from '../components/PromoBanner.vue';
import TestimonialGrid from '../components/TestimonialGrid.vue';

const testimonials = [
    { quote: 'Perfect location and the rooms felt brand new.', name: 'Morgan', source: 'Google Reviews' },
    { quote: 'Loved the pool deck and fire pits at night.', name: 'Avery', source: 'Tripadvisor' },
    { quote: 'Stylish, friendly, and walkable to the lake.', name: 'Jordan', source: 'Yelp' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Reviews" title="What guests are saying." subtitle="Highlights from recent stays at Station House Inn." image="/images/shi-13.jpg" />
        <TestimonialGrid title="Guest reviews" :items="testimonials" />
        <PromoBanner title="Ready to experience it?" body="Book your stay and make your own Tahoe memories." cta="Book Now" />
    </div>
</template>
