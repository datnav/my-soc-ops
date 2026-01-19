import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center transition-all duration-150 select-none min-h-[70px] text-xs leading-snug font-bold marker-text';

  let stateClasses = 'bg-paper text-sketch';
  let borderStyle: React.CSSProperties = { borderRadius: '10px 6px 12px 8px', border: '2.5px solid #8b7355' };

  if (square.isMarked) {
    if (isWinning) {
      stateClasses = 'bg-bingo text-white shadow-lg';
      borderStyle = { ...borderStyle, border: '3px solid #c41e3a', boxShadow: '3px 3px 0 rgba(255, 107, 157, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.3)' };
    } else {
      // Alternate marked colors for variety
      const useAltColor = square.id % 3 === 0;
      stateClasses = useAltColor ? 'bg-marked-alt text-sketch' : 'bg-marked text-sketch';
      const borderColor = useAltColor ? '#56ab91' : '#f4a460';
      borderStyle = { ...borderStyle, border: `3px solid ${borderColor}`, boxShadow: `2px 2px 0 rgba(139, 115, 85, 0.2)` };
    }
  } else if (!square.isFreeSpace) {
    borderStyle = { ...borderStyle, boxShadow: 'inset 0 0 0 1px rgba(139, 115, 85, 0.1)' };
  }

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} hover:scale-105 active:scale-95`}
      style={{
        ...borderStyle,
        transform: square.isFreeSpace ? 'rotate(0deg)' : `rotate(${(square.id % 3 - 1) * 1.5}deg)`,
      }}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-xl">✓</span>
      )}
    </button>
  );
}
