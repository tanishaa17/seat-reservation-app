import { BOOKING_FAILED, BOOKING_IN_PROCESS, BOOKING_SUCCESS } from "../Actions/actionTypes";

let flatArray = Array.from({ length: 80 }, (_, index) => index + 1);

let array = [];
while (flatArray.length) {
    array.push(flatArray.splice(0, 7));
}
array.push(array.pop().splice(0, 3));

// console.log(array)
let demo = [
    {
        1: {
            seatNumber: 1,
            status: false
        },
        2: {
            seatNumber: 2,
            status: false
        },
        3: {
            seatNumber: 3,
            status: false
        },
        4: {
            seatNumber: 4,
            status: false
        },
        5: {
            seatNumber: 5,
            status: false
        },
        6: {
            seatNumber: 6,
            status: false
        },
        7: {
            seatNumber: 7,
            status: false
        }
    },
    {
        8: {
            seatNumber: 8,
            status: false
        },
        9: {
            seatNumber: 9,
            status: false
        },
        10: {
            seatNumber: 10,
            status: false
        },
        11: {
            seatNumber: 11,
            status: false
        },
        12: {
            seatNumber: 12,
            status: false
        },
        13: {
            seatNumber: 13,
            status: false
        },
        14: {
            seatNumber: 14,
            status: false
        }
    },

]
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
            console.log(demo)
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