import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from '../components/footer'
import { useSelector ,useDispatch} from "react-redux";
import { setPathName } from "../redux/slice/counterSlice";



export default function Home(){
    const {list,login_state}=useSelector((state)=>state.counter)
   const dispatch=useDispatch();
   
  
    return(
        <div className="container-fluid">

           <Header/>
            <div className="container-fluid">
                <div className="row m-0 p-0">
                <h2 className="mt-4 mb-3 title">Top News</h2>
                
                {list && list.map((value,index)=>{
                    if(value.catagory=='War'){
                        return(
                            <div  className="col-4 card" key={index}>
                                    <div >
                                        
                                        <img src={value.image} className="wid-image"/>
                                        <h5 ><Link to={`/container/${value.id}`} className="link_clr">{value.title}</Link></h5>
        
                                    </div>
                            </div>
                        )
                    }
                
                })}
                </div>
                {/* science.... */}
                <div className="row m-0 p-0">
                <h2 className="mb-3 mt-3 title">Stories</h2>
                
                {list && list.map((value,index)=>{
                    if(value.catagory=='Story'){
                        return(
                            <div  className="col-4 mb-3" key={index}>
                                    <div >
                                        
                                        
                                        <h5><Link to={`/container/${value.id}`} className="link_clr">{value.title}</Link></h5>
        
                                    </div>
                            </div>
                        )
                    }
                
                })}
                </div>

                {/* sports..... */}
                <div className="row m-0 p-0">
                <h2 className="mt-3 mb-3 title">Sports</h2>
                
                {list && list.map((value,index)=>{
                    if(value.catagory=='Sports'){
                        return(
                            <div  className="col-4 card" key={index}>
                                    <div >
                                        
                                        <img src={value.image} className="wid-image"/>
                                        <h5><Link to={`/container/${value.id}`} className="link_clr">{value.title}</Link></h5>
        
                                    </div>
                            </div>
                        )
                    }
                
                })}
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}