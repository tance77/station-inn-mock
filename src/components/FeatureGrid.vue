<script setup lang="ts">
interface FeatureItem {
    title: string;
    description: string;
}

const props = defineProps<{
    eyebrow?: string;
    title: string;
    subtitle?: string;
    items: FeatureItem[];
    tone?: 'light' | 'dark';
}>();
</script>

<template>
    <section :class="tone === 'dark' ? 'bg-foreground text-background' : 'bg-card'">
        <div class="mx-auto max-w-6xl">
            <div class="flex flex-wrap items-center justify-between gap-6">
                <div>
                    <p v-if="eyebrow" class="text-xs font-semibold tracking-[0.3em] uppercase" :class="tone === 'dark' ? 'text-muted-foreground' : 'text-muted-foreground'">
                        {{ eyebrow }}
                    </p>
                    <h2 class="font-display mt-3 text-3xl sm:text-4xl">{{ title }}</h2>
                </div>
                <p v-if="subtitle" class="max-w-md text-sm" :class="tone === 'dark' ? 'text-muted-foreground/80' : 'text-muted-foreground'">
                    {{ subtitle }}
                </p>
            </div>
            <div class="mt-10 grid gap-6 md:grid-cols-3">
                <article v-for="item in items" :key="item.title" class="rounded-3xl border border-border/60 p-6 shadow-sm" :class="tone === 'dark' ? 'border-background/20 bg-foreground text-background' : 'bg-background'">
                    <div class="flex h-12 w-12 items-center justify-center rounded-full" :class="tone === 'dark' ? 'bg-background text-foreground' : 'bg-foreground text-background'">✦</div>
                    <h3 class="font-display mt-6 text-xl">{{ item.title }}</h3>
                    <p class="mt-3 text-sm" :class="tone === 'dark' ? 'text-muted-foreground/80' : 'text-muted-foreground'">
                        {{ item.description }}
                    </p>
                </article>
            </div>
        </div>
    </section>
</template>
