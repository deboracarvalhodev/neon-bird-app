import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles, COLORS } from '../styles/Estilo';

export default function InstructionsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>COMO JOGAR</Text>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Feather name="target" size={20} color={COLORS.neonPink} />
          <Text style={styles.cardTitle}>Objetivo</Text>
        </View>

        <Text style={styles.cardText}>
          Desvie dos obstáculos e sobreviva o maior tempo possível. Restaure as cores da cidade!
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Feather name="feather" size={20} color={COLORS.neonPink} />
          <Text style={styles.cardTitle}>Seu Pássaro</Text>
        </View>

        <Text style={styles.cardText}>
          Escolha um pássaro. A cor dele influencia os efeitos visuais do jogo.
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Feather name="play-circle" size={20} color={COLORS.neonPink} />
          <Text style={styles.cardTitle}>Controles</Text>
        </View>

        <Text style={styles.cardText}>
          Toque na tela para subir. Controle o ritmo para não cair ou subir demais.
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Feather name="alert-circle" size={20} color={COLORS.neonPink} />
          <Text style={styles.cardTitle}>Dica</Text>
        </View>

        <Text style={styles.cardText}>
          Mantenha o ritmo para evitar colisões. Ao passar por um obstáculo, ele reage com a cor do seu pássaro.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
