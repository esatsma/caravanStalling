import {ThemedView} from "@/components/ThemedView";
import {Button, StyleSheet, Switch, View} from "react-native";
import {useAuthStore} from "@/stores/authStore";
import React from "react";
import {ThemedText} from "@/components/ThemedText";
import getVehicleData from "@/service/api/getVehicleData";

const Profile = () => {
    const { logout, currentUser } = useAuthStore()

    const fetchVehicleOpenings = async() => {return await getVehicleData('5ee0jc8028wmj81')}

    console.log(fetchVehicleOpenings())


    return <ThemedView>
        <ThemedText>Wat voor wagens stallen jullie?</ThemedText>
        {}

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