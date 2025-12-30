<script setup lang="ts">
import NewsletterForm from '@/components/NewsletterForm.vue';
</script>

<template>
    <section class="bg-background text-foreground">
        <div class="mx-auto max-w-6xl">
            <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div class="space-y-4">
                    <p class="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">Newsletter</p>
                    <h2 class="font-display text-3xl sm:text-4xl">For our favorite kind of traveler—the ones who keep coming back.</h2>
                    <p class="text-sm text-muted-foreground/80">Join our email list today to stay in the loop for all things Station House.</p>
                    <p class="text-sm text-muted-foreground/80">Hint: you’ll also be the first to hear about + experience Play Park perks as soon as we launch our loyalty program.</p>
                </div>
                <div class="space-y-4 rounded-2xl border border-border/70 bg-card/80 p-4 shadow-sm sm:p-5">
                    <div class="space-y-2">
                        <p class="text-lg font-semibold">Subscribe</p>
                        <p class="text-sm text-muted-foreground">Sign up for exclusive news and offers.</p>
                    </div>
                    <NewsletterForm submit-label="Subscribe" />
                </div>
            </div>
            <div class="polaroid-card -rotate-2 mt-10 sm:mt-12">
                <img alt="Checkout counter" class="polaroid-img h-64 sm:h-80" src="/images/checkout.webp" />
            </div>
        </div>
    </section>
</template>
