<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import MegaMenuTrigger from '@/components/MegaMenuTrigger.vue';
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const links = [
  { label: 'About', to: '/about-station-house' },
  { label: 'Rooms', to: '/rooms' },
  { label: 'Pets', to: '/pet-friendly-hotel-south-lake-tahoe' },
  { label: 'Reviews', to: '/reviews' },
];

const experienceLinks = [
  {
    label: 'Eat + Drink',
    to: '/eat-drink',
    image: '/images/navbar/experience/sandwich_and_beer.webp',
    description: 'Sip, snack, and savor Tahoe.',
  },
  {
    label: 'Poolside Cabana',
    to: '/cabanas',
    image: '/images/navbar/experience/cabanna_3_people_lounge.webp',
    description: 'Reserve a shaded escape by the pool.',
  },
  {
    label: 'Activities',
    to: '/activities',
    image: '/images/navbar/experience/tahoe_lake.webp',
    description: 'Year-round Tahoe adventures await.',
  },
  {
    label: 'Lakeside Beach',
    to: '/lakeside-beach',
    image: '/images/navbar/experience/couple_on_beach.webp',
    description: 'Lakefront days, just steps away.',
  },
];

const groupsLinks = [
  {
    label: 'Event Inquiry',
    to: '/groups',
    image: '/images/navbar/groups/friend-circle-fire.webp',
    description: 'Start planning your group stay.',
  },
  {
    label: 'Bachelorette',
    to: '/bachelorette',
    image: '/images/navbar/groups/girls-pool-tubes.webp',
    description: 'Celebrate Tahoe-style with your crew.',
  },
  {
    label: 'Traveling Sports Teams',
    to: '/traveling-sports-teams',
    image: '/images/navbar/groups/soccer-team.jpg',
    description: 'Room blocks built for teams.',
  },
  {
    label: 'Weddings',
    to: '/weddings',
    image: '/images/navbar/groups/wedding.webp',
    description: 'Lakeside vows and boutique charm.',
  },
];

const desktopActiveClass = 'text-sunset-500 underline underline-offset-6';
const desktopInactiveClass = 'text-secondary-foreground/70 hover:text-sunset-500 hover:underline underline-offset-6';
const mobileActiveClass = 'text-sunset-500 underline underline-offset-6';
const mobileInactiveClass = 'text-secondary-foreground/80 hover:text-sunset-500';

const route = useRoute();
const isActive = (to: string) => route.path === to;

const headerRef = ref<HTMLElement | null>(null);
const activeMenu = ref<string | null>(null);

const closeAllMenusImmediate = () => {
  activeMenu.value = null;
};
</script>

<template>
  <header ref="headerRef" class="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
      <RouterLink class="flex items-center gap-3" to="/">
        <img class="h-10 w-10 rounded-full object-cover" src="/images/logo/logo.webp" alt="Station House Logo" />
        <div>
          <p class="text-sm tracking-[0.25em] text-secondary-foreground uppercase">Station House Inn</p>
          <p class="text-xs text-secondary-foreground/70">South Lake Tahoe</p>
        </div>
      </RouterLink>
      <nav class="hidden items-center gap-6  lg:flex">
        <RouterLink
          v-for="link in links"
          :key="link.label"
          :class="['transition', isActive(link.to) ? desktopActiveClass : desktopInactiveClass]"
          :to="link.to"
          @mouseenter="closeAllMenusImmediate"
        >
          <span class="uppercase text-sm tracking-[0.2em]">{{ link.label }}</span>
        </RouterLink>
        <MegaMenuTrigger
          v-model:active-menu="activeMenu"
          :active-class="desktopActiveClass"
          :active-path="route.path"
          :header-el="headerRef"
          :inactive-class="desktopInactiveClass"
          :items="experienceLinks"
          label="Experience"
          menu-key="experience"
        />
        <MegaMenuTrigger
          v-model:active-menu="activeMenu"
          :active-class="desktopActiveClass"
          :active-path="route.path"
          :header-el="headerRef"
          :inactive-class="desktopInactiveClass"
          :items="groupsLinks"
          label="Groups"
          menu-key="groups"
        />
      </nav>
      <div class="flex items-center gap-4">
        <div class="flex flex-col justify-end xl:space-y-2">
          <Button asChild size="lg" class="hidden sm:inline-flex">
            <a
              target="_blank"
              href="https://app.mews.com/distributor/89b238cd-c015-499d-a55e-b31c01722a34"
              rel="noreferrer"
            >
              Book Now
            </a>
          </Button>
          <a
            class="hidden items-center gap-2 text-xs font-semibold tracking-[0.2em] text-secondary-foreground/70 uppercase transition hover:text-secondary-foreground 2xl:flex"
            href="tel:+15305421101"
          >
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
            <nav class="mt-8 grid gap-4 text-sm tracking-[0.25em] uppercase">
              <DrawerClose asChild>
                <RouterLink :class="['transition', isActive('/') ? mobileActiveClass : mobileInactiveClass]" to="/">
                  Home
                </RouterLink>
              </DrawerClose>
              <DrawerClose v-for="link in links" :key="link.label" asChild>
                <RouterLink :class="['transition', isActive(link.to) ? mobileActiveClass : mobileInactiveClass]" :to="link.to">
                  {{ link.label }}
                </RouterLink>
              </DrawerClose>
              <div class="pt-2 text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">Experience</div>
              <DrawerClose v-for="item in experienceLinks" :key="item.label" asChild>
                <RouterLink :class="['transition', isActive(item.to) ? mobileActiveClass : mobileInactiveClass]" :to="item.to">
                  {{ item.label }}
                </RouterLink>
              </DrawerClose>
              <div class="pt-2 text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">Groups</div>
              <DrawerClose v-for="item in groupsLinks" :key="item.label" asChild>
                <RouterLink :class="['transition', isActive(item.to) ? mobileActiveClass : mobileInactiveClass]" :to="item.to">
                  {{ item.label }}
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
                  <a
                    target="_blank"
                    href="https://app.mews.com/distributor/89b238cd-c015-499d-a55e-b31c01722a34"
                    rel="noreferrer"
                  >
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
