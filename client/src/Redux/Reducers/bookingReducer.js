import { BOOKING_FAILED, BOOKING_IN_PROCESS, BOOKING_SUCCESS } from "../Actions/actionTypes";

const initialState = {
    bookedSeats: 0,
    isLoading: false,
    isError: false,
}
const bookingReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case BOOKING_IN_PROCESS: {
            return {
                ...state,
                isLoading: true
            }
        };
        case BOOKING_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                bookedSeats: payload,
            }
        };
        case BOOKING_FAILED: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default: {
            return state
        }

    }
}