<script setup lang="ts">
import FaqList from '../components/FaqList.vue';
import PageHero from '../components/PageHero.vue';

const faqs = [
    { question: 'What time is check-in?', answer: 'Check-in begins at 4 PM. Early check-in is available upon request.' },
    { question: 'Is parking available?', answer: 'Yes, onsite parking is available for registered guests.' },
    { question: 'Are pets allowed?', answer: 'We are pet friendly and welcome dogs in select rooms.' },
    { question: 'Do you have a pool?', answer: 'Yes, the heated pool and hot tub are open year-round.' },
];
</script>

<template>
    <div>
        <PageHero eyebrow="FAQ" title="Answers for an easy stay." subtitle="Quick details on check-in, amenities, and policies." image="/images/shi-14.jpg" />
        <FaqList title="Frequently asked questions" :items="faqs" />
    </div>
</template>
