<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { SEASONS } from '../theme/season';

// Dev server only (see theme/Layout.vue): switch between seasons for review.
// Each choice reloads with ?season=, so the head script runs as in production.
const LABELS: Record<string, string> = {
    auto: 'Auto (today)',
    christmas: 'Christmas',
    easter: 'Easter',
    halloween: 'Halloween',
    lunarnewyear: 'Lunar New Year',
    newyear: 'New Year',
    none: 'Off',
    valentines: "Valentine's",
};
const choices = ['auto', ...SEASONS, 'none'];
const selected = ref('auto');

onMounted(() => {
    selected.value = new URLSearchParams(location.search).get('season') ?? 'auto';
});

function choose(choice: string) {
    const url = new URL(location.href);
    if (choice === 'auto') {
        url.searchParams.delete('season');
    } else {
        url.searchParams.set('season', choice);
    }
    location.assign(url.href);
}
</script>

<template>
  <nav class="season-preview" aria-label="Season preview">
    <button
      v-for="choice in choices"
      :key="choice"
      type="button"
      :aria-pressed="selected === choice"
      @click="choose(choice)"
    >
      {{ LABELS[choice] }}
    </button>
  </nav>
</template>

<style scoped>
.season-preview {
  position: fixed;
  bottom: 12px;
  left: 50%;
  z-index: 100;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
  width: max-content;
  max-width: calc(100vw - 24px);
  padding: 5px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  box-shadow: var(--vp-shadow-3);
  transform: translateX(-50%);
}

button {
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  border-radius: 9px;
}

button:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-default-soft);
}

button[aria-pressed="true"] {
  color: var(--vp-c-white);
  background: var(--vp-c-brand-1);
}
</style>
