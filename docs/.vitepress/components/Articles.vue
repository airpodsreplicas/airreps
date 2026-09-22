<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';
import { articlesForLocale } from '../articles';
import { data as articles } from '../articles.data';

const props = withDefaults(
    defineProps<{
        limit?: number;
        variant?: 'home' | 'page';
    }>(),
    { limit: 0, variant: 'page' }
);

const { frontmatter, lang } = useData();

const localePrefix = computed(() => {
    const code = (lang.value || 'en').split('-')[0];
    return code === 'en' ? '' : `/${code}`;
});

const allHref = computed(() => `${localePrefix.value}/articles/`);

// Labels come from page frontmatter so the translation sync keeps them in
// sync with the rest of the page (see translatable frontmatter in the docs).
// biome-ignore lint/correctness/noUnusedVariables: used in the template
const heading = computed(() =>
    String(frontmatter.value.articlesHeading || 'Guides & articles')
);
// biome-ignore lint/correctness/noUnusedVariables: used in the template
const subtitle = computed(() => String(frontmatter.value.articlesSubtitle || ''));
// biome-ignore lint/correctness/noUnusedVariables: used in the template
const allLabel = computed(() => String(frontmatter.value.articlesAllLabel || 'All articles'));
// biome-ignore lint/correctness/noUnusedVariables: used in the template
const readLabel = computed(() => String(frontmatter.value.articlesReadLabel || 'Read'));
// biome-ignore lint/correctness/noUnusedVariables: used in the template
const shown = computed(() => {
    const localized = articlesForLocale(articles, localePrefix.value);
    return props.limit > 0 ? localized.slice(0, props.limit) : localized;
});
</script>

<template>
  <section v-if="shown.length" :class="['articles', `articles--${variant}`]">
    <div class="articles-head">
      <div>
        <component :is="variant === 'home' ? 'h2' : 'h1'" class="articles-heading">
          {{ heading }}
        </component>
        <p v-if="subtitle" class="articles-subtitle">{{ subtitle }}</p>
      </div>
      <a v-if="variant === 'home'" class="articles-all" :href="allHref">
        {{ allLabel }}
      </a>
    </div>

    <div class="articles-grid">
      <a
        v-for="article of shown"
        :key="article.url"
        :href="article.url"
        class="article-card"
      >
        <span v-if="article.category" class="article-chip">{{ article.category }}</span>
        <h3 class="article-title">{{ article.title }}</h3>
        <p class="article-desc">{{ article.description }}</p>
        <span class="article-more">{{ readLabel }}</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.articles {
  max-width: 1152px;
  margin: 0 auto;
}

.articles--page {
  padding: 40px 24px 72px;
}

.articles--home {
  padding: 8px 24px 56px;
}

.articles-head {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 24px;
}

.articles-heading {
  margin: 0 0 8px;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}

.articles--home .articles-heading {
  font-size: 20px;
  margin-bottom: 6px;
}

.articles-subtitle {
  max-width: 640px;
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.articles--home .articles-subtitle {
  font-size: 14px;
}

.articles-all {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  white-space: nowrap;
  text-decoration: none;
}

.articles-all:hover {
  text-decoration: underline;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
}

.articles--home .articles-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.article-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

.article-card:hover {
  background-color: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.article-chip {
  align-self: flex-start;
  padding: 3px 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  background-color: rgba(236, 100, 93, 0.1);
  border: 1px solid rgba(236, 100, 93, 0.3);
  border-radius: 999px;
}

.article-title {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.article-card:hover .article-title {
  color: var(--vp-c-brand-1);
}

.article-desc {
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
}

.article-more {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  margin-top: auto;
  padding-top: 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.article-more::after {
  content: "→";
  transition: transform 0.2s ease;
}

.article-card:hover .article-more::after {
  transform: translateX(3px);
}

@media (max-width: 640px) {
  .articles--page {
    padding: 24px 20px 56px;
  }

  .articles--home {
    padding: 8px 20px 48px;
  }
}
</style>
