<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import PageHero from '../components/PageHero.vue';
import PromoBanner from '../components/PromoBanner.vue';

const accessibility = [
    { title: 'Accessible rooms', description: 'Select rooms include ADA-compliant features and roll-in showers.' },
    { title: 'Parking & entry', description: 'Accessible parking and entry routes are available onsite.' },
    { title: 'Support', description: 'Contact our team for tailored accommodations or questions.' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Accessibility" title="Comfortable, inclusive stays." subtitle="We are committed to providing accessible lodging and services for every guest." image="/images/shi-11.jpg" />
        <FeatureGrid title="Accessibility highlights" :items="accessibility" />
        <PromoBanner title="Need assistance planning your stay?" body="Reach out to our front desk team to confirm details before arrival." cta="Contact Us" />
    </div>
</template>
