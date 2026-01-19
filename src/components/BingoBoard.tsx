import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div 
      className="grid grid-cols-5 gap-2 w-full max-w-md mx-auto aspect-square p-4 bg-paper rough-doodle"
      style={{
        border: '3px dashed #8b7355',
        boxShadow: '4px 4px 0 rgba(139, 115, 85, 0.15), inset 0 0 0 1px rgba(255, 179, 71, 0.2)',
        transform: 'rotate(-0.5deg)'
      }}
    >
      {board.map((square) => (
        <BingoSquare
          key={square.id}
          square={square}
          isWinning={winningSquareIds.has(square.id)}
          onClick={() => onSquareClick(square.id)}
        />
      ))}
    </div>
  );
}
