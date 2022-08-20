import React from "react";
import {ImageBackground, TouchableOpacity, View} from "react-native";

const ImageButton = ({imgPath}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <ImageBackground source={imgPath} style={styles.imageBackground}>

                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

export default ImageButton;

const styles = {
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imageBackground: {
        width: 40,
        height: 40,
    }
}
