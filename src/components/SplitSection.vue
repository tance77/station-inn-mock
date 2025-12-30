<script setup lang="ts">
const props = defineProps<{
    title: string;
    body: string;
    image: string;
    eyebrow?: string;
    reverse?: boolean;
    tone?: 'light' | 'dark';
}>();
</script>

<template>
    <section :class="tone === 'dark' ? 'bg-foreground text-background' : 'bg-background'">
        <div class="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div class="polaroid-card" :class="[reverse ? 'order-2 -rotate-1 lg:order-2' : 'order-1 rotate-1']">
                <img :alt="title" class="polaroid-img h-64 sm:h-80" :src="image" />
            </div>
            <div :class="reverse ? 'order-1 lg:order-1' : 'order-2'">
                <p v-if="eyebrow" class="text-xs font-semibold tracking-[0.3em] uppercase" :class="tone === 'dark' ? 'text-muted-foreground' : 'text-muted-foreground'">
                    {{ eyebrow }}
                </p>
                <h2 class="font-display mt-3 text-3xl sm:text-4xl">{{ title }}</h2>
                <p class="mt-4 text-sm" :class="tone === 'dark' ? 'text-muted-foreground/80' : 'text-muted-foreground'">
                    {{ body }}
                </p>
                <slot name="actions"></slot>
            </div>
        </div>
    </section>
</template>
