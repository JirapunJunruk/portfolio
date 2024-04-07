import React , {Component} from "react";
import react from'../img/react.png' 
// import { Link } from "react-router-dom";
// import Navitems from "./Navitem";
// import { NavLink } from "react-router-dom";
// import {faEnvelope, faHome} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            'NavItemActive' : ''
        }
    }

    activeitem = (item) =>{
        if(this.state.NavItemActive.length > 0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive' : item}, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        })
    }


    render(){
        return(

          
                <div className="nav">
                    
                        {/* <div><img src={react} className="logo" alt=""/></div> */}
                        
                        <div className="links1">
                            <a href="/">Home</a>
                       
                            <a href="/contact" >Contact</a>
                        
                            <a href="/resume">Resume</a>
                        </div>
                        
                       
                    
                </div>


           
        )
    }
} 

export default Navbar;