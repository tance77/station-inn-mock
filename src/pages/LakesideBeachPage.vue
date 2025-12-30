<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import ImageGrid from '../components/ImageGrid.vue';
import PageHero from '../components/PageHero.vue';
import SplitSection from '../components/SplitSection.vue';

const perks = [
    { title: 'Paddle rentals', description: 'Kayaks and paddle boards available at the marina.' },
    { title: 'Beach chairs', description: 'Rent chairs and umbrellas for a full lake day.' },
    { title: 'Walkable access', description: 'The beach is just a short stroll away.' },
];

const images = [
    { src: '/images/shi-12.jpg', alt: 'Beach day' },
    { src: '/images/shi-11.jpg', alt: 'Marina view' },
    { src: '/images/shi-14.jpg', alt: 'Sunset on the lake' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Lakeside Beach" title="Lake Tahoe at your doorstep." subtitle="Spend the day on the water and return for poolside relaxation." image="/images/shi-12.jpg" />
        <SplitSection eyebrow="On the water" title="Paddle out" body="Rent kayaks, paddle boards, or jet skis during marina hours." image="/images/shi-11.jpg" :reverse="true" />
        <FeatureGrid title="Beach day tips" :items="perks" />
        <ImageGrid eyebrow="Lakeside" title="Scenes from the shore" :images="images" />
    </div>
</template>
