<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import PageHero from '../components/PageHero.vue';
import PromoBanner from '../components/PromoBanner.vue';
import SplitSection from '../components/SplitSection.vue';

const perks = [
    { title: 'Team-friendly rooms', description: 'Flexible bedding and easy group coordination.' },
    { title: 'Outdoor quad', description: 'Space for recovery games and team bonding.' },
    { title: 'Movie nights', description: 'Projector screenings with popcorn for all.' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Teams" title="Traveling sports teams welcome." subtitle="Room blocks, team-focused amenities, and convenient access to Tahoe venues." image="/images/shi-11.jpg" />
        <FeatureGrid title="Built for teams" :items="perks" />
        <SplitSection eyebrow="Recovery" title="Hot tub + lounge" body="Soothe post-game muscles with an outdoor hot tub and shared lounge spaces." image="/images/shi-13.jpg" :reverse="true" />
        <PromoBanner title="Book your team stay" body="Contact our sales team for custom rates and availability." cta="Request Team Rates" />
    </div>
</template>
