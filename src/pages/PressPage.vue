<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import PageHero from '../components/PageHero.vue';

const mentions = [
    { title: 'Travel + Leisure', description: 'A modern lodge reimagined for Tahoe lovers.' },
    { title: 'Conde Nast Traveler', description: 'Top boutique stays near the lake.' },
    { title: 'Outside', description: 'Best basecamps for alpine getaways.' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Press" title="Stories about Station House Inn." subtitle="Selected features and awards from travel publications." image="/images/shi-14.jpg" />
        <FeatureGrid title="Recent highlights" :items="mentions" />
    </div>
</template>
