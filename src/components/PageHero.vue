<script setup lang="ts">
const props = defineProps<{
    eyebrow?: string;
    title: string;
    subtitle?: string;
    image?: string;
    align?: 'left' | 'right';
    tone?: 'light' | 'dark';
}>();

const mediaOnLeft = props.align === 'left';
</script>

<template>
    <section :class="tone === 'dark' ? 'bg-foreground text-background' : 'bg-card'">
        <div class="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div :class="mediaOnLeft ? 'order-2 lg:order-1' : 'order-1'">
                <p v-if="eyebrow" class="text-xs font-semibold tracking-[0.3em] uppercase" :class="tone === 'dark' ? 'text-muted-foreground' : 'text-muted-foreground'">
                    {{ eyebrow }}
                </p>
                <h1 class="font-display mt-3 text-4xl sm:text-5xl">{{ title }}</h1>
                <p v-if="subtitle" class="mt-4 text-sm" :class="tone === 'dark' ? 'text-muted-foreground/80' : 'text-muted-foreground'">
                    {{ subtitle }}
                </p>
                <slot name="actions"></slot>
            </div>
            <div v-if="image" :class="mediaOnLeft ? 'order-1 lg:order-2' : 'order-2'">
                <div class="polaroid-card" :class="mediaOnLeft ? '-rotate-1' : 'rotate-1'">
                    <img :alt="title" class="polaroid-img h-72 sm:h-96" :src="image" />
                </div>
            </div>
        </div>
    </section>
</template>
