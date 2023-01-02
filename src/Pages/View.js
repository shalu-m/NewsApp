import {  useNavigate, useParams } from "react-router"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect }  from "react"
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "../components/footer";
import { useSelector ,useDispatch} from "react-redux";

export default function View(){
    
    const params=useParams()
    const {list,login_state}=useSelector((state)=>state.counter)
    
    
    return(
        <div>
            <Header/>
            <div className="row m-0 p-0">
                <h2 className="mt-3 mb-3">{params.catagory}</h2>
                {list && list.map((value,index)=>{
                    if(value.catagory==params.catagory){
                        return(
                            <div className="col-4 card mt-3" key={index}>
                                <img src={value.image} className='wid-image'/>
                                <h4><Link to={`/container/${value.id}`}  className="link_clr">{value.title}</Link></h4>
                            </div>
                        )
                    }else if(value.country==params.catagory){
                        return(
                            <div className="col-4 card mt-3" key={index}>
                                <img src={value.image} className='wid-image'/>
                                <h4><Link to={`/container/${value.id}`}  className="link_clr">{value.title}</Link></h4>
                            </div>
                        )
                    }
                })}
            </div>
            <Footer/>
        </div>
    )
}