<script setup lang="ts">
import ActivitiesSection from '../components/ActivitiesSection.vue';
import ExploreSection from '../components/ExploreSection.vue';
import HeroIntro from '../components/HeroIntro.vue';
import HeroSection from '../components/HeroSection.vue';
import NewsletterSignup from '../components/NewsletterSignup.vue';
import PetFriendly from '../components/PetFriendly.vue';
import RoomsTeaser from '../components/RoomsTeaser.vue';
import SkiPassPromo from '../components/SkiPassPromo.vue';
</script>

<template>
    <div>
        <HeroSection />
        <HeroIntro />
        <RoomsTeaser />
        <PetFriendly />
        <ActivitiesSection />
        <ExploreSection />
        <SkiPassPromo />
        <NewsletterSignup />
    </div>
</template>
