# Copilot Instructions for Soc Ops

## Development Checklist

- [ ] `npm run lint` — ESLint passes with no warnings
- [ ] `npm run build` — TypeScript and Vite build successfully
- [ ] `npm run test` — All 21 tests pass in bingoLogic.test.ts

## Project Overview

**Soc Ops** is a social bingo game for in-person networking events. Players tap squares matching questions, aiming for 5 in a row to win.

**Tech**: React 19 + TypeScript 5.9, Vite 7.2, Tailwind CSS 4, Vitest

## Architecture

**Core Flow**: App.tsx → useBingoGame hook (state) → bingoLogic.ts (pure game logic)

Key components:
- **App.tsx** — Routes between StartScreen and GameScreen
- **useBingoGame** — State management with localStorage persistence (STORAGE_VERSION = 1)
- **bingoLogic.ts** — Pure functions: generateBoard (Fisher-Yates shuffle), toggleSquare, checkBingo, getWinningSquareIds
- **src/data/questions.ts** — Customization point for questions (must have ≥24) and FREE_SPACE

**Types** in `src/types/index.ts`: BingoSquareData, BingoLine, GameState

## Key Patterns

- **State**: React hooks only (no Redux), localStorage validated with validateStoredData()
- **Components**: Container (App) + Screens (StartScreen, GameScreen) + UI (BingoBoard, BingoSquare, BingoModal)
- **Testing**: bingoLogic.test.ts uses Vitest; validates Fisher-Yates, free space behavior, winning lines
- **Styling**: Tailwind CSS v4 utility-first in JSX, global styles in src/index.css

## Common Tasks

- **Add question**: Edit src/data/questions.ts (auto-reload)
- **Modify game logic**: Update bingoLogic.ts functions + add tests
- **Change UI**: Edit src/components/ with Tailwind classes
- **Debug state**: Check useBingoGame hook → localStorage (DevTools > Application)

## Critical Constraints

- Fixed 5×5 board (25 squares), center at index 12 (always marked, never toggleable)
- Questions: ≥24 unique (24 shuffled + 1 free space)
- Winning lines: Complete rows/columns/diagonals only
- Dev: Use `npm run dev` (runs with --host for devcontainers)

## Design Guide: Notebook Doodle Sketch Aesthetic

**Vision**: Playful, hand-drawn notebook aesthetic with organic imperfection, warm bright colors, and marker/crayon typography.

### Color Palette

All colors defined in `src/index.css` via `@theme`:

| Token | Hex | Purpose |
|-------|-----|---------|
| `--color-accent` | `#ff6b6b` | Primary action buttons, main accents |
| `--color-accent-light` | `#ff8c8c` | Button hover/active states |
| `--color-marked` | `#ffd93d` | Marked squares (yellow variant) |
| `--color-marked-alt` | `#a8e6cf` | Marked squares alt (mint variant) |
| `--color-marked-border` | `#f4a460` | Marked square borders (orange) |
| `--color-marked-border-alt` | `#56ab91` | Alt marked borders (green) |
| `--color-bingo` | `#ff6b9d` | Winning line highlight (hot pink) |
| `--color-paper` | `#fffbf0` | Paper background (cream) |
| `--color-sketch` | `#8b7355` | Text, borders, sketch elements (brown) |

### Typography

- **Font**: `'Caveat'` (Google Fonts, hand-drawn marker style)
- **Weights**: 400 (regular), 700 (bold)
- **Fallback**: System fonts for unsupported browsers
- **Text styling**: `.marker-text` class applies text-shadow for depth

### Key CSS Classes & Effects

**Doodle Borders**
```css
.doodle-border — Sketchy box with rounded asymmetrical corners, subtle shadows
.rough-doodle — Organic border-radius (12px 6px 14px 8px), sketch brown border
```

**Animations**
```css
@keyframes sketchy-line — Subtle rotate/scale wobble (2-3s) for floating elements
@keyframes doodle-appear — Pop-in scale + rotate for celebratory moments
```

**Background**
- Body: Cream radial-gradient dotted pattern (24px grid), simulates notebook paper with organic dots

### Component Design Notes

| Component | Style Details |
|-----------|---|
| **StartScreen** | Decorative floating doodles (✏️🎲⭐), rotated title/subtitle, dotted-border instruction card, chunky button with arrow |
| **GameScreen Header** | Brown dashed border-bottom, rotated title, sketchy back button |
| **BingoBoard** | Dashed 3px border container, rough corners, shadow effect, rotated -0.5deg |
| **BingoSquare** | Asymmetrical corners, unique subtle rotation (±1.5deg based on position), no rotation for free space; alternates between yellow/mint when marked, hot pink + white for winning line |
| **BingoModal** | 4px hot pink border, thick doodle frame, animated celebratory emoji, star/sparkle doodles, bouncy pop-in animation |

### Adding New Styles

**Maintain consistency**:
1. Use color tokens from `@theme` (never hardcode colors)
2. Apply `.rough-doodle` or `.doodle-border` for borders
3. Add subtle rotation via inline `style={{ transform: 'rotate(Xdeg)' }}`
4. Use `.marker-text` for all headlines/labels
5. Avoid perfect right angles; prefer organic border-radius values (e.g., `8px 12px 10px 6px`)

**New animations**: Define in `@keyframes` at top of `src/index.css`, reference via `animate-[keyframe_duration]`

### Fonts & Web Resources

Google Fonts import already configured in `src/index.css`:
```
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
```

No additional fonts needed; Caveat covers marker aesthetic fully.

## Resources

- `.lab/GUIDE.md` — Full workshop guide
- `.github/instructions/frontend-design.instructions.md` — UI/UX philosophy
- `.github/instructions/tailwind-4.instructions.md` — Tailwind v4 patterns
