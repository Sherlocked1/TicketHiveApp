import { Pressable, View } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../main";
import { SafeAreaView } from "react-native-safe-area-context";
import UIColors from "../../core/constants/color_constants";
import StyledText from "../../core/components/styled_text";
import MyButton from "../../core/components/my_button";
import { useRef, useState } from "react";
import Selection_List from "../components/selection_list";
import { StyleSheet } from "react-native";
import Video from 'react-native-video';
import MovieScreen from "../components/movie_screen";
import Seatings from "../components/seatings";
import { Seat } from "../models/Seat";
import { useSelector } from "react-redux";
import { MovieDetailsState } from "../../../redux/movie_details/details_slice";
import { RootState } from "../../../redux/store";


type Props = NativeStackScreenProps<RootStackParams, 'Movie'>;


const MovieDetails = ({ navigation, route }: Props) => {

    const player = useRef<Video>(null);

    const datesMap: { [key: string]: string[] } = {
        "12 thu": ["12:00", '13:00', "14:00", '15:00'],
        "13 fri": ["9:00", '3:00', "1:00"],
        "15 sun": ["1:30", '6:40', "14:00"],
        "16 mon": ["12:00", '14:20', "14:00"],
    }

    const seats: Seat[] = useSelector<RootState,Seat[]>((state)=> state.DetailsReducer.seats);
    const totalPrice:number = useSelector<RootState,number>((state)=>state.DetailsReducer.totalPrice);

    console.log('seats: ',seats)

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
            <StyledText style={{ color: color }} fontSize={18} fontWeight={'Medium'}>{item}</StyledText>
        )
    }

    const dateCell = (item: string, index?: number) => {
        const color = index == selectedDate ? UIColors.primary : UIColors.secondary
        const arr = item.split(' ');

        return (
            <>
                <StyledText style={{ color: color }} fontSize={22} fontWeight={'Bold'}>{arr[0]}</StyledText>
                <StyledText style={{ color: color }} fontSize={18} fontWeight={'Medium'}>{arr[1]}</StyledText>
            </>
        )
    }

    const openFullScreenPlay = () => {
        player.current?.presentFullscreenPlayer();
    }
    return (
        <View style={styles.container}>

            {/* Theater */}
            <View style={{ flex: 1 }}>
                <Pressable style={{ flex: 1 }} onLongPress={openFullScreenPlay}>
                    {/* <Video source={require('../../../../assets/videos/test.mp4')}
                        style={{height:120,margin:20}}
                        resizeMode='cover'
                        onError={()=>{}}
                        onBuffer={()=>{}}
                    /> */}

                    <Seatings numberOfRows={3} seats={seats}/>
                </Pressable>
            </View>

            {/* Sheet */}
            <SafeAreaView style={styles.sheet}>
                <View>
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
                {/* Payment Details */}
                <View style={styles.paymentDetails}>
                    <View>
                        <StyledText fontSize={24} fontWeight='SemiBold'>{`$${totalPrice}`}</StyledText>
                        <StyledText fontSize={16} fontWeight='Regular'>2 Tickets</StyledText>
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
    container: {
        flex: 1,
        backgroundColor: UIColors.secondary
    },
    dateItem: {
        height: 70,
        width: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
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
    },
    sheet: {
        height: '45%',
        backgroundColor: UIColors.primary,
        padding: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    paymentDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flex: 1
    }

})

export default MovieDetails;