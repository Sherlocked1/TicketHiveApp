import { Seat } from "../models/Seat";
import { FlatGrid } from 'react-native-super-grid';
import { useWindowDimensions } from "react-native";
import Chair from '../../../../assets/icons/chair.svg'
import UIColors from "../../core/constants/color_constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { DetailsActions } from "../../../redux/movie_details/details_slice";

const Seatings = (props: SeatingsProps) => {

    const selectedSeats:Seat[] = useSelector<RootState,Seat[]>((state)=>state.DetailsReducer.selectedSeats);
    const dispatch = useDispatch();

    const numOfCols = props.seats.length/props.numberOfRows;
    const itemWidth = (useWindowDimensions().width/numOfCols) - 20

    const getSeatColor = (seat:Seat):string => {
        if (seat.isAvailable) {
            return selectedSeats.filter((el)=>el.id == seat.id).length != 0 ? UIColors.accent : UIColors.primary
        }else{
            return UIColors.grey
        }       
    }

    const onSeatSelected = (seat:Seat) => {
        if (seat.isAvailable) {
            //if selected
            if (selectedSeats.filter((el) => el.id == seat.id).length != 0) {
                dispatch(DetailsActions.deselectSeat(seat));
            } else {
                dispatch(DetailsActions.selectSeat(seat));
            }
        }

        console.log(selectedSeats);

        // props.onSelectionChanged(selectedSeats);
    }

    const renderSeat = (seat:Seat) => {
        return (
            <TouchableOpacity onPress={()=>{onSeatSelected(seat)}}>
                <Chair fill={getSeatColor(seat)}/>
            </TouchableOpacity>
        )
    }

    return (
        <FlatGrid data={props.seats} renderItem={(data)=>renderSeat(data.item)}
            itemDimension={itemWidth} contentContainerStyle={{paddingHorizontal:20}}
        />
    )
}

type SeatingsProps = {
    seats:Seat[],
    numberOfRows:number,
}

export default Seatings;