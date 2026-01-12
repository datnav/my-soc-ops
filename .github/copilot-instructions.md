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

## Resources

- `.lab/GUIDE.md` — Full workshop guide
- `.github/instructions/frontend-design.instructions.md` — UI/UX philosophy
- `.github/instructions/tailwind-4.instructions.md` — Tailwind v4 patterns
