import { createSlice } from "@reduxjs/toolkit";


type CounterValue = {
    count: number
}

const initialState: CounterValue = {count: 0}

export const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByValue: (state, action) => {
            state.count += action.payload
        }
    }
})

export const {increment, decrement, incrementByValue} = counterSlice.actions

export default counterSlice.reducer