'use client'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../_Components/firebase_config'


import { useRouter } from 'next/navigation'

const page = () => {

    const router = useRouter();

    const [regster, setRegister] = useState(true)

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",

    })

    const google = async () => {
        try {
            await signInWithPopup(auth, provider)
            router.push("/Home")
        }
        catch (err) {
            console.log(err)
        }
    }



    const Register = async () => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(async (res) => {
                console.log(res)
                const user = res.user
                await updateProfile(user, {
                    displayName: values.name,
                })

                router.push("/Home")

            })
            .catch((err) => {
                console.log(err)
                // alert(err.code)
                setError1(true)
                if (err.code === "auth/missing-password") {
                    setError1(true)
                    setErrorname("Fill all Fields")
                    setTimeout(() => {
                        // console.log("Delayed for 1 second.");
                        setError1(false)
                    }, "9400");
                }
                else if (err.code === "auth/invalid-email") {
                    setError1(true)
                    setErrorName("Invalid Email or Fill the email");
                }
                else if (err.code === "auth/admin-restricted-operation") {

                    setTimeout(() => {
                        // console.log("Delayed for 1 second.");
                        setError1(false)
                    }, "9400");

                }
                else if (err.code === "auth/email-already-in-use") {
                    setError1(true)
                    setErrorname("Email already in use")
                    setTimeout(() => {
                        setError1(false)
                    }, "9400");
                }

            })
    }

    const [values1, setValues1] = useState({
        name1: "",
        email1: "",
        password1: "",

    })



    const [error, setError] = useState(false);
    const [errorName, setErrorName] = useState('');

    const [error1, setError1] = useState(false);

    const Login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, values1.email1, values1.password1)

            setErrorName("Sucessfully signed in")
            setError(true)
            setTimeout(() => {
                // console.log("Delayed for 1 second.");
                router.push("/Home")
            }, "1000");
        }
        catch (err) {
            setError1(true)
            console.log(err)
            setErrorName(err.code)
            if (err.code === "auth/network-request-failed") {
                setErrorName("Network Request Failed")
                setTimeout(() => {
                    // console.log("Delayed for 1 second.");
                    setError1(false)
                }, "9400");
            }
            else if (err.code === "auth/missing-password" || err.code === "auth/invalid-email") {
                setErrorName("Fill all Fields")
                setTimeout(() => {
                    // console.log("Delayed for 1 second.");
                    setError1(false)
                }, "9400");
            }
            else if (err.code === "auth/invalid-credential") {
                setError1(true)
                setErrorName("Please Signup Or check the Password")
                setTimeout(() => {
                    // console.log("Delayed for 1 second.");
                    setError1(false)
                }, "9400");
            }
            else {
                setErrorName(err.code)
                setTimeout(() => {
                    // console.log("Delayed for 1 second.");
                    setError1(false)
                }, "9400");
            }
        }
    }



    return (
        <div>
            <div className='  text-white h-screen overflow-hidden bg-slate-900 w-screen justify-center items-center flex'>

                <div className=' lg:flex hidden rounded-xl overflow-hidden  h-full w-screen justify-center items-center  rotate-90'>
                    <video loop={true} autoPlay={true} className=' w-[40rem] object-cover ' src={"/8e7f7da679e6aca5cdf9e84b930c531f.mp4"}></video>
                </div>

                <div className={` absolute ${regster ? "" : "hidden"}`}>
                    <div className='  h-auto py-10 rounded-xl  flex flex-col justify-center items-center gap-10 w-[23rem] bg-black/40'>
                        <div className=' gap-2 flex flex-col justify-start items-start'>
                            <h1 className=' text-xl font-semibold'>Full Name</h1>
                            <input type="text" className=' h-[2.5rem] border-2 border-green-400 rounded-l bg-transparent w-[17rem] ' onChange={(e) => { setValues((prev) => ({ ...prev, name: e.target.value })) }} />
                        </div>
                        <div className=' gap-2 flex flex-col justify-start items-start'>
                            <h1 className=' text-xl font-semibold'>Email</h1>
                            <input type="email" className=' h-[2.5rem] border-2 border-green-400 rounded-l bg-transparent w-[17rem] ' onChange={(e) => { setValues((prev) => ({ ...prev, email: e.target.value })) }} />
                        </div>
                        <div className=' gap-2 flex flex-col justify-start items-start'>
                            <h1 className=' text-xl font-semibold'>Password</h1>
                            <input type="password" className=' h-[2.5rem] border-2 border-green-400 rounded-l bg-transparent w-[17rem]  ' onChange={(e) => { setValues((prev) => ({ ...prev, password: e.target.value })) }} />
                        </div>
                        <div className=' cursor-pointer h-auto w-[17rem] gap-2 text-sm -mt-9 flex flex-col justify-end items-end ' onClick={() => { setRegister(!regster) }}>
                            <h1 className='  font-semibold'>Have an account?<span className=' text-green-500'>Login</span></h1>
                        </div>
                        <div className=' lg:border-0 border-2 lg:border-white/0 text-black lg:text-white border-white -mt-4 cursor-pointer h-[2.5rem] w-[17rem] bg-white lg:bg-black rounded-lg font-bold shadow-lg shadow-sky-300/20 justify-center items-center flex' onClick={Register}>
                            Register
                        </div>


                        <div className={` ${error1 ? "flex" : "hidden"} -mt-4 cursor-pointer h-[2.5rem] w-[17rem] bg-white text-red-600 rounded-lg font-bold shadow-lg justify-center items-center  `} >
                            {errorName}
                        </div>

                        <div className=' -mt-7'>
                            Or
                        </div>
                        <div className=' -mt-7 bg-sky-500 cursor-pointer h-[2.5rem] lg:text-white text-black w-[17rem] lg:bg-black rounded-lg font-bold shadow-lg shadow-sky-300/20 justify-center items-center flex' onClick={google}>
                            google
                        </div>
                    </div>

                </div>

                <div className={` absolute ${regster ? "hidden" : ""}`}>
                    <div className='  h-[33rem] rounded-xl  flex flex-col justify-center items-center gap-10 w-[23rem] bg-black/40'>
                        <div className=' gap-2 flex flex-col justify-start items-start'>
                            <h1 className=' text-xl font-semibold'>Email</h1>
                            <input type="email" className=' h-[2.5rem] border-2 border-green-400 rounded-l bg-transparent w-[17rem] ' onChange={(e) => { setValues1((prev) => ({ ...prev, email1: e.target.value })) }} />
                        </div>
                        <div className=' gap-2 flex flex-col justify-start items-start'>
                            <h1 className=' text-xl font-semibold'>Password</h1>
                            <input type="password" className=' h-[2.5rem] border-2 border-green-400 rounded-l bg-transparent w-[17rem] ' onChange={(e) => { setValues1((prev) => ({ ...prev, password1: e.target.value })) }} />
                        </div>
                        <div className=' cursor-pointer h-auto w-[17rem] gap-2 text-sm -mt-9 flex flex-col justify-end items-end ' onClick={() => { setRegister(!regster) }}>
                            <h1 className='  font-semibold'>Don't have an account?<span className=' text-green-500'>Register</span></h1>
                        </div>
                        <div className={` ${error1 ? "flex" : "hidden"} -mt-4 cursor-pointer h-[2.5rem] w-[17rem] bg-white text-red-600 rounded-lg font-bold shadow-lg justify-center items-center  `} >
                            {errorName}
                        </div>
                        <div className=' lg:border-0 border-2 lg:border-white/0 text-black lg:text-white border-white -mt-4 cursor-pointer h-[2.5rem] w-[17rem] bg-white lg:bg-black rounded-lg font-bold shadow-lg shadow-sky-300/20 justify-center items-center flex' onClick={Login}>
                            Login
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page
