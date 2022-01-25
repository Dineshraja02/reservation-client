import React from 'react';
import "./sidebar.css";
import {Icon} from "@iconify/react";
import { SidebarData } from './sidebarData';


const Sidebar = () => {
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
                        onClick={()=>{window.location.pathname= val.link}}>
                     <div id="icon">{val.icon}</div>
                     <div id="title">{val.title}</div>
                     </li>
             })}
             </div>
             <button className="sidebar_Signout"> Sign out</button>
            </ul>
        </div>
    )
}

export default Sidebar
