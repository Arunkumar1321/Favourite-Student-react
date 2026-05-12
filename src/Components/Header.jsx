import { Link } from "react-router-dom"
import { useContext } from "react"
import { listcontext } from "./ListProvider"
 
const Header =()=>{
   const data=useContext(listcontext)
   const fstd=data.fstd
   
    return(
         <div className=" flex justify-center sticky top-0 z-30 md:justify-between items-center bg-black flex-wrap"> 
        <div>
          
            <h1 className="text-3xl font-bold p-2 text-white">🎓Students Hub</h1>
           <p className="text-xl font-bold px-4 py-2 text-green-600">🧑‍🎓 Pickup Your Favourite Students </p>
        </div>
        <div className="flex flex-row gap-8 m-3" >
         <button className="px-2 py-1 bg-gray-500 text-white rounded-md cursor-pointer"> <Link to={"/"}> 📇 Student list</Link></button>
         <button className="px-2 bg-blue-600 text-white rounded-md cursor-pointer mx-8"> <Link to={"/favourite"}>🤍 Favourites  {fstd.length}</Link> </button>
         </div>
       </div>
    )
}
export default Header