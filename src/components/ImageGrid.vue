<script setup lang="ts">
import { computed, ref, watch } from 'vue';

interface ImageItem {
    src: string;
    alt: string;
}

const props = defineProps<{
    title?: string;
    eyebrow?: string;
    images: ImageItem[];
}>();

const activeIndex = ref<number | null>(null);

const activeImage = computed(() => {
    if (activeIndex.value === null) {
        return null;
    }
    return props.images[activeIndex.value];
});

const openImage = (index: number) => {
    activeIndex.value = index;
};

const closeImage = () => {
    activeIndex.value = null;
};

const showNextImage = () => {
    if (activeIndex.value === null) {
        return;
    }
    activeIndex.value = (activeIndex.value + 1) % props.images.length;
};

const showPrevImage = () => {
    if (activeIndex.value === null) {
        return;
    }
    activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length;
};

watch(activeIndex, (value, _, onCleanup) => {
    if (value === null) {
        return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeImage();
            return;
        }
        if (event.key === 'ArrowRight') {
            showNextImage();
        }
        if (event.key === 'ArrowLeft') {
            showPrevImage();
        }
    };
    window.addEventListener('keydown', onKeyDown);
    onCleanup(() => {
        window.removeEventListener('keydown', onKeyDown);
    });
});
</script>

<template>
    <div>
        <div class="mx-auto max-w-6xl">
            <div v-if="title" class="mb-8">
                <p v-if="eyebrow" class="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">{{ eyebrow }}</p>
                <h2 class="font-display mt-3 text-3xl text-foreground sm:text-4xl">{{ title }}</h2>
            </div>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <button
                    v-for="(image, index) in images"
                    :key="image.src"
                    class="polaroid-card transition-transform duration-300 hover:rotate-0"
                    :class="index % 3 === 0 ? '-rotate-2' : index % 3 === 1 ? 'rotate-1' : 'rotate-2'"
                    type="button"
                    @click="openImage(index)"
                >
                    <img :alt="image.alt" class="polaroid-img h-56 sm:h-64" :src="image.src" />
                </button>
            </div>
        </div>
    </div>
    <div v-if="activeImage" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6" @click.self="closeImage">
        <div class="relative max-h-[90vh] w-full max-w-5xl">
            <button
                class="absolute -top-4 right-0 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold tracking-[0.2em] uppercase text-foreground shadow"
                type="button"
                @click="closeImage"
            >
                Close
            </button>
            <button
                class="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-background/90 p-2 text-foreground shadow transition hover:bg-background sm:flex"
                type="button"
                aria-label="Previous image"
                @click.stop="showPrevImage"
            >
                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
            </button>
            <button
                class="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-background/90 p-2 text-foreground shadow transition hover:bg-background sm:flex"
                type="button"
                aria-label="Next image"
                @click.stop="showNextImage"
            >
                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m8.59 16.59 1.41 1.41 6-6-6-6-1.41 1.41L13.17 12z" />
                </svg>
            </button>
            <img :alt="activeImage.alt" class="max-h-[90vh] w-full rounded-3xl object-contain" :src="activeImage.src" />
        </div>
    </div>
</template>
