import {useState,useEffect} from 'react';
import {Icon} from "@iconify/react";
import "./ticketbooking.css"
import Sidebar from '../sidebar/sidebar';
import useBookingForm from "./useBookingForm";
import validateInfo from "./validate";
import axios from 'axios';

const Ticketbooking = () => {
    const [info,setInfo]=useState([1]);
    const getInfo= async () =>{
        try{
          const res = await axios.get('https://reservation-appp.herokuapp.com/reservation/availticket');
          setInfo(res.data);
        }catch(err){
             console.log(err);
        }
    }
    useEffect(()=>{
        getInfo();
        console.log(info);
      },[]) // eslint-disable-line react-hooks/exhaustive-deps
    const {handleChange,handleSubmit,errors,values}=useBookingForm(validateInfo);
    if(info.length!==0){
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
                    <label htmlFor="name">Name</label>
                    <input 
                    name="name"
                    type="text" 
                    className='booking_Inputfields'
                    value={values.name}
                    onChange={handleChange}
                    />
                     {errors.name && <p>{errors.name}</p>}
                    <br />
                    <label htmlFor="">Age</label>
                    <input
                     type="number" 
                     className='booking_Inputfields' 
                     name='age'
                     value={values.age}
                     onChange={handleChange}
                     />
                      {errors.age && <p>{errors.age}</p>}
                     <br />
                    <label htmlFor="">Gender</label>
                    <select name="gender" id="" onChange={handleChange} className='booking_Inputfields'>
                        <option value="">select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                    {errors.gender && <p>{errors.gender}</p>}
                    <br />
                    <label htmlFor="">Birth Preference</label>
                    <select name="birth" id="" onChange={handleChange} className='booking_Inputfields'>
                        <option value="">select</option>
                        <option value="lower">Lower</option>
                        <option value="Middle">Middle</option>
                        <option value="Upper">Upper</option>
                    </select>
                    {errors.birth && <p>{errors.birth}</p>}
                    <br />
                    <button className='booking_button' type='submit'>Book Tickets</button>
                </form>
                </div>               
                </div>
            </div>
        </div>
    </div>
    )
}
else{
   return <>{alert("tickets are full")}</>
}
} 


export default Ticketbooking;
