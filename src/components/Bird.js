import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { BIRD_X, BIRD_SIZE } from '../game/gameConstants';

export default function Bird({ bird, positionY, isPlaying }) {
  const floatAnim = useRef(new Animated.Value(0)).current;
  const tiltAnim = useRef(new Animated.Value(0)).current;
  const animRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      animRef.current = Animated.loop(
        Animated.sequence([
          Animated.timing(floatAnim, {
            toValue: -5,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(floatAnim, {
            toValue: 5,
            duration: 600,
            useNativeDriver: true,
          }),
        ])
      );
      animRef.current.start();
    } else {
      animRef.current?.stop();
      floatAnim.setValue(0);
    }

    return () => animRef.current?.stop();
  }, [isPlaying, floatAnim]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: BIRD_X,
        top: positionY,
        width: BIRD_SIZE,
        height: BIRD_SIZE,
        transform: [{ translateY: floatAnim }],
      }}
    >
      <Animated.Image
        source={bird.game}
        style={{
          width: BIRD_SIZE,
          height: BIRD_SIZE,
          resizeMode: 'contain',
        }}
      />
    </Animated.View>
  );
}