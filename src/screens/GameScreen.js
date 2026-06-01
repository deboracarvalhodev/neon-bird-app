import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View,
  Pressable,
  Text,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from 'react-native';
import { COLORS, styles } from '../styles/Estilo';
import { gameStyles } from '../styles/GameEstilo';
import { Feather } from '@expo/vector-icons';

import Header from '../components/Header';
import Bird from '../components/Bird';
import Obstacle from '../components/Obstacle';

import { useGameLoop } from '../game/useGameLoop';
import { useObstacles } from '../game/useObstacles';
import { SCREEN_WIDTH } from '../game/gameConstants';
import { useAudio } from '../context/AudioContext';

export default function GameScreen({ route, navigation }) {
  const { bird } = route.params;
  const { playSfx } = useAudio();
  const backgroundImage = require('../assets/images/bg-game.jpg');

  const [gameState, setGameState] = useState('countdown');
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [countdown, setCountdown] = useState(5);
  const countdownAnim = useRef(new Animated.Value(1)).current;

  const handleGameOver = useCallback(() => {
    playSfx(require('../assets/sounds/hit.mp3'));
    setGameState('gameover');
  }, [playSfx]);

  const handleScore = useCallback(() => {
    setScore((s) => {
      const next = s + 1;
      setBestScore((b) => Math.max(b, next));
      return next;
    });
  }, []);

  const { birdY, jump, resetBird } = useGameLoop(
    gameState,
    handleGameOver,
    playSfx
  );

  const { obstacles, resetObstacles } = useObstacles(
    gameState,
    birdY,
    SCREEN_WIDTH,
    handleScore,
    handleGameOver,
    playSfx
  );

  // contagem regressiva
  useEffect(() => {
    if (gameState !== 'countdown') return;

    setCountdown(5);

    let current = 5;

    const tick = () => {
      countdownAnim.setValue(0);
      Animated.sequence([
        Animated.spring(countdownAnim, {
          toValue: 1.3,
          useNativeDriver: true,
          speed: 20,
          bounciness: 8,
        }),
        Animated.timing(countdownAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    };

    tick();

    const interval = setInterval(() => {
      current -= 1;

      if (current <= 0) {
        clearInterval(interval);
        setGameState('playing');
        return;
      }

      setCountdown(current);
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState, countdownAnim]);

  useEffect(() => {
    if (gameState !== 'playing') return;

    const interval = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [gameState]);

  const togglePause = useCallback(() => {
    setGameState((prev) => (prev === 'playing' ? 'paused' : 'playing'));
  }, []);

  const restartGame = () => {
    resetBird();
    resetObstacles();
    setScore(0);
    setTime(0);
    setGameState('countdown');
  };

  const quitGame = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <ImageBackground
      source={backgroundImage}
      style={gameStyles.root}
      resizeMode="cover">
      <Header
        score={score}
        time={time}
        onPause={togglePause}
        onQuit={quitGame}
        isPaused={gameState === 'paused'}
      />

      <Pressable style={gameStyles.gameArea} onPress={jump} accessible={false}>
        <Bird
          bird={bird}
          positionY={birdY}
          isPlaying={gameState === 'playing'}
        />

        {obstacles.map((obs) => (
          <Obstacle
            key={obs.id}
            x={obs.x}
            height={obs.height}
            gap={obs.gap}
            passed={obs.passed}
            birdColor={bird.color}
          />
        ))}
      </Pressable>

      {gameState === 'countdown' && (
        <View style={gameStyles.overlay} pointerEvents="none">
          <Text style={gameStyles.countdownLabel}>PREPARE-SE</Text>
          <Animated.Text
            style={[
              gameStyles.countdownNumber,
              { transform: [{ scale: countdownAnim }] },
            ]}>
            {countdown}
          </Animated.Text>
        </View>
      )}

      {gameState === 'paused' && (
        <View style={gameStyles.overlay}>
          <Text style={gameStyles.overlayTitle}>PAUSADO</Text>
          <TouchableOpacity style={gameStyles.overlayBtn} onPress={togglePause}>
            <Text style={gameStyles.overlayBtnText}>▶ CONTINUAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[gameStyles.overlayBtn, gameStyles.overlayBtnSecondary]}
            onPress={quitGame}>
            <Text style={gameStyles.overlayBtnText}>✕ SAIR</Text>
          </TouchableOpacity>
        </View>
      )}

      {gameState === 'gameover' && (
        <View style={gameStyles.overlay}>
          <Text style={gameStyles.overlayTitle}>GAME OVER</Text>

          <View style={gameStyles.scoreBoard}>
            <View style={gameStyles.scoreRow}>
              <Text style={gameStyles.scoreLabel}>OBSTÁCULOS</Text>
              <Text style={gameStyles.scoreValue}>{score}</Text>
            </View>
            <View style={gameStyles.scoreDivider} />
            <View style={gameStyles.scoreRow}>
              <Text style={gameStyles.scoreLabel}>TEMPO</Text>
              <Text style={gameStyles.scoreValue}>{time}s</Text>
            </View>
            <View style={gameStyles.scoreDivider} />
            <View style={gameStyles.scoreRow}>
              <Text style={gameStyles.scoreLabel}>RECORDE</Text>
              <Text
                style={[gameStyles.scoreValue, { color: COLORS.neonYellow }]}>
                {bestScore}
              </Text>
            </View>
          </View>

          <TouchableOpacity style={gameStyles.overlayBtn} onPress={restartGame}>
            <Feather name="rotate-ccw" size={20} color="#fff" />
            <Text style={gameStyles.overlayBtnText}>JOGAR NOVAMENTE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[gameStyles.overlayBtn, gameStyles.overlayBtnSecondary]}
            onPress={quitGame}>
            <Feather name="home" size={20} color="#fff" />
            <Text style={gameStyles.overlayBtnText}>MENU PRINCIPAL</Text>
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  );
}
