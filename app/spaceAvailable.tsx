import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function spaceAvailable() {
    return (
        <ThemedView style={styles.container}
            >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Mogelijk hebben we een plekje voor je!</ThemedText>
            </ThemedView>
        </ThemedView>
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
    container: {
        flex: 1,
    }
});
