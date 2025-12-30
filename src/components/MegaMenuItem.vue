<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps<{
  label: string;
  to: string;
  image: string;
  description: string;
  activePath: string;
  onNavigate?: () => void;
}>();

const isActive = props.activePath === props.to;
</script>

<template>
  <RouterLink
    :class="[
      'flex items-center gap-4 rounded-2xl border border-border/60 bg-card/80 p-4 transition hover:border-border hover:bg-card',
      isActive ? 'text-sunset-500 font-semibold' : 'text-secondary-foreground/70',
    ]"
    :to="to"
    @pointerdown="onNavigate?.()"
  >
    <img :alt="label" :src="image" class="h-24 w-36 shrink-0 rounded-2xl object-cover" />
    <div class="space-y-1">
      <div class="capitalize">{{ label }}</div>
      <div class="text-xs text-muted-foreground/60">{{ description }}</div>
    </div>
  </RouterLink>
</template>
