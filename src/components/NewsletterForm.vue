<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const props = defineProps<{ class?: string; submitLabel?: string }>();
</script>

<template>
    <form class="space-y-3" :class="props.class" @submit.prevent>
        <Input type="email" placeholder="Email Address" />
        <Button class="w-full" type="submit">{{ props.submitLabel ?? 'Sign Up' }}</Button>
        <p class="text-xs text-muted-foreground">
            By submitting this form, you agree to receive marketing emails from Station House Inn. You may unsubscribe at
            any time.
        </p>
    </form>
</template>
