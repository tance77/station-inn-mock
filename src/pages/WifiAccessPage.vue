<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import PageHero from '../components/PageHero.vue';

const steps = [
    { title: 'Connect', description: 'Select the Station House Inn network from your device.' },
    { title: 'Authenticate', description: 'Open a browser to accept the guest Wi-Fi terms.' },
    { title: 'Stream', description: 'Enjoy complimentary high-speed access throughout the property.' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Wi-Fi Access" title="Stay connected during your stay." subtitle="Complimentary high-speed Wi-Fi is available in every room, suite, and shared space." image="/images/shi-14.jpg" />
        <FeatureGrid title="Quick connection steps" :items="steps" />
    </div>
</template>
