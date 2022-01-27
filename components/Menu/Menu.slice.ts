// Core
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// Types
import {TopLevelCategory} from "../../interface";

// types InitialStateTypes
interface InitialState {

    firstCategory: TopLevelCategory
}

const initialState: InitialState = {
    firstCategory: TopLevelCategory.Courses,
};

const menuReducer = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setTopLevelCategory: (state, payload: PayloadAction<TopLevelCategory>): void => console.log('123'),
    }
});

const {reducer, actions} = menuReducer;

export const { setTopLevelCategory } = actions;

export default reducer;