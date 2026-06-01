import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS, styles } from '../styles/Estilo';
import { Feather } from '@expo/vector-icons';

export default function Header({ score, time, onPause, onQuit, isPaused }) {
  return (
    <View style={styles.containerHeader}>
      <View>
        <Text style={styles.text}>Obstáculos: {score}</Text>
        <Text style={styles.text}>Tempo: {time}s</Text>
      </View>

      <View style={styles.buttonsHeader}>
        <TouchableOpacity onPress={onPause} hitSlop={12}>
          <Feather
            name={isPaused ? 'play' : 'pause'}
            size={24}
            color={COLORS.neonYellow}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onQuit} style={{ marginLeft: 20 }} hitSlop={12}>
          <Feather name="x-circle" size={24} color={COLORS.neonPink} />
        </TouchableOpacity>
      </View>
    </View>
  );
}