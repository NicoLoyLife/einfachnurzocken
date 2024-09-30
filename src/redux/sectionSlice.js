import { createSlice } from "@reduxjs/toolkit";

export const SECTIONS = {
  SPORTWETTEN: "sportwetten",
  ONLINE_SPIELOTHEKEN: "online-spielotheken",
  DEFAULT: "default",
};

const initialState = {
  currentSection: SECTIONS.ONLINE_SPIELOTHEKEN,
};

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    toggleSection: (state) => {
      state.currentSection =
        state.currentSection === SECTIONS.ONLINE_SPIELOTHEKEN
          ? SECTIONS.SPORTWETTEN
          : SECTIONS.ONLINE_SPIELOTHEKEN;
    },
    setSection: (state, action) => {
      state.currentSection = action.payload;
    },
  },
});

export const { toggleSection, setSection } = sectionSlice.actions;

export default sectionSlice.reducer;
