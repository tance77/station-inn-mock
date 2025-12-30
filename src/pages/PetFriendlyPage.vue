<script setup lang="ts">
import FeatureGrid from '../components/FeatureGrid.vue';
import ImageGrid from '../components/ImageGrid.vue';
import PageHero from '../components/PageHero.vue';
import {Button} from '@/components/ui/button';

const perks = [
    {
        title: 'Welcoming Rooms & Suites',
        description: 'Spacious accommodations with plenty of room for your pet to stretch out after a day on the trails.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="size-6 shrink0" viewBox="0 0 24 24">  <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">    <path d="m12 .708 11.633 9.518-1.266 1.548L12 3.292 1.633 11.774.367 10.226z"/>    <path d="M3 13.24V20H1v2h22v-2h-2v-6.76l-9-7.364zM9 16a3 3 0 1 1 6 0v4H9z"/>  </g></svg>',
    },
    {
        title: 'Outdoor Fun',
        description: 'Take advantage of outside hangout zones on-site plus nearby green spaces for quick relief walks or playful romps.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="size-6 shrink0" viewBox="0 0 24 24">  <g fill="currentColor">    <path d="M6 11H4c-2.206 0-4-1.794-4-4V6h2v1c0 1.103.897 2 2 2h2zM12.5 8h-1c-3.309 0-6-2.691-6-6V1h2v1c0 2.206 1.794 4 4 4h1z"/>    <path d="M13.336 9H6c-1.654 0-3 1.346-3 3v11h4v-3.763l1.653-3.308L15 18.034v4.965h4v-5.89l1.092-4.917-6.757-3.193ZM19.414 4l-2.751-2.751-2.534 5.913 6.409 3.029L20.803 9h.198c1.654 0 3-1.346 3-3V4z"/>  </g></svg>',
    },
    {
        title: 'Prime Location',
        description: 'Walk to Heavenly Village, dining, and the beach, with easy access to South Lake Tahoe’s pet-friendly activities.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="size-6 shrink0" viewBox="0 0 24 24">  <path fill="currentColor" fill-rule="evenodd" d="M12 1c4.14 0 8.5 3.194 8.5 8.758 0 3.241-2.08 6.539-3.97 8.9a36 36 0 0 1-2.653 2.945c-.603.6-1.235 1.164-1.877 1.72a37 37 0 0 1-1.877-1.72 36 36 0 0 1-2.653-2.946C5.58 16.297 3.5 13 3.5 9.757 3.5 4.195 7.86 1 12 1m2.077 5.404c-.844 0-1.554.507-2.077 1.096-.523-.589-1.233-1.096-2.077-1.096A2.424 2.424 0 0 0 7.5 8.83c0 2.29 3.502 4.624 4.5 5.075.998-.45 4.5-2.785 4.5-5.075a2.424 2.424 0 0 0-2.423-2.425" clip-rule="evenodd"/></svg>',
    },
    {
        title: 'Dog-Friendly Dining',
        description: 'Enjoy on-site restaurant Toulouse’s heated patio (seasonal), where pets are welcome to join you for a meal.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="size-6 shrink0" viewBox="0 0 24 24">  <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">    <path d="M9.12 10.92c.891-.545 1.885-.92 2.88-.92s1.989.375 2.88.92c.902.55 1.76 1.312 2.504 2.18C18.85 14.807 20 17.092 20 19.25a3.64 3.64 0 0 1-1.203 2.682A4.14 4.14 0 0 1 16 23c-1.208 0-1.86-.294-2.417-.55l-.017-.007c-.435-.2-.784-.36-1.566-.36s-1.13.16-1.566.36l-.017.008C9.86 22.706 9.207 23 8 23a4.14 4.14 0 0 1-2.797-1.068A3.64 3.64 0 0 1 4 19.25c0-2.157 1.151-4.442 2.616-6.15.743-.868 1.602-1.63 2.503-2.18M18.5 11c0-1.468.955-3 2.5-3s2.5 1.532 2.5 3c0 1.469-.955 3-2.5 3s-2.5-1.531-2.5-3M.5 11c0-1.468.955-3 2.5-3s2.5 1.532 2.5 3c0 1.469-.955 3-2.5 3S.5 12.469.5 11M13 5c0-1.777 1.204-3.5 3-3.5s3 1.723 3 3.5-1.203 3.5-3 3.5-3-1.723-3-3.5M5 5c0-1.777 1.203-3.5 3-3.5s3 1.723 3 3.5-1.203 3.5-3 3.5S5 6.777 5 5"/>  </g></svg>',
    },
    {
        title: 'Exclusive Pet Perks',
        description: 'Pick up a complimentary doggie treat (or two!) in our lobby and find something special just for your pup in our gift shop.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="size-6 shrink0" viewBox="0 0 48 48">  <g fill="currentColor">    <path d="M40.791 18.007a5.75 5.75 0 0 1-4.33-.546l-2.48 4.27-.186.32H24.5l4.962-8.543a5.62 5.62 0 0 1-2.67-3.406c-.826-2.998.968-6.089 4.008-6.904s6.173.955 7 3.953c3.039-.815 6.173.955 6.999 3.953s-.968 6.088-4.008 6.903M25.432 14.474l-.346-.284c-2.302-1.72-4.866-1.77-6.86-.542-1.735 1.068-2.923 3.027-3.176 5.399-1.032.104-2.014.392-2.876.934A5.6 5.6 0 0 0 10.271 22H21.06z"/>    <path fill-rule="evenodd" d="M38.953 25H9.307L2.679 42.674l4.086 1.124a65 65 0 0 0 34.47 0l4.071-1.12zM30 35c0-1.318-.885-2.34-1.95-2.979C26.965 31.371 25.53 31 24 31s-2.965.37-4.05 1.021C18.885 32.661 18 33.682 18 35s.885 2.34 1.95 2.979C21.035 38.629 22.47 39 24 39s2.965-.37 4.05-1.021C29.115 37.339 30 36.318 30 35" clip-rule="evenodd"/>  </g></svg>',
    },
    {
        title: 'Pack Size',
        description: 'Up to 2 dogs per room. Traveling with more? Call us to explore options.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="size-6 shrink0" viewBox="0 0 48 48">  <g fill="currentColor">    <path fill-rule="evenodd" d="M19.5 14A4.5 4.5 0 0 1 24 9.5v-3a7.5 7.5 0 0 0-7.5 7.5v9a7.5 7.5 0 0 0 7.5 7.5v-3a4.5 4.5 0 0 1-4.5-4.5z" clip-rule="evenodd"/>    <path d="M5.032 8c.071.1.273.326.828.647.861.496 2.207.994 4 1.431 3.563.87 8.563 1.422 14.14 1.422 2.097 0 4.112-.078 6-.222v3.008c-1.907.14-3.921.214-6 .214-5.744 0-10.994-.566-14.851-1.507-1.917-.468-3.573-1.047-4.787-1.747C3.259 10.61 2 9.566 2 8s1.259-2.61 2.362-3.246c1.214-.7 2.87-1.28 4.787-1.747C13.006 2.067 18.256 1.5 24 1.5s10.994.567 14.851 1.507c1.917.468 3.574 1.047 4.787 1.747C44.741 5.39 46 6.434 46 8s-1.26 2.61-2.362 3.246c-1.213.7-2.87 1.28-4.787 1.747a45 45 0 0 1-4.351.818v-3.032c1.331-.2 2.553-.435 3.64-.7 1.793-.438 3.139-.936 4-1.432.555-.32.757-.547.828-.647-.071-.1-.273-.326-.828-.647-.861-.496-2.207-.994-4-1.431C34.577 5.052 29.577 4.5 24 4.5s-10.577.553-14.14 1.422c-1.793.437-3.139.935-4 1.431-.555.32-.757.547-.828.647"/>    <path d="M3.5 6.5A1.5 1.5 0 0 1 5 7.946c.019.036.15.291.86.7.861.497 2.207.995 4 1.432 3.563.87 8.563 1.422 14.14 1.422 1.913 0 3.758-.065 5.5-.185V24.32a83 83 0 0 1-5.5.179c-5.744 0-10.994-.567-14.851-1.507-1.917-.468-3.573-1.047-4.787-1.747C3.259 20.61 2 19.566 2 18V8a1.5 1.5 0 0 1 1.5-1.5M43.638 21.246c-1.213.7-2.87 1.28-4.787 1.747a45 45 0 0 1-4.351.818V10.779c1.331-.2 2.553-.435 3.64-.7 1.793-.438 3.139-.936 4-1.432.7-.404.838-.658.86-.7A1.5 1.5 0 0 1 46 8v10c0 1.566-1.26 2.61-2.362 3.246"/>    <path fill-rule="evenodd" d="M28.5 14A4.5 4.5 0 0 0 24 9.5v-3a7.5 7.5 0 0 1 7.5 7.5v9a7.5 7.5 0 0 1-7.5 7.5v-3a4.5 4.5 0 0 0 4.5-4.5z" clip-rule="evenodd"/>    <path fill-rule="evenodd" d="M16 38a8 8 0 1 1 16 0 8 8 0 0 1-16 0" clip-rule="evenodd"/>  </g></svg>',
    },
];

const images = [
  {src: '/images/pets/hellorubydoodle-at-station-house-inn.jpg', alt: 'Hello Ruby Doodle at Station House Inn'},
  {src: '/images/pets/athellorubydoodle.jpg', alt: 'Hello Ruby Doodle'},
  {src: '/images/pets/two-dogs-laying-on-a-bed.webp', alt: 'Two dogs laying on a bed'},
  {src: '/images/pets/han-the-corgi-at-station-house-inn.png', alt: 'Han the corgi at Station House Inn'},
  {src: '/images/pets/the-dood-winston-at-station-house-inn.png', alt: 'The Dood Winston at Station House Inn'},
  {src: '/images/pets/dog-friendly-stay-in-lake-tahoe-thedoodwinston.jpg', alt: 'Dog friendly stay in Lake Tahoe'},
  {src: '/images/pets/islay-the-golden-pup-at-station-house-inn.png', alt: 'Islay the golden pup at Station House Inn'},
  {src: '/images/pets/juno-south-lake-tahoe-2.png', alt: 'Juno in South Lake Tahoe'},
  {src: '/images/pets/b-perry3-at-stationhouseinn.jpg', alt: 'B Perry3 at Station House Inn'},
  {src: '/images/pets/lulu-the-dog-at-station-house-inn.png', alt: 'Lulu at Station House Inn'},
  {src: '/images/pets/dog-friendly-hotel-hansandlulu-with-fireplace.jpg', alt: 'Hans and Lulu by the fireplace'},
  {src: '/images/pets/sacburbsocial-at-stationhouse-inn.jpg', alt: 'Sacburbsocial at Station House Inn'},
];
</script>

<template>
  <div>
    <PageHero
        eyebrow="Pet Friendly"
        title="Pet Friendly Hotel in South Lake Tahoe"
        subtitle=""
        image="/images/pets/Husky-Family.jpg"
    >
      <p class="text-muted-foreground">At Station House Inn, we believe adventures are better with four paws. Our South Lake Tahoe location puts you minutes from the beach, trailheads, and village fun - plus comfy rooms, a seasonal outdoor pool, and a friendly environment that welcomes your best friend!</p>
    </PageHero>
    <FeatureGrid title="Why Pets Love Station House Inn" :items="perks">
      <div class="flex justify-center">
        <Button asChild size="lg">
          <a href="https://app.mews.com/distributor/89b238cd-c015-499d-a55e-b31c01722a34" rel="noreferrer"
             target="_blank">
            Book Now
          </a>
        </Button>
      </div>
    </FeatureGrid>
    <section>
      <ImageGrid eyebrow="Photos From Station House Inn Guests" title="Check out these furry photos from our guests!"
                 :images="images"/>
      <div class="mx-auto mt-12 max-w-6xl text-center">
        <p class="text-lg font-semibold text-foreground">Got a picture you want to share?
          <Button asChild variant="link" size="sm">
            <a href="mailto:stay@stationhouseinn.com" class="underline" target="_blank">Send it our way!</a>
          </Button>
        </p>

      </div>
    </section>

    <section class="bg-card">
      <div class="mx-auto max-w-6xl space-y-4">
        <p class="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">Outdoor Activities</p>
        <h2 class="font-display text-3xl text-foreground sm:text-4xl">Want to find pet-friendly activities near Station
          House Inn? We’ve got the list.</h2>
        <Button asChild size="lg">
          <a href="/activities">View Activities</a>
        </Button>
      </div>
    </section>
  </div>
</template>
