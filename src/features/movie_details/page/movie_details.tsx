import { View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../main";
import { SafeAreaView } from "react-native-safe-area-context";
import UIColors from "../../core/constants/color_constants";
import StyledText from "../../core/components/styled_text";
import MyButton from "../../core/components/my_button";
import { useState } from "react";
import Selection_List from "../components/selection_buttons";
import { StyleSheet } from "react-native";

type Props = NativeStackScreenProps<RootStackParams, 'Movie'>;


const MovieDetails = ({ navigation, route }: Props) => {

    const datesMap: { [key: string]: string[] } = {
        "12 thu": ["12:00", '13:00', "14:00", '15:00'],
        "13 fri": ["9:00", '3:00', "1:00"],
        "15 sun": ["1:30", '6:40', "14:00"],
        "16 mon": ["12:00", '14:20', "14:00"],
    }

    const [selectedDate, setSelectedDate] = useState<number>(0);

    const [selectedTime, setSelectedTime] = useState<number>(0);

    const dateKeys = Object.keys(datesMap);

    const onDateChange = (selectedIndex: number) => {
        if (selectedDate != selectedIndex) {
            setSelectedDate(selectedIndex);
            setSelectedTime(0);
        }
    }

    const onTimeChange = (selectedIndex: number) => {
        if (selectedTime != selectedIndex) {
            setSelectedTime(selectedIndex);
        }
        
    }

    const timeCell = (item: string, index?: number) => {
        const color = index == selectedTime ? UIColors.primary : UIColors.secondary
        return (
            <StyledText style={{ color: color }} fontSize={18} fontWeight={'Bold'}>{item}</StyledText>
        )
    }

    const dateCell = (item: string, index?: number) => {
        const color = index == selectedDate ? UIColors.primary : UIColors.secondary
        const arr = item.split(' ');

        return (
            <>
                <StyledText style={{ color: color }} fontSize={24} fontWeight={'Bold'}>{arr[0]}</StyledText>
                <StyledText style={{ color: color }} fontSize={20} fontWeight={'Regular'}>{arr[1]}</StyledText>
            </>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: UIColors.secondary }}>

            {/* Theater */}
            <View style={{ flex: 1 }}>

            </View>

            {/* Details */}
            <SafeAreaView style={{ height: '45%', backgroundColor: UIColors.primary, padding: 10, borderRadius: 30 }}>
                <View style={{ paddingBottom: 20 }}>
                    <Selection_List<string>
                        list={dateKeys}
                        renderContent={dateCell}
                        selectedIndex={selectedDate}
                        onValueChange={onDateChange}
                        itemStyle={styles.dateItem}
                        activeItemBackgroundColor='black'
                        inactiveItemBackgroundColor="white"
                        style={{ marginBottom: 10 }}
                    />

                    <Selection_List<string>
                        list={datesMap[dateKeys[selectedDate]]}
                        renderContent={timeCell}
                        selectedIndex={selectedTime}
                        onValueChange={onTimeChange}
                        itemStyle={styles.timeItem}
                        activeItemBackgroundColor='black'
                        inactiveItemBackgroundColor="white"
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <StyledText fontSize={28} fontWeight='SemiBold'>$160.00</StyledText>
                        <StyledText fontSize={18} fontWeight='ExtraLight'>2 Tickets</StyledText>
                    </View>
                    <MyButton title="Buy Tickets" onPress={() => { }}
                        icon={{ name: 'ticket', size: 30 }}
                    />
                </View>
            </SafeAreaView>

        </View>
    )
}

const styles = StyleSheet.create({
    dateItem: {
        height: 80,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding: 10,
        borderColor: 'grey',
        borderWidth: 1,
        marginHorizontal: 5,
    },
    timeItem: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: 'grey',
        borderWidth: 1,
        marginHorizontal: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    }

})

export default MovieDetails;