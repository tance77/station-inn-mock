<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { RouterLink } from 'vue-router';

const links = [
    { label: 'About', to: '/about-station-house' },
    { label: 'Rooms', to: '/rooms' },
    { label: 'Pets', to: '/pet-friendly-hotel-south-lake-tahoe' },
    { label: 'Reviews', to: '/reviews' },
    { label: 'Experience', to: '/activities' },
    { label: 'Groups', to: '/groups' },
];
</script>

<template>
    <header class="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <RouterLink class="flex items-center gap-3" to="/">
                <img class="h-10 w-10 rounded-full object-cover" src="/images/logo/logo.webp" alt="Station House Logo" />
                <div>
                    <p class="text-sm tracking-[0.25em] text-secondary-foreground uppercase">Station House Inn</p>
                    <p class="text-xs text-secondary-foreground/70">South Lake Tahoe</p>
                </div>
            </RouterLink>
            <nav class="hidden items-center gap-6 text-sm tracking-[0.2em] text-secondary-foreground/70 uppercase lg:flex">
                <RouterLink v-for="link in links" :key="link.label" class="transition hover:text-secondary-foreground" :to="link.to">
                    {{ link.label }}
                </RouterLink>

            </nav>
            <div class="flex items-center gap-4">
              <div class="flex flex-col xl:space-y-2 justify-end">
                <Button asChild size="lg" class="hidden sm:inline-flex">
                  <a href="https://app.mews.com/distributor/89b238cd-c015-499d-a55e-b31c01722a34" rel="noreferrer"> Book Now </a>
                </Button>
                <a class="hidden items-center gap-2 text-xs font-semibold tracking-[0.2em] text-secondary-foreground/70 uppercase transition hover:text-secondary-foreground 2xl:flex" href="tel:+15305421101">
                  <svg class="size-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="m23.187 15.98-6.454-2.769-3.482 3.445a17 17 0 0 1-3.353-2.538 17 17 0 0 1-2.553-3.368l3.443-3.48v-.004L8.022.815 3.41 2.022c-1.487.389-2.422 1.837-2.213 3.36.655 4.789 2.516 8.783 5.551 11.891 3.097 3.024 7.104 4.887 11.909 5.538q.205.027.407.027c1.353 0 2.566-.91 2.916-2.246z"
                    />
                  </svg>
                  530-542-1101
                </a>
              </div>
                <Drawer direction="right">
                    <DrawerTrigger asChild>
                        <Button class="shrink-0 lg:hidden" variant="ghost" aria-label="Open navigation">
                            <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g fill="currentColor">
                                    <path d="M1 11h22v2H1zM1 4h22v2H1zM1 18h22v2H1z" />
                                </g>
                            </svg>
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent class="border-border bg-background/95 p-6 backdrop-blur">
                        <div class="flex items-center justify-between">
                            <p class="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
                                Station House Inn
                            </p>
                            <DrawerClose asChild>
                                <Button variant="ghost" size="icon" aria-label="Close navigation">
                                    <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M6.4 5.3 5.3 6.4 10.9 12l-5.6 5.6 1.1 1.1 5.6-5.6 5.6 5.6 1.1-1.1-5.6-5.6 5.6-5.6-1.1-1.1-5.6 5.6z"
                                        />
                                    </svg>
                                </Button>
                            </DrawerClose>
                        </div>
                        <nav class="mt-8 grid gap-4 text-sm tracking-[0.25em] text-secondary-foreground uppercase">
                            <DrawerClose asChild>
                                <RouterLink class="text-secondary-foreground/80 transition hover:text-secondary-foreground" to="/">
                                    Home
                                </RouterLink>
                            </DrawerClose>
                            <DrawerClose v-for="link in links" :key="link.label" asChild>
                                <RouterLink class="text-secondary-foreground/80 transition hover:text-secondary-foreground" :to="link.to">
                                    {{ link.label }}
                                </RouterLink>
                            </DrawerClose>
                        </nav>
                        <div class="mt-8 space-y-3 text-sm text-muted-foreground">
                            <DrawerClose asChild>
                                <a class="block font-semibold uppercase tracking-[0.2em] text-secondary-foreground" href="tel:+15305421101">
                                    530-542-1101
                                </a>
                            </DrawerClose>
                            <DrawerClose asChild>
                                <Button asChild class="w-full" size="lg">
                                    <a href="https://app.mews.com/distributor/89b238cd-c015-499d-a55e-b31c01722a34" rel="noreferrer">
                                        Book Now
                                    </a>
                                </Button>
                            </DrawerClose>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
        </div>
    </header>
</template>
