import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fatchData = createAsyncThunk(
    'data/fatchData',
    async function(location) {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&&units=metric&&appid=f9230ac8b71b37416db0d6b8f595925a`)
        const forecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&&units=metric&&appid=f9230ac8b71b37416db0d6b8f595925a`)

        const initialData = await response.data
        const forecastForFiveDays = [];
        const forecastsLength =  forecast.data.list.length;
        for(let i = 0; i < forecastsLength; i = i + 7) {
            forecastForFiveDays.push(forecast.data.list[i]);
        }
        return {
            daily:initialData,
            forecastForFiveDays
        }
    }
)

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false,
        errors: false,
        countres: [],
        corentCountry: {},
        forecast: []
    },
    reducers: {
        
    },
    extraReducers: {
        [fatchData.fulfilled]: (state, {payload}) => {
            return {
                ...state,
                loading: false,
                errors: false,
                countres: [...state.countres, payload.daily],
                corentCountry: payload.daily,
                forecast: payload.forecastForFiveDays
            }
        }
    }
})

// export const {  } = dataSlice.actions

export const selectData = (state) => state.data

export const dataReducer = dataSlice.reducer