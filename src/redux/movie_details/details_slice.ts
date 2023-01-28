import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Seat } from "../../features/movie_details/models/Seat";

const initialState: MovieDetailsState = {
    seats: [
        { id: 'A1', price: 12, isAvailable: true },
        { id: 'A2', price: 12, isAvailable: true },
        { id: 'A3', price: 12 },
        { id: 'A4', price: 12, isAvailable: true },
        { id: 'B1', price: 12, isAvailable: true },
        { id: 'B2', price: 12 },
        { id: 'B3', price: 12 },
        { id: 'B4', price: 12 },
        { id: 'C1', price: 12 },
        { id: 'C2', price: 12 },
        { id: 'C3', price: 12 },
        { id: 'C4', price: 12 },
    ],
    selectedSeats: [],
    totalPrice: 0,
}

const getTotalPriceFrom = (seats: Seat[]): number => {
    var price = 0;
    seats.forEach(element => {
        price += element.price;
    });
    return price;
}

const DetailsSlice = createSlice({
    name: 'Details',
    initialState: initialState,
    reducers: {
        selectSeat: (state: MovieDetailsState, action: PayloadAction<Seat>) => {
            state.selectedSeats = [...state.selectedSeats, action.payload]
            state.totalPrice = getTotalPriceFrom(state.selectedSeats);
        },
        deselectSeat: (state: MovieDetailsState, action: PayloadAction<Seat>) => {
            state.selectedSeats = state.selectedSeats.filter((el) => el.id != action.payload.id);
            state.totalPrice = getTotalPriceFrom(state.selectedSeats);
        }
    }
})

export interface MovieDetailsState {
    seats: Seat[];
    selectedSeats: Seat[];
    totalPrice: number;
}

const { reducer: DetailsReducer, actions: DetailsActions } = DetailsSlice;

export { DetailsReducer, DetailsActions };