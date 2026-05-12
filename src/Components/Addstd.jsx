import { useState } from "react"
import { useContext } from "react"
import { listcontext } from "./ListProvider"

const Addstd = ()=>{
    const data=useContext(listcontext)
    const stdlist = data.stdlist
    const setstdlist=data.setstdlist
    const fstd = data.fstd
    const [ninput,setninput]=useState("")
    const [pinput,setpinput]=useState("")
    const [ginput,setginput]=useState("")
    const [ealert,setealert]=useState(false)
    const [galert,setgalert]=useState(false)
    const handleNinput =(event)=>{
            setninput(event.target.value)   
    }
   const handlePinput =(event)=>{
            setpinput(event.target.value)     
    }
   const handleGinput =(event)=>{  
            setginput(event.target.value)
        
    }
    const addUser=(event)=>{
           event.preventDefault()   // Prevent defaults should be in the Front
        const rollregex=/^[A-Z]{3}\d{4}$/
        const graderegex=/^\d{1,2}\.\d{1,2}$/
      
        if(!ninput || !pinput|| !ginput){
           window.alert("Please fill all the fields")
           return
        }
        if(!rollregex.test(pinput)){ 
        window.alert("Roll Number must be 3 Letters + 4 Digits Example : CSC2435")
           setealert(true)
         return
        }
        if(!graderegex.test(ginput)){
         window.alert("Grade value Should below 10 Example : 9.8")
            setgalert(true)
            return
        }
         if (stdlist.some(items=>items.stdid===pinput.trim())){
            window.alert("Student ID already exist")
            return
        }
        setstdlist([...stdlist,{std:ninput,stdid:pinput,grade:ginput}])
        setninput("")
        setpinput("")
        setginput("")
      
    }

    return(
        <div className="bg-orange-400 my-4 p-4 flex justify-center items-center gap-10 flex-wrap ">
            <div>
         <h1  className="text-3xl m-2 font-bold">Enter the Student details :</h1>
         <form className="m-2">
            <table>
                <tr>
                    <th>Name:</th> 
                    <td><input onChange={handleNinput} value={ninput} type="text" placeholder="Enter the Student Name" className="p-2 rounded-lg my-1 focus:outline-none "></input></td>
                </tr>
                 <tr>
                    <th>Id:</th> 
                    <td><input onChange={handlePinput} value={pinput} type="text" placeholder="Enter the Student Id" className="p-2 rounded-lg focus:outline-none"></input>{ealert ?<span className="text-red-700 px-2">Id should in precise format</span>:""} </td>
                </tr>
                 <tr>
                    <th>Grade:</th> 
                    <td><input onChange={handleGinput} value={ginput} type="text" placeholder="Enter the Student Grade" className="p-2 rounded-lg my-1 focus:outline-none"></input> { galert?<span className="text-red-700 px-2">/10</span>:""}</td>
                </tr>
                <tr>
                    <td colSpan={2}><button onClick= {addUser} className=" bg-black text-white  px-20 rounded-md  py-2 my-1 mx-16 hover:text-red-500 duration-300 hover:bg-slate-300 ">Add</button></td>
                </tr>
            </table>
         </form>
         </div>
         <div className=" md:flex justify-evenly w-fit  gap-10 flex-wrap">
          <div className=" text-center bg-fuchsia-600 p-3 rounded-md w-fit shadow-2xl m-3 px-9 ">
            <h1 className="text-3xl font-bold text-white m-1">Total Students </h1>
            <h1 className="text-3xl font-medium px-2 text-red-600">{stdlist.length}</h1>
         </div>
          <div className=" text-center bg-[#0478FF] p-3 rounded-md w-fit shadow-2xl m-3 ">
            <h1 className="text-3xl font-bold text-white m-1">Favourite Student </h1>
            <h1 className="text-3xl font-medium px-2 text-red-600">{fstd.length}</h1>
            </div>
            </div>
        
        </div>
    )
}
export default Addstd