import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import {Link} from "expo-router";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Contact</ThemedText>
      </ThemedView>
        <ThemedText>
            Atsma Caravan Stalling bevind zich op:
        </ThemedText>
        <ThemedText>
            Wrakkenpad 14-2
        </ThemedText>
        <ThemedText>
            8312 PX Creil
        </ThemedText>

      <ThemedText>
          Wij zijn vrijblijvend telefonisch bereikbaar op <Link href={"tel:0620491038"}>0620491038</Link>
      </ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
