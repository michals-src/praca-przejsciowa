import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tryb_pracy: true,
    woda_pv: 0,
    woda_cv: 0,
    woda_czas: 0,
    woda_switch: false,
    swiatlo_pv: 0,
    swiatlo_cv: 0,
    swiatlo_switch: false
};

export const parametrySlice = createSlice({
    name: 'parametry',
    initialState,
    reducers: {
        zapisz: (state, action) => {
            let newState = action.payload;

            return { ...state, ...newState };
        },
    },
});

export const { zapisz } = parametrySlice.actions;
export const selectParams = (state) => {
    return state.parametry;
}

export default parametrySlice.reducer;