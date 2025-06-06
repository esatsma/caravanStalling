import {Button, StyleSheet, TextInput, View, Text} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import {Formik} from "formik";
import PocketBase from 'pocketbase'
import {Link} from "expo-router";

type formValues = { email: string, password: string }
export default function MijnStalling() {


    const submitLogin = (values: formValues) => {
        console.log('loggin in')
    }

    const validateEmail = () => {

    }

    const validatePassword = () => {

    }

    const pb = new PocketBase('http://127.0.0.1:8090');

    const checkUserData = async() => {
        // authenticate as auth collection record
        const userData = await pb.collection('users').authWithPassword('lisetteatsma@gmail.com', 'difFov-kefcuc-ruvfi3');

        console.log(userData)

    }

    checkUserData()

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
<View style={styles.loginContainerStyle}>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={values => submitLogin(values)}>
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder={'E-mailadres'}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                autoComplete={'email'}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder={'Wachtwoord'}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                autoComplete={'current-password'}
                                secureTextEntry
                            />
                            <Button onPress={() => handleSubmit} title="Inloggen"/>
                            <Text>Heb je nog geen account? </Text>
                            <Link href={"/createAccount"}>Account aanmaken</Link>
                        </View>
                    )}
                </Formik>
            </View>
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
