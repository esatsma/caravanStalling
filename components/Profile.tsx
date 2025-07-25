import {ThemedView} from "@/components/ThemedView";
import {Button, StyleSheet, Switch, View} from "react-native";
import {useAuthStore} from "@/stores/authStore";
import React from "react";
import {ThemedText} from "@/components/ThemedText";

const Profile = () => {
    const { logout } = useAuthStore()
    'get vehicles from database and render switches. when switchvalue changes set user_has_vehicles in database'

    return <ThemedView>
        <ThemedText>Wat voor wagens stallen jullie?</ThemedText>
        <View style={styles.switch}><Switch onValueChange={setVehicle()} /><ThemedText>Campers</ThemedText></View>
        <View style={styles.switch}><Switch /><ThemedText>Caravans</ThemedText></View>
        <View style={styles.switch}><Switch /><ThemedText>Vouwwagens</ThemedText></View>
        <View style={styles.switch}><Switch /><ThemedText>Kano's/Boten</ThemedText></View>

        <Button onPress={() => logout()} title={"Uitloggen"} />
    </ThemedView>

}

const styles = StyleSheet.create({
    switch: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        marginBottom: 8
    }
})

export default Profile;