import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function AddStudent(){
    const [name, setName] = useState();
   
    return(
        <View style={styles.container}>
           <View style={styles.formContainer}>
                <TextInput mode="outlined" label="Name" value={name} onChangeText={setName}/>
           </View>
           <View style={styles.btnContainer}>
                <Button>ADD</Button>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({

})