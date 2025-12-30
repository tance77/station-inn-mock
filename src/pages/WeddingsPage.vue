<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import ImageGrid from '../components/ImageGrid.vue';
import PageHero from '../components/PageHero.vue';
import PromoBanner from '../components/PromoBanner.vue';

const offerings = [
    { title: 'Ceremony lawn', description: 'Intimate outdoor ceremonies framed by the pines.' },
    { title: 'Reception lounge', description: 'Stylish gathering spaces for toasts and celebrations.' },
    { title: 'Room blocks', description: 'Keep the wedding party together on property.' },
];

const images = [
    { src: '/images/shi-13.jpg', alt: 'Ceremony setup' },
    { src: '/images/shi-12.jpg', alt: 'Lakefront portraits' },
    { src: '/images/shi-10.jpg', alt: 'Reception' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Weddings" title="Celebrate lakeside." subtitle="Boutique spaces, Tahoe scenery, and a team ready to bring your vision to life." image="/images/shi-13.jpg" />
        <FeatureGrid title="Wedding highlights" :items="offerings" />
        <ImageGrid eyebrow="Gallery" title="Wedding moments" :images="images" />
        <PromoBanner title="Start planning your wedding" body="Our events team will tailor packages for your guest list and season." cta="Inquire Now" />
    </div>
</template>
