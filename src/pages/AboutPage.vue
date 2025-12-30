<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import ImageGrid from '../components/ImageGrid.vue';
import PageHero from '../components/PageHero.vue';
import PromoBanner from '../components/PromoBanner.vue';
import SplitSection from '../components/SplitSection.vue';

const values = [
    { title: 'Mid-century roots', description: 'A restored lodge aesthetic with modern comforts layered in.' },
    { title: 'Walkable basecamp', description: 'Steps from the lake, village, and Heavenly gondola.' },
    { title: 'Stay with purpose', description: 'Local partnerships that support Tahoe’s community and ecology.' },
];

const gallery = [
    { src: '/images/shi-10.jpg', alt: 'Station House Inn lobby' },
    { src: '/images/shi-11.jpg', alt: 'Courtyard fire pit' },
    { src: '/images/shi-12.jpg', alt: 'Tahoe shoreline' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="About" title="A refined lodge with a playful Tahoe spirit." subtitle="Station House Inn blends classic hospitality with fresh design touches for a stay that feels relaxed and intentional." image="/images/shi-12.jpg" />
        <SplitSection
            eyebrow="Stay with purpose"
            title="Giving back is part of the stay."
            body="Through partnerships with local organizations, we support lake conservation, community events, and the people who make South Lake Tahoe special."
            image="/images/shi-13.jpg"
            :reverse="true"
        />
        <FeatureGrid eyebrow="The Experience" title="Why guests return" subtitle="Thoughtful amenities and a warm welcome make each stay effortless." :items="values" />
        <ImageGrid eyebrow="Gallery" title="Inside Station House Inn" :images="gallery" />
        <PromoBanner title="Make Station House Inn your Tahoe home base." body="Walk to the beach, catch the gondola, and unwind by the fire pits every night." cta="Plan Your Stay" />
    </div>
</template>
