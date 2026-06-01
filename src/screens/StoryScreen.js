import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles, COLORS } from '../styles/Estilo';

export default function StoryScreen({ navigation }) {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const phrase1 = 'A cidade de Neon Bird perdeu suas cores...';
  const phrase2 = 'Ajude os pássaros a restaurá-las!';

  const typeText = (fullText, onFinish) => {
    let index = 0;
    setText('');

    const interval = setInterval(() => {
      index++;

      setText(fullText.slice(0, index));

      if (index >= fullText.length) {
        clearInterval(interval);
        onFinish && onFinish();
      }
    }, 40);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    const start = setTimeout(() => {
      typeText(phrase1, () => {
        setTimeout(() => setPhase(1), 2000);
      });
    }, 500);

    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    if (phase === 1) {
      typeText(phrase2, () => {
        setTimeout(() => setShowButton(true), 800);
      });
    }
  }, [phase]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/banner-neon-bird.png')}
        style={{
          width: '100%',
          height: '50%',
          resizeMode: 'contain',
        }}
      />

      <Text
        style={[
          styles.text,
          {
            fontSize: 16,
            color: COLORS.white,
            textAlign: 'center',
            marginTop: 20,
          },
        ]}>
        {text}
      </Text>

      {showButton && (
        <TouchableOpacity
          style={[styles.button, { marginTop: 40 }]}
          onPress={() => navigation.navigate('SelectBird')}>
          <Text style={styles.buttonText}>CONTINUAR</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
