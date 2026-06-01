import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { styles } from "../styles/Estilo";

export default function LoadingScreen({ navigation }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          navigation.replace("Home");
          return 100;
        }
        return old + 5; 
      });
    }, 200);

    return () => clearInterval(interval);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo-neon-bird.png")} 
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${progress}%` }]} />
      </View>

      <Text style={styles.text}>{progress}%</Text>
    </View>
  );
}