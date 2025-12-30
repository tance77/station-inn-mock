<script setup lang="ts">
import PageHero from '../components/PageHero.vue';
import PromoBanner from '../components/PromoBanner.vue';
import SplitSection from '../components/SplitSection.vue';
</script>

<template>
    <div>
        <PageHero eyebrow="Stay More" title="Extend the escape." subtitle="Book longer stays to unlock special nightly rates and extra perks." image="/images/shi-10.jpg" />
        <SplitSection eyebrow="Offer details" title="More nights, more Tahoe." body="Stay three nights or more and enjoy discounts on select dates, plus late checkout when available." image="/images/shi-14.jpg" :reverse="true" />
        <PromoBanner title="Ready to stay a little longer?" body="Check availability for your extended Tahoe getaway." cta="View Rates" />
    </div>
</template>
