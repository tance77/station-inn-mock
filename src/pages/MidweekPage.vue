<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import PageHero from '../components/PageHero.vue';
import PromoBanner from '../components/PromoBanner.vue';

const perks = [
    { title: 'Quiet mornings', description: 'Enjoy a calmer lakefront vibe and open trails.' },
    { title: 'Better rates', description: 'Midweek pricing makes longer stays more accessible.' },
    { title: 'Flexible check-in', description: 'More availability for early arrivals and late checkouts.' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Midweek" title="Escape the weekend crowds." subtitle="Midweek stays deliver more space, more calm, and more value." image="/images/shi-14.jpg" />
        <FeatureGrid title="Midweek perks" :items="perks" />
        <PromoBanner title="Book a midweek stay" body="Check availability for your next Tahoe retreat." cta="See Midweek Rates" />
    </div>
</template>
