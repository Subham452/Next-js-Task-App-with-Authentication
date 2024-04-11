'use client'
import React, {useState, useEffect} from 'react'
import Header from '../_Components/Header'

const Home = () => {
    const arr = [{ name: "mon" }, { name: "Tue" }, { name: "Wed" }, { name: "Thus" }, { name: "Fri" }, { name: "Sat" }, { name: "Sun" },]



    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
        
    });

    return (
        <div className=' h-auto  w-screen bg-slate-100 justify-center items-center'>
            <div className=''>
                <Header />
                <div className=' w-screen px-20 bg-gradient-to-r from-white lg:from-violet-100 to-white via-white h-auto'>
                    <div className=' flex flex-col justify-start items-center  w-full h-auto bg-gradient-to-r from-white lg:from-violet-100 to-white via-white '>
                        <div className=' mt-20 justify-between items-center h-auto w-full flex'>

                            <div className=' flex flex-col'>
                                <h1 className=' text-4xl font-bold'>Manage Your<br /> task</h1>
                            </div>

                            <div className=' flex  flex-row'>
                                <img className=' h-44 hidden' src="https://img.freepik.com/free-vector/multi-device-targeting-concept-illustration_114360-7305.jpg?t=st=1711973685~exp=1711977285~hmac=e90e7ded9a717fe0f93ef506207d0862fbaf88c83bc5c677d69f7976d02a706b&w=996" alt="" />
                                <img className=' lg:inline-block hidden h-56' src="https://img.freepik.com/free-vector/time-management-concept-illustration_114360-2499.jpg?t=st=1711973635~exp=1711977235~hmac=b15041443b34df7de06a6f75f1afd72992b7396370af573f17f3c25370faf297&w=740" alt="" />
                                <img className=' h-56 lg:h-80' src="https://img.freepik.com/free-vector/hand-drawn-business-planning_52683-76248.jpg?t=st=1711973558~exp=1711977158~hmac=f54b36e0246d5df8bbedf457f2881fe8a9f9e0103b44ccde597780cecb299ced&w=740" alt="" />
                            </div>

                        </div>

                        <div className=' h-auto lg:mt-0 mt-20 flex flex-row   bg-red-000 w-screen justify-between items-center'>
                            <div className=' mx-10 h-[6rem] w-[40rem] rounded-lg shadow-lg   flex flex-row justify-between border-2 border-violet-700 bg-violet-50 gap-20 items-center'>
                                <div>
                                    <h1 className=' pl-10 text-3xl font-bold'>Today : {date.toLocaleDateString()}</h1>
                                </div>

                                <div className=" ">
                                    <h2 className=" pr-10 text-2xl font-bold text-black"> {date.toLocaleTimeString()}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home