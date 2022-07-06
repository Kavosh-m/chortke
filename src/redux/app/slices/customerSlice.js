import { createSlice } from "@reduxjs/toolkit";
import data from "../../../fakeData/customers.json";

const initialState = {
  customers: data,
  currCustomer: data[0],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCurrentCustomer: (state, action) => {
      let id = action.payload;
      let selectedCustomer = state.customers.find(
        (customer) => customer.customerID === id
      );
      state.currCustomer = selectedCustomer;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentCustomer } = customerSlice.actions;

export default customerSlice.reducer;
