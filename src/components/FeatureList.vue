<script setup lang="ts">
const props = defineProps<{
    items: string[];
    columns?: number;
    compact?: boolean;
}>();
</script>

<template>
    <ul
        class="grid gap-3 text-sm"
        :class="[
            props.columns === 2 ? 'sm:grid-cols-2' : '',
            props.columns === 3 ? (props.compact ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-3') : '',
        ]"
    >
        <li v-for="item in props.items" :key="item" class="flex items-start gap-2">
            <span class="mt-0.5 inline-flex h-4 w-4 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                    <path
                        fill="currentColor"
                        d="M6.5 15h-.003a.75.75 0 0 1-.663-.405C4.78 12.562 3.598 10.906 2.22 9.531A.75.75 0 1 1 3.281 8.47c1.203 1.2 2.264 2.591 3.221 4.227 2.265-3.942 5.054-7.15 8.304-9.549a.75.75 0 0 1 .891 1.207c-3.392 2.504-6.263 5.951-8.532 10.247a.75.75 0 0 1-.663.399Z"
                    />
                </svg>
            </span>
            <span>{{ item }}</span>
        </li>
    </ul>
</template>
