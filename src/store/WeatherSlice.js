import {createSlice} from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState: {
        weathers: [{
            date: '',
            temperatureC: 0,
            summary: '',
        }]
    },
    reducers: {
        setWeathers: (state, action) => {
            state.weathers = action.payload;
        },
    }
});

export const {setWeathers} = weatherSlice.actions
export default weatherSlice.reducer