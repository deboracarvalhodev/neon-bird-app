import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { BIRDS } from "../data/birds";
import { styles } from "../styles/Estilo";

export default function SelectBirdScreen({ navigation }) {
  const [selectedBird, setSelectedBird] = useState(null);

  const handleSelect = (bird) => {
    setSelectedBird(bird);
  };

  const startGame = () => {
    if (!selectedBird) return;

    navigation.navigate("Game", {
      bird: selectedBird,
    });
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>SELECIONAR AVATAR</Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>

        {BIRDS.map((bird) => {
          const isSelected = selectedBird?.id === bird.id;

          return (
            <TouchableOpacity
              key={bird.id}
              onPress={() => handleSelect(bird)}
              style={[
                styles.birdBox,
                isSelected && styles.birdBoxSelected,
              ]}
            >
              <Image
                source={bird.preview}
                style={[
                  styles.imageBird,
                  { opacity: isSelected ? 1 : 0.4 },
                ]}
              />

              <Text style={styles.nameBird}>
                {bird.name}
              </Text>
            </TouchableOpacity>
          );
        })}

      </View>

      <TouchableOpacity
        style={[
          styles.button,
          { marginTop: 30, opacity: selectedBird ? 1 : 0.5 },
        ]}
        onPress={startGame}
      >
        <Text style={styles.buttonText}>INICIAR</Text>
      </TouchableOpacity>

    </View>
  );
}