import { FlatList, Image, StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { students } from './StudentsDb';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

export default function StudentList({ route }) {
    const navigation = useNavigation();
    const [myStudents, setMyStudents] = useState(students)
    const [rerender, setRerender] = useState(false)

    React.useEffect(() => {
        if (route.params?.newStudent) {
            const { newStudent } = route.params;
            setMyStudents((pre) => [...pre, { ...newStudent }]);
            setRerender(!rerender);
        }
    }, [route.params?.newStudent]);

    const handleDelete = (id) => {
        // Filter out the student with the given id
        setMyStudents((prevStudents) => prevStudents.filter(student => student.id !== id));
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={myStudents}
                keyExtractor={item => item.id}
                extraData={rerender}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigation.navigate("Profile", { student: item })}>
                        <View style={styles.listItemContainer}>
                            <Image source={item.profile_pic} style={styles.img} />
                            <Text style={styles.item}>{item.name}</Text>
                            <Button
                                mode="outlined"
                                onPress={() => handleDelete(item.id)}
                                style={styles.deleteButton}
                            >
                                Delete
                            </Button>
                        </View>
                    </TouchableOpacity>
                }
            />
            <View style={styles.buttonContainer}>
                <Button onPress={() => navigation.navigate("AddStudent")}>Add Here</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9', 
    },
    item: {
        padding: 12,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', 
    },
    img: {
        width: 80, 
        height: 80,
        borderRadius: 40, 
        marginVertical: 8, 
        alignSelf: 'center', 
    },
    listItemContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#fff', 
        borderRadius: 8,
        padding: 10,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        width: '100%',
        justifyContent: 'space-between', 
    },
    deleteButton: {
        marginLeft: 10,
        paddingVertical: 5,
        backgroundColor: '#FF4B52', 
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
});
