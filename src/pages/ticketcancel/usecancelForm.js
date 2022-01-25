import axios from 'axios';
import {useEffect, useState} from 'react';

// import {useNavigate} from "react-router-dom";


const useCancelingForm = (validateInfo) => {
    // let navigate=useNavigate();
    const API_URL = "http://localhost:3001/reservation/cancel"
    const [values,setValues] = useState({
        ticket_no:""
    });
    const [errors,setErrors]=useState({});
    const [submit,setSubmit]=useState(false);

const handleChange= e =>{
        const {name,value}=e.target;
        setValues({
            ...values,
            [name]:value
        });
    };
const handleSubmit=async(e)=>{
    e.preventDefault();
    setSubmit(true);
    setErrors(await validateInfo(values)); 
 }


useEffect(()=>{
    if(Object.keys(errors).length===0 && submit){
                axios.post(API_URL,{
                   ticket_no:values.ticket_no
               })
           .then(res=>{
               // navigate("/");
               alert("Ticket Canceled")
           })
           .catch(err=>{
               console.log("Ticket Canceled");
           })
           console.log(values);
           setSubmit(false);
           }
},[errors])// eslint-disable-line react-hooks/exhaustive-deps

return {handleChange,values,handleSubmit,errors};
}

export default useCancelingForm;
