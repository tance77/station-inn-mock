<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import ImageGrid from '../components/ImageGrid.vue';
import PageHero from '../components/PageHero.vue';
import PromoBanner from '../components/PromoBanner.vue';

const perks = [
    { title: 'Dog-friendly rooms', description: 'Select rooms designed for easy pet access.' },
    { title: 'Outdoor space', description: 'Courtyard lawns and nearby trails for quick walks.' },
    { title: 'Local tips', description: 'Ask us about pet-friendly dining and beaches.' },
];

const images = [
    { src: '/images/shi-06.jpg', alt: 'Pets at the inn' },
    { src: '/images/shi-13.jpg', alt: 'Dog lounge' },
    { src: '/images/shi-12.jpg', alt: 'Trail walks' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Pet Friendly" title="Bring your best adventure buddy." subtitle="Station House Inn welcomes pets with thoughtful amenities and easy outdoor access." image="/images/shi-06.jpg" />
        <FeatureGrid title="Pet-friendly perks" :items="perks" />
        <ImageGrid eyebrow="Paws" title="Pet-friendly moments" :images="images" />
        <PromoBanner title="Review our pet policy" body="Connect with the front desk for rates and pet guidelines." cta="Pet Policy" />
    </div>
</template>
