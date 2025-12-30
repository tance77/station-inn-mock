<script setup lang="ts">
const activities = [
    {
        title: 'Complimentary Wifi',
        description: 'Stay connected across the property.',
        icon: '<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">  <path d="M4.222 12.222A10.97 10.97 0 0 1 12 9c3.037 0 5.789 1.232 7.778 3.222l.707.707-1.414 1.414-.707-.707A8.97 8.97 0 0 0 12 11a8.97 8.97 0 0 0-6.364 2.636l-.707.707-1.414-1.414z"/>  <path d="M7.76 15.754A5.99 5.99 0 0 1 12 14c1.655 0 3.155.671 4.24 1.754l.71.71L12 21.409 7.053 16.46zM.72 8.653A15.95 15.95 0 0 1 12 4c4.41 0 8.404 1.785 11.297 4.67l.708.706-1.412 1.416-.708-.706A13.95 13.95 0 0 0 12 6a13.95 13.95 0 0 0-9.87 4.071l-.71.705L.01 9.358z"/> </g></svg>',
    },
    {
        title: 'Heated Pool (Seasonal)',
        description: 'Warm water lounging with poolside seating.',
        icon: '<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g fill="currentColor">  <path d="M15.525 11.977 14.641 15H3.551l8.498-6.511zM18.22 10.292a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>  <path d="m15.408 3.133-4.096 3.39 1.57 1.57 2.442 2.23a3.245 3.245 0 0 1 .476 4.25l-.298.427h-1.155v-2a1.24 1.24 0 0 0-.37-1.2l-2.455-2.24-.016-.015-1.608-1.607a2 2 0 0 1 .139-2.956l4.096-3.39zM22.939 17c0 .3-.018.604-.098.894a4.247 4.247 0 0 1-7.398 1.523 4.536 4.536 0 0 1-6.887 0 4.247 4.247 0 0 1-7.396-1.523A3.3 3.3 0 0 1 1.061 17h1.952l.02.123a2.246 2.246 0 0 0 4.432 0l.02-.123H9.52a2.54 2.54 0 0 0 4.96 0h2.034l.02.123a2.246 2.246 0 0 0 4.432 0l.02-.123z"/> </g></svg>',
    },
    {
        title: 'Poolside Hot Tub',
        description: 'Soak after a day on the trails or slopes.',
        icon: '<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g fill="currentColor">  <path fill-rule="evenodd" d="M11 22v-6h2v6zM15 22v-6h2v6zM7 22v-6h2v6z" clip-rule="evenodd"/>  <path fill-rule="evenodd" d="M5 19.827V14H3v6c0 .848.663 1.37 1.12 1.64.523.309 1.214.553 1.98.744 1.548.387 3.634.616 5.9.616s4.352-.229 5.9-.616c.766-.191 1.457-.435 1.98-.745.457-.27 1.12-.791 1.12-1.639v-6h-2v5.827a2 2 0 0 1-.137.09c-.287.17-.767.357-1.449.527-1.347.337-3.262.556-5.414.556s-4.067-.219-5.414-.556c-.682-.17-1.162-.357-1.448-.526a2 2 0 0 1-.138-.09m14.065-.059q.001 0-.01.012zm-14.12.012q-.011-.01-.01-.012z" clip-rule="evenodd"/>  <path d="M12 5.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>  <path fill-rule="evenodd" d="m9.614 13.073-.993.12c-1.29.158-2.323.396-3.005.664A4 4 0 0 0 5.29 14c.293.146.723.301 1.296.444C7.933 14.781 9.848 15 12 15s4.067-.219 5.414-.556c.573-.143 1.003-.298 1.296-.444a4 4 0 0 0-.326-.143c-.683-.268-1.715-.506-3.005-.663l-.993-.121.242-1.985.993.12c1.375.168 2.592.434 3.493.787.446.174.871.392 1.203.672.324.273.683.718.683 1.333 0 .848-.663 1.37-1.12 1.64-.523.309-1.214.553-1.98.744-1.548.387-3.634.616-5.9.616s-4.352-.229-5.9-.616c-.766-.191-1.457-.435-1.98-.745C3.663 15.37 3 14.848 3 14c0-.615.36-1.06.684-1.333.33-.28.756-.498 1.202-.672.901-.353 2.118-.62 3.493-.787l.993-.12zM18.586 3l.932.932a.478.478 0 0 1-.073.736 2.478 2.478 0 0 0-.377 3.814l.932.932L21.414 8l-.932-.932a.478.478 0 0 1 .073-.736 2.478 2.478 0 0 0 .377-3.814L20 1.586zM5.414 3l-.932.932a.478.478 0 0 0 .073.736 2.478 2.478 0 0 1 .377 3.814L4 9.414 2.586 8l.932-.932a.478.478 0 0 0-.073-.736 2.478 2.478 0 0 1-.377-3.814L4 1.586z" clip-rule="evenodd"/>  <path d="m15.096 14.839.76-5.216-1.214-1.44L9 8.019l-.92 1.348.82 5.472c.94.103 1.989.161 3.1.161s2.158-.058 3.096-.161"/>  <path d="M7.277 8.781A4 4 0 0 1 10.605 7h2.79a4 4 0 0 1 3.328 1.781l2.062 3.093q-.439-.149-.95-.274a18 18 0 0 0-2.214-.392l-.993-.12C13.895 11.232 14.287 9 13.394 9h-2.789c-.82 0-.649 2.238-1.233 2.088l-.993.12-.346.045c-1.075.147-2.041.356-2.818.621z"/> </g></svg>',
    },
    {
        title: 'Free Parking',
        description: 'Any open spot is yours.',
        icon: '<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">  <path d="M7.488 7a3 3 0 0 0-2.873 2.138l-.934 3.113-.795.318A3 3 0 0 0 1 15.354V21a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2h12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5.646a3 3 0 0 0-1.886-2.785l-.795-.318-.934-3.113A3 3 0 0 0 16.512 7zM6.5 16.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M18.75 18a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M21.99 10H24v2h-2.01zM0 10h2.01v2H0z"/>  <path d="m12 .382 11.342 5.67-.895 1.79L12 2.618 1.553 7.842l-.895-1.79z"/> </g></svg>',
    },
    {
        title: 'Fire Pits + S’mores',
        description: 'Evening fires with complimentary kits.',
        icon: '<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g fill="currentColor">  <path d="m20.765 12.233-18.883 6.59L3.2 22.6l18.3-8.1z"/>  <path d="M22.083 18.824 20.765 22.6 10.373 18l3.62-2zM8.948 14.24 3.2 12.232 2.466 14.5l2.528 1.12zM14.755 3.286c.529.609 1.08 1.335 1.501 2.121.418.78.744 1.68.744 2.62C17 11.214 14.395 13 12 13s-5-1.786-5-4.973c0-.42.144-1.385.262-2.13.064-.399.127-.776.174-1.053.104-.608.214-1.215.321-1.823l1.585.86L11.816.577l.033.028c1.025.845 2.03 1.674 2.906 2.68"/> </g></svg>',
    },
    {
        title: 'On-site Restaurant',
        description: 'Daily breakfast and Toulouse on property.',
        icon: '<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g fill="currentColor">  <path d="M19 16h-5V6a5 5 0 0 1 5-5h2v22h-2zM6 1h2v22H6z"/>  <path d="M2 7.5V1h2v6.5A1.5 1.5 0 0 0 5.5 9h3A1.5 1.5 0 0 0 10 7.5V1h2v6.5A3.5 3.5 0 0 1 8.5 11h-3A3.5 3.5 0 0 1 2 7.5"/> </g></svg>',
    },
    {
        title: 'Dog Treats & Bags',
        description: 'Pet-friendly perks in the lobby.',
        icon: '<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g fill="currentColor">  <path d="M20 4a3 3 0 1 0-5.121 2.121L6.12 14.88A3 3 0 1 0 4 20a3 3 0 1 0 5.121-2.121L17.88 9.12A3 3 0 1 0 20 4"/>  <path d="M10.586 7.586 9.12 6.12A3 3 0 1 0 4 4a3 3 0 1 0 2.121 5.121l1.465 1.465zM13.414 16.414l3-3 1.465 1.465A3 3 0 1 1 20 20a3 3 0 1 1-5.121-2.121z"/> </g></svg>',
    },
    {
        title: 'Movie Projector',
        description: 'Outdoor movie nights with popcorn.',
        icon: '<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">  <path d="M7 18v4H5v-4zM19 18v4h-2v-4z"/>  <path d="M2 10.5q.001-.703.125-1.37A3 3 0 0 0 0 12v5a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3h-4.15q.148.728.15 1.5a7.5 7.5 0 0 1-15 0M19 14h-1v2h3v-2h-2M10.5 0v3h-2V0zM2.782 2.368 4.904 4.49 3.49 5.904 1.368 3.782zM17.632 3.783l-2.122 2.12-1.414-1.413 2.122-2.122z"/>  <path d="M9.5 5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m1.5 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/> </g></svg>',
    },
    {
        title: 'Board Games + Cornhole',
        description: 'Lawn games and lending library favorites.',
        icon: '<svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g fill="currentColor">  <path fill-rule="evenodd" d="m22.089 5.163-10.09 4.251-10.09-4.25L12 .915zM9.5 3.75C8.672 3.75 8 4.31 8 5s.672 1.25 1.5 1.25S11 5.69 11 5s-.672-1.25-1.5-1.25m5 0c-.828 0-1.5.56-1.5 1.25s.672 1.25 1.5 1.25S16 5.69 16 5s-.672-1.25-1.5-1.25" clip-rule="evenodd"/>  <path d="m23 18.453-10 4.21v-11.5l10-4.21zm-4.75-4.94c-.69 0-1.25.672-1.25 1.5 0 .83.56 1.5 1.25 1.5s1.25-.67 1.25-1.5c0-.828-.56-1.5-1.25-1.5M11 11.164v11.5l-10-4.21v-11.5zM8.25 16.5C7.56 16.5 7 17.172 7 18s.56 1.5 1.25 1.5S9.5 18.828 9.5 18s-.56-1.5-1.25-1.5m-2.5-3c-.69 0-1.25.672-1.25 1.5s.56 1.5 1.25 1.5S7 15.828 7 15s-.56-1.5-1.25-1.5m-2.5-3C2.56 10.5 2 11.172 2 12s.56 1.5 1.25 1.5S4.5 12.828 4.5 12s-.56-1.5-1.25-1.5"/> </g></svg>',
    },
];
</script>

<template>
    <section class="bg-card">
        <div class="mx-auto max-w-6xl">
            <div class="flex flex-wrap items-center justify-between gap-6">
                <div>
                    <p class="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">Station House Inn Amenities</p>
                    <h2 class="font-display text-3xl text-foreground sm:text-4xl">Cultivating the fine art of relaxing.</h2>
                </div>
                <p class="max-w-md text-sm text-muted-foreground">Thoughtful on-site extras designed to restore weary adventurers before the next Tahoe outing.</p>
            </div>
            <div class="mt-10 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <div class="amenity-grid grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div v-for="activity in activities" :key="activity.title" class="flex items-start gap-5">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                            <span class="h-5 w-5" v-html="activity.icon"></span>
                        </div>
                        <div>
                            <h3 class="font-display text-lg text-foreground">{{ activity.title }}</h3>
                            <p class="mt-2 text-sm text-muted-foreground">{{ activity.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
