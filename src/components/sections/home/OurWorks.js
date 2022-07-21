import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import works from "../../../data/smartWorksData/workSmartStart.json";
import { getCategories } from "../../../helper/donationhelper";
export class OurWorks extends Component {
    render() {

        return (
            <section className="recent-order ">
                <div className="container-fluid custom-container">
                    {/* <div className="row">
                        <div className="col-12 center">
                            <div className="section-header-left title">
                                <h3 className="text-light-black header-title our-program-text">OurWorks</h3>
                                
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left text-center">
                                <h3 className="text-light-white header-title text-light-black header-title our-program-text">How Smart Start Works!</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {works.slice(0, 3).map((item, i) => (
                            
                            <div className="col-xl-4 col-lg-12" key={i}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="86" height="76" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                                </svg>
                                <h5 className="text-light-white fw-600 no-margin mt-3 mb-3">{item.title}</h5>

                                <p className="text-light-white fs-16">{item.description}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default OurWorks