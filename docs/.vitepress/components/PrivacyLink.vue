<script setup lang="ts">
import { useData } from 'vitepress';
import { useLayout } from 'vitepress/theme';
import { computed } from 'vue';
import { privacyLink } from '../privacy-link';

// VitePress hides the site footer on pages with a sidebar, so those pages get
// this one-line equivalent instead. Sidebar-free pages already show the footer.
const { localeIndex } = useData();
const { hasSidebar } = useLayout();
const link = computed(() => privacyLink(localeIndex.value));
</script>

<template>
  <p v-if="hasSidebar" class="privacy-link">
    <a :href="link.link">{{ link.text }}</a>
  </p>
</template>

<style scoped>
/* Same muted type as the VitePress site footer message. */
.privacy-link {
  margin-top: 32px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: var(--vp-c-text-2);
  text-align: center;
}

.privacy-link a {
  color: inherit;
  text-decoration-line: underline;
  text-underline-offset: 2px;
  transition: color 0.25s;
}

.privacy-link a:hover {
  color: var(--vp-c-text-1);
}
</style>
