import { useNavigation, useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function UpdateStudent({ route }) {
    const navigation = useNavigation();
    const { student } = route.params

    // Initialize state with the student's current data
    const [name, setName] = useState(student.name);
    const [age, setAge] = useState(String(student.age));
    const [phone, setPhone] = useState(student.phone);
    const [email, setEmail] = useState(student.email);
    const [address, setAddress] = useState(student.address);

    const handleUpdate = () => {
        const updatedStudent = {
            ...student,
            name,
            age,
            phone,
            email,
            address,
        };

        // Navigate back to Profile screen with the updated student
        navigation.navigate('Profile', {
            student: updatedStudent,
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Update Student</Text>

            <Text>Name:</Text>
            <TextInput
                style={styles.input}
                mode="outlined"
                value={name}
                onChangeText={setName}
            />
            <Text>Age:</Text>
            <TextInput
                style={styles.input}
                mode="outlined"
                value={age}
                onChangeText={setAge}
            />
            <Text>Phone:</Text>
            <TextInput
                style={styles.input}
                mode="outlined"
                value={phone}
                onChangeText={setPhone}
            />
            <Text>Email:</Text>
            <TextInput
                style={styles.input}
                mode="outlined"
                value={email}
                onChangeText={setEmail}
            />
            <Text>Address:</Text>
            <TextInput
                style={styles.input}
                mode="outlined"
                value={address}
                onChangeText={setAddress}
            />

            <Button title="Update" onPress={handleUpdate} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
});
