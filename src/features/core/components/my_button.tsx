import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import UIColors from "../constants/color_constants";
import StyledText from "./styled_text";

const MyButton = (props:MyButtonProps) => {
    return (
        <TouchableOpacity activeOpacity={0.5} style={[styles.container,{backgroundColor:props.color ?? UIColors.accent}]}>
            {props.icon && <Icon name={props.icon.name} size={props.icon.size} color={props.titleColor ?? UIColors.primary}/>}
            <StyledText style={[styles.textStyle,{color:props.titleColor ?? UIColors.primary}]} fontSize={props.fontSize ?? 18} fontWeight={props.fontWeight ?? 'Bold'}>
                {props.title}
            </StyledText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        flexDirection:'row',
    },
    textStyle:{
        marginHorizontal:5,
    }
})

export type MyButtonProps = {
    title:string,
    icon?:{name:string,size:number},
    titleColor?:string,
    fontSize?:number,fontWeight?:React.ComponentProps<typeof StyledText>['fontWeight'] ,
    color?:string,
    onPress:()=>void
}

export default MyButton;