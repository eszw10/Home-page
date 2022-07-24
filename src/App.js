import React from 'react'
import PageOne from './pageOne';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function App() {
    return(
        <ParallaxProvider>
            <PageOne/>
            <div className='page-2 w-100' style={{"height":"100vh"}}>
            <img alt='imag' className='el el-8 position-absolute' src={require("./Images/Elemen/el-8.png")}></img>
            </div>
        </ParallaxProvider>
    );
}