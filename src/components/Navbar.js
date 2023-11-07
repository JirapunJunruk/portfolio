import React , {Component} from "react";
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

            <nav>
                <div className="nav-inner">
                    <span className="logo">
                       <h1 className="jj">Portfolio</h1> 
                    </span>
                    <div className="links">
                        <a href="/">Home</a>
                        <a href="/contact">Contact</a>
                        <a href="/resume">Resume</a>
                    </div>


                </div>

{/* 
                <ul>
                    <Navitems item = "Home" tolink = "/" activenav={this.activeitem}></Navitems>
                    <Navitems item = "About" tolink = "/about" activenav={this.activeitem}></Navitems>
                    <Navitems item = "Education" tolink = "/education" activenav={this.activeitem}></Navitems>
                    <Navitems item = "Skills" tolink = "/skills" activenav={this.activeitem}></Navitems>
                    <Navitems item = "Contact" tolink = "/contact" activenav={this.activeitem}></Navitems>
                    <Navitems item = "gta" tolink = "/gta" activenav={this.activeitem}></Navitems>
                   
                </ul> */}
            </nav>
        )
    }
} 

export default Navbar;