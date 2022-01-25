import {React,useState,useEffect, useRef} from 'react';
import {Icon} from "@iconify/react";
import Sidebar from '../sidebar/sidebar';
import "./ticketdetails.css";
import axios from 'axios';
import {useReactToPrint} from "react-to-print"

const Ticketdetails = () => {
    const [info,setInfo]=useState("");
    const [rac,setRac]=useState("");
    const [waiting,setWaiting]=useState("");
    const [child,setChild]=useState("");
    const [availConfirm,setAvailConfirm]=useState("");
    const [availRac,setAvailRac]=useState("");
    const confirmRef = useRef();
    const racRef = useRef();
    const waitingRef = useRef();
    const childRef = useRef();
    const confirmAvailRef = useRef();
    const RacAvailRef = useRef();

    const confirmPrint = useReactToPrint({
        content: () => confirmRef.current,
      });
      const racPrint = useReactToPrint({
        content: () => racRef.current,
      });
      const waitingPrint = useReactToPrint({
        content: () => waitingRef.current,
      });
      const childPrint = useReactToPrint({
        content: () => childRef.current,
      });
      const availConfirmPrint = useReactToPrint({
        content: () => confirmAvailRef.current,
      });
      const availRacPrint = useReactToPrint({
        content: () => RacAvailRef.current,
      });
    
    const getInfo= async () =>{
        try{
          const res = await axios.get('https://reservation-appp.herokuapp.com/reservation/getbooked');
          setInfo(res.data);
        }catch(err){
             console.log(err);
        }
    }
    const getRac= async () =>{
        try{
          const res = await axios.get('https://reservation-appp.herokuapp.com/reservation/racticket');
          setRac(res.data);
        }catch(err){
             console.log(err);
        }
    }
    const getwaiting= async () =>{
        try{
          const res = await axios.get('https://reservation-appp.herokuapp.com/reservation/waiting');
          setWaiting(res.data);
        }catch(err){
             console.log(err);
        }
    }
    const getchild= async () =>{
      try{
        const res = await axios.get('https://reservation-appp.herokuapp.com/reservation/child');
        setChild(res.data);
      }catch(err){
           console.log(err);
      }
  }
  const getavailConfirm= async () =>{
    try{
      const res = await axios.get('https://reservation-appp.herokuapp.com/reservation/availconfirm');
      setAvailConfirm(res.data);
    }catch(err){
         console.log(err);
    }
}
const getavailRac= async () =>{
  try{
    const res = await axios.get('https://reservation-appp.herokuapp.com/reservation/availrac');
    setAvailRac(res.data);
  }catch(err){
       console.log(err);
  }
}
  useEffect(()=>{
      getInfo();
      getRac();
      getwaiting();
      getchild();
      getavailConfirm();
      getavailRac();
    },[])
  return(
    <div className='ticketdetails'>
    <Sidebar className="ticketdetails_Sidebar"/>
    <div className="ticketdetails_Rightbar">
        <div className="ticketdetails_RightbarTop">
            <Icon icon="carbon:train-ticket" className='ticketdetails_Icon'/>
            <h1 className='ticketdetails_Heading'>Railway Tourism Corporation Ticket Booking</h1>
        </div>
        <div className="ticketdetails_RightbarBottom">
            <div className="ticketdetails_RightbarBottomleft" >
            <div ref={confirmRef} className="ticketdetails_lockerContainer">
            <div className='ticketdetails_lockerContainertop'>
            <h1>Confirm List</h1>
            <button className="print_button" onClick={confirmPrint}>Print</button>
            </div>
            <hr />
            {(()=>{
            if(info.length!==0) {
                    return(               
                    <>   
                <table className="emi_Table">
                    <tr className="table_Header">
                    <th>Ticket no</th>
                    <th>Seat no</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Birth</th>
                    </tr>
                    {info.map((info,index)=>{
                    return(
                    <tr key={index} className="table-Content">
                    <th>{info.alloted}</th>
                    <th>{info.seat_no}</th>
                    <th>{info.name}</th>
                    <th>{info.age}</th>
                    <th>{info.gender}</th>
                    <th>{info.birth}</th>
                    </tr>
                    )})}
                    <p>Confirmed Ticket:{info.length}</p>
                    </table>
                    </>
            )
        }
    }
            )()}
            </div>      
            <div ref={racRef} className="ticketdetails_lockerContainer">
            <div className='ticketdetails_lockerContainertop'>
            <h1>RAC List</h1>
            <button className="print_button" onClick={racPrint}>Print</button>
            </div>
            <hr />
            {(()=>{
            if(rac.length!==0) {
                    return(               
                    <>   
                <table className="emi_Table">
                    <tr className="table_Header">
                    <th>Ticket no</th>
                    <th>Seat no</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Birth</th>
                    </tr>
                    {rac.map((rac,index)=>{
                    return(
                    <tr key={index} className="table-Content">
                    <th>{rac.alloted}</th>
                    <th>{rac.seat_no}</th>
                    <th>{rac.name}</th>
                    <th>{rac.age}</th>
                    <th>{rac.gender}</th>
                    <th>{rac.birth}</th>
                    </tr>
                    )})}
                    <p>Rac Ticket:{rac.length}</p>
                    </table>
                    </>
            )
        }
    }
            )()}
            </div>  
            <div ref={waitingRef} className="ticketdetails_lockerContainer">
            <div className='ticketdetails_lockerContainertop'>
            <h1>Waiting List</h1>
            <button className="print_button" onClick={waitingPrint}>Print</button>
            </div>
            <hr />
            {(()=>{
            if(waiting.length!==0) {
                    return(               
                    <>   
                <table className="emi_Table">
                    <tr className="table_Header">
                    <th>Ticket no</th>
                    <th>waiting no</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    </tr>
                    {waiting.map((waiting,index)=>{
                    return(
                    <tr key={index} className="table-Content">
                    <th>{waiting.alloted}</th>
                    <th>{waiting.waiting_no}</th>
                    <th>{waiting.name}</th>
                    <th>{waiting.age}</th>
                    <th>{waiting.gender}</th>
                    </tr>
                    )})}
                    </table>
                   
                    </>
            )
        }
    }
            )()}
            
            </div>   
            <div ref={childRef} className="ticketdetails_lockerContainer">
            <div className='ticketdetails_lockerContainertop'>
            <h1>Children List</h1>
            <button className="print_button" onClick={childPrint}>Print</button>
            </div>
            <hr />
            {(()=>{
            if(child.length!==0) {
                    return(               
                    <>   
                <table className="emi_Table">
                    <tr className="table_Header">
                    <th>Ticket no</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    </tr>
                    {child.map((child,index)=>{
                    return(
                    <tr key={index} className="table-Content">
                    <th>{child.ticket_no}</th>
                    <th>{child.name}</th>
                    <th>{child.age}</th>
                    <th>{child.gender}</th>
                    </tr>
                    )})}
                    </table>
                    </>
            )
        }
    }
            )()}
            </div>
            <div ref={confirmAvailRef} className="ticketdetails_lockerContainer">
            <div className='ticketdetails_lockerContainertop'>
            <h1>Available Confirm List</h1>
            <button className="print_button" onClick={availConfirmPrint}>Print</button>
            </div>
            <hr />
            {(()=>{
            if(availConfirm.length!==0) {
                    return(               
                    <>   
                <table className="emi_Table">
                    <tr className="table_Header">
                    <th>Seat no</th>
                    <th>birth</th>
                    </tr>
                    {availConfirm.map((availconfirm,index)=>{
                    return(
                    <tr key={index} className="table-Content">
                    <th>{availconfirm.seat_no}</th>
                    <th>{availconfirm.birth}</th>
                    </tr>
                    )})}
                    </table>
                    <p className='ticketpara'>Available Confirm Ticket:{availConfirm.length}</p>
                    </>
            )
        }
    }
            )()}
            </div>   
            <div ref={RacAvailRef} className="ticketdetails_lockerContainer">
            <div className='ticketdetails_lockerContainertop'>
            <h1>Available Confirm List</h1>
            <button className="print_button" onClick={availRacPrint}>Print</button>
            </div>
            <hr />
            {(()=>{
            if(availRac.length!==0) {
                    return(               
                    <>   
                <table className="emi_Table">
                    <tr className="table_Header">
                    <th>Seat no</th>
                    <th>birth</th>
                    </tr>
                    {availRac.map((availrac,index)=>{
                    return(
                    <tr key={index} className="table-Content">
                    <th>{availrac.seat_no}</th>
                    <th>{availrac.birth}</th>
                    </tr>
                    )})}
                   
                    </table>
                    <p className='ticketpara'>Available Rac Ticket:{availRac.length}</p>
                    </>
            )
        }
    }
            )()}
            </div>               
            </div>
        </div>
    </div>
</div>
  );
};

export default Ticketdetails;
