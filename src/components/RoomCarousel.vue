<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
    images: string[];
    alt: string;
}>();

const activeIndex = ref(0);
const startX = ref<number | null>(null);
const isDragging = ref(false);
const hasMultiple = computed(() => props.images.length > 1);

const goPrev = () => {
    if (!hasMultiple.value) return;
    activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length;
};

const goNext = () => {
    if (!hasMultiple.value) return;
    activeIndex.value = (activeIndex.value + 1) % props.images.length;
};

const onPointerDown = (event: PointerEvent) => {
    if (!hasMultiple.value) return;
    startX.value = event.clientX;
    isDragging.value = true;
};

const onPointerUp = (event: PointerEvent) => {
    if (!hasMultiple.value || !isDragging.value || startX.value === null) return;
    const delta = event.clientX - startX.value;
    if (Math.abs(delta) > 40) {
        delta > 0 ? goPrev() : goNext();
    }
    isDragging.value = false;
    startX.value = null;
};

const onPointerLeave = () => {
    isDragging.value = false;
    startX.value = null;
};
</script>

<template>
    <div class="relative h-56 touch-pan-y overflow-hidden  select-none" @pointerdown="onPointerDown" @pointerup="onPointerUp" @pointerleave="onPointerLeave">
        <img v-for="(image, index) in images" :key="image" :alt="alt" class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700" :class="index === activeIndex ? 'opacity-100' : 'opacity-0'" :src="image" />
        <button v-if="hasMultiple" class="absolute top-1/2 left-3 -translate-y-1/2 rounded-full border border-border/40 bg-background/80 p-2 text-foreground shadow-sm transition hover:bg-background" type="button" aria-label="Previous image" @click="goPrev">
            <span aria-hidden="true">‹</span>
        </button>
        <button v-if="hasMultiple" class="absolute top-1/2 right-3 -translate-y-1/2 rounded-full border border-border/40 bg-background/80 p-2 text-foreground shadow-sm transition hover:bg-background" type="button" aria-label="Next image" @click="goNext">
            <span aria-hidden="true">›</span>
        </button>
        <div v-if="hasMultiple" class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            <button
                v-for="(image, index) in images"
                :key="image"
                type="button"
                class="h-2.5 w-2.5 rounded-full border border-border/60 transition"
                :class="index === activeIndex ? 'bg-foreground' : 'bg-background/70'"
                :aria-label="`Go to slide ${index + 1}`"
                @click="activeIndex = index"
            ></button>
        </div>
    </div>
</template>
