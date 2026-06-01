import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react';
import { Audio } from 'expo-av';

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [sfxEnabled, setSfxEnabled] = useState(true);

  const bgSound = useRef(null);

  useEffect(() => {
    if (musicEnabled) {
      playMusic();
    } else {
      stopMusic();
    }
  }, [musicEnabled]);

  const playMusic = async () => {
    if (bgSound.current) return;

    const { sound } = await Audio.Sound.createAsync(
      require('../assets/sounds/bg.mp3'),
      {
        isLooping: true,
        volume: 0.2,
      }
    );

    bgSound.current = sound;
    await sound.playAsync();
  };

  const stopMusic = async () => {
    if (bgSound.current) {
      await bgSound.current.stopAsync();
      await bgSound.current.unloadAsync();
      bgSound.current = null;
    }
  };

  const playSfx = async (file) => {
    if (!sfxEnabled) return;

    const { sound } = await Audio.Sound.createAsync(file, {
      volume: 1.0,
    });

    await sound.playAsync();

    sound.setOnPlaybackStatusUpdate(async (status) => {
      if (status.didJustFinish) {
        await sound.unloadAsync();
      }
    });
  };

  return (
    <AudioContext.Provider
      value={{
        musicEnabled,
        setMusicEnabled,
        sfxEnabled,
        setSfxEnabled,
        playMusic,
        stopMusic,
        playSfx,
      }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
