<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import { defineAsyncComponent } from 'vue';
import CommunityNavPill from '../components/CommunityNavPill.vue';
import HomeCommunity from '../components/HomeCommunity.vue';
import PrivacyLink from '../components/PrivacyLink.vue';
import RelatedGuides from '../components/RelatedGuides.vue';
import SaleBanner from '../components/SaleBanner.vue';
import SeasonGreeting from '../components/SeasonGreeting.vue';
import SeasonScene from '../components/SeasonScene.vue';

const { Layout } = DefaultTheme;
// Dev server only: a bar for previewing each season. Never in the built site.
const SeasonPreview = import.meta.env.DEV
    ? defineAsyncComponent(() => import('../components/SeasonPreview.vue'))
    : null;
</script>

<template>
  <!-- The default layout, plus related guides at the end of guide pages
       (related-guides.ts), the privacy link under doc and page content and
       the festive touches on the home hero (theme/season.ts) and the
       seller codes while a public sale runs (theme/sales.ts). The community
       line under the home hero buttons and the Discord pill in the phone top
       bar come from community.ts. -->
  <Layout>
    <template #home-hero-before><SeasonScene /></template>
    <template #home-hero-info-before><SeasonGreeting /></template>
    <template #home-hero-actions-after><HomeCommunity /></template>
    <template #nav-bar-content-after><CommunityNavPill /></template>
    <template #doc-footer-before><RelatedGuides /></template>
    <template #doc-after><PrivacyLink /></template>
    <template #page-bottom><PrivacyLink /></template>
    <template #layout-bottom>
      <SaleBanner />
      <SeasonPreview v-if="SeasonPreview" />
    </template>
  </Layout>
</template>
