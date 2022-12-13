import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { FiExternalLink } from 'react-icons/fi';
import logo from '../images/tabas.jpg'

class Sidebar extends Component {
    render() {

        return (
            <div className="sidebar ">
                
                <h1><Link smooth to="/#start" className="h1_links">Fouzia Tabassum</Link></h1>

                <img src={logo} />
                <p style={{ color: 'black', fontWeight: 'bold' }} className="gmail"><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL" rel="opener noreferrer" target="_blank" className="fa fa-envelope"></a>tabas.fouzia@gmail.com</p>

                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interest</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Education</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#traininng" className="links" >Training</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#project" className="links" >Projects</Link></li>
                    {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
                </ul>

                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"> <a href="https://github.com/tabassummoni" rel="opener noreferrer" target="_blank" className="fa fas fa-github fa-lg"></a></li>
                        <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/fouzia-tabassum-7b519419a/" rel="opener noreferrer" target="_blank" className="fa fas fa-linkedin fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="mailto:mittalsam98@gmail.com" rel="opener noreferrer" target="_blank" className="fa fas fa-envelope fa-lg"></a></li>
                       
                    </ul>
                </div>

            </div>
        )
    }
}

export default Sidebar