import { useState } from "react";
import { useSelector} from "react-redux";
import { Link} from "react-router-dom";
import { BsArrowLeftSquareFill} from "react-icons/bs";
import { FaHome } from 'react-icons/fa';

export default function Search(){
    const {list,pathName}=useSelector((state)=>state.counter)
    const[search,setSearch]=useState('')

   
    return(
        <div>
            <div className="input_background">
                <h4>{pathName==null?(
                    <Link to={'/home'} className=' ml-3'><FaHome className="icon_color"/></Link>
                ):(
                    <Link to={`${pathName}`} className=' ml-3'><BsArrowLeftSquareFill className="icon_color"/></Link>
                )}</h4>

                
                <div className="input_width">
                    <input onChange={(e)=>setSearch(e.target.value.toLowerCase())} className='search_input' placeholder="Search here"/>
                </div>
            </div>
            <div className="back_grod">
                {search && search.length?(
                    <div>
                         {list && list.map((value,i)=>{
                            if(value.catagory.toLowerCase()==search){
                                return(
                                    <div key={i}>
                                        <h3><Link to={`/container/${value.id}`} className="link_clr">{value.title}</Link></h3>
                                        <img src={value.image} className='image_size mb-4'/>
                                    </div>
                                )
                            }else if(value.country.toLowerCase()==search){
                                return(
                                    <div key={i}>
                                        <h3><Link to={`/container/${value.id}`} className="link_clr">{value.title}</Link></h3>
                                        <img src={value.image} className='image_size mb-4'/>
                                    </div>
                                )
                            }else if(value.news_type.toLowerCase()==search){
                                return(
                                    <div key={i}>
                                        <h3><Link to={`/container/${value.id}`} className="link_clr">{value.title}</Link></h3>
                                        <img src={value.image} className='image_size mb-4'/>
                                    </div>
                                )
                            }
                            
                        })}
                    </div>
                ):(<div><h5 className="text-center">Results here</h5></div>)}
               
            </div>
           
        </div>
    )
}