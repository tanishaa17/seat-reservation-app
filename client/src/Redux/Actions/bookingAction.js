import axios from "axios";
import { BOOKING_FAILED, BOOKING_IN_PROCESS, BOOKING_SUCCESS } from "./actionTypes"
const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
    // baseURL: `http://localhost:8080`
})

export const bookSeats = (seats) => async (dispatch) => {
    dispatch({ type: BOOKING_IN_PROCESS })
    try {
        const res = await api.post(`/book-seats`, seats);
        dispatch({ type: BOOKING_SUCCESS, payload: res.data })
        // console.log(res.data);
    } catch (error) {
        dispatch({ type: BOOKING_FAILED, payload: error });
        console.log(error)
    }

}