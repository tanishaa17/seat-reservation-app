import { BOOKING_FAILED, BOOKING_IN_PROCESS, BOOKING_SUCCESS } from "../Actions/actionTypes";

let flatArray = Array.from({ length: 80 }, (_, index) => index + 1);

let array = [];
while (flatArray.length) {
    array.push(flatArray.splice(0, 7));
}
array.push(array.pop().splice(0, 3));

console.log(array)
const initialState = {
    // bookedSeats: [],
    // bookedSeats: Array.from({ length: 80 }, (_, index) => index + 1),

    bookedSeats: array,
    isLoading: false,
    isError: false,
}
// console.log(array)
export const bookingReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case BOOKING_IN_PROCESS: {
            return {
                ...state,
                isLoading: true
            }
        };
        case BOOKING_SUCCESS: {
            // const { seats } = payload;
            // const newBookedSeats = [...state.bookedSeats];

            // let seatsToBook = seats;
            // let currentIndex = 0;

            // while (seatsToBook > 0 && currentIndex < newBookedSeats.length) {
            //     if (newBookedSeats[currentIndex] === 0) {
            //         newBookedSeats[currentIndex] = 1;
            //         seatsToBook--;
            //     }
            //     currentIndex++;
            // }
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