import { createSlice } from "@reduxjs/toolkit";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

const visibilityFilter = createSlice({
  name: "visibilityFilters",
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter: (state, action) => {
      return action.payload;
    }
  }
});

export const { setVisibilityFilter } = visibilityFilter.actions;

export default visibilityFilter.reducer;
