import {StyleSheet} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';

import {useAuthStore} from "@/stores/authStore";
import LoginForm from "@/components/LoginForm";
import {ThemedText} from "@/components/ThemedText";

export default function MijnStalling() {
    const { isAuthenticated } = useAuthStore()

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={
                <IconSymbol
                    size={310}
                    color="#808080"
                    name="tent.2"
                    style={styles.headerImage}
                />
            }>
            {isAuthenticated}
            {!isAuthenticated ? <LoginForm /> : <ThemedText>Hello user!</ThemedText>}
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
    inputContainer: {
        padding: 16,
        gap: 32,
        alignContent: 'center'
    },
    textInput: {
        height: 30,
        fontSize: 16,
        borderBottomWidth: 1,
        paddingBottom: 4,
        borderColor: '#808080'
    },
    loginContainerStyle: {
        gap: 16,
        padding: 16
    }
});
