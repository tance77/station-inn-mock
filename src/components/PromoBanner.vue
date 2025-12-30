<script setup lang="ts">
import { Button } from '@/components/ui/button';

const props = defineProps<{
    title: string;
    body: string;
    cta?: string;
    tone?: 'light' | 'dark';
}>();
</script>

<template>
    <section :class="tone === 'dark' ? 'bg-foreground text-background' : 'bg-card'">
        <div class="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h3 class="font-display text-2xl sm:text-3xl">{{ title }}</h3>
                <p class="mt-3 text-sm" :class="tone === 'dark' ? 'text-muted-foreground/80' : 'text-muted-foreground'">{{ body }}</p>
            </div>
            <Button v-if="cta" :variant="tone === 'dark' ? 'outline' : 'outline'" :class="tone === 'dark' ? 'border-background text-background hover:bg-background hover:text-foreground' : ''">
                {{ cta }}
            </Button>
        </div>
    </section>
</template>
