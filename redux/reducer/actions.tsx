import { createSlice } from "@reduxjs/toolkit";
import { getTrends, getSearch, getChart, getGraph } from "./AsyncThunkActions";
import { Initial } from "../../dataInterface.ts";

const initialState: Initial = {
trendCoins: null,
searchCoins: null,
error: undefined,
marketChart: [],
graphDataHome: null,
};

const cryptoReducer = createSlice({
name: "crypto",
initialState,
reducers: {
backHome: (state) => {
state.searchCoins = null;
},
},
extraReducers: (builder) => {
builder

.addCase(getTrends.fulfilled, (state, action) => {
state.trendCoins = action.payload;
})
.addCase(getTrends.rejected, (state, action) => {
state.error = action.error.message;
})

.addCase(getSearch.fulfilled, (state, action) => {
state.searchCoins = action.payload;
})
.addCase(getSearch.rejected, (state, action) => {
state.error = action.error.message;
})

.addCase(getChart.fulfilled, (state, action) => {
state.marketChart = action.payload;
})
.addCase(getChart.rejected, (state, action) => {
state.error = action.error.message;
})

.addCase(getGraph.fulfilled, (state, action) => {
state.graphDataHome = action.payload;
})
.addCase(getGraph.rejected, (state, action) => {
state.error = action.error.message;
});
},
});

// Export actions and reducer
export const { backHome } = cryptoReducer.actions;
export default cryptoReducer.reducer;
