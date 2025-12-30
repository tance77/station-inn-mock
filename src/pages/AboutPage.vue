<script setup lang="ts">
import PageHero from '@/components/PageHero.vue';
import { Button } from '@/components/ui/button';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const galleryImages = [
    '/images/about/galary/Station_House_Inn_Exterior_Fire_Pit_2025.jpg',
    '/images/about/galary/StationHouseInn_June2019_60.jpg',
    '/images/about/galary/StationHouseInn_June2019_73.jpg',
    '/images/about/galary/Station_House_Inn_Lobby_with_Fireplace.jpg',
    '/images/about/galary/SHI_SELECTS_175.jpg',
    '/images/about/galary/SHI_SELECTS_185.jpg',
    '/images/about/galary/SHI_SELECTS_261.jpg',
    '/images/about/galary/SHI_SELECTS_93.jpg',
    '/images/about/galary/IMG_9075.jpg',
    '/images/about/galary/IMG_9117.jpg',
    '/images/about/galary/IMG_9351_3.jpg',
    '/images/about/galary/Tahoe_National_Forest.jpg',
];

const activeImage = ref<string | null>(null);

const openImage = (src: string) => {
    activeImage.value = src;
};

const getActiveIndex = () => {
    if (!activeImage.value) return -1;
    return galleryImages.findIndex((image) => image === activeImage.value);
};

const showNextImage = () => {
    const currentIndex = getActiveIndex();
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    activeImage.value = galleryImages[nextIndex];
};

const showPrevImage = () => {
    const currentIndex = getActiveIndex();
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    activeImage.value = galleryImages[prevIndex];
};

const closeImage = () => {
    activeImage.value = null;
};

const getAltText = (src: string) => {
    const file = src.split('/').pop() ?? '';
    const name = file.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').trim();
    return name.length ? name : 'Station House Inn gallery image';
};

const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        closeImage();
    }
    if (event.key === 'ArrowRight') {
        showNextImage();
    }
    if (event.key === 'ArrowLeft') {
        showPrevImage();
    }
};

onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
    <div>
        <PageHero
            eyebrow="About The Station House Inn - South Lake Tahoe"
            title="Welcome to Tahoe’s south side"
            subtitle="Between mountain and lake, since 1972"
            image="/images/about/station_house_inn_building_anim_01.gif"
            section-class="section-texture section-texture--sand bg-background"
        >
            <p class="text-muted-foreground">
                The Station House Inn has been hosting travelers, vacationers and adventurers since 1972. Here the fine art of relaxing may be cultivated to its fullest. Bask in the warm sunshine and enjoy an invigorating dip in the pool (seasonal). For the ambitious, Lake Tahoe’s top attractions are within walking distance or a short drive. Right outside our doors are the beautiful alpine lake, private beach, ski resorts, restaurants, shops and casinos. Whether you're here to relax or work, the Station House Inn is your basecamp to explore and unwind.
            </p>
            <div>
                <Button asChild size="lg">
                    <a href="https://app.mews.com/distributor/89b238cd-c015-499d-a55e-b31c01722a34" rel="noreferrer">Book Now</a>
                </Button>
            </div>
        </PageHero>
        <section class="section-texture section-texture--card bg-card">
            <div class="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
                <div class="lg:order-first">
                    <div class="rotate-1 lg:-rotate-2 lg:-translate-y-3">
                        <img
                            alt="Map of South Lake Tahoe"
                            class="polaroid-img h-72 sm:h-96"
                            src="/images/about/station_house_inn_south_lake_tahoe_location.webp"
                        />
                    </div>
                </div>
                <div class="space-y-5 lg:order-last">
                    <p class="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
                        Map of Station House Inn and what's nearby in South Lake Tahoe
                    </p>
                    <h2 class="font-display text-3xl text-foreground sm:text-4xl">Stay Close to Everything Tahoe</h2>
                    <p class="text-muted-foreground">
                        From lakefront strolls to mountain mornings, everything Tahoe is right outside your door. Walk to
                        the beach, explore local eats, or hop over to Heavenly—your perfect South Lake Tahoe home base
                        awaits.
                    </p>
                </div>
            </div>
        </section>
        <section class="section-texture section-texture--accent bg-accent text-accent-foreground">
            <div class="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                <div class="space-y-5">
                    <p class="text-xs font-semibold tracking-[0.3em] text-accent-foreground/70 uppercase">Stay with purpose</p>
                    <h2 class="font-display text-3xl  sm:text-4xl">At Station House Inn, giving back is part of who we are.</h2>
                    <p class="text-accent-foreground/80">
                        Our Stay with Purpose program supports local organizations that protect Lake Tahoe’s environment,
                        uplift the community, and help keep this place vibrant for everyone who calls it home.
                    </p>
                </div>
                <div class="polaroid-card -rotate-1 lg:rotate-2 lg:-translate-y-4">
                    <img
                        alt="Lake Tahoe shoreline"
                        class="polaroid-img h-72 sm:h-96"
                        src="/images/about/lake_tahoe_photo.webp"
                    />
                </div>
            </div>
        </section>
        <section class="bg-background">
            <div class="mx-auto max-w-6xl space-y-8">
                <div class="space-y-3">
                    <p class="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">Gallery</p>
                    <h2 class="font-display text-3xl text-foreground sm:text-4xl">Station House Inn moments</h2>
                </div>
                <div class="columns-1 gap-4 sm:columns-2 lg:columns-3">
                    <button
                        v-for="image in galleryImages"
                        :key="image"
                        class="masonry-item mb-4 w-full transition hover:-translate-y-1 hover:shadow-md"
                        type="button"
                        @click="openImage(image)"
                    >
                        <div class="polaroid-card">
                            <img :alt="getAltText(image)" class="polaroid-img h-full w-full object-cover" :src="image" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
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
                <img :alt="getAltText(activeImage)" class="max-h-[90vh] w-full rounded-3xl object-contain" :src="activeImage" />
            </div>
        </div>
    </div>
</template>
