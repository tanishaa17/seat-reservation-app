import { BOOKING_FAILED, BOOKING_IN_PROCESS, BOOKING_SUCCESS } from "../Actions/actionTypes";


const demo = Array.from({ length: 12 }, (_, index) =>
    Array.from({ length: index === 11 ? 3 : 7 }, (_, seatIndex) => ({
        [index * 7 + seatIndex + 1]: {
            seatNumber: index * 7 + seatIndex + 1,
            status: false
        }
    })).reduce((acc, curr) => ({ ...acc, ...curr }), {})
);



const initialState = {
    bookedSeats: demo,
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


            let bookedSlots = 0;
            let slotsToBooked = payload.seats;
            for (let i = 0; i < demo.length; i++) {
                let obj = demo[i];
                let keys = Object.keys(obj);
                let slotsAvailable = 0;

                for (let j = 0; j < keys.length; j++) {
                    let key = keys[j];
                    if (!obj[key].status) {
                        slotsAvailable++;
                    }
                }

                if (slotsAvailable >= slotsToBooked) {
                    for (let j = 0; j < keys.length; j++) {
                        let key = keys[j];
                        if (!obj[key].status) {
                            obj[key].status = true;
                            bookedSlots++;

                            if (bookedSlots == slotsToBooked) {
                                break;
                            }
                        }
                    }
                    if (bookedSlots == slotsToBooked) {
                        break;
                    }
                }
            }
            // console.log(demo)
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