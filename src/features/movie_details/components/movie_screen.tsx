import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

const MovieScreen = (props:MovieScreenProps) => {
    return (
        <View style={styles.screen}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        backgroundColor:'white',
        height:120,
        margin:20,
        transform:[{rotateX:'30deg'}],
        shadowColor:'white',
        shadowOpacity:0.5,
        shadowRadius:20,
        shadowOffset:{
            width:0,
            height:20,
        },
        elevation:1,
    }
})

type MovieScreenProps = {
    children:ReactNode
}

export default MovieScreen;