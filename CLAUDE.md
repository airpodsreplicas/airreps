# AirReps Project Notes

## Adding new products/units

When adding a new AirPods replica model or version to the guide:
- Add the version-info and links pages as usual
- Update the sidebar and nav in `docs/.vitepress/config.ts`
- **Check if `/quiz` needs updating** — the Quiz component (`docs/.vitepress/components/Quiz.vue`) has product recommendations, product links, and decision logic that may need to include the new unit
