<script setup lang="ts">
interface ImageItem {
    src: string;
    alt: string;
}

const props = defineProps<{
    title?: string;
    eyebrow?: string;
    images: ImageItem[];
}>();
</script>

<template>
    <section class="bg-background">
        <div class="mx-auto max-w-6xl">
            <div v-if="title" class="mb-8">
                <p v-if="eyebrow" class="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">{{ eyebrow }}</p>
                <h2 class="font-display mt-3 text-3xl text-foreground sm:text-4xl">{{ title }}</h2>
            </div>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="(image, index) in images" :key="image.src" class="polaroid-card transition-transform duration-300 hover:rotate-0" :class="index % 3 === 0 ? '-rotate-2' : index % 3 === 1 ? 'rotate-1' : 'rotate-2'">
                    <img :alt="image.alt" class="polaroid-img h-56 sm:h-64" :src="image.src" />
                </div>
            </div>
        </div>
    </section>
</template>
