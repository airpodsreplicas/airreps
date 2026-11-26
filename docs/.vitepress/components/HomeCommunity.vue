<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';
import { COMMUNITY_LINKS, COMMUNITY_STATS, communityCopy, membersLabel } from '../community';

// One line under the home hero buttons: the Discord's size and the subreddit.
// The "Ask the community" button itself is a hero action in each index.md.
const { localeIndex } = useData();
const copy = computed(() => communityCopy(localeIndex.value));
const discordText = computed(() =>
    copy.value.onDiscord.replace(
        '{members}',
        membersLabel(localeIndex.value, COMMUNITY_STATS.discordMembers)
    )
);
const links = COMMUNITY_LINKS;
</script>

<template>
  <p class="home-community">
    <a :href="links.home" target="_blank" rel="noopener">{{ discordText }}</a>
    <span class="home-community-sep" aria-hidden="true">·</span>
    <a :href="links.reddit" target="_blank" rel="noopener">r/AirReps</a>
    <span class="home-community-date">({{ copy.asOf }})</span>
  </p>
</template>

<style scoped>
.home-community {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
  align-items: baseline;
  margin: 20px 0 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.home-community a {
  color: var(--vp-c-text-1);
  text-decoration: underline;
  text-decoration-color: var(--vp-c-divider);
  text-underline-offset: 3px;
  transition: color 0.2s, text-decoration-color 0.2s;
}

.home-community a:hover {
  color: var(--vp-c-brand-1);
  text-decoration-color: currentColor;
}

.home-community-sep {
  color: var(--vp-c-text-3);
}

.home-community-date {
  font-size: 13px;
  font-weight: 400;
  color: var(--vp-c-text-2);
}
</style>
