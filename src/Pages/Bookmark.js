import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "../components/footer";
import { BsFillTrash2Fill ,BsArrowLeftSquareFill} from "react-icons/bs";



export default function Bookmark(){
   
    
    let items=JSON.parse(localStorage.getItem("bookmark"));
    let ids=items.map(i=>i.id)
    
    let filtered=items.filter(({id},index)=>!ids.includes(id,index+1))

    const [Book_mark,setBookmark]=useState(filtered)
    const del=(i)=>{
        let del_items=filtered.filter((val,index)=>index!=i)
        localStorage.setItem("bookmark",JSON.stringify(del_items));
        setBookmark(JSON.parse(localStorage.getItem('bookmark')))
    }
   
   

    return(
        <div>
            <Header/>
            <h2 className="mt-3 mb-3">Book mark</h2>
            
            <div className="row m-0 p-0">
            {Book_mark && Book_mark.map((value,i)=>{
                return(
                    <div className="col-4 card" key={i}>
                        <div>
                            <img src={value.image} className='wid-image'/>
                            <h4><Link to={`/container/${value.id}`} className='link_clr'>{value.title}</Link></h4>
                            <h3 onClick={()=>del(i)} className='text-right'><BsFillTrash2Fill className='icon_color'/></h3>
                        </div>
                    </div>
                )
            })}
            </div>
            <Footer/>
        </div>
    )
}