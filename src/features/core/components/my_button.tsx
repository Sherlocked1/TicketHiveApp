import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import StyledText from "./styled_text";

const MyButton = (props:MyButtonProps) => {
    return (
        <TouchableOpacity style={[styles.container,{backgroundColor:props.color}]}>
            {props.icon && <Icon name={props.icon.name} size={props.icon.size} color={props.titleColor}/>}
            <StyledText style={{color:props.titleColor}} fontSize={props.fontSize} fontWeight={props.fontWeight}>
                {props.title}
            </StyledText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,

    }
})

export type MyButtonProps = {
    title:string,
    icon?:{name:string,size:number},
    titleColor:string,
    fontSize:number,fontWeight:React.ComponentProps<typeof StyledText>['fontWeight'] ,
    color:string,
}

export default MyButton;