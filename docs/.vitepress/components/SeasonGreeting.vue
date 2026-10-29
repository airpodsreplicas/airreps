<script setup lang="ts">
import { useData } from 'vitepress';
import { computed, onMounted, ref } from 'vue';
import { SEASONS, type Season } from '../theme/season';

// A small greeting pill above the home hero name while a season is on (see
// theme/season.ts). Positioned out of flow, so it never shifts the hero.
const GREETINGS: Record<Season, Record<string, string>> = {
    christmas: {
        da: 'Glædelig jul',
        de: 'Frohe Weihnachten',
        en: 'Merry Christmas',
        es: 'Feliz Navidad',
        fr: 'Joyeux Noël',
        pl: 'Wesołych Świąt',
        pt: 'Feliz Natal',
        ru: 'С наступающим',
        tr: 'Mutlu Noeller',
    },
    easter: {
        da: 'God påske',
        de: 'Frohe Ostern',
        en: 'Happy Easter',
        es: 'Felices Pascuas',
        fr: 'Joyeuses Pâques',
        pl: 'Wesołego Alleluja',
        pt: 'Feliz Páscoa',
        ru: 'С Пасхой',
        tr: 'Mutlu Paskalyalar',
    },
    halloween: {
        da: 'Glædelig halloween',
        de: 'Fröhliches Halloween',
        en: 'Happy Halloween',
        es: 'Feliz Halloween',
        fr: 'Joyeux Halloween',
        pl: 'Wesołego Halloween',
        pt: 'Feliz Halloween',
        ru: 'С Хэллоуином',
        tr: 'Mutlu Cadılar Bayramı',
    },
    lunarnewyear: {
        da: 'Godt kinesisk nytår',
        de: 'Frohes Mondneujahr',
        en: 'Happy Lunar New Year',
        es: 'Feliz Año Nuevo Lunar',
        fr: 'Joyeux Nouvel An lunaire',
        pl: 'Szczęśliwego Nowego Roku Księżycowego',
        pt: 'Feliz Ano Novo Lunar',
        ru: 'С Китайским Новым годом',
        tr: 'Mutlu Çin Yeni Yılı',
    },
    newyear: {
        da: 'Godt nytår',
        de: 'Frohes neues Jahr',
        en: 'Happy New Year',
        es: 'Feliz Año Nuevo',
        fr: 'Bonne année',
        pl: 'Szczęśliwego Nowego Roku',
        pt: 'Feliz Ano Novo',
        ru: 'С Новым годом',
        tr: 'Mutlu yıllar',
    },
    valentines: {
        da: 'Glædelig valentinsdag',
        de: 'Schönen Valentinstag',
        en: "Happy Valentine's Day",
        es: 'Feliz San Valentín',
        fr: 'Joyeuse Saint-Valentin',
        pl: 'Szczęśliwych Walentynek',
        pt: 'Feliz Dia de São Valentim',
        ru: 'С Днём святого Валентина',
        tr: 'Mutlu Sevgililer Günü',
    },
};

const { lang } = useData();
const season = ref<Season | null>(null);
onMounted(() => {
    const current = document.documentElement.dataset.season as Season | undefined;
    season.value = current && SEASONS.includes(current) ? current : null;
});
const text = computed(() => {
    if (!season.value) {
        return '';
    }
    const greetings = GREETINGS[season.value];
    return greetings[lang.value.slice(0, 2)] ?? greetings.en;
});
</script>

<template>
  <p v-if="season" class="season-greeting" :class="season">
    <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
      <template v-if="season === 'halloween'">
        <path d="M12 6.2c-.3-1.6-.1-2.8.9-3.9l1.3.9c-.8.8-1 1.7-.8 3z" fill="#4d7c3a" />
        <path
          d="M12 6.4c-1.2-.9-2.6-1.2-4.1-1C4.6 5.8 2.5 9 2.5 13.2c0 4.3 2.6 7.3 6.2 7.3 1.3 0 2.4-.4 3.3-1 .9.6 2 1 3.3 1 3.6 0 6.2-3 6.2-7.3 0-4.2-2.1-7.4-5.4-7.8-1.5-.2-2.9.1-4.1 1z"
          fill="#f97316"
        />
        <path
          d="M12 6.4c-1.3 1.6-1.9 4-1.9 6.8 0 2.8.7 5.1 1.9 6.3 1.2-1.2 1.9-3.5 1.9-6.3 0-2.8-.6-5.2-1.9-6.8z"
          fill="#ea580c"
        />
      </template>
      <template v-else-if="season === 'christmas'">
        <path d="M12 3.5 6.5 11h2.6L5 16.5h4.3L12 13l2.7 3.5H19L14.9 11h2.6z" fill="#2f9e5b" />
        <path d="M5 16.5h14L15.6 20H8.4z" fill="#23824a" />
        <rect x="10.8" y="19.4" width="2.4" height="2.6" rx=".6" fill="#8a5a3c" />
        <circle cx="12" cy="3.2" r="1.6" fill="#f4b400" />
        <circle cx="9.6" cy="14.7" r="1" fill="#e0453a" />
        <circle cx="14.6" cy="10.4" r="1" fill="#f4b400" />
        <circle cx="15" cy="18" r="1" fill="#e0453a" />
      </template>
      <template v-else-if="season === 'newyear'">
        <path d="M10 2c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7z" fill="#f4b400" />
        <path d="M18 13c.3 2.4 1.3 3.4 3.7 3.7-2.4.3-3.4 1.3-3.7 3.7-.3-2.4-1.3-3.4-3.7-3.7 2.4-.3 3.4-1.3 3.7-3.7z" fill="#e8a33d" />
      </template>
      <template v-else-if="season === 'lunarnewyear'">
        <path d="M12 1.5v3" stroke="#d4a017" stroke-width="1.4" stroke-linecap="round" />
        <rect x="8.5" y="4.2" width="7" height="2.2" rx=".6" fill="#d4a017" />
        <ellipse cx="12" cy="12" rx="7.5" ry="6.3" fill="#e0362f" />
        <path d="M12 5.8c-2.2 1.6-3.3 3.7-3.3 6.2s1.1 4.6 3.3 6.2c2.2-1.6 3.3-3.7 3.3-6.2S14.2 7.4 12 5.8z" fill="none" stroke="#b42318" stroke-width="1" />
        <rect x="8.5" y="17.6" width="7" height="2.2" rx=".6" fill="#d4a017" />
        <path d="M12 19.8v2.7" stroke="#d4a017" stroke-width="1.4" stroke-linecap="round" />
      </template>
      <template v-else-if="season === 'valentines'">
        <path
          d="M12 20.5s-7.6-4.6-9.4-9.4C1.2 7.5 3.4 4 6.9 4c2.1 0 3.8 1.1 5.1 2.9C13.3 5.1 15 4 17.1 4c3.5 0 5.7 3.5 4.3 7.1-1.8 4.8-9.4 9.4-9.4 9.4z"
          fill="#e5486f"
        />
      </template>
      <template v-else>
        <ellipse cx="12" cy="13" rx="7" ry="8.8" fill="#b9a7f5" />
        <path d="M5.2 11.2 8 9.3l2.6 1.9 2.8-1.9 2.6 1.9 2.8-1.9v2.6l-2.8 1.9-2.6-1.9-2.8 1.9-2.6-1.9-2.8 1.9z" fill="#fff" fill-opacity=".85" />
        <circle cx="9" cy="17" r="1" fill="#f59ec1" />
        <circle cx="12.5" cy="18.2" r="1" fill="#8fd3b0" />
        <circle cx="15.6" cy="16.6" r="1" fill="#f6c453" />
      </template>
    </svg>
    <span>{{ text }}</span>
  </p>
</template>

<style scoped>
.season-greeting {
  --greeting-ink: var(--season-ink, var(--vp-c-brand-1));

  position: absolute;
  bottom: calc(100% + 10px);
  left: 0;
  display: inline-flex;
  gap: 6px;
  align-items: center;
  max-width: 100%;
  padding: 3px 12px 3px 7px;
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  color: var(--greeting-ink);
  white-space: nowrap;
  background: color-mix(in srgb, var(--greeting-ink) 8%, var(--vp-c-bg));
  border: 1px solid color-mix(in srgb, var(--greeting-ink) 22%, transparent);
  border-radius: 999px;
  box-shadow: var(--depth-ghost-sm);
  animation: season-greeting-in 0.6s ease-out both;
}

.icon {
  flex: none;
  width: 18px;
  height: 18px;
}

@media (min-width: 640px) {
  .season-greeting {
    bottom: calc(100% + 18px);
  }
}

@keyframes season-greeting-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .season-greeting {
    animation: none;
  }
}
</style>
