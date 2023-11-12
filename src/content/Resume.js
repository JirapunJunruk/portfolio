import React, {Component} from "react";
// import profilepic from './img/profile.jpg'
import port from '../img/Portfolio.png'
import tran1 from'../img/transcrip1.jpg'
import tran2 from'../img/transcrip2.jpg'



class Resume extends Component{
    render() {
        return(
            <div className="GG">
                {/* <img src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/287170483_3507281356224800_5802208541541541382_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGYFpUuyySf9XuF39x3Tk_ZfqqcTppY0NV-qpxOmljQ1fFzjOHxIiq3iQnLb7I6IT2-IxAmj6jjHXb1zQhVvIBD&_nc_ohc=S6Kw2WEVyp4AX84Jpk9&_nc_ht=scontent.fbkk12-2.fna&oh=00_AfBWE7eFsRi1iYdgSg46b-SkIvCEb-YZenZPzo_BTkAOwg&oe=65396B5E"
                alt="profile" className="resume1"/> */}
                <img src={port} className="resume" alt=""/> <br/>
                <img src={tran1} className="resume" alt=""/> <br/>
                <img src={tran2} className="resume" alt=""/>
            </div>


        );
    }
}

export default Resume;
