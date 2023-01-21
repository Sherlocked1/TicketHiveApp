import { Text, View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../main";
import { SafeAreaView } from "react-native-safe-area-context";
import UIColors from "../../core/constants/color_constants";
import StyledText from "../../core/components/styled_text";
import MyButton from "../../core/components/my_button";

type Props = NativeStackScreenProps<RootStackParams, 'Movie'>;


const MovieDetails = ({ navigation, route }: Props) => {
    const movie = route.params.movie;

    return (
        <View style={{ flex: 1, backgroundColor: UIColors.secondary }}>

            {/* Theater */}
            <View style={{ flex: 1 }}>

            </View>

            {/* Details */}
            <SafeAreaView style={{ height: '35%', backgroundColor: UIColors.primary, padding: 10, borderRadius: 30 }}>
                <View style={{ flex: 1 }}></View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <StyledText fontSize={28} fontWeight='SemiBold'>$160.00</StyledText>
                        <StyledText fontSize={18} fontWeight='ExtraLight'>2 Tickets</StyledText>
                    </View>
                    <MyButton title="Buy Tickets" titleColor={UIColors.primary} 
                    fontSize={18} fontWeight={'Bold'} color={UIColors.accent}                    
                    />
                </View>
            </SafeAreaView>

        </View>
    )
}

export default MovieDetails;