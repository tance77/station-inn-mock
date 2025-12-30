<script setup lang="ts">
import PageHero from '../components/PageHero.vue';
import PromoBanner from '../components/PromoBanner.vue';
import SplitSection from '../components/SplitSection.vue';
</script>

<template>
    <div>
        <PageHero eyebrow="Early Bird" title="Book early, save more." subtitle="Plan ahead and lock in exclusive rates on future Tahoe stays." image="/images/shi-14.jpg" />
        <SplitSection eyebrow="Limited offer" title="Advance booking perks" body="Reserve your stay early for discounted nightly rates and priority room selection." image="/images/shi-10.jpg" :reverse="true" />
        <PromoBanner title="Ready to plan ahead?" body="Early bird rates are limited by season." cta="View Early Bird Rates" />
    </div>
</template>
