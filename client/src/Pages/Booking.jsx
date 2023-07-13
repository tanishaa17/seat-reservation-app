import React, { useState } from 'react'
import '../Styles/Booking.css'
import { useDispatch, useSelector } from 'react-redux';
import { bookSeats } from '../Redux/Actions/bookingAction';

export const Booking = () => {
    const { bookedSeats, isLoading, isError } = useSelector((store) => store.bookingReducer)
    const [seats, setSeats] = useState([]);
    const dispatch = useDispatch()
    const handleBooking = (e) => {
        e.preventDefault()
        const numberOfSeats = {
            seats
        }
        // console.log(numberOfSeats)
        // console.log(`Seat booked ${numberOfSeats.seats}`)
        if (seats < 1) alert(`Minimum number of seats should be 1`);
        else if (seats > 7) alert(`You can't book more than 7 seats`);
        else dispatch(bookSeats(numberOfSeats))
        setSeats([])
    }
    const handleReset = (e) => {
        window.location.reload()
    }
    // console.log(bookedSeats.seats)
    return (
        <div>
            <h1>Seat Reservation Application</h1>
            <div id="mainContent">
                <div id="left">
                    <div id='contentDiv'>
                        <div className="statusColor">
                            <div className="bookedColorStatus"></div>
                            <span>Booked Seats</span>
                        </div>
                        <div className="statusColor">
                            <div className="emptyColorStatus"></div>
                            <span>Available Seats</span>
                        </div>
                        <div id='currentBookedSeats'>
                            <span>Current Booked Seats: </span>

                        </div>
                        <div id="inputDiv">
                            <label htmlFor=""> Number of seats:
                                <input type="text" placeholder='Seats to be booked' name='seatNumber' value={seats} onChange={(e) => { setSeats(e.target.value) }} />
                            </label>
                            <button id='bookingBtn' onClick={handleBooking}>Book</button>
                        </div>
                        <button type='submit' id='resetBtn' onClick={handleReset} style={{ width: "80%", margin: "auto", padding: "0.5%", marginTop: "10px" }} >Reset all seats</button>

                    </div>
                </div>

                <div id='right'>
                    {bookedSeats.map((row, index) => (
                        <div key={index} className="row">
                            {Object.values(row).map(seat => (
                                <div className='seatDiv' key={seat.seatNumber} style={{ background: seat.status ? "#040035" : "#484468" }} >{seat.seatNumber} </div>
                            ))}
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}
