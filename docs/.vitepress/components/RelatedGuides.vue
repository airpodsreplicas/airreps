<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';
import { data as articles } from '../articles.data';
import { relatedGuides, relatedHeading } from '../related-guides';

// Rendered at build time like the rest of the page, so crawlers and assistants
// see these as ordinary links from the guide page into the matching articles.
const { page } = useData();
const guides = computed(() => relatedGuides(page.value.relativePath, articles));
// biome-ignore lint/correctness/noUnusedVariables: used in the template
const heading = computed(() => relatedHeading(page.value.relativePath));
</script>

<template>
  <nav v-if="guides.length" class="related-guides" :aria-label="heading">
    <h2 class="related-guides-heading">{{ heading }}</h2>
    <ul class="related-guides-list">
      <li v-for="guide of guides" :key="guide.url">
        <a :href="guide.url" class="related-guide">
          <span class="related-guide-title">{{ guide.title }}</span>
          <span v-if="guide.description" class="related-guide-desc">{{ guide.description }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.related-guides {
  margin: 48px 0 8px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.related-guides-heading {
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.related-guides-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.related-guide {
  display: block;
  padding: 14px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  transition: border-color 0.25s, background-color 0.25s;
}

.related-guide:hover {
  border-color: var(--vp-c-brand-1);
}

.related-guide:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.related-guide-title {
  display: block;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.45;
  color: var(--vp-c-brand-1);
}

.related-guide-desc {
  display: block;
  margin-top: 4px;
  font-size: 14px;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}
</style>
