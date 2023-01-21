import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from "react-native";

const Neumorphism = (props:NeuProps) => {
    return (
        <View style={[props.style,styles.container]}>
            <View style={styles.innerContainer}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        shadowOpacity:1,
        shadowColor:"#bebebe",
        shadowOffset:{
            width:-20,
            height:20
        },
        shadowRadius:40,
    },
    innerContainer:{
        shadowOpacity:1,
        shadowColor:"#ffffff",
        shadowOffset:{
            width:20,
            height:-20
        },
        shadowRadius:40,
    }
})

type NeuProps = {
    style?:StyleProp<ViewStyle>,
    children?:ReactNode[] | ReactNode,
}

export default Neumorphism;