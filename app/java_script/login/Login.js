import React from 'react';
import {SafeAreaView, Text} from "react-native";

const Login = () =>{
    return(
        <SafeAreaView style={styles.main}>
            <Text>To jest component Login !</Text>
        </SafeAreaView>
    )
}

const styles = {
    main:{
        backgroundColor: "#0E252B",
        height:'100%'
    }
}
export default Login