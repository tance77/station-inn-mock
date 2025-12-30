<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="bg-background">
        <div class="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div class="space-y-5">
                <p class="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">Explore South Lake Tahoe</p>
                <h2 class="font-display text-3xl text-foreground sm:text-4xl">South Lake Tahoe is a vacation paradise.</h2>
                <p class="text-muted-foreground">
                    South Lake Tahoe is a vacation paradise with its sparkling alpine lake, majestic mountains, and dense forests. The Station House Inn is an ideal base for your summer getaways or ski vacations. We are a short walk from the Heavenly Gondola, one block away
                    from the lake, or five from nightlife.
                </p>
                <div class="mt-8 rounded-2xl border border-border/60 bg-card p-6 text-sm text-muted-foreground">
                    <div class="mb-5 text-[0.75rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase">Nearby Highlights</div>
                    <div class="space-y-5">
                        <div>
                            <p class="font-display text-lg text-foreground">The Heavenly Gondola</p>
                            <p class="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">0.5 mi</p>
                            <p class="mt-2 leading-relaxed">A 2.4 mile ride up in the Heavenly Mountain Gondola will leave you breathless as you take in panoramic views of Lake Tahoe.</p>
                        </div>
                        <div>
                            <p class="font-display text-lg text-foreground">Lake Tahoe</p>
                            <p class="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">0.3 mi</p>
                            <p class="mt-2 leading-relaxed">Take a dip or a gander at the crystal clear water. That is the main attraction.</p>
                        </div>
                        <div>
                            <p class="font-display text-lg text-foreground">A-Class Mountains</p>
                            <p class="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">2.6 mi</p>
                            <p class="mt-2 leading-relaxed">Seasonal skiing, year-round hiking, and beautiful views of the largest alpine lake in North America and the surrounding peaks.</p>
                        </div>
                        <div>
                            <p class="font-display text-lg text-foreground">Van Sickle Trail</p>
                            <p class="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">2.9 mi</p>
                            <p class="mt-2 leading-relaxed">A short climb from the trailhead quickly transports visitors to the serenity of the forest and National Geographic Adventure Magazine’s top ten trails in the nation.</p>
                        </div>
                    </div>
                    <div class="mt-6 flex justify-center">
                        <Button asChild>
                            <RouterLink to="/activities">View More</RouterLink>
                        </Button>
                    </div>
                </div>
            </div>
            <div class="polaroid-card -rotate-1">
                <img alt="South Lake Tahoe" class="polaroid-img h-72 sm:h-96" src="/images/lake-tahoe.webp" />
            </div>
        </div>
    </section>
</template>
