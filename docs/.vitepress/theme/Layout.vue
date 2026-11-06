<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import { defineAsyncComponent } from 'vue';
import PrivacyLink from '../components/PrivacyLink.vue';
import RelatedGuides from '../components/RelatedGuides.vue';
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
       the festive touches on the home hero (theme/season.ts). -->
  <Layout>
    <template #home-hero-before><SeasonScene /></template>
    <template #home-hero-info-before><SeasonGreeting /></template>
    <template #doc-footer-before><RelatedGuides /></template>
    <template #doc-after><PrivacyLink /></template>
    <template #page-bottom><PrivacyLink /></template>
    <template #layout-bottom><SeasonPreview v-if="SeasonPreview" /></template>
  </Layout>
</template>
