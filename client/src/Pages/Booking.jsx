import React from 'react'
import '../Styles/Booking.css'

export const Booking = () => {

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
                                <input type="text" placeholder='Seats to be booked' name='seatNumber' />
                                <button id='bookingBtn'> Book</button>
                            </label>
                        </div>
                        <button id='resetBtn' style={{ width: "80%", margin: "auto", padding: "0.5%", marginTop: "10px" }} >Reset all seats</button>

                    </div>
                </div>
                <div id='right'>
                    <div className="seatDiv">1</div>
                    <div className="seatDiv">2</div>
                    <div className="seatDiv">3</div>
                    <div className="seatDiv">4</div>
                    <div className="seatDiv">5</div>
                    <div className="seatDiv">6</div>
                    <div className="seatDiv">7</div>
                    <div className="seatDiv">8</div>
                    <div className="seatDiv">9</div>
                    <div className="seatDiv">10</div>
                    <div className="seatDiv">11</div>
                    <div className="seatDiv">12</div>
                    <div className="seatDiv">13</div>
                    <div className="seatDiv">14</div>
                    <div className="seatDiv">15</div>
                    <div className="seatDiv">16</div>
                    <div className="seatDiv">17</div>
                    <div className="seatDiv">18</div>
                    <div className="seatDiv">19</div>
                    <div className="seatDiv">20</div>
                    <div className="seatDiv">21</div>
                    <div className="seatDiv">22</div>
                    <div className="seatDiv">23</div>
                    <div className="seatDiv">24</div>
                    <div className="seatDiv">25</div>
                    <div className="seatDiv">26</div>
                    <div className="seatDiv">27</div>
                    <div className="seatDiv">28</div>
                    <div className="seatDiv">29</div>
                    <div className="seatDiv">30</div>
                    <div className="seatDiv">31</div>
                    <div className="seatDiv">32</div>
                    <div className="seatDiv">33</div>
                    <div className="seatDiv">34</div>
                    <div className="seatDiv">35</div>
                    <div className="seatDiv">36</div>
                    <div className="seatDiv">37</div>
                    <div className="seatDiv">38</div>
                    <div className="seatDiv">39</div>
                    <div className="seatDiv">40</div>
                    <div className="seatDiv">41</div>
                    <div className="seatDiv">42</div>
                    <div className="seatDiv">43</div>
                    <div className="seatDiv">44</div>
                    <div className="seatDiv">45</div>
                    <div className="seatDiv">46</div>
                    <div className="seatDiv">47</div>
                    <div className="seatDiv">48</div>
                    <div className="seatDiv">49</div>
                    <div className="seatDiv">50</div>
                    <div className="seatDiv">51</div>
                    <div className="seatDiv">52</div>
                    <div className="seatDiv">53</div>
                    <div className="seatDiv">54</div>
                    <div className="seatDiv">55</div>
                    <div className="seatDiv">56</div>
                    <div className="seatDiv">57</div>
                    <div className="seatDiv">58</div>
                    <div className="seatDiv">59</div>
                    <div className="seatDiv">60</div>
                    <div className="seatDiv">61</div>
                    <div className="seatDiv">62</div>
                    <div className="seatDiv">63</div>
                    <div className="seatDiv">64</div>
                    <div className="seatDiv">65</div>
                    <div className="seatDiv">66</div>
                    <div className="seatDiv">67</div>
                    <div className="seatDiv">68</div>
                    <div className="seatDiv">69</div>
                    <div className="seatDiv">70</div>
                    <div className="seatDiv">71</div>
                    <div className="seatDiv">72</div>
                    <div className="seatDiv">73</div>
                    <div className="seatDiv">74</div>
                    <div className="seatDiv">75</div>
                    <div className="seatDiv">76</div>
                    <div className="seatDiv">77</div>
                    <div className="seatDiv">78</div>
                    <div className="seatDiv">79</div>
                    <div className="seatDiv">80</div>

                </div>
            </div>
        </div>
    )
}
