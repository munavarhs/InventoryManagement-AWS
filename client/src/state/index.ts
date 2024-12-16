import { createSlice } from "@reduxjs/toolkit";

// Define the shape of the global state
export interface InitialStateTypes {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

// Initial state for the global slice
const initialState: InitialStateTypes = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

// Create the global slice
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    // Setters for direct state changes
    setSidebarCollapsed: (state, action) => {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },

    // Toggle reducers for convenience
    toggleSidebarCollapsed: (state) => {
      state.isSidebarCollapsed = !state.isSidebarCollapsed;
    },
    toggleIsDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

// Export actions
export const {
  setSidebarCollapsed,
  setIsDarkMode,
  toggleSidebarCollapsed,
  toggleIsDarkMode,
} = globalSlice.actions;

// Export the reducer
export default globalSlice.reducer;
