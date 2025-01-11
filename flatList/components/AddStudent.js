import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function AddStudent() {
    const navigation = useNavigation();
    const [name, setName] = useState();
    const newStudent = {
        name:name,
        age:'21',
        phone:'0771512220'
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput mode="outlined" label="Name" value={name} onChangeText={setName} />
            </View>
            <View style={styles.btnContainer}>
                <Button onPress={() => {
                    // Pass params back to home screen
                    navigation.popTo('StudentList', { newStudent });
                }}>ADD</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})