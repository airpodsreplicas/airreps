<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';
import {
    COMMUNITY_LINKS,
    COMMUNITY_STATS,
    type CtaVariant,
    communityCopy,
    communityPath,
    membersLabel,
    statsLine,
} from '../community';

// "Still stuck? Ask the community" block for help and troubleshooting pages,
// placed in the Markdown as <CommunityCta variant="stuck" />. Each variant gives
// readers one specific reason to ask (copy in community.ts, all nine
// languages). `join` is the /community page's own join block.
const props = withDefaults(defineProps<{ variant?: CtaVariant }>(), { variant: 'stuck' });

const { localeIndex } = useData();
const copy = computed(() => communityCopy(localeIndex.value));
const block = computed(() => copy.value.variants[props.variant] ?? copy.value.variants.stuck);
const isJoin = computed(() => props.variant === 'join');
const discordLink = computed(() => (isJoin.value ? COMMUNITY_LINKS.page : COMMUNITY_LINKS.help));
const meta = computed(() =>
    isJoin.value
        ? statsLine(localeIndex.value)
        : `${copy.value.onDiscord.replace(
              '{members}',
              membersLabel(localeIndex.value, COMMUNITY_STATS.discordMembers)
          )}, ${copy.value.asOf}`
);
const pageLink = computed(() => communityPath(localeIndex.value));
const redditLink = COMMUNITY_LINKS.reddit;
</script>

<template>
  <div
    class="community-cta"
    :class="{ 'is-join': isJoin }"
    role="complementary"
    :aria-label="copy.blockLabel"
    data-nosnippet
  >
    <span class="community-cta-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 13.83 13.83 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    </span>
    <div class="community-cta-body">
      <p class="community-cta-title">{{ block.title }}</p>
      <p class="community-cta-text">{{ block.body }}</p>
      <div class="community-cta-actions">
        <a class="community-cta-button" :href="discordLink" target="_blank" rel="noopener">
          {{ isJoin ? copy.joinDiscord : copy.askOnDiscord }}
        </a>
        <a
          v-if="isJoin"
          class="community-cta-secondary"
          :href="redditLink"
          target="_blank"
          rel="noopener"
        >
          {{ copy.openReddit }}
        </a>
      </div>
      <p class="community-cta-meta">
        <span>{{ meta }}</span>
        <template v-if="!isJoin">
          <span aria-hidden="true"> · </span>
          <a :href="pageLink">{{ copy.aboutCommunity }}</a>
        </template>
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Same card as the related-guides block, with the Discord button the quiz
   result already uses. Theme tokens only, so light and dark both follow. */
.community-cta {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  margin: 24px 0;
  padding: 16px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  box-shadow: var(--depth-ghost-sm);
}

.community-cta-icon {
  display: flex;
  flex: 0 0 40px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--vp-c-default-soft);
  color: #5865f2;
}

.dark .community-cta-icon {
  color: #8b93f8;
}

.community-cta-icon svg {
  width: 22px;
  height: 22px;
}

.community-cta-body {
  flex: 1 1 auto;
  min-width: 0;
}

.community-cta-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--vp-c-text-1);
}

.community-cta-text {
  margin: 4px 0 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.community-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.community-cta-button,
.community-cta-secondary {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  transition: filter 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
}

.community-cta-button {
  border: 1px solid #3f49ae;
  background: linear-gradient(180deg, #6773f4, #5865f2 58%, #4f5bda);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35), inset 0 -2px 2px rgba(0, 0, 0, 0.1),
    0 2px 3px rgba(0, 0, 0, 0.12), 0 8px 18px -8px rgba(88, 101, 242, 0.45);
  color: #fff;
}

.community-cta-button:hover,
.community-cta-button:focus-visible {
  color: #fff;
  filter: brightness(0.92);
}

.community-cta-secondary {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  box-shadow: var(--depth-ghost-sm);
  color: var(--vp-c-text-1);
}

.community-cta-secondary:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-text-1);
}

.community-cta-button:focus-visible,
.community-cta-secondary:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.community-cta-button:active,
.community-cta-secondary:active {
  transform: translateY(1px);
}

.community-cta-meta {
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.community-cta-meta a {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  text-decoration: none;
}

.community-cta-meta a:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .community-cta {
    padding: 14px;
  }

  .community-cta-icon {
    display: none;
  }
}
</style>
