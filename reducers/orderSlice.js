import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderData:{
      user_id: null,
      user_name: null,
      user_contact: null,
      order_items:  [],
      order_total: null,
      order_status: "New",
      order_type:  null,
      delivery_fee: 0,
      delivery_latitude: 0.18441485939905478,
      delivery_longitude: 32.538370291740904,
      payment_method: null,
    }
}

export const newOrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addUserId: (state, action) => {
      state.orderData = {...state.orderData, user_id: action.payload}
    },

    addUsername: (state, action) => {
        state.orderData = {...state.orderData, user_name: action.payload}
    },

    addUserContact: (state, action) => {
        state.orderData = {...state.orderData, user_contact: action.payload}
    },

    addOrderItems: (state, action) => {
        state.orderData = {...state.orderData, order_items: action.payload}
    },

    addOrderTotal: (state, action) => {
        state.orderData = {...state.orderData, order_total: action.payload}
    },

    addOrderType: (state, action) => {
        state.orderData = {...state.orderData, order_type: action.payload}
    },

    addDeliveryFee: (state, action) => {
        state.orderData = {...state.orderData, delivery_fee: action.payload}
    },

    addDeliveryLatitude: (state, action) => {
        state.orderData = {...state.orderData, delivery_latitude: action.payload}
    },

    addDeliveryLongitude: (state, action) => {
        state.orderData = {...state.orderData, delivery_longitude: action.payload}
    },

    addPaymentMethod: (state, action) => {
        state.orderData = {...state.orderData, payment_method: action.payload}
    },

    emptyData: (state) => {
      state.orderData = initialState.orderData
      
    },
  },
})

// Action creators are generated for each case reducer function
export const {
    addUserId,
    addUsername,
    addUserContact,
    addOrderItems,
    addOrderTotal,
    addOrderStatus,
    addOrderType,
    addDeliveryFee,
    addDeliveryLatitude,
    addDeliveryLongitude,
    addPaymentMethod,
    emptyData
} = newOrderSlice.actions

export const selectOrderData = (state) => state.order.orderData;



export default newOrderSlice.reducer