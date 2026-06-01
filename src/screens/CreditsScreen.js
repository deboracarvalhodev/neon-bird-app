import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { styles, COLORS } from '../styles/Estilo';

const openLink = async (url) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    console.log("Não foi possível abrir o link:", url);
  }
};

export default function CreditsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRÉDITOS</Text>

      <Text style={[styles.text, {fontSize: 20, fontWeight: 800}]}>NEON BIRD</Text>

      <Text style={styles.text}>Desenvolvido por: Débora Vieira Carvalho</Text>

      <Text style={styles.text}>Fatec Zona Leste</Text>

      <Text style={styles.text}>
        Desenvolvimento de Software Multiplataforma
      </Text>

      <Text style={styles.warning}>
        Essa aplicação é um projeto acadêmico da Fatec Zona Leste, criado apenas para
        fins de estudo. Não utilize as informações presentes aqui para uso real.
      </Text>

      <View style={styles.iconsRow}>
        <TouchableOpacity onPress={() => openLink('https://portfolio-devcarvalho.vercel.app/')}>
          <Feather name="globe" size={32} color={COLORS.neonPink} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => openLink('https://github.com/Debora-Carvalho/')}>
          <FontAwesome name="github" size={32} color={COLORS.neonGreen} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => openLink('https://www.linkedin.com/in/debora-vieira-carvalho-45a478205/')}>
          <FontAwesome name="linkedin" size={32} color={COLORS.neonBlue} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, {marginTop: 40}]}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>VOLTAR</Text>
      </TouchableOpacity>

      <Text style={styles.copyright}>© 2026 NEON BIRD - DEV.CARVALHO</Text>
    </View>
  );
}
