import { useSelector, useDispatch } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import API from '../../services/region';

export const counterSlice = createSlice({
    name: 'service',
    initialState: {
        value : null,
    },
    reducers: {
        getregionall: (state, action) => {
            state.value = action.payload;
         
        }
    }
})

export const { getregionall } = counterSlice.actions;
export const selectCount = (state) => state.service.value;

export default counterSlice.reducer;

export const fetchRegionAll = () => async dispatch => {
  try {
    const response = await API.getAllRegion();
    dispatch(getregionall(response.data));
  } catch (error) {
    console.log(error);
  }
};