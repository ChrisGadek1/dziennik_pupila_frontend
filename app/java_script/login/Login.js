import React from 'react';
import {Image, SafeAreaView, Text} from "react-native";

const Login = () =>{
    return(
        <SafeAreaView style={styles.main}>
            <Image style={styles.image} source={require('../../images/cat_login.jpg')}></Image>
        </SafeAreaView>
    )
}

const styles = {
    main:{
        backgroundColor: "#0E252B",
        height:'100%'
    },
    image:{
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,

    }
}
export default Login