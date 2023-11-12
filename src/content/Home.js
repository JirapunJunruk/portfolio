import React, {Component} from "react";
import ph1 from'../img/ph1.jpg' 
// import profilepic from './img/profile.jpg'
// import ReactTypingEffect from "react-typing-effect";

class Home extends Component{
    
    render() {
        return(
            <section id="intro">
                <div className="introContent">
                    <span className="hello">Hello,</span>
                    <div><img src={ph1} className="ph1" alt=""/></div>
                    <span className="introText">I'm <span className="introName">Jame</span> <br/>Jirapun Junruk</span>
                    <p className="introPara">EnET-C 6303051613076 King Mongkut's University of Technology North Bangkok</p>
                    
                </div> 
            </section>
            // <div className="condiv home">
                 
            //     <img src="https://scontent.fbkk29-9.fna.fbcdn.net/v/t39.30808-6/287170483_3507281356224800_5802208541541541382_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGYFpUuyySf9XuF39x3Tk_ZfqqcTppY0NV-qpxOmljQ1fFzjOHxIiq3iQnLb7I6IT2-IxAmj6jjHXb1zQhVvIBD&_nc_ohc=G3Zqu7g2TRQAX9YWMHD&_nc_zt=23&_nc_ht=scontent.fbkk29-9.fna&oh=00_AfBTitqtO5Jr7PJItxIssu5PUDUNdGgpkkE5y1pzufN0Gw&oe=654F2C1E"
            //     alt="profile" className="introName"/>
            //     <ReactTypingEffect  text={[ ]}  />
                
            // </div>
            


        );
    }
}

export default Home;
