interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-sketch/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div 
        className="bg-paper p-8 max-w-sm w-full text-center rough-doodle animate-[doodle-appear_0.4s_cubic-bezier(0.34,1.56,0.64,1)]" 
        style={{
          border: '4px solid #ff6b9d',
          boxShadow: '6px 6px 0 rgba(139, 115, 85, 0.25), inset 0 0 0 2px rgba(255, 251, 240, 0.8)',
          transform: 'rotate(-2deg) scale(1)'
        }}
      >
        <div className="text-7xl mb-6 animate-[sketchy-line_0.6s_ease-in-out_infinite] inline-block">🎉</div>
        <h2 className="text-5xl font-bold text-bingo mb-3 marker-text" style={{ transform: 'rotate(-1deg)' }}>BINGO!</h2>
        <p className="text-2xl text-sketch mb-8 font-bold marker-text">You completed a line! 🌟</p>
        
        {/* Celebratory doodles */}
        <div className="flex justify-around mb-6 text-3xl opacity-60">
          <span>✨</span>
          <span>⭐</span>
          <span>✨</span>
        </div>

        <button
          onClick={onDismiss}
          className="w-full bg-accent text-white font-bold py-4 px-6 text-xl active:scale-95 transition-transform marker-text rough-doodle hover:shadow-lg"
          style={{
            border: '3px solid #ff8c8c',
            boxShadow: '3px 3px 0 rgba(139, 115, 85, 0.15)',
            transform: 'rotate(1deg)'
          }}
        >
          Keep Playing ✨
        </button>
      </div>
    </div>
  );
}
