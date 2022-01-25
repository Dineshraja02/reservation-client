import axios from 'axios';
import {useEffect, useState} from 'react';
// import {useNavigate} from "react-router-dom";


const useBookingForm = (validateInfo) => {
    // let navigate=useNavigate();
    const token= Date.now()+Math.random();
    const tokenNum=Math.round(token);
    const ticket=tokenNum.toString();
    const API_URL = "http://localhost:3001/reservation/book"
    const [values,setValues] = useState({
        name:"",
        age:"",
        gender:"",
        birth:"",
        ticket_no:ticket
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
    setValues({
        ...values,
        "ticket_no":ticket
    });
    setErrors(await validateInfo(values)); 
 }


useEffect(()=>{
    if(Object.keys(errors).length===0 && submit){
                axios.post(API_URL,{
                   name:values.name,
                   age:values.age,
                   gender:values.gender,
                   birth:values.birth,
                   ticket_no:values.ticket_no
               })
           .then(res=>{
               // navigate("/");
               alert("Booking success");
               
           })
           .catch(err=>{
               alert("No Tickets Available");
           })
           setSubmit(false);
           }
},[errors])// eslint-disable-line react-hooks/exhaustive-deps

return {handleChange,values,handleSubmit,errors};
}

export default useBookingForm;
