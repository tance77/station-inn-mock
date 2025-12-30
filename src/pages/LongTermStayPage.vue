<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import PageHero from '../components/PageHero.vue';
import LongTermStay from '@/components/LongTermStay.vue';
import SplitSection from '../components/SplitSection.vue';

const perks = [
    { title: 'Weekly rates', description: 'Discounted pricing for extended stays.' },
    { title: 'Work-ready spaces', description: 'Quiet rooms and reliable Wi-Fi for remote work.' },
    { title: 'Community feel', description: 'A friendly atmosphere for longer visits.' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="Long Term Stay" title="Settle in for a while." subtitle="Extended stays with a comfortable, flexible home base in Tahoe." image="/images/shi-10.jpg" />
        <FeatureGrid title="Long-term stay perks" :items="perks" />
        <SplitSection eyebrow="Amenities" title="Everything you need" body="Enjoy daily housekeeping options, outdoor space, and easy walkability." image="/images/shi-11.jpg" :reverse="true" />
        <LongTermStay />
    </div>
</template>
