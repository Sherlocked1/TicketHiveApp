import { ReactNode, useState } from "react";
import { StyleProp, ViewProps, ViewStyle } from "react-native";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import UIColors from "../../core/constants/color_constants";

function Selection_List<ItemT>(props: SelectionListProps<ItemT>) {

    const ListItem = (item: ItemT, index: number) => {
        return (
            <Pressable
                onPress={()=>{props.onValueChange(index)}}
                style={[props.itemStyle,{backgroundColor:getBackgroundColor(index)}]}>
                {props.renderContent(item,index)}
            </Pressable>
        )
    }

    const getBackgroundColor = (index:number) => {
        return props.selectedIndex == index ? props.activeItemBackgroundColor ?? UIColors.accent : props.inactiveItemBackgroundColor ?? 'white'
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={[styles.container,props.style]}>
            {props.list.map((el, index) => ListItem(el, index))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
})



interface SelectionListProps<itemT> {
    list: itemT[];
    selectedIndex: number;
    onValueChange: (index: number) => void;
    renderContent: (item: itemT,index?:number) => ReactNode;
    activeItemBackgroundColor?: string;
    inactiveItemBackgroundColor?: string;
    itemStyle?:StyleProp<ViewStyle>
    style?:StyleProp<ViewStyle>
}


export default Selection_List;