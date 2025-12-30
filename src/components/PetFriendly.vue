<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>

<template>
    <section class="bg-accent text-accent-foreground">
        <div class="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div class="polaroid-card rotate-1">
                <img alt="Pet-friendly rooms" class="polaroid-img h-64 sm:h-80" src="/images/pets/Husky-Family.jpg" />
            </div>
            <div class="space-y-5">
                <p class="text-xs font-semibold tracking-[0.3em] text-accent-foreground/70 uppercase">Pet Friendly Hotel in South Lake Tahoe</p>
                <h2 class="font-display text-3xl sm:text-4xl">Adventures are better with four paws.</h2>
                <p class="text-accent-foreground/80">
                    At Station House Inn, we believe adventures are better with four paws. Our South Lake Tahoe location puts you minutes from the beach, trailheads, and village fun - plus comfy rooms, a seasonal outdoor pool, and a friendly environment that welcomes your
                    best friend!
                </p>
                <Button variant="outline" class="text-foreground"> Pet Policy </Button>
            </div>
        </div>
    </section>
</template>
