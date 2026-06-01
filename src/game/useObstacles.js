import { useState, useEffect, useRef, useCallback } from 'react';
import {
  OBSTACLE_SPEED,
  OBSTACLE_GAP,
  OBSTACLE_MIN_H,
  OBSTACLE_MAX_H,
  OBSTACLE_SPAWN_MS,
  OBSTACLE_MOVE_MS,
  OBSTACLE_WIDTH,
  BIRD_X,
  BIRD_SIZE,
  CEILING_Y,
} from './gameConstants';

function createObstacle(screenWidth) {
  return {
    id: `obs_${Date.now()}_${Math.random().toString(36).slice(2)}`,
    x: screenWidth + 20,
    height: Math.floor(
      Math.random() * (OBSTACLE_MAX_H - OBSTACLE_MIN_H) + OBSTACLE_MIN_H
    ),
    gap: OBSTACLE_GAP,
    passed: false,
  };
}

export function useObstacles(
  gameState,
  birdY,
  screenWidth,
  onScore,
  onGameOver,
  playSfx
) {
  const [obstacles, setObstacles] = useState([]);

  const birdYRef = useRef(birdY);
  const onScoreRef = useRef(onScore);
  const onGameOverRef = useRef(onGameOver);
  const gameOverCalledRef = useRef(false);
  const playSfxRef = useRef(playSfx);

  useEffect(() => {
    playSfxRef.current = playSfx;
  }, [playSfx]);

  useEffect(() => {
    birdYRef.current = birdY;
  }, [birdY]);

  useEffect(() => {
    onScoreRef.current = onScore;
  }, [onScore]);

  useEffect(() => {
    onGameOverRef.current = onGameOver;
  }, [onGameOver]);

  useEffect(() => {
    if (gameState !== 'playing') return;

    const interval = setInterval(() => {
      setObstacles((prev) => [...prev, createObstacle(screenWidth)]);
    }, OBSTACLE_SPAWN_MS);

    return () => clearInterval(interval);
  }, [gameState, screenWidth]);

  useEffect(() => {
    if (gameState !== 'playing') return;

    const interval = setInterval(() => {
      setObstacles((prev) => {
        const currentBirdY = birdYRef.current;

        const updated = prev
          .map((obs) => {
            const newX = obs.x - OBSTACLE_SPEED;

            if (!obs.passed && newX + OBSTACLE_WIDTH < BIRD_X) {
              onScoreRef.current?.();
              playSfxRef.current?.(require('../assets/sounds/successful.mp3'));
              return { ...obs, x: newX, passed: true };
            }

            return { ...obs, x: newX };
          })
          .filter((obs) => obs.x > -OBSTACLE_WIDTH - 20);

        if (!gameOverCalledRef.current) {
          const hit = updated.some((obs) => checkCollision(currentBirdY, obs));
          if (hit) {
            gameOverCalledRef.current = true;
            onGameOverRef.current?.();
          }
        }

        return updated;
      });
    }, OBSTACLE_MOVE_MS);

    return () => clearInterval(interval);
  }, [gameState]);

  const resetObstacles = useCallback(() => {
    setObstacles([]);
    gameOverCalledRef.current = false;
  }, []);

  return { obstacles, resetObstacles };
}

function checkCollision(birdY, obs) {
  const padding = 4;

  const birdTop = birdY + padding;
  const birdBottom = birdY + BIRD_SIZE - padding;
  const birdLeft = BIRD_X + padding;
  const birdRight = BIRD_X + BIRD_SIZE - padding;

  const obsLeft = obs.x;
  const obsRight = obs.x + OBSTACLE_WIDTH;

  const horizontalOverlap = birdRight > obsLeft && birdLeft < obsRight;
  if (!horizontalOverlap) return false;

  const topPipeBottom = obs.height + CEILING_Y;
  const bottomPipeTop = topPipeBottom + obs.gap;

  return birdTop < topPipeBottom || birdBottom > bottomPipeTop;
}
