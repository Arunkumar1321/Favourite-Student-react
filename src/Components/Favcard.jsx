import { useContext } from "react"
import { listcontext } from "./ListProvider"
import { Link } from "react-router-dom"

const Favcard =()=>{
    const data = useContext(listcontext)
    const fstd = data.fstd
    const setfstd=data.setfstd
    const removestd=(Studentid)=>{
     const temparr=fstd.filter(function(item){
            if(item.stdid===Studentid){
                return(false)
            }else{
                return(true)
            }

        })
        setfstd(temparr)
       
    }

    return(
          <div>
            {fstd.length===0 ?  <div className="text-center my-56">
           <h1 className="text-5xl font-bold text-orange-600 text-center ">"No Favourites Added Yet"</h1>  
           <button className="p-2 bg-blue-600 text-white rounded-md m-2"><Link to={"/"}>Go Back</Link></button>
           </div> :""}
           
           {
                fstd.map(function(item){
                    return(
                        <div className="grid grid-cols-4 justify-around bg-white rounded-md m-2 items-center gap-10 p-3" key={item.stdid}>
                            <h1 className="text-xl font-extrabold text-green-700">Name:{item.std}</h1>
                            <p className="text-cyan-600 ">Id:{item.stdid}</p>
                            <p className="text-orange-600 ">Grade:{item.grade}</p>
                            <button onClick={()=>{removestd(item.stdid)}} className="bg-red-700 text-white p-2 rounded-md font-bold cursor-pointer hover:bg-red-500 duration-300">Remove Your Favourite</button>
                        </div>
                    )
                })
            }
            {fstd.length===0?"":<div className="text-center">
            <button className="p-2 bg-blue-600 text-white rounded-md m-2 "><Link to={"/"}>Go Back</Link></button> </div>}
          </div>
    )
}
export default Favcard