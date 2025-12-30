<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>

<template>
    <section class="bg-secondary">
        <div class="mx-auto max-w-6xl">
            <div class="max-w-3xl space-y-5">
                <h1 class="text-xs font-semibold tracking-[0.35em] uppercase">Station House Inn - Boutique Hotel In South Lake Tahoe</h1>
                <h2 class="font-display text-4xl sm:text-5xl lg:text-6xl">Discover South Lake Tahoe at the Station House Inn</h2>
                <p class="text-base sm:text-lg">
                    The Station House Inn has been hosting travelers, vacationers, and adventurers since 1972. The property features 96 rooms, ranging from comfortable doubles to spacious suites, along with convenient parking and resort amenities. Everything is newly
                    renovated with modern conveniences, and beautifully planned for comfort.
                </p>
                <p class="text-base sm:text-lg">With pet-friendly rooms, easy on-site parking, and a cozy atmosphere, it’s an effortless choice for your Tahoe stay.</p>
                <div class="flex flex-wrap gap-4 pt-2">
                    <Button>Book a Stay</Button>
                    <Button variant="outline">View Rooms</Button>
                </div>
            </div>
        </div>
    </section>
</template>
