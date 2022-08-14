import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, Text, TextInput, TouchableHighlight, View} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Login = () =>{
    const [showPassword, setShowPassword] = useState(false)
    const [iconName, setIconName] = useState("eye")

    const handleClickOnShowPassword = () => {
        if(showPassword){
            setShowPassword(false)
            setIconName("eye")
        }
        else{
            setShowPassword(true)
            setIconName("eye-off")
        }
    }

    return(
        <SafeAreaView style={styles.main}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../images/cat_login.jpg')}></Image>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.formTitle}> Dziennik Pupila</Text>
                    <TextInput
                        style={styles.emailInput}
                        placeholder={"email"}/>
                    <View>
                        <TextInput
                            style={styles.emailInput}
                            placeholder={"hasło"}
                            secureTextEntry={!showPassword}
                        ></TextInput>
                        <TouchableHighlight style={styles.visibilityIcon} onPress={handleClickOnShowPassword}>
                            <Icon  name={iconName} size={30} color="gray" />
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = {
    main:{
        backgroundColor: "#0E252B",
        height:'100%'
    },
    image:{
        marginTop: "6%",
        width: "90%",

    },

    visibilityIcon: {
        position: "absolute",
        top : "45%",
        right: "25%",
        zIndex: 5
    },

    formTitle: {
        fontSize: 25,
        color: "gray",

    },
    formContainer: {
        marginTop: "14%",
        marginLeft: "7%",
    },
    emailInput: {
        backgroundColor: "white",
        color: "black",
        width: "80%",
        marginTop: "7%",
        borderRadius: 15,

    },

    imageContainer: {
        display: "flex",
        alignItems: "center"
    }
}
export default Login