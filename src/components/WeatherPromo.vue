<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>

<template>
    <section class="bg-accent text-accent-foreground">
        <div class="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div class="space-y-5">
                <p class="text-xs font-semibold tracking-[0.3em] text-accent-foreground/70 uppercase">Specials &amp; Offers</p>
                <h2 class="font-display text-3xl sm:text-4xl">Book direct, score the perks.</h2>
                <p class="text-sm text-accent-foreground/80">Book direct on our website and unlock the perks you actually want - like flexible cancellations, our best available rates, and first dibs on exclusive offers.</p>
                <p class="text-sm text-accent-foreground/80">Sure, every guest gets a complimentary welcome drink (cheers to that!), but booking direct means you can sip it knowing you scored the best deal.</p>
                <div class="flex flex-wrap gap-4">
                    <Button asChild>
                        <a href="https://app.mews.com/distributor/89b238cd-c015-499d-a55e-b31c01722a34" rel="noreferrer"> View Offers </a>
                    </Button>
                    <Button asChild variant="outline" class="text-foreground">
                        <a href="https://weather.com/weather/today/l/a5eed4c1833057b92c774a883cbb31997b47c28a58b48d0a5172cf910441feb1" target="_blank" rel="noreferrer"> Weather Guide </a>
                    </Button>
                </div>
            </div>
            <div class="polaroid-card rotate-1">
                <img alt="Seasonal promo" class="polaroid-img h-64 sm:h-80" src="/images/shi-08.jpg" />
            </div>
        </div>
    </section>
</template>
