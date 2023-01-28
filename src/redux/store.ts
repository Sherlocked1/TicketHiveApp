import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { DetailsReducer } from "./movie_details/details_slice";


const rootReducer = combineReducers({
    DetailsReducer
})

const store = configureStore(
    {
        reducer: rootReducer
    }
)

export type RootState = ReturnType<typeof store.getState>

export default store;