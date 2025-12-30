<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import PageHero from '../components/PageHero.vue';
import PromoBanner from '../components/PromoBanner.vue';

const highlights = [
    { title: 'Seasonal cocktails', description: 'Local spirits and Tahoe-inspired flavors.' },
    { title: 'Small bites', description: 'Shareable plates made for sunset hours.' },
    { title: 'Lobby lounge', description: 'Gather in a cozy, design-forward space.' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Happy Hour" title="Toast to Tahoe." subtitle="Join us daily for seasonal cocktails and small bites in the lobby lounge." image="/images/shi-10.jpg" />
        <FeatureGrid title="Happy hour highlights" :items="highlights" />
        <PromoBanner title="See today’s menu" body="Ask the front desk for current happy hour offerings." cta="View Menu" />
    </div>
</template>
