import React from 'react';
import {Icon} from "@iconify/react";
import "./ticketcancel.css"
import Sidebar from '../sidebar/sidebar';
import useCancelingForm from "./usecancelForm";
import validateInfo from "./validate";

const Ticketcancel = () => {
    const {handleChange,handleSubmit,errors,values}=useCancelingForm(validateInfo);
    return (
        <div className='adminCtrl'>
        <Sidebar className="adminCtrl_Sidebar"/>
        <div className="adminCtrl_Rightbar">
            <div className="adminCtrl_RightbarTop">
                <Icon icon="carbon:train-ticket" className='adminCtrl_Icon'/>
                <h1 className='adminCtrl_Heading'>Railway Tourism Corporation Ticket Booking</h1>
            </div>
            <div className="adminCtrl_RightbarBottom">
                <div className="adminCtrl_RightbarBottomleft" >
                <div className="adminCtrl_lockerContainer">
                <div className='adminCtrl_lockerContainertop'>
                <h1>Passenger Details</h1>
                </div>
                <hr />
                <form className='booking_form' onSubmit={handleSubmit}>
                    <label htmlFor="number">Ticket Number</label>
                    <input 
                    type="number" 
                    name="ticket_no"
                    value={values.ticket_no}
                    onChange={handleChange}
                    className='booking_Inputfields'
                    />
                    {errors.ticket_no && <p>{errors.ticket_no}</p>}
                    <br />
                    <button className='booking_button' type='submit'>Cancel Ticket</button>
                </form>
                </div>               
                </div>
            </div>
        </div>
    </div>
    )
}

export default Ticketcancel;
