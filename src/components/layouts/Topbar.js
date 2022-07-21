import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// const wishlistlength = 5;
// const cartlength = 5;

class Topbar extends Component {
    render() {
        return (
            <div className="top-header">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="top-left">
                                {/* {console.log(window.location.href = 'https://www.facebook.com/Smartstartus-106394168768735' )} */}
                                <ul className="top-info">
                                    <li><Link to="#"><i className="fas fa-phone-alt" /> +1 917 268 0197</Link></li>
                                    <li><Link to="#"><i className="fas fa-envelope" /> school@smartstartus.com</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="righ-sec">
                                <div className="top-right">
                                    <ul className="list-inline">
                                        <li className="list-inline-item" onClick={(e) => { e.preventDefault(); window.location.href = 'https://www.facebook.com/Smartstartus-106394168768735' }}><Link to=""  ><i className="fab fa-facebook-square" /></Link> </li>
                                        <li className="list-inline-item" onClick={(e) => { e.preventDefault(); window.location.href = 'https://twitter.com/smartstartus1' }}><Link to="#"><i className="fab fa-twitter-square" /></Link> </li>
                                        <li className="list-inline-item" onClick={(e) => { e.preventDefault(); window.location.href = 'https://www.instagram.com/smartstartus/' }}><Link to="#"><i className="fab fa-instagram" /></Link> </li>
                                        <li className="list-inline-item" onClick={(e) => { e.preventDefault(); window.location.href = 'https://www.linkedin.com/company/smart-start-us' }}><Link to="#"><i className="fab fa-linkedin" /></Link> </li>
                                        <li className="list-inline-item" onClick={(e) => { e.preventDefault(); window.location.href = 'https://www.youtube.com/channel/UCPQoFVVOdvIx4n8RAIzFWVg ' }}><Link to="#"><i className="fab fa-youtube" /></Link> </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;