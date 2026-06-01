import React from 'react';
import { View } from 'react-native';
import { COLORS, styles } from '../styles/Estilo';
import { CEILING_Y, OBSTACLE_GAP } from '../game/gameConstants';

export default function Obstacle({ x, height, gap, passed, birdColor }) {
  const pipeColor = passed ? birdColor : COLORS.white;
  const innerColor = passed ? birdColor : COLORS.background;

  return (
    <View
      style={{
        position: 'absolute',
        left: x,
        top: CEILING_Y,        
      }}
    >
      {/* Cano superior */}
      <View
        style={[
          styles.pipe,
          {
            height,
            borderColor: pipeColor,
          },
        ]}
      >
        <View style={[styles.inner, { backgroundColor: innerColor }]} />
      </View>

      <View style={{ height: gap }} />

      <View
        style={[
          styles.pipe,
          {
            height: 700,
            borderColor: pipeColor,
          },
        ]}
      >
        <View style={[styles.inner, { backgroundColor: innerColor }]} />
      </View>
    </View>
  );
}