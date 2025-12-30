<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="bg-accent text-accent-foreground">
        <div class="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div class="polaroid-card -rotate-1">
                <img alt="Ski season pass" class="polaroid-img h-64 sm:h-80" src="/images/ski-season-season-pass.webp" />
            </div>
            <div class="space-y-5">
                <p class="text-xs font-semibold tracking-[0.3em] uppercase text-accent-foreground/70">The Ski Season Pass Is Back</p>
                <h2 class="font-display text-3xl sm:text-4xl">Winter in South Lake Tahoe means fresh powder.</h2>
                <p class="text-accent-foreground/80">Winter in South Lake Tahoe means fresh powder, crackling fire pits, and epic ski days.</p>
                <p class="text-accent-foreground/80">Lock in 20–30% savings with our tiered Ski Season Pass, valid November 1, 2025 – April 30, 2026.</p>
                <p class="text-accent-foreground/80">No more last-minute scrambles for peak-season rooms. Just your cozy ski-season HQ, complete with fire pits, hot drinks, and first tracks waiting.</p>
                <p class="text-accent-foreground/80">Choose Green, Blue, or Black. Grab yours before they’re gone!</p>
                <Button asChild variant="secondary">
                    <RouterLink to="/the-season-pass">Buy Your Pass Now</RouterLink>
                </Button>
            </div>
        </div>
    </section>
</template>
