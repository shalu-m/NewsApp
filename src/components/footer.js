import React, { useContext } from "react"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import { FaFacebook ,FaInstagram,FaTwitter} from 'react-icons/fa';

export default function Footer(){
    const {filterCatagory}=useSelector((state)=>state.counter)


    return(
        <div className="footer_clr">
            <div className="container-fluid pb-3 pt-2">
                <h2 className="mt-3 mb-2 nav_name">Explore the sky news</h2>
                <hr/>
                <div className="row">
                    <div className="col-10">
                        <div className="row">
                            <div className="col-2">
                                <h5 ><Link to={'/home'} className='link_color'>Home</Link></h5>
                            </div>
                        {filterCatagory && filterCatagory.map((value,index)=>{
                            return(
                                <div key={index} className='col-2 mb-3'>
                                    <h5><Link to={`/view/${value.catagory}`} className='link_color'>{value.catagory}</Link></h5>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="row">
                            <div className="col-4">
                                <h4><a href="https://www.facebook.com/"><FaFacebook className="icon_color"/></a></h4>
                            </div>
                            <div className="col-4">
                                <h4><a href="https://www.instagram.com/"><FaInstagram className="icon_color"/></a></h4>
                            </div>
                            <div className="col-4">
                                <h4><a href="https://twitter.com/"><FaTwitter className="icon_color"/></a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <h6 className="text-light">Copyright © 2022 Sky news. Sky News is not responsible for the content of external sites.</h6>
            </div>
        </div>
    )
}