import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-paper border-b-4 border-sketch relative">
        <button
          onClick={onReset}
          className="text-sketch text-lg font-bold px-4 py-2 rough-doodle bg-paper active:scale-95 transition-transform marker-text"
        >
          ← Back
        </button>
        <h1 className="text-3xl font-bold text-accent marker-text" style={{ transform: 'rotate(-1deg)' }}>Soc Ops</h1>
        <div className="w-20"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-sketch text-lg py-4 px-4 font-bold marker-text" style={{ transform: 'skewY(-1deg)' }}>
        Tap a square when you find someone who matches it ✨
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-bingo text-white text-center py-3 font-bold text-2xl marker-text animate-[doodle-appear_0.3s_ease-out]"
          style={{
            boxShadow: '3px 3px 0 rgba(139, 115, 85, 0.2)',
            transform: 'skewX(-2deg) rotate(1deg)'
          }}
        >
          🎉 BINGO! You got a line! 🎉
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-4">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
