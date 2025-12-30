<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="bg-card">
        <div class="mx-auto max-w-6xl relative">
            <div class="relative overflow-hidden rounded-[2.5rem] border border-border/60">
                <img
                    alt="Station House Inn stay"
                    class="h-104 w-full object-cover sm:h-128"
                    src="/images/about/IMG_0212.webp"
                />
                <div class="absolute inset-0 bg-linear-to-r from-black/55 via-black/25 to-transparent"></div>
                <div class="absolute inset-y-0 left-0 flex max-w-xl flex-col justify-center gap-4 px-6 text-background sm:px-10">
                    <p class="text-xs font-semibold tracking-[0.3em] text-background/80 uppercase">Long-Term Stay</p>
                    <h2 class="font-display text-3xl sm:text-4xl">Interested in staying with us for a day, or two, or three?</h2>
                    <p class="text-sm text-background/80">Inquire about about extended stays below.</p>
                    <div class="pt-2">
                        <Button asChild class="bg-background text-foreground hover:bg-background/90">
                            <RouterLink to="/long-term-stay">Learn More</RouterLink>
                        </Button>
                    </div>
                </div>
            </div>
            <img
                alt="Steve the raccoon"
                class="absolute -left-2 -top-24 h-48 w-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)] sm:-left-8 sm:-top-32 sm:h-64 rotate-6"
                src="/images/about/shi_steve-anim_02.gif"
            />
        </div>
    </section>
</template>
