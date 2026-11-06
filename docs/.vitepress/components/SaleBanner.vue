<script setup lang="ts">
import { useData } from 'vitepress';
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { activeSale, type Sale, saleText } from '../theme/sales';

// A small bar with each seller's code while a public store-wide sale runs (see
// theme/sales.ts). It's fixed to the bottom of the screen and only appears
// after the page has loaded, so it never pushes page content around. Closing
// it hides that sale for this browser.
const DISMISSED_KEY = 'airreps-sale-dismissed';

const { lang } = useData();
const sale = ref<Sale | null>(null);
const bar = ref<HTMLElement | null>(null);
let timer: number | undefined;
let observer: ResizeObserver | undefined;

function dismissedId(): string | null {
    try {
        return localStorage.getItem(DISMISSED_KEY);
    } catch {
        return null;
    }
}

function refresh() {
    const current = activeSale(new Date());
    sale.value = current && current.id !== dismissedId() ? current : null;
}

function dismiss() {
    if (sale.value) {
        try {
            localStorage.setItem(DISMISSED_KEY, sale.value.id);
        } catch {
            // Storage blocked: it stays closed until the next page load.
        }
    }
    sale.value = null;
}

// Pad the page by the bar's height so it never covers the footer.
function setPadding(px: number) {
    document.documentElement.style.setProperty('--sale-banner-height', `${px}px`);
}

watch(sale, async (value) => {
    observer?.disconnect();
    if (!value) {
        setPadding(0);
        return;
    }
    await nextTick();
    if (bar.value && typeof ResizeObserver !== 'undefined') {
        // The space it takes up from the bottom edge, including the gap below
        // the floating desktop version.
        observer = new ResizeObserver(() => {
            const top = bar.value?.getBoundingClientRect().top;
            setPadding(top === undefined ? 0 : Math.max(0, window.innerHeight - top));
        });
        observer.observe(bar.value);
    }
});

onMounted(() => {
    refresh();
    // Starts and ends on time for a tab that's left open.
    timer = window.setInterval(refresh, 60_000);
});

onBeforeUnmount(() => {
    window.clearInterval(timer);
    observer?.disconnect();
    setPadding(0);
});

const text = computed(() => (sale.value ? saleText(sale.value, lang.value) : null));
</script>

<template>
  <aside v-if="sale && text" ref="bar" class="sale-banner" :aria-label="text.headline">
    <p class="sale-copy">
      <strong>{{ text.headline }}</strong>
      <span>{{ text.offer }}</span>
    </p>
    <ul class="sale-offers">
      <li v-for="offer in sale.offers" :key="offer.store">
        <a :href="offer.href" target="_blank" rel="noreferrer" :aria-label="text.linkLabel(offer)">
          <span class="store">{{ offer.store }}</span>
          <code>{{ offer.code }}</code>
        </a>
      </li>
    </ul>
    <button type="button" class="sale-close" :aria-label="text.close" @click="dismiss">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      </svg>
    </button>
  </aside>
</template>

<style scoped>
.sale-banner {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px 12px;
  align-items: center;
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
  color: #f5f5f7;
  background: #141416;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 -6px 24px rgba(0, 0, 0, 0.18);
}

.sale-copy {
  grid-column: 1;
  grid-row: 1;
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
}

.sale-copy strong {
  margin-right: 6px;
  font-weight: 700;
}

.sale-copy span {
  color: rgba(245, 245, 247, 0.78);
}

.sale-offers {
  grid-column: 1 / -1;
  grid-row: 2;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sale-offers li {
  margin: 0;
}

.sale-offers a {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  padding: 6px 8px;
  color: #fff;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 10px;
  transition: background-color 0.2s, border-color 0.2s;
}

.sale-offers a:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--vp-c-brand-1);
}

.store {
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
}

.sale-offers code {
  padding: 0;
  font-size: 11px;
  line-height: 1.3;
  color: var(--vp-c-brand-1);
  background: none;
}

.sale-close {
  grid-column: 2;
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: -6px -6px -6px 0;
  color: rgba(245, 245, 247, 0.7);
  border-radius: 8px;
}

.sale-close:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
}

.sale-close svg {
  width: 18px;
  height: 18px;
}

@media (min-width: 768px) {
  .sale-banner {
    right: 16px;
    bottom: 16px;
    left: 16px;
    grid-template-columns: auto auto auto;
    justify-content: center;
    gap: 16px;
    width: fit-content;
    max-width: calc(100% - 32px);
    margin: 0 auto;
    padding: 10px 12px 10px 18px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 14px;
  }

  .sale-copy {
    grid-column: 1;
  }

  .sale-offers {
    grid-column: 2;
    grid-row: 1;
    grid-template-columns: repeat(3, auto);
  }

  .sale-offers a {
    flex-direction: row;
    gap: 6px;
    padding: 5px 10px;
  }

  .sale-close {
    grid-column: 3;
    margin: 0;
  }
}

@media print {
  .sale-banner {
    display: none;
  }
}
</style>
