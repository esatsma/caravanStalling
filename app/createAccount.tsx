import {Button, ScrollView, StyleSheet, TextInput, View} from 'react-native';

import {Formik} from "formik";
import PocketBase from "pocketbase";
import {useAuthStore} from "@/stores/authStore";

export type accountCreationFormValues = { email: string, password: string, passwordConfirm: string }
export default function MijnStalling() {
    const {createAccount} = useAuthStore()

    return (
        <ScrollView style={{flex: 1}}
          >
            <View style={styles.loginContainerStyle}>
                <Formik
                    initialValues={{ email: '', password: '', passwordConfirm: '' }}
                    onSubmit={values => createAccount(values)}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
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
                                secureTextEntry
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder={'Wachtwoord bevestigen'}
                                onChangeText={handleChange('passwordConfirm')}
                                onBlur={handleBlur('passwordConfirm')}
                                value={values.passwordConfirm}
                                secureTextEntry
                            />

                            <Button onPress={() => handleSubmit()} title={"Account aanmaken"} />
                        </View>
                    )}
                </Formik>
            </View>
        </ScrollView>
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
