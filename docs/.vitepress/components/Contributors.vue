<script setup lang="ts">
import { ref, onMounted } from "vue";

const contributors = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("https://api.github.com/repos/TowyTowy/airreps/contributors");
    if (response.ok) {
      const data = await response.json();
      contributors.value = data.map((contributor) => ({
        name: contributor.login,
        avatar: contributor.avatar_url,
      }));
    }
  } catch {
    /* ... */
  }
});
</script>

<template>
  <div class="contributors-container">
    <hr class="divider" />
    <h2 id="contributors" style="font-size: 24px; line-height: 32px; letter-spacing: -.02em; font-weight: 600">Contributors</h2>
    <div class="users">
      <a v-for="{ name, avatar } of contributors" :key="name" :href="`https://github.com/${name}`" target="_blank" rel="noopener noreferrer" :aria-label="`${name} on GitHub`" :data-tooltip="name" data-position="top" class="tooltip">
        <img class="user" loading="lazy" :src="avatar" width="50" height="50" :alt="`${name}'s avatar`" />
      </a>
    </div>
  </div>
</template>
