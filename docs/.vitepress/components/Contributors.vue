<script setup lang="ts">
import { useData } from 'vitepress';
import { computed, onMounted, ref } from 'vue';

const { lang } = useData();

const titles: Record<string, string> = {
    'en-US': 'Built by the community',
    'es-ES': 'Creado por la comunidad',
    'pt-BR': 'Feito pela comunidade',
    'da-DK': 'Bygget af fællesskabet',
    'fr-FR': 'Créé par la communauté',
    'pl-PL': 'Stworzone przez społeczność',
    'ru-RU': 'Создано сообществом',
    'de-DE': 'Von der Community erstellt',
    'tr-TR': 'Topluluk tarafından oluşturuldu',
};

const subtitles: Record<string, string> = {
    'en-US':
        'This guide is maintained by volunteers who are passionate about helping others make informed decisions.',
    'es-ES':
        'Esta guía es mantenida por voluntarios apasionados por ayudar a otros a tomar decisiones informadas.',
    'pt-BR':
        'Este guia é mantido por voluntários apaixonados por ajudar outros a tomar decisões informadas.',
    'da-DK':
        'Denne guide vedligeholdes af frivillige, der brænder for at hjælpe andre med at træffe informerede beslutninger.',
    'fr-FR':
        'Ce guide est maintenu par des bénévoles passionnés qui aident les autres à prendre des décisions éclairées.',
    'pl-PL':
        'Ten przewodnik jest utrzymywany przez wolontariuszy, którzy pomagają innym podejmować świadome decyzje.',
    'ru-RU':
        'Это руководство поддерживается волонтёрами, которые помогают другим принимать осознанные решения.',
    'de-DE':
        'Dieser Leitfaden wird von Freiwilligen gepflegt, die anderen helfen möchten, fundierte Entscheidungen zu treffen.',
    'tr-TR':
        'Bu rehber, başkalarının bilinçli kararlar vermesine yardımcı olmak isteyen gönüllüler tarafından sürdürülmektedir.',
};

// biome-ignore lint/correctness/noUnusedVariables: used in Vue template
const title = computed(() => titles[lang.value] || titles['en-US']);
// biome-ignore lint/correctness/noUnusedVariables: used in Vue template
const subtitle = computed(() => subtitles[lang.value] || subtitles['en-US']);

const contributors = ref<{ name: string; avatar: string }[]>([]);

onMounted(async () => {
    try {
        const response = await fetch(
            'https://api.github.com/repos/AirPodsReplicas/AirReps/contributors'
        );
        if (response.ok) {
            const data = await response.json();
            contributors.value = data
                .filter((c: { login: string; avatar_url: string }) => c.login !== 'actions-user')
                .map((c: { login: string; avatar_url: string }) => ({
                    name: c.login,
                    avatar: c.avatar_url,
                }));
        }
    } catch {
        /* silently fail */
    }
});
</script>

<template>
  <div class="contributors-section">
    <div class="contributors-inner">
      <h2 class="contributors-title">{{ title }}</h2>
      <p class="contributors-subtitle">{{ subtitle }}</p>
      <div class="contributors-avatars">
        <a
          v-for="{ name, avatar } of contributors"
          :key="name"
          :href="`https://github.com/${name}`"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${name} on GitHub`"
          :data-tooltip="name"
          class="contributor-link"
        >
          <img
            class="contributor-avatar"
            loading="lazy"
            :src="avatar"
            width="40"
            height="40"
            :alt="`${name}'s avatar`"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contributors-section {
  padding: 48px 24px 64px;
}

.contributors-inner {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
}

.contributors-title {
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  margin: 0 0 8px;
}

.contributors-subtitle {
  font-size: 14px;
  line-height: 22px;
  color: var(--vp-c-text-2);
  margin: 0 0 24px;
}

.contributors-avatars {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
}

.contributor-link {
  position: relative;
  display: block;
  border-radius: 50%;
  transition: transform 0.15s ease;
}

.contributor-link:hover {
  transform: scale(1.15);
}

.contributor-link:hover::before {
  visibility: visible;
  opacity: 1;
}

.contributor-link::before {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  z-index: 1;
  visibility: hidden;
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 500;
  color: var(--vp-c-bg);
  white-space: nowrap;
  content: attr(data-tooltip);
  background: var(--vp-c-text-1);
  border-radius: 4px;
  opacity: 0;
  transform: translateX(-50%);
  transition: opacity 0.15s;
  pointer-events: none;
}

.contributor-avatar {
  display: block;
  border-radius: 50%;
  opacity: 0.85;
  transition: opacity 0.15s ease;
}

.contributor-link:hover .contributor-avatar {
  opacity: 1;
}
</style>
