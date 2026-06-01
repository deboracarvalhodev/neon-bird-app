import Routes from './src/routes/routes';
import { StatusBar } from 'expo-status-bar';

import { useFonts } from 'expo-font';
import { Orbitron_700Bold } from '@expo-google-fonts/orbitron';
import { Rajdhani_400Regular } from '@expo-google-fonts/rajdhani';

import { AudioProvider } from './src/context/AudioContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Orbitron: Orbitron_700Bold,
    Rajdhani: Rajdhani_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AudioProvider>
      <StatusBar style="light" />
      <Routes />
    </AudioProvider>
  );
}