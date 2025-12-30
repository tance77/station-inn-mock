<script setup lang="ts">
interface FaqItem {
    question: string;
    answer: string;
}

const props = defineProps<{
    title: string;
    items: FaqItem[];
}>();
</script>

<template>
    <section class="bg-background">
        <div class="mx-auto max-w-4xl">
            <h2 class="font-display text-3xl text-foreground sm:text-4xl">{{ title }}</h2>
            <div class="mt-8 space-y-4">
                <details v-for="item in items" :key="item.question" class="rounded-2xl border border-border/60 bg-card p-5">
                    <summary class="cursor-pointer text-sm font-semibold tracking-[0.2em] text-foreground uppercase">
                        {{ item.question }}
                    </summary>
                    <p class="mt-3 text-sm text-muted-foreground">{{ item.answer }}</p>
                </details>
            </div>
        </div>
    </section>
</template>
