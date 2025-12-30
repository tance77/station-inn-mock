<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import PageHero from '../components/PageHero.vue';
import PromoBanner from '../components/PromoBanner.vue';
import SplitSection from '../components/SplitSection.vue';

const groups = [
    { title: 'Corporate retreats', description: 'Meeting-ready spaces with outdoor breaks built in.' },
    { title: 'Family reunions', description: 'Room blocks and shared spaces for multigenerational stays.' },
    { title: 'Celebrations', description: 'Flexible lounges for birthdays, anniversaries, and gatherings.' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Groups" title="Gather in Tahoe with room to connect." subtitle="Custom room blocks, shared spaces, and an ideal walkable location for group itineraries." image="/images/shi-13.jpg" />
        <FeatureGrid title="Group stays" :items="groups" />
        <SplitSection eyebrow="Event spaces" title="Indoor + outdoor flow" body="Host meetings in the lounge, then unwind at the fire pits or pool deck." image="/images/shi-11.jpg" :reverse="true" />
        <PromoBanner title="Plan a group stay" body="Our team can build custom packages for your dates and group size." cta="Request a Proposal" />
    </div>
</template>
