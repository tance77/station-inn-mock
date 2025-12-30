<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import PageHero from '../components/PageHero.vue';
import PromoBanner from '../components/PromoBanner.vue';

const passes = [
    { title: 'Blue Pass', description: 'Ideal for midweek skiers and weekday escapes.' },
    { title: 'Green Pass', description: 'Flexible access with peak-season perks.' },
    { title: 'Black Pass', description: 'All-access coverage for dedicated ski season stays.' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="The Season Pass" title="Ski, stay, repeat." subtitle="Pair your winter stays with season pass savings and early snow access." image="/images/shi-09.jpg" />
        <FeatureGrid title="Choose your pass" :items="passes" />
        <PromoBanner title="Secure your season" body="Passes are limited each season—lock in your winter stay today." cta="Get the Pass" />
    </div>
</template>
