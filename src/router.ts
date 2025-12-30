import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from './pages/AboutPage.vue';
import AccessibilityPage from './pages/AccessibilityPage.vue';
import ActivitiesPage from './pages/ActivitiesPage.vue';
import AmenitiesPage from './pages/AmenitiesPage.vue';
import BachelorettePage from './pages/BachelorettePage.vue';
import BeachPassesPage from './pages/BeachPassesPage.vue';
import CabanasPage from './pages/CabanasPage.vue';
import CeremoniesPage from './pages/CeremoniesPage.vue';
import EarlyBirdPage from './pages/EarlyBirdPage.vue';
import EatDrinkPage from './pages/EatDrinkPage.vue';
import EmailSignupPage from './pages/EmailSignupPage.vue';
import FaqPage from './pages/FaqPage.vue';
import GalleryPage from './pages/GalleryPage.vue';
import GayTravelAwardPage from './pages/GayTravelAwardPage.vue';
import GroupsPage from './pages/GroupsPage.vue';
import HappyHourPromotionPage from './pages/HappyHourPromotionPage.vue';
import HomePage from './pages/HomePage.vue';
import LakesideBeachPage from './pages/LakesideBeachPage.vue';
import LongTermStayPage from './pages/LongTermStayPage.vue';
import MidweekPage from './pages/MidweekPage.vue';
import PetFriendlyPage from './pages/PetFriendlyPage.vue';
import PressPage from './pages/PressPage.vue';
import ReviewsPage from './pages/ReviewsPage.vue';
import RoomsPage from './pages/RoomsPage.vue';
import SeasonPassPage from './pages/SeasonPassPage.vue';
import SocialPage from './pages/SocialPage.vue';
import StayMorePage from './pages/StayMorePage.vue';
import TravelingSportsTeamsPage from './pages/TravelingSportsTeamsPage.vue';
import WeddingsPage from './pages/WeddingsPage.vue';
import WifiAccessPage from './pages/WifiAccessPage.vue';

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        return { left: 0, top: 0 };
    },
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/home', redirect: '/' },
        { path: '/about-station-house', name: 'about', component: AboutPage },
        { path: '/rooms', name: 'rooms', component: RoomsPage },
        { path: '/amenities', name: 'amenities', component: AmenitiesPage },
        { path: '/wifi-access', name: 'wifi-access', component: WifiAccessPage },
        { path: '/accessibility', name: 'accessibility', component: AccessibilityPage },
        { path: '/gallery', name: 'gallery', component: GalleryPage },
        { path: '/groups', name: 'groups', component: GroupsPage },
        { path: '/eat-drink', name: 'eat-drink', component: EatDrinkPage },
        { path: '/faq', name: 'faq', component: FaqPage },
        { path: '/email-signup', name: 'email-signup', component: EmailSignupPage },
        { path: '/station-house-inn-social', name: 'social', component: SocialPage },
        { path: '/press', name: 'press', component: PressPage },
        { path: '/staymore', name: 'staymore', component: StayMorePage },
        { path: '/gay-travel-2022-award', name: 'gay-travel-award', component: GayTravelAwardPage },
        { path: '/weddings', name: 'weddings', component: WeddingsPage },
        { path: '/midweek', name: 'midweek', component: MidweekPage },
        { path: '/beachpasses', name: 'beachpasses', component: BeachPassesPage },
        { path: '/ceremonies', name: 'ceremonies', component: CeremoniesPage },
        { path: '/cabanas', name: 'cabanas', component: CabanasPage },
        { path: '/happy-hour-promotion', name: 'happy-hour', component: HappyHourPromotionPage },
        { path: '/activities', name: 'activities', component: ActivitiesPage },
        { path: '/traveling-sports-teams', name: 'traveling-sports-teams', component: TravelingSportsTeamsPage },
        { path: '/long-term-stay', name: 'long-term-stay', component: LongTermStayPage },
        { path: '/bachelorette', name: 'bachelorette', component: BachelorettePage },
        { path: '/lakeside-beach', name: 'lakeside-beach', component: LakesideBeachPage },
        { path: '/the-season-pass', name: 'season-pass', component: SeasonPassPage },
        { path: '/reviews', name: 'reviews', component: ReviewsPage },
        { path: '/pet-friendly-hotel-south-lake-tahoe', name: 'pet-friendly', component: PetFriendlyPage },
        { path: '/lpg/early-bird', name: 'early-bird', component: EarlyBirdPage },
    ],
});

export default router;
