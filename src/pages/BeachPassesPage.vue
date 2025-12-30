<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import PageHero from '../components/PageHero.vue';
import SplitSection from '../components/SplitSection.vue';

const perks = [
    { title: 'Beach access', description: 'Passes available for Lakeside Beach during summer season.' },
    { title: 'Walkable location', description: 'A short stroll from the inn to the shoreline.' },
    { title: 'Gear support', description: 'Ask our team about towels, chairs, and recommendations.' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Beach Passes" title="Your access to Tahoe’s shoreline." subtitle="Pick up Lakeside Beach passes and enjoy crystal clear water days." image="/images/shi-12.jpg" />
        <SplitSection eyebrow="Lakeside Beach" title="A short walk to the lake" body="Grab a towel, stroll down to the marina, and settle in with mountain views." image="/images/shi-12.jpg" :reverse="true" />
        <FeatureGrid title="Beach day essentials" :items="perks" />
    </div>
</template>
