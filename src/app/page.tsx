'use client';

import { useTetris } from '@/hooks';
import { GameStatus } from '@/types';

export default function Home() {
  const { board, status, startGame, resetGame } = useTetris();

  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      {status === GameStatus.PENDING && (
        <button onClick={startGame}>START GAME</button>
      )}
      {status === GameStatus.OVER && (
        <button onClick={resetGame}>GAME OVER</button>
      )}
      {status === GameStatus.PLAYING && (
        <div className='w-[400px] h-[800px] flex flex-col border-l border-t border-gray-400'>
          {board.map((row, y) => {
            return (
              <div key={y} className='w-full flex-1 flex'>
                {row.map((cell, x) => {
                  return (
                    <div
                      key={x}
                      className='flex-1 h-full border-r border-b border-gray-400'
                      style={{ backgroundColor: cell.color }}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
