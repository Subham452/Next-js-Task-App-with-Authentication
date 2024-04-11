
import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { auth } from './firebase_config'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'

const Header = ({name}) => {
    const [active, setActive] = useState(true)
    const [direction , setDirection] = useState("/Task")

    const link_click =()=>{
        setActive(!active)
        setDirection(active? "/Home" : "/Task")
    }

    const router = useRouter()

    
  const [userName, setUserName] = useState("")
  const [img_url, setImg_url] = useState()
  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      console.log(user)
      if(user){
        setUserName(user?.displayName)
        setImg_url(user?.photoURL)
      }
      else{
        setUserName("")
      }
    })
  }, []);

  
//   const [userName, setUserName] = useState("")
//   const [img_url, setImg_url] = useState()
//   useEffect(() => {
//     auth.onAuthStateChanged((user)=>{
//       console.log(user)
//       if(user){
//         setUserName(user?.displayName)
//         setImg_url(user?.photoURL)
//       }
//       else{
//         setUserName("")
//       }
//     })
//   }, []);

const [menu, setMenu] = useState(false)

const Logout = async () => {
    try {
        await signOut(auth)
        router.push("/Register")
    }
    catch (err) {
        console.log(err)
        alert(err.code)
        
    }
}
    return (
        <div>
            <div className=' h-20 bg-white w-screen justify-between items-center flex '>
                <div className=' h-full  justify-between items-center flex w-full lg:mx-20 border-b-2 border-slate-300'>

                    <div className=' h-auto w-auto p-2 bg-slate-100 rotate-90' onClick={()=>{ setMenu(!menu)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-2"><line x1="18" x2="18" y1="20" y2="10" /><line x1="12" x2="12" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="14" /></svg>
                    </div>

                    <div className={` ${menu?"flex":"hidden"} justify-between items-center  h-[5rem] min-w-auto px-6 rounded-lg max-w-[20rem] bg-black/90 text-white absolute mt-[10rem] `}>
                        <div className=' gap-5 flex flex-row justify-between items-center '>
                            <div className=' border-2 border-slate-400 justify-center items-center flex font-semibold text-white h-10 w-10 bg-black rounded-full'>
                                {userName?userName.charAt(0):"N"}
                            </div>
                            <div className=' flex flex-col justify-end items-end gap-1'>
                            {userName}
                            <span className=' text-sm font-semibold text-red-700' onClick={Logout}>{userName?"Logout":"Register/Login"}</span>
                            </div>
                        </div>
                    </div>

                    <Link href={direction}>

                        <div className=' flex flex-row justify-center items-center gap-2' onClick={link_click}>
                            <div className=' text-lg font-semibold '>
                            Welcome <span className=' text-green-700'>{userName}</span>
                            </div>
                            <h1 className={` text-lg shadow-lg font-mono h-auto w-auto ${active ? "bg-violet-100 border-violet-600 " : "bg-green-100 border-green-600"} px-3 py-2 rounded-full border-2  text-black font-semibold `}> {active ? "Add Your Task" : "Back to Home"}</h1>
                            <div className={` h-2 w-2 ${active ? "bg-violet-700 " : "bg-green-500"} transition-all duration-300 rounded-full shadow-lg animate-ping `}>

                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
