interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 relative overflow-hidden">
      {/* Decorative doodles */}
      <div className="absolute top-8 left-8 text-4xl opacity-40 animate-[sketchy-line_2s_ease-in-out_infinite]">✏️</div>
      <div className="absolute bottom-12 right-6 text-5xl opacity-30 animate-[sketchy-line_3s_ease-in-out_infinite_0.5s]">🎲</div>
      <div className="absolute top-1/4 right-12 text-3xl opacity-25 animate-pulse">★</div>

      <div className="text-center max-w-sm z-10">
        <h1 className="text-7xl font-bold text-accent mb-1 marker-text" style={{ transform: 'rotate(-2deg)' }}>Soc Ops</h1>
        <p className="text-3xl text-sketch mb-12 font-bold" style={{ transform: 'rotate(1deg)' }}>Social Bingo</p>
        
        <div className="doodle-border bg-paper p-6 mb-8" style={{ transform: 'rotate(-1deg)' }}>
          <h2 className="text-2xl font-bold text-sketch mb-4 marker-text">How to play</h2>
          <ul className="text-left text-sketch text-lg space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">👥</span>
              <span>Find people who match</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">☑️</span>
              <span>Tap a square when found</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🎉</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-white font-bold py-5 px-8 text-2xl active:bg-accent-light transition-all duration-150 marker-text rough-doodle hover:shadow-lg hover:scale-105"
          style={{ transform: 'rotate(0.5deg)' }}
        >
          Start Game →
        </button>
      </div>
    </div>
  );
}
