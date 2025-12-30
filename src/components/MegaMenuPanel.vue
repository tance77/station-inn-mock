<script setup lang="ts">
import MegaMenuItem from '@/components/MegaMenuItem.vue';

interface MegaMenuItem {
  label: string;
  to: string;
  image: string;
  description: string;
}

const props = defineProps<{
  items: MegaMenuItem[];
  activePath: string;
  onNavigate?: () => void;
}>();
</script>

<template>
  <div class="-mt-px border-b border-border bg-background/95 backdrop-blur">
    <div class="mx-auto max-w-6xl px-6 py-6">
      <div class="grid gap-6 md:grid-cols-2">
        <MegaMenuItem
          v-for="item in items"
          :key="item.label"
          :active-path="activePath"
          :description="item.description"
          :image="item.image"
          :label="item.label"
          :on-navigate="props.onNavigate"
          :to="item.to"
        />
      </div>
    </div>
  </div>
</template>
