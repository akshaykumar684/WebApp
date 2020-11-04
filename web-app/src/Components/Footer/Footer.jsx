import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Footer.css'
class Footer extends Component {
    
    render() { 
        return ( 
            <footer className="container site-footer">
                <p className="float-right"><Link to="/home">Back to Top</Link></p>
                <p>2020-2021 Akshay Kumar,Inc. <Link to="/home">Privacy</Link></p>
            </footer>
         );
    }
}
 
export default Footer;