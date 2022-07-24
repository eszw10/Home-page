import React from 'react'



export default function PageOne() {
    return(
        <div className='container position-relative bgStyle' style={{backgroundImage: `url(${require("./Images/Elemen/el-1.jpg")})`}}>
            <img className='el-1 bgStyle' src={require("./Images/Elemen/el-6.png")} alt='gunung-1'/>
            <div className='el-2'></div>
            <div className='el-3'></div>
            <div className='el-4'></div>
            <div className='el-5'></div>
            <div className='el-6'></div>
            <div className='el-7'></div>
            <div className='el-8'></div>
            <div className='el-9'></div>
            <div className='el-10'></div>
            <div className='el-12'></div>
            <div className='el-12'></div>
            <div className='el-13'></div>
        </div>
    )
}