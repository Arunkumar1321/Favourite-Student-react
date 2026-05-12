import { createContext, useState } from "react"
const listcontext=createContext()
const Listprovider=(data)=>{
    
     const [stdlist,setstdlist]=useState([{std:"Arun kumar",stdid:"PHY6139",grade:"9.35"},
        {std:"Aruna Devi",stdid:"MBA3123",grade:"8"},
        {std:"Divya Dharshini",stdid:"CSC1234",grade:"9.5"},
    {std:"Abirami Dev",stdid:"BCA1823",grade:"6.6"},
{std:"Kavin Kanth",stdid:"BBA5632",grade:"8.5"},
{std:"Anu Rash",stdid:"BAB8975",grade:"7.53"},
{std:"Sanjai kumar",stdid:"BCO9095",grade:"5.80"},
{std:"Abinaya Singh",stdid:"BIO7345",grade:"8.9"},
{std:"Karthik",stdid:"BBA8132",grade:"7.90"}])
      const[fstd,setfstd]=useState([])
  
    return(
        <listcontext.Provider value={{stdlist,setstdlist,fstd,setfstd}}>
            {data.children}

        </listcontext.Provider>
    )
}
export default Listprovider
export {listcontext}