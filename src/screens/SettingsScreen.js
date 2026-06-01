import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useAudio } from "../context/AudioContext";
import { styles, COLORS } from "../styles/Estilo";

export default function SettingsScreen({ navigation }) {
  const {
    musicEnabled,
    setMusicEnabled,
    sfxEnabled,
    setSfxEnabled,
    playMusic,
    stopMusic,
  } = useAudio();

  const toggleMusic = () => {
    setMusicEnabled((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CONFIGURAÇÕES</Text>

      <TouchableOpacity
        style={[
          styles.settingsButton,
          musicEnabled ? styles.settingsButtonActive : null,
        ]}
        onPress={toggleMusic}
      >
        <Feather
          name={musicEnabled ? "volume-2" : "volume-x"}
          size={22}
          color={musicEnabled ? COLORS.neonGreen : COLORS.neonPink}
        />

        <Text
          style={[
            styles.settingsButtonText,
            musicEnabled ? { color: COLORS.neonGreen } : { color: COLORS.neonPink },
          ]}
        >
          MÚSICA DE FUNDO
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.settingsButton,
          sfxEnabled ? styles.settingsButtonActive : null,
        ]}
        onPress={() => setSfxEnabled(!sfxEnabled)}
      >
        <Feather
          name={sfxEnabled ? "zap" : "slash"}
          size={22}
          color={sfxEnabled ? COLORS.neonGreen : COLORS.neonPink}
        />

        <Text
          style={[
            styles.settingsButtonText,
            sfxEnabled ? { color: COLORS.neonGreen } : { color: COLORS.neonPink },
          ]}
        >
          EFEITOS SONOROS
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}