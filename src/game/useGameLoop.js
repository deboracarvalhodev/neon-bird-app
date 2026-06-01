import { useState, useEffect, useRef, useCallback } from 'react';
import {
  BIRD_START_Y,
  GRAVITY,
  JUMP_FORCE,
  MAX_FALL_SPEED,
  PHYSICS_TICK_MS,
  FLOOR_Y,
  CEILING_Y,
  BIRD_SIZE,
} from './gameConstants';


export function useGameLoop(gameState, onGameOver, playSfx) {
  const [birdY, setBirdY] = useState(BIRD_START_Y);
  const velocityRef = useRef(0);      
  const gameStateRef = useRef(gameState);

  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);

  useEffect(() => {
    if (gameState === 'playing');
  }, [gameState]);

  useEffect(() => {
    if (gameStateRef.current !== 'playing') return;

    const interval = setInterval(() => {
      velocityRef.current = Math.min(
        velocityRef.current + GRAVITY,
        MAX_FALL_SPEED
      );

      setBirdY((y) => {
        const newY = y + velocityRef.current;

        if (newY + BIRD_SIZE >= FLOOR_Y) {
          onGameOver();
          playSfx(require('../assets/sounds/hit.mp3'));
          return FLOOR_Y - BIRD_SIZE;
        }

        if (newY <= CEILING_Y) {
          velocityRef.current = 0;
          return CEILING_Y;
        }

        return newY;
      });
    }, PHYSICS_TICK_MS);

    return () => clearInterval(interval);
  }, [gameState, onGameOver, playSfx]);

  const jump = useCallback(() => {
    if (gameStateRef.current !== 'playing') return;
    velocityRef.current = JUMP_FORCE;
    playSfx(require('../assets/sounds/jump.mp3'));
  }, [playSfx]);

  const reset = useCallback(() => {
    velocityRef.current = 0;
    setBirdY(BIRD_START_Y);
  }, []);

  return { birdY, jump, resetBird: reset };
}