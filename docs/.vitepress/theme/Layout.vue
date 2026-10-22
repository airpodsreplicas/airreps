<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import PrivacyLink from '../components/PrivacyLink.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <!-- The default layout, plus the privacy link under doc and page content. -->
  <Layout>
    <template #doc-after><PrivacyLink /></template>
    <template #page-bottom><PrivacyLink /></template>
  </Layout>
</template>
