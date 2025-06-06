import { Image } from 'expo-image';
import {StyleSheet} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Link} from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/stalling.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Atsma Caravanstalling</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Check of we nog ruimte hebben.</ThemedText>
          <ThemedText type="defaultSemiBold">Ik heb een</ThemedText>
          <Link style={styles.button} href={'/spaceAvailable'} >Vouwwagen</Link>
          <Link style={styles.button} href={'/noSpaceAvailable'}>Camper</Link>
          <Link style={styles.button} href={'/noSpaceAvailable'} >Caravan</Link>
          <Link style={styles.button} href={'/noSpaceAvailable'}>Caravan langer dan 5 meter</Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    marginBottom: 8,
    gap: 4
  },
  reactLogo: {
    height: 178,
    width: 500,
    bottom: 0,
    gap: 8,
    left: 0,
    position: 'absolute',
  },
  button: {
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#1881a7',
    color: '#FFFFFF',
    fontWeight: "bold",
    fontSize: 20,
    borderRadius: 8
  }
});
