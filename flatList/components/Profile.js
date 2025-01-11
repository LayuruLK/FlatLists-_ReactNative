import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function Profile({route}){
    const { student } = route.params;
    return(
        <View style={styles.profilecontainer}>
            <View style={styles.imgcontainer}>
                <Image source={student.profile_pic}/>
            </View>
            <View style={styles.personalData}>
                <Text style={styles.textName}>Name: {student.name}</Text>
                <Text style={styles.textAge}>Age: {student.age}</Text>
                <Text style={styles.textEmail}>Email: {student.email}</Text>
                <Text style={styles.textAddress}>Address: {student.address}</Text>
                <Text style={styles.textPhone}>Phone: {student.phone}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profilecontainer: {

    }
})