<script setup lang="ts">
import LongTermStay from '@/components/LongTermStay.vue';
import PageHero from '@/components/PageHero.vue';
import RoomCarousel from '../components/RoomCarousel.vue';
import ServicesAmenities from '@/components/ServicesAmenities.vue';
import {Button} from '@/components/ui/button';
import {RouterLink} from 'vue-router';

const roomSections = [
  {
    title: 'Roomy King',
    tagline: 'Best for guests who love a little extra space to breathe, or those bringing a larger dog (or two!).',
    description:
        "With extra space to spread out, this room is ideal for guests who enjoy a little elbow room, plus it’s perfect for traveling with larger dogs or multiple furry friends. The King bed is the ideal spot for a leisurely start, while the walk-in shower and ample lounge space make it easy to work, play, and unwind before your next big Tahoe adventure.",
    features: [
      '280 Square Feet',
      'King Size Bed',
      'Dresser and Desk',
      'Lounge Chair',
      'Walk-in Shower with Separate Vanity Sink',
      '55-inch TV',
    ],
    images: [
      '/images/rooms/roomy%20king/layout.webp',
      '/images/rooms/roomy%20king/roomy-king-01.webp',
      '/images/rooms/roomy%20king/roomy-king-02.webp',
      '/images/rooms/roomy%20king/roomy-king-03.webp',
      '/images/rooms/roomy%20king/roomy-king-04.webp',
      '/images/rooms/roomy%20king/roomy-king-05.webp',
      '/images/rooms/roomy%20king/roomy-king-06.webp',
      '/images/rooms/roomy%20king/roomy-king-07.webp',
      '/images/rooms/roomy%20king/roomy-king-08.webp',
    ],
  },
  {
    title: 'Cozy King',
    tagline: 'Best for solo adventurers, a simple getaway for two, or guests traveling with a small canine companion.',
    description:
        "This compact retreat is cozy & efficient, covering the essentials. After a day of exploring, sink into the plush King bed and enjoy a hot shower in the tub combo. It’s the perfect, no-fuss haven for resting and recharging, designed to keep things simple so you can head right back out for more adventure tomorrow - leash and all.",
    features: ['205 Square Feet', 'King Size Bed', 'Dresser and Desk', 'TUB/Shower Combo', '45-inch TV'],
    images: [
      '/images/rooms/cozy%20king/layout.webp',
      '/images/rooms/cozy%20king/cozy-king-01.webp',
      '/images/rooms/cozy%20king/cozy-king-02.webp',
      '/images/rooms/cozy%20king/cozy-king-03.webp',
      '/images/rooms/cozy%20king/cozy-king-04.webp',
      '/images/rooms/cozy%20king/cozy-king-05.webp',
      '/images/rooms/cozy%20king/cozy-king-06.webp',
      '/images/rooms/cozy%20king/cozy-king-07.webp',
    ],
  },
  {
    title: 'Double Queen',
    tagline: 'Best for friends or small families sharing the Tahoe fun.',
    description:
        "Pile in with your crew - two Queen beds mean everyone gets a good night’s sleep after group hikes or beach days. The walk-in shower speeds up mornings, and the thoughtful layout keeps your gear organized for multi-day trips. It's easy, laid-back Tahoe living built for making memories with your favorite people.",
    features: ['280 Square Feet', 'Two Queen Beds', 'Walk-in Shower', 'Dresser and Desk', '55-inch TV'],
    images: [
      '/images/rooms/double%20queen/layout.webp',
      '/images/rooms/double%20queen/double-queen-01.webp',
      '/images/rooms/double%20queen/double-queen-02.webp',
      '/images/rooms/double%20queen/double-queen-03.webp',
      '/images/rooms/double%20queen/double-queen-04.webp',
    ],
  },
  {
    title: 'Jasper Suite',
    tagline: 'Best for small groups, friends, or couples who crave separate spaces.',
    description:
        'Spread out in this generous haven perfect for extended stays. The separate King bedroom offers quiet nights, while the living room - complete with a sleeper sofa - is a perfect spot for movie nights, remote work, or morning coffee. This suite gives you the space to work, play, and recharge without stepping on toes, making it an ideal Tahoe basecamp.',
    features: [
      '414 Square Feet',
      'King Size Bed',
      'Large Walk-in Shower',
      'Separate living room with sleeper sofa and lounge chair',
      'Dresser and Desk',
      'Separate Vanity Sink',
      'Two 55-inch TVs',
    ],
    images: [
      '/images/rooms/jasper%20suite/layout.webp',
      '/images/rooms/jasper%20suite/jasper-suite-01.webp',
      '/images/rooms/jasper%20suite/jasper-suite-02.webp',
      '/images/rooms/jasper%20suite/jasper-suite-03.webp',
      '/images/rooms/jasper%20suite/jasper-suite-04.webp',
      '/images/rooms/jasper%20suite/jasper-suite-05.webp',
      '/images/rooms/jasper%20suite/jasper-suite-06.webp',
      '/images/rooms/jasper%20suite/jasper-suite-07.webp',
    ],
  },
  {
    title: 'State Suite',
    tagline: 'Best for families, couples celebrating a special occasion, or guests on a long-term stay.',
    description:
        "This is your Tahoe home away from home. Blending productivity with pure relaxation, the suite features a luxurious King bed, a sleeper sofa for extra guests, and a dedicated table and work area perfect for family meals or focused remote work. Whether you're celebrating, settling in for a long stay, or just need plenty of room to roam, this spacious suite makes unwinding a breeze.",
    features: [
      '380 Square Feet',
      'King Size Bed',
      'Sleeper Sofa',
      'Table and Two Chairs',
      'Lounge Chairs and Working Desk',
      'Walk-in Shower',
      'Dresser and Desk',
      'Separate vanity sink',
      '55-inch TV',
    ],
    images: [
      '/images/rooms/state%20suite/layout.webp',
      '/images/rooms/state%20suite/state-suite-01.webp',
      '/images/rooms/state%20suite/state-suite-02.webp',
      '/images/rooms/state%20suite/state-suite-04.webp',
      '/images/rooms/state%20suite/state-suite-05.webp',
      '/images/rooms/state%20suite/state-suite-06.webp',
      '/images/rooms/state%20suite/state-suite-07.webp',
    ],
  },
];
</script>

<template>
  <div>
    <PageHero
      eyebrow="Rooms &amp; Suites"
      title="There’s a reason Station House Inn has the most comfortable rooms on the road."
      image="/images/rooms/roomy%20king/roomy-king-04.webp"
    >
      <p class="text-muted-foreground">
        On site are 96 recently renovated, stylish, and well-appointed rooms. All rooms feature individual heat/air
        conditioning control, color television, and tastefully rustic decor. Plenty of ice cubes handy, too.
      </p>
      <p class="text-sm text-muted-foreground">
        Explore all our amenities
        <Button variant="link" asChild size="sm" class="p-0 m-0">
          <RouterLink to="/amenities">here.</RouterLink>
        </Button>
      </p>
    </PageHero>
    <section class="bg-card">
      <div class="mx-auto max-w-6xl space-y-10">
        <div class="space-y-3">
          <p class="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">Room Types</p>
          <h2 class="font-display text-3xl text-foreground sm:text-4xl">Find your fit</h2>
          <p class="text-muted-foreground">Thoughtful layouts with room to recharge between adventures.</p>
        </div>
        <div class="space-y-20">
          <div v-for="room in roomSections" :key="room.title" class="grid gap-10 lg:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <RoomCarousel :images="room.images" :alt="room.title"/>
            <div class="flex flex-col justify-center space-y-6">
              <div class="space-y-2">
                <p class="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">{{ room.title }}</p>
                <h3 class="font-display text-2xl text-foreground">{{ room.tagline }}</h3>
              </div>
              <p class="text-muted-foreground">{{ room.description }}</p>
              <div class="h-px w-full bg-border/60"></div>
              <div class="space-y-3">
                <p class="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">Features</p>
                <ul class="grid grid-cols-2 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  <li v-for="feature in room.features" :key="feature" class="flex items-start gap-2">
                    <span
                        class="shrink-0 mt-0.5 inline-flex h-4 w-4 items-center justify-center text-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                            <path
                                fill="currentColor"
                                d="M6.5 15h-.003a.75.75 0 0 1-.663-.405C4.78 12.562 3.598 10.906 2.22 9.531A.75.75 0 1 1 3.281 8.47c1.203 1.2 2.264 2.591 3.221 4.227 2.265-3.942 5.054-7.15 8.304-9.549a.75.75 0 0 1 .891 1.207c-3.392 2.504-6.263 5.951-8.532 10.247a.75.75 0 0 1-.663.399Z"
                            />
                        </svg>
                    </span>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
              <div class="pt-2">
                <Button asChild class="w-full sm:w-auto">
                  <a
                      href="https://app.mews.com/distributor/89b238cd-c015-499d-a55e-b31c01722a34"
                      rel="noreferrer"
                      target="_blank"
                  >
                    Check Availability
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ServicesAmenities/>
    <LongTermStay/>
  </div>
</template>
