import { View, StyleSheet, TextInput, StyleProp, ViewStyle, TextStyle } from "react-native"
import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';

export const MyField = (props:FieldProps) => {
    return (
        <View style={[styles.container,props.style]}>
            {props.icon && <Icon name={props.icon?.name ?? ""} size={props.icon?.size} color={props.textColor}/>}
            <TextInput placeholderTextColor={props.textColor} {...props}
            style={[styles.textStyle,props.textStyle, {color:props.textColor}]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderColor:'#eee',
        borderWidth:1,
        borderRadius:10,
        alignItems:'center',
        paddingHorizontal:5,
        
    },
    textStyle:{
        fontSize:18,
        flex:1,
        marginLeft:5,
    }
});

interface FieldProps extends React.ComponentProps<typeof TextInput> {
    icon?:{name:string,size:number},
    style:StyleProp<ViewStyle>,
    textStyle?:StyleProp<TextStyle>,
    textColor:string,
    placeholder?:string,
}