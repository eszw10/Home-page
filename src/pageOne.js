import React from 'react'
import {useParallax } from 'react-scroll-parallax';

export default function PageOne() {

    return(
        <div className='container-fluid m-0 p-0'  style={{"height":"140vh",zIndex:"-100"}}>
            <img ref={useParallax({speed : -60}).ref} className='el el-1 position-absolute' src={require("./Images/Elemen/el-1.png")} style={{zIndex:"-1"}} alt="pic"></img>
            <img ref={useParallax({speed : -35}).ref} className='el el-2 position-absolute' src={require("./Images/Elemen/el-2.png")} style={{zIndex:"-1"}} alt="pic"></img>
            <img ref={useParallax({speed : -30}).ref} className='el el-3 position-absolute' src={require("./Images/Elemen/el-3.png")} style={{zIndex:"-1"}} alt="pic"></img>
            <img ref={useParallax({speed : -25}).ref} className='el el-4 position-absolute' src={require("./Images/Elemen/el-4.png")} style={{zIndex:"-1"}} alt="pic"></img>
            <img ref={useParallax({speed : -100}).ref} className='el-logo position-absolute' src={require("./Images/LOGO-IF-ELSE.png")} style={{zIndex:"-1"}} alt="pic"></img>
            <img ref={useParallax({speed : -20 }).ref} className='el el-5 position-absolute' src={require("./Images/Elemen/el-5.png")} style={{zIndex:"-1"}} alt="pic"></img>
            <img ref={useParallax({speed : -10}).ref} className='el el-6 position-absolute' src={require("./Images/Elemen/el-6.png")} style={{zIndex:"-1"}} alt="pic"></img>
            <img ref={useParallax({speed : -2}).ref} className='el el-7 position-absolute' src={require("./Images/Elemen/el-7.png")} style={{zIndex:"-1"}} alt="pic"></img>
        </div>
    )
}