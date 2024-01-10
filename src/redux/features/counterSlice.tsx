import { createSlice } from "@reduxjs/toolkit";

const initialState = {count: 0}

export const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {}
})