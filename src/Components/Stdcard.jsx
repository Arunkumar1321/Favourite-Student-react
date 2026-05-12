import { listcontext } from "../Components/ListProvider"
import { useContext } from "react"



const Stdcard =()=>{
     
    const list=useContext(listcontext)   
  const stdlist=list.stdlist
   const fstd = list.fstd
    const setfstd =list.setfstd
    const addTofav =(Student)=>{
        if(fstd.some(item=>item.stdid===Student.stdid)){
            window.alert("Already in Favourites")
            return
        }
        setfstd([...fstd,Student])
        
    }
    return(
        <div className="flex gap-5 justify-around flex-wrap m-5">
            { 
                stdlist.map(function(item){
                    return(
                        
                        <div key={item.stdid} className="shadow-xl w-82 bg-white p-2 rounded-md m-2 text-center flex flex-col gap-4 relative flex-grow basis-3/5 md:basis-1/4 ">
                            <h1 className="text-xl font-extrabold m-4">{item.std}</h1>
                            <p className="text-cyan-600">{item.stdid}</p>
                            <p className="text-orange-600">{item.grade}</p>
                            <p className="bg-blue-500 text-white rounded-full w-fit absolute top-2 right-2 font-bold py-4 px-5 ">{item.std.split(' ').map(n => n[0]).join('').slice(0, 2)}</p>
                            <button onClick={()=>{addTofav(item)}} className="mx-10 p-1 border border-red-500  rounded-md bg-green-400 text-white font-bold hover:-translate-y-1  duration-500 ">Add to Favourite</button>

                        </div>
                       
                    )
                })
            }
        </div>
    )
}
export default Stdcard