import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/Estilo';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo-neon-bird.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.menuBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Story')}>
          <Text style={styles.buttonText}>INICIAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Instructions')}>
          <Text style={styles.buttonText}>COMO JOGAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>CONFIGURAÇÕES</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Credits')}>
          <Text style={styles.buttonText}>CRÉDITOS</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.copyright}>© 2026 NEON BIRD - DEV.CARVALHO</Text>
    </View>
  );
}
