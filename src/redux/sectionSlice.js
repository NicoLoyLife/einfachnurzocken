import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSection: 'online-spielotheken',
};

export const sectionSlice = createSlice({
    name: 'section',
    initialState,
    reducers: {
        toggleSection: (state) => {
            state.currentSection = state.currentSection === 'online-spielotheken' ? 'sportwetten' : 'online-spielotheken';
        },
        setSection: (state, action) => {
            state.currentSection = action.payload;
        }
    },
});

export const { toggleSection, setSection } = sectionSlice.actions;

export default sectionSlice.reducer;