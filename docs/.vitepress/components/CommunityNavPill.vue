<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';
import { COMMUNITY_LINKS, communityCopy } from '../community';

// Phones hide the nav's Discord and Reddit icons inside the hamburger menu, so
// the top bar gets a compact Discord pill below 768 px. Wider screens keep the
// default icons.
const { localeIndex } = useData();
const label = computed(() => communityCopy(localeIndex.value).navPill);
const link = COMMUNITY_LINKS.nav;
</script>

<template>
  <a class="community-nav-pill" :href="link" target="_blank" rel="noopener" :aria-label="label">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 13.83 13.83 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
    <span>Discord</span>
  </a>
</template>

<style scoped>
.community-nav-pill {
  display: inline-flex;
  flex-shrink: 0;
  gap: 6px;
  align-items: center;
  height: 32px;
  margin-left: 4px;
  padding: 0 12px;
  border: 1px solid #3f49ae;
  border-radius: 999px;
  background: linear-gradient(180deg, #6773f4, #5865f2 58%, #4f5bda);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35), 0 2px 6px -2px rgba(88, 101, 242, 0.5);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  /* The nav bar turns pointer events off for its empty areas. */
  pointer-events: auto;
  transition: filter 0.15s ease;
}

.community-nav-pill:hover,
.community-nav-pill:focus-visible {
  filter: brightness(0.92);
}

.community-nav-pill:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.community-nav-pill svg {
  width: 16px;
  height: 16px;
}

@media (min-width: 768px) {
  .community-nav-pill {
    display: none;
  }
}
</style>
