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
                <TextInput mode="outlined" label="Name" value={name} onChangeText={setName} style={styles.input}/>
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
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        padding: 20,
    },
    formContainer: {
        width: "100%",
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#fff",
    },
    btnContainer: {
        width: "100%",
        alignItems: "center",
    },
    addButton: {
        width: "50%",
        paddingVertical: 10,
        backgroundColor: "#007bff",
    },
});