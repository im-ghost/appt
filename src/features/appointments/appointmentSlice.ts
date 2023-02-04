import {
  createAsyncThunk,
  createSlice,
  /*PayloadAction*/
 } from '@reduxjs/toolkit';
import {
  RootState,
  /*AppThunk */
} from '../../app/store';
import {
  fetchAppointment,
  fetchUserAppointment,
  fetchDoctorAppointment,
  fetchAppointments
} from "./appointmentsApi"

export const fetchAppointmentAsync = createAsyncThunk(
  'appointment/fetchAppointment',
  async (id: any) => {
    const response = await fetchAppointment(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchAppointmentsAsync = createAsyncThunk(
  'appointment/fetchAppointments',
  async () => {
    const response = await fetchAppointments();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchDoctorAppointmentAsync = createAsyncThunk(
  'appointment/fetchDoctorAppointment',
  async (id: any) => {
    const response = await fetchDoctorAppointment(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchUserAppointmentAsync = createAsyncThunk(
  'appointment/fetchUserAppointment',
  async (id: any) => {
    const response = await fetchUserAppointment(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export interface AppointmentState {
  value: object;
  status: 'idle' | 'loading' | 'failed';
}

const initialState:AppointmentState = {
  value: {},
  status: 'idle'
}

export const appointmentSlice = createSlice({
  name: 'Appointment',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    /*builder
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })*/
  },
})

/*export const {  } = appointmentSlice.actions*/

export const selectAppointment = (state: RootState) => state.appointment.value;

export default appointmentSlice.reducer