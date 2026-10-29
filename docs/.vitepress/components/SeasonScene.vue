<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { SEASONS, type Season } from '../theme/season';

// A light decorative layer behind the home hero while a season is on (see
// theme/season.ts): a soft glow plus snow, petals, hearts, fireworks, a spider
// or lanterns. It sits under the hero text, ignores the pointer and is hidden
// from assistive tech. Reduced-motion visitors get the still parts only.
type Drift = 'fall' | 'rise' | 'twinkle';

const PARTICLES: Partial<
    Record<Season, { kind: string; drift: Drift; count: number; size: [number, number] }>
> = {
    christmas: { count: 34, drift: 'fall', kind: 'snow', size: [3, 7] },
    easter: { count: 14, drift: 'fall', kind: 'petal', size: [6, 11] },
    newyear: { count: 8, drift: 'twinkle', kind: 'sparkle', size: [6, 13] },
    valentines: { count: 12, drift: 'rise', kind: 'heart', size: [8, 15] },
};

const season = ref<Season | null>(null);
const particles = ref<{ kind: string; classes: string[]; style: Record<string, string> }[]>([]);
const fireworks = ref<Record<string, string>[]>([]);

// New Year fireworks over the open right side of the hero, in the brand colors.
// Positions are percentages of the scene, kept clear of the navbar and the hero
// text; delays stagger the bursts.
const BURSTS = [
    { color: '#f4b400', delay: 0, x: 66, y: 26 },
    { color: '#ec645d', delay: 1.4, x: 86, y: 23 },
    { color: '#5ca9be', delay: 2.7, x: 91, y: 44 },
    { color: '#a970e0', delay: 3.9, x: 75, y: 50 },
];
const NARROW_BURSTS = [
    { color: '#f4b400', delay: 0, x: 66, y: 16 },
    { color: '#ec645d', delay: 2.4, x: 86, y: 18 },
];
const SPARKS = 14;

const between = (min: number, max: number) => min + Math.random() * (max - min);

onMounted(() => {
    const current = document.documentElement.dataset.season as Season | undefined;
    if (!(current && SEASONS.includes(current))) {
        return;
    }
    season.value = current;
    const config = PARTICLES[current];
    if (!config) {
        return;
    }
    const narrow = window.innerWidth < 640;
    if (current === 'newyear') {
        fireworks.value = (narrow ? NARROW_BURSTS : BURSTS).map((burst) => ({
            '--delay': `${burst.delay}s`,
            color: burst.color,
            left: `${burst.x}%`,
            top: `${burst.y}%`,
        }));
    }
    const count = narrow ? Math.ceil(config.count / 2) : config.count;
    particles.value = Array.from({ length: count }, (_, index) => {
        const duration = config.drift === 'twinkle' ? between(2.4, 4.2) : between(11, 20);
        return {
            // Three tones per kind for a little color variety.
            classes: [config.kind, config.drift, `tone-${index % 3}`],
            kind: config.kind,
            style: {
                '--delay': `${-between(0, duration)}s`,
                '--drift-x': `${between(8, 28)}px`,
                '--duration': `${duration}s`,
                '--opacity': `${between(0.45, 0.9)}`,
                '--size': `${between(...config.size)}px`,
                '--spin': `${between(-200, 200)}deg`,
                // Sparkles gather on the open right side; the rest spread out.
                left: `${config.drift === 'twinkle' ? between(narrow ? 55 : 48, 96) : between(0, 100)}%`,
                top: config.drift === 'twinkle' ? `${between(14, narrow ? 34 : 62)}%` : '',
            },
        };
    });
});
</script>

<template>
  <div class="season-anchor">
    <div v-if="season" class="season-scene" :class="season" aria-hidden="true">
      <span
        v-for="(particle, index) in particles"
        :key="index"
        class="particle"
        :class="particle.classes"
        :style="particle.style"
      >
        <i>
          <svg v-if="particle.kind === 'heart'" viewBox="0 0 24 24">
            <path
              d="M12 20.5s-7.6-4.6-9.4-9.4C1.2 7.5 3.4 4 6.9 4c2.1 0 3.8 1.1 5.1 2.9C13.3 5.1 15 4 17.1 4c3.5 0 5.7 3.5 4.3 7.1-1.8 4.8-9.4 9.4-9.4 9.4z"
            />
          </svg>
          <svg v-else-if="particle.kind === 'sparkle'" viewBox="0 0 24 24">
            <path d="M12 0c.8 6.6 4.4 10.2 12 12-7.6 1.8-11.2 5.4-12 12-.8-6.6-4.4-10.2-12-12 7.6-1.8 11.2-5.4 12-12z" />
          </svg>
        </i>
      </span>

      <span v-for="(burst, index) in fireworks" :key="`burst-${index}`" class="burst" :style="burst">
        <i v-for="spark in SPARKS" :key="spark" :style="{ '--angle': `${(spark * 360) / SPARKS}deg` }" />
      </span>

      <div v-if="season === 'halloween'" class="web">
        <div class="spider">
          <svg viewBox="0 0 40 40">
            <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
              <path d="M15.5 19 9 15l-4 3M15 22l-8-1-3.5 4M15.5 25l-6.5 3-1.5 5M17 27.5 13 32l.5 5" />
              <path d="M24.5 19 31 15l4 3M25 22l8-1 3.5 4M24.5 25l6.5 3 1.5 5M23 27.5 27 32l-.5 5" />
            </g>
            <circle cx="20" cy="14.5" r="4.2" fill="currentColor" />
            <ellipse cx="20" cy="24" rx="6.2" ry="7.2" fill="currentColor" />
            <circle cx="18.4" cy="14" r="1.1" fill="var(--season-eye)" />
            <circle cx="21.6" cy="14" r="1.1" fill="var(--season-eye)" />
          </svg>
        </div>
      </div>

      <template v-if="season === 'lunarnewyear'">
        <div v-for="lantern in 2" :key="lantern" class="lantern" :class="`lantern-${lantern}`">
          <svg viewBox="0 0 40 64">
            <rect x="12.5" y="10" width="15" height="4.5" rx="1.2" fill="#d4a017" />
            <ellipse cx="20" cy="28" rx="16" ry="14.5" fill="#e0362f" />
            <g fill="none" stroke="#b42318" stroke-width="1.2">
              <ellipse cx="20" cy="28" rx="9.5" ry="14.5" />
              <ellipse cx="20" cy="28" rx="3.5" ry="14.5" />
            </g>
            <ellipse cx="14" cy="22" rx="3" ry="5" fill="#fff" fill-opacity=".18" />
            <rect x="12.5" y="41.5" width="15" height="4.5" rx="1.2" fill="#d4a017" />
            <path d="M20 46v16M17.5 47l-1 13M22.5 47l1 13" stroke="#d4a017" stroke-width="1.4" stroke-linecap="round" />
          </svg>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
/* The slot sits right above the hero. The hero's negative top margin (it
   slides under the navbar) collapses through this anchor, so top: 0 here is
   the top of the page. */
.season-anchor {
  position: relative;
  height: 0;
}

.season-scene {
  --scene-height: 700px;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: var(--scene-height);
  overflow: hidden;
  pointer-events: none;
  background: radial-gradient(
    60% 70% at 88% 8%,
    color-mix(in srgb, var(--season-a) 13%, transparent),
    transparent 70%
  );
  -webkit-mask-image: linear-gradient(to bottom, #000 55%, transparent);
  mask-image: linear-gradient(to bottom, #000 55%, transparent);
  animation: season-scene-in 1.2s ease-out both;
}

@media (min-width: 640px) {
  .season-scene {
    --scene-height: 640px;
  }
}

@keyframes season-scene-in {
  from {
    opacity: 0;
  }
}

/* Particles: the outer span travels, the inner <i> sways or turns. */
.particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  opacity: var(--opacity);
  animation: var(--duration) linear var(--delay) infinite;
}

.particle i {
  display: block;
  width: 100%;
  height: 100%;
  animation: season-sway calc(var(--duration) / 3) ease-in-out var(--delay) infinite alternate;
}

.particle svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.fall {
  top: 0;
  animation-name: season-fall;
}

.rise {
  bottom: 0;
  animation-name: season-rise;
}

.twinkle {
  animation: season-twinkle var(--duration) ease-in-out var(--delay) infinite;
}

.twinkle i {
  animation: none;
}

@keyframes season-fall {
  from {
    transform: translateY(-24px);
  }

  to {
    transform: translateY(var(--scene-height));
  }
}

@keyframes season-rise {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  15% {
    opacity: var(--opacity);
  }

  to {
    opacity: 0;
    transform: translateY(calc(var(--scene-height) * -0.8));
  }
}

@keyframes season-sway {
  from {
    transform: translateX(calc(var(--drift-x) * -1)) rotate(0deg);
  }

  to {
    transform: translateX(var(--drift-x)) rotate(var(--spin));
  }
}

@keyframes season-twinkle {
  0%,
  100% {
    opacity: 0;
    transform: scale(0.3);
  }

  50% {
    opacity: var(--opacity);
    transform: scale(1);
  }
}

.snow i {
  background: var(--season-snow);
  border-radius: 50%;
}

.petal i {
  background: #f6a5c0;
  border-radius: 0 100% 0 100%;
}

.petal.tone-1 i {
  background: #c9b6f7;
}

.petal.tone-2 i {
  background: #f8d77a;
}

.heart {
  color: #e5486f;
}

.heart.tone-1 {
  color: #f08aa6;
}

.sparkle {
  color: #e8b53a;
}

.sparkle.tone-1 {
  color: #f3d27a;
}

/* New Year: a rocket trail climbs, then the burst's sparks streak outward and
   drift down as they fade. Every part shares one cycle per burst. */
.burst {
  --cycle: 5.2s;
  --radius: 72px;
  --rise: 150px;

  position: absolute;
  width: 0;
  height: 0;
  animation: season-firework-drop var(--cycle) ease-in var(--delay) infinite;
}

@media (max-width: 639px) {
  .burst {
    --radius: 40px;
    --rise: 80px;
  }
}

.burst::before {
  position: absolute;
  top: 0;
  left: -1px;
  width: 2px;
  height: 16px;
  content: "";
  background: linear-gradient(to bottom, currentColor, transparent);
  border-radius: 1px;
  opacity: 0;
  animation: season-firework-launch var(--cycle) ease-out var(--delay) infinite;
}

.burst i {
  position: absolute;
  top: -1px;
  left: 0;
  width: 14px;
  height: 2px;
  background: linear-gradient(to left, currentColor, transparent);
  border-radius: 1px;
  opacity: 0;
  transform-origin: 0 50%;
  animation: season-firework-spark var(--cycle) cubic-bezier(0.2, 0.7, 0.3, 1) var(--delay) infinite;
}

@keyframes season-firework-launch {
  0% {
    opacity: 0;
    transform: translateY(var(--rise));
  }

  4% {
    opacity: 0.8;
  }

  20% {
    opacity: 0.8;
    transform: translateY(0);
  }

  23%,
  100% {
    opacity: 0;
    transform: translateY(0);
  }
}

@keyframes season-firework-spark {
  0%,
  21% {
    opacity: 0;
    transform: rotate(var(--angle)) translateX(0) scaleX(0.2);
  }

  24% {
    opacity: 1;
  }

  44% {
    opacity: 0.85;
    transform: rotate(var(--angle)) translateX(var(--radius)) scaleX(1);
  }

  62%,
  100% {
    opacity: 0;
    transform: rotate(var(--angle)) translateX(calc(var(--radius) * 1.15)) scaleX(0.3);
  }
}

@keyframes season-firework-drop {
  0%,
  24% {
    transform: translateY(0);
  }

  62%,
  100% {
    transform: translateY(14px);
  }
}

/* Halloween: a small spider bobbing on its thread over the open hero space.
   The web clips the thread at the navbar so it never crosses the nav links. */
.web {
  position: absolute;
  top: var(--vp-nav-height);
  right: max(28px, calc((100% - 1152px) / 2 + 150px));
  width: 40px;
  height: 320px;
  overflow: hidden;
}

.spider {
  position: absolute;
  top: -60px;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--season-spider);
  animation: season-bob 5s ease-in-out infinite alternate;
}

.spider::before {
  width: 1px;
  height: 110px;
  content: "";
  background: color-mix(in srgb, currentColor 45%, transparent);
}

.spider svg {
  width: 30px;
  height: 30px;
  margin-top: -9px;
}

@media (min-width: 960px) {
  .spider::before {
    height: 200px;
  }

  .spider svg {
    width: 40px;
    height: 40px;
    margin-top: -12px;
  }
}

@keyframes season-bob {
  from {
    transform: translateY(-14px);
  }

  to {
    transform: translateY(16px);
  }
}

/* Lunar New Year: two lanterns swaying on cords hung from the navbar. */
.lantern {
  position: absolute;
  top: var(--vp-nav-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-origin: top center;
  animation: season-swing 4.5s ease-in-out infinite alternate;
}

.lantern::before {
  width: 1px;
  height: var(--cord);
  content: "";
  background: color-mix(in srgb, #d4a017 70%, transparent);
}

.lantern svg {
  width: var(--lantern-size);
  height: calc(var(--lantern-size) * 1.6);
  margin-top: -10%;
}

.lantern-1 {
  --cord: 40px;
  --lantern-size: 44px;

  right: max(24px, calc((100% - 1152px) / 2 + 210px));
}

.lantern-2 {
  --cord: 100px;
  --lantern-size: 34px;

  right: max(80px, calc((100% - 1152px) / 2 + 120px));
  animation-delay: -2s;
}

@media (max-width: 639px) {
  .lantern-1 {
    --cord: 12px;
    --lantern-size: 30px;

    right: 70px;
  }

  .lantern-2 {
    --cord: 40px;
    --lantern-size: 24px;

    right: 24px;
  }
}

@keyframes season-swing {
  from {
    transform: rotate(-4deg);
  }

  to {
    transform: rotate(4deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .season-scene,
  .spider,
  .lantern {
    animation: none;
  }

  .particle:not(.twinkle),
  .burst {
    display: none;
  }

  .twinkle {
    animation: none;
    opacity: calc(var(--opacity) * 0.7);
  }
}
</style>
