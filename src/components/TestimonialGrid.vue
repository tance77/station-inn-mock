<script setup lang="ts">
interface TestimonialItem {
    quote: string;
    name: string;
    source: string;
}

const props = defineProps<{
    title: string;
    items: TestimonialItem[];
}>();
</script>

<template>
    <section class="bg-card">
        <div class="mx-auto max-w-6xl">
            <h2 class="font-display text-3xl text-foreground sm:text-4xl">{{ title }}</h2>
            <div class="mt-10 grid gap-6 md:grid-cols-3">
                <article v-for="item in items" :key="item.quote" class="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                    <p class="text-sm text-foreground">“{{ item.quote }}”</p>
                    <p class="mt-4 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">{{ item.name }}</p>
                    <p class="mt-1 text-xs text-muted-foreground">{{ item.source }}</p>
                </article>
            </div>
        </div>
    </section>
</template>
