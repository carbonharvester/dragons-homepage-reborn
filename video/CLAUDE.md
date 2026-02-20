# Kapes Video Ads - Remotion Project

## Remotion Skills Reference

When working with Remotion code in this project, consult the following skill files for best practices:

- [Animations](remotion-skills/skills/remotion/rules/animations.md) - Fundamental animation patterns
- [Transitions](remotion-skills/skills/remotion/rules/transitions.md) - Scene transition patterns (TransitionSeries, fade, slide, wipe)
- [Timing](remotion-skills/skills/remotion/rules/timing.md) - Interpolation curves, easing, spring animations
- [Text Animations](remotion-skills/skills/remotion/rules/text-animations.md) - Typography and text animation patterns
- [Assets](remotion-skills/skills/remotion/rules/assets.md) - Importing images, videos, audio, and fonts
- [Audio](remotion-skills/skills/remotion/rules/audio.md) - Audio handling, volume, trimming
- [Videos](remotion-skills/skills/remotion/rules/videos.md) - Embedding and trimming video clips
- [Images](remotion-skills/skills/remotion/rules/images.md) - Embedding images with Img component
- [Fonts](remotion-skills/skills/remotion/rules/fonts.md) - Loading Google Fonts and local fonts
- [Compositions](remotion-skills/skills/remotion/rules/compositions.md) - Defining compositions and default props
- [Sequencing](remotion-skills/skills/remotion/rules/sequencing.md) - Sequence patterns for delay, trim, duration
- [Light Leaks](remotion-skills/skills/remotion/rules/light-leaks.md) - Light leak overlay effects
- [Charts](remotion-skills/skills/remotion/rules/charts.md) - Data visualization patterns
- [Captions/Subtitles](remotion-skills/skills/remotion/rules/subtitles.md) - Caption and subtitle handling
- [Voiceover](remotion-skills/skills/remotion/rules/voiceover.md) - AI voiceover with ElevenLabs
- [Full SKILL.md](remotion-skills/skills/remotion/SKILL.md) - Complete skill index

## Project Structure

- `src/Root.tsx` - Composition registry (4 compositions: 2 ads x landscape/portrait)
- `src/KapesMirrorTestAd.tsx` - "Mirror Test" ad (Angle 3) - ethical trip assessment hook
- `src/KapesAntiVoluntourismAd.tsx` - "Anti-Voluntourism" ad (Angle 1) - community-first messaging
- `public/farming/` - 105 Kenya photography assets
- `public/kapes-logo.png` - Brand logo
- `public/music/bg-track.mp3` - Background music track

## Brand Constants

- Orange: `#FF7700`
- Charcoal: `#1A1A1A`
- Cream: `#FAFAF8`
- Font: Inter (system fallback chain)

## Key Packages

- `remotion` + `@remotion/cli` - Core
- `@remotion/transitions` - TransitionSeries with fade, slide, wipe
- `@remotion/noise` - Procedural noise for film grain
- `@remotion/animation-utils` - Transform composition, style interpolation
- `@remotion/motion-blur` - Camera motion blur effects

## Commands

- `npm start` - Launch Remotion Studio
- `npm run build:all` - Render all 4 video variants
