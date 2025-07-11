import {Formik} from "formik";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {Link} from "expo-router";
import {useAuthStore} from "@/stores/authStore";
import {useState} from "react";
import {ThemedText} from "@/components/ThemedText";

const LoginForm = () => {
    const { login } = useAuthStore()
    const [hasError, setHasError] = useState<boolean>(false)
    type formValues = { email: string, password: string }

    const submitLogin = async(values: formValues) => {
        try {
            login(values.email, values.password);
        } catch(error) {
            setHasError(true)
        }
    }

    return <View style={styles.loginContainerStyle}>
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
                    {hasError && <ThemedText>Er ging iets verkeerd. Weet je zeker dat je het juiste e-mailadres en wachtwoord gebruikt hebt?</ThemedText>}
                    <Button onPress={() => handleSubmit()} title="Inloggen"/>
                    <Text>Heb je nog geen account? </Text>
                    <Link href={"/createAccount"}>Account aanmaken</Link>
                </View>
            )}
        </Formik>
    </View>
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

export default LoginForm