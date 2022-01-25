import React from 'react';
import "./sidebar.css";
import {Icon} from "@iconify/react";
import { SidebarData } from './sidebarData';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const navigate=useNavigate();
    const signout= async () =>{
       sessionStorage.clear();
        navigate("/");
    }
    return (
        <div className='sidebar'>
            <ul className='sidebarList'>
             <div className='sidebarLogodiv' >
             <Icon icon="emojione-monotone:train"  className='sidebarLogo' />
                 <h1 className='sidebarLogotext'>RTC</h1></div>
                 <div className="sidebarline">
             {SidebarData.map((val,key)=>{
                 return<li key={key} 
                        className='row'
                        id={window.location.pathname === val.link ? "active" : ""}
                        onClick={()=>{navigate(val.link)}}>
                     <div id="icon">{val.icon}</div>
                     <div id="title">{val.title}</div>
                     </li>
             })}
             </div>
             <button className="sidebar_Signout" onClick={signout}> Sign out</button>
            </ul>
        </div>
    )
}

export default Sidebar
