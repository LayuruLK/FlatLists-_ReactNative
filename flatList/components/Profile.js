import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function Profile({route}){
    const { student } = route.params;
    const navigation = useNavigation();
    return(
        <View style={styles.profileContainer}>
            <View style={styles.imgContainer}>
                <Image source={student.profile_pic} style={styles.profileImage}/>
            </View>
            <View style={styles.personalData}>
                <Text style={styles.textName}>{student.name}</Text>
                <Text style={styles.textAge}>Age: {student.age}</Text>
                <Text style={styles.textEmail}>Email: {student.email}</Text>
                <Text style={styles.textAddress}>Address: {student.address}</Text>
                <Text style={styles.textPhone}>Phone: {student.phone}</Text>
            </View>
            <View style={styles.btnContainer}>
                <Button style={styles.btn} onPress={()=>navigation.navigate("UpdateStudent", {student})}>
                    Update
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        alignItems: "center",
        padding: 20,
    },
    imgContainer: {
        marginBottom: 20,
        alignItems: "center",
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: "#007bff",
    },
    personalData: {
        backgroundColor: "#fff",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    textAge: {
        fontSize: 16,
        color: "#555",
        marginBottom: 5,
    },
    textEmail: {
        fontSize: 16,
        color: "#555",
        marginBottom: 5,
    },
    textAddress: {
        fontSize: 16,
        color: "#555",
        marginBottom: 5,
    },
    textPhone: {
        fontSize: 16,
        color: "#555",
        marginBottom: 5,
    },
});