'use client'
import React, { useEffect, useState } from 'react';
import Header from '../_Components/Header';

const Task = () => {

  const date = new Date();
  const showTime = date.getHours()
    + ':' + date.getMinutes()
    + ":" + date.getSeconds();

  const [inputData, setInputData] = useState('')

  const [items, setItems] = useState([])

  const [time, setTime] = useState('')

  const time1 = date.getMilliseconds()

  const arr = [1, 2, 3, 4]

  const [num, setNum] = useState(0);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random()
      * (max - min + 1)) + min;
  };

  const [icon, setIcon] = useState()

  const listOfItems = () => {
    if (inputData !== "") {
      setItems((oldItems) => {
        return [...oldItems, inputData]
      });
      setInputData('')
      setTime(showTime)
      setNum(randomNumberInRange(1, 16));
      // alert(num);
      if (num === 0) {
        setIcon("😉")
      }
      else if (num === 1) {
        setIcon("😏")
      }
      else if (num === 1) {
        setIcon("🙄")
      }
      else if (num === 2) {
        setIcon("😁")
      }
      else if (num === 3) {
        setIcon("😶‍🌫️")
      }
      else if (num === 4) {
        setIcon("🫡")
      }
      else if (num === 5) {
        setIcon("🥰")
      }
      else if (num === 6) {
        setIcon("🤗")
      }
      else if (num === 11) {
        setIcon("🥰")
      }
      else if (num === 12) {
        setIcon("😥")
      }

      else if (num === 14) {
        setIcon("😑")
      }

      else if (num === 15) {
        setIcon("🙂")
      }
      else if (num === 13) {
        setIcon("😒")
      }

      else if (num === 13) {
        setIcon("😝")
      }
      else if (num === 14) {
        setIcon("😛")
      }
      else if (num === 15) {
        setIcon("😌")
      }

      else if (num === 16) {
        setIcon("😒")
      }
      else if (num === 7) {
        setIcon("😗")
      }
      else if (num === 1) {
        setIcon("😍")
      }
      else if (num === 8) {
        setIcon("😭")
      }
      else if (num === 9) {
        setIcon("🎉")
      }
      else if (num === 10) {
        setIcon("😊")
      }
      else {
        setIcon("😎")
      }
    }
  }


  const [id, setId] = useState()
  const [complete, setComplete] = useState(false)


  const deleteItems =(index)=>{
    // alert(index)
    // setItems((oldItems)=>{
    //   return oldItems.filter((arrElem, index)=>{
    //     return index!==id
    //   })
    // })

    const updateslistdata = items.filter((elem, id)=>{
      return index!==id
    })
    setItems(updateslistdata)
  }

  const removeall =()=>{
    setItems([])
  }


  useEffect(() => {
    listOfItems()
  }, [])

  return (
    <div>
      <div>
      <Header />
        <div className=' flex-col bg-white mt-10 h-auto w-screen justify-center items-center flex'>
          <h1 className=" text-4xl font-bold">Add Your Task Here</h1>
          <div className=' px-10 w-full justify-between items-center flex flex-col lg:flex-row mx-20 bg-violet-100 rounded-lg mt-6 h-auto py-20 lg:py-0  lg:h-[75vh] '>
            <div className=' flex-col h-auto lg:pb-10 pb-10  lg:h-[65vh] w-96 flex justify-start items-center gap-5 pt-10 bg-white rounded-lg'>

              <input className=" h-[3rem] w-80 bg-white text-black border-2 pl-2 border-violet-500" value={inputData} type="text" placeholder="Add Your Task" onChange={(e) => { setInputData(e.target.value) }} />

              <div className=" cursor-pointer hover:bg-green-400 transition-all duration-300 justify-center items-center flex h-[3rem] text-violet-50 text-xl font-bold w-80 bg-violet-400" onClick={listOfItems}  >
                Add Your Task
              </div>

              <img className="h-64 lg:inline-block hidden" src="https://img.freepik.com/free-vector/isometric-time-management-concept-illustrated_52683-55734.jpg?t=st=1711978858~exp=1711982458~hmac=e1c67569dec948aa7fb2fa84de7c9978361a2c6cf550573e82e092ff7bf6aca5&w=740" alt="" />
            </div>

            <div className=' flex-col gap-2 h-auto justify-start items-start flex w-[24rem] lg:w-[50vw] bg-white'>
              <div className=' h-20 w-full flex justify-end items-center bg-transparent'>
                <div className={` ${items.length>0?"":"hidden"} h-auto w-auto px-3 py-2 flex justify-end text-md text-black font-bold items-centerbg-red-600/0 bg-red-200 border-2 hover:bg-red-300 transition-all duration-300 border-red-600 rounded-full shadow-md mr-3 cursor-pointer`} onClick={removeall}>
                  Remove All Recors
                </div>
              </div>
              <ul className=' py-20 h-96 overflow-y-scroll w-full  flex gap-9 justify-start items-start pl-2 pt-2  flex-col'>
                {
                  items.map((i, index) => (
                    <li key={index} id={index} className=' flex flex-row justify-between items-center gap-2'>
                      <div className={`h-auto ${inputData.length>16?" w-64":"w-auto"} p-2 bg-violet-100 rounded-br-2xl  items-center gap-10 justify-start flex text-white `}>
                        <div className=' gap-2 overflow-hidden text-black flex justify-center items-start flex-row'>
                          <h1 className=' text-lg font-bold '>{index+1}.</h1>
                          <p className=' h-auto w-auto max-w-40'>{i}</p>
                        </div>

                        <div className=' text-xl rounded-full h-8 overflow-hidden w-8 bg-transparent'  >
                          {
                            icon
                          }
                        </div>
                      </div>

                      <div className=' cursor-pointer h-9 w-auto px-2 py-1 text-white text-xs p-1 flex justify-center items-center bg-black rounded-full' onClick={()=>deleteItems(index)}>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#29ffb8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-check"><path d="M18 6 7 17l-5-5" /><path d="m22 10-7.5 7.5L13 16" /></svg>                       */}
                        Mark as Complete
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task
