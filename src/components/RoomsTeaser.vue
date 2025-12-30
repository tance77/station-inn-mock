<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { RouterLink } from 'vue-router';
import RoomCarousel from './RoomCarousel.vue';

const rooms = [
    {
        name: 'Roomy King',
        bullets: ['Extra space for guests who like elbow room.', 'Ideal for larger dogs or multiple furry friends.', 'King bed for a leisurely start to the day.', 'Walk-in shower and lounge space to work, play, and unwind.'],
        images: [
            '/images/rooms/roomy%20king/roomy-king-05.webp',
            '/images/rooms/roomy%20king/roomy-king-03.webp',
            '/images/rooms/roomy%20king/roomy-king-02.webp',
            '/images/rooms/roomy%20king/roomy-king-04.webp',
            '/images/rooms/roomy%20king/roomy-king-06.webp',
            '/images/rooms/roomy%20king/roomy-king-09.webp',
            '/images/rooms/roomy%20king/roomy-king-07.webp',
            '/images/rooms/roomy%20king/roomy-king-08.webp',
        ],
    },
    {
        name: 'Double Queen',
        bullets: ['Two Queen beds for crews and families.', 'Great after group hikes or beach days.', 'Walk-in shower for faster mornings.', 'Thoughtful layout keeps gear organized for multi-day trips.'],
        images: ['/images/rooms/double%20queen/double-queen-04.webp', '/images/rooms/double%20queen/double-queen-03.webp', '/images/rooms/double%20queen/double-queen-01.webp', '/images/rooms/double%20queen/double-queen-02.webp'],
    },
];
</script>

<template>
    <section class="bg-background text-foreground">
        <div class="mx-auto max-w-6xl">
            <div class="flex flex-wrap items-end justify-between gap-6">
                <div>
                    <p class="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">Rooms</p>
                    <h2 class="font-display text-3xl sm:text-4xl">Stay a while</h2>
                </div>
                <Button asChild>
                    <RouterLink to="/rooms">Explore Rooms</RouterLink>
                </Button>
            </div>
            <div class="mt-10 grid gap-6 lg:grid-cols-2">
                <article v-for="(room, index) in rooms" :key="room.name" class="rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm">
                    <div class="polaroid-card" :class="index % 2 === 0 ? '-rotate-1' : 'rotate-1'">
                        <RoomCarousel :alt="room.name" :images="room.images" />
                    </div>
                    <div class="mt-6 space-y-3">
                        <h3 class="font-display text-2xl">{{ room.name }}</h3>
                        <ul class="space-y-2  text-muted-foreground">
                            <li v-for="bullet in room.bullets" :key="bullet">• {{ bullet }}</li>
                        </ul>
                        <Button asChild variant="link" class="px-0 tracking-[0.2em] uppercase">
                            <a href="https://app.mews.com/distributor/89b238cd-c015-499d-a55e-b31c01722a34" rel="noreferrer"> Check availability </a>
                        </Button>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
