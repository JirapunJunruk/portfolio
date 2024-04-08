import React, {Component} from "react";

 import Social from "../components/Social";

 class Contact extends Component{
    render() {
        return(
            <div className="condiv ">
              
                <h1 className="subtopic">Contact Me</h1>
                <h4 className="add">ที่อยู่</h4>
                <p className="address"> 
                อพาร์ทเมนต์  ธิติวงศ์ วงศ์สว่าง  
                ซอย กรุงเทพ-นนทบุรี 37 แขวงวงศ์สว่าง ห้อง 702  กรุงเทพ บางซื่อ 10800 
                </p>
               
                <Social/>
            </div>
        )
    }
 }
 export default Contact;