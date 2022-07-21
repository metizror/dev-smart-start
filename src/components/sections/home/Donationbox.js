import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../../Context/UserContext';
import donationblock from "../../../data/donation/donation.json";
import { getCategories } from "../../../helper/donationhelper";
import HeaderComponent from '../../../helper/navhelper';

class Donationbox extends HeaderComponent {
    static contextType = UserContext
    render() {

        const { user, setUser } = this.context
        const isModalIsOpenFunc = () => setUser({ isModalOpen: !user.isModalOpen })
        return (
            <div>
                <div className="schedule-btn py-3">

                    <button

                        // onClick={() => this.scheduleToggleFunc}
                        // ref={this.input}
                        // ref={(input) => (this.inputElement = input)}
                        // onClick={this.onTriggerdata}
                        onClick={isModalIsOpenFunc}
                        className={this.state.toggleModal ? "btn-success with-line btn-big mt-20 mr-1" : "form-div btn-success with-line btn-big  mr-1"}
                    ><span
                    // ref={this.input}
                    >SCHEDULE AN EVALUATION<i className="fas fa-caret-right" /></span>
                    </button>
                </div>
                <section className="ex-collection section-padding bg-theme-primary">
                    <div className="container-fluid custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-header-left">
                                    <h3 className="text-light-black header-title text-light-black header-title our-program-text" style={{ color: '#811524' }} >COURSES</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {donationblock.slice(5, 7).map((item, i) => (
                                <div className="col-xl-6" key={i}>
                                    <div className="story-wrapper" onClick={() => window.location.href = item.link}>
                                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} className="full-width img-fluid mx-auto d-block" />
                                        <div className="story-box-content story-content-wrapper">
                                            {getCategories(item.category).map((cat, i) => (
                                                <span className="story-badge bg-custom-primary text-white" key={i}>{cat.title}</span>
                                            ))}
                                            {/* <h6><Link to={"/donation-details/" + item.id}>{item.title}</Link> </h6> */}
                                            {/* <Link to={"/donation-details/" + item.id} className="btn btn-text btn-text-white">Read More</Link> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {donationblock.slice(0, 3).map((item, i) => (
                                <div className="col-xl-4 col-lg-6" key={i}>
                                    <div className="story-wrapper" onClick={() => window.location.href = item.link }>
                                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} className="full-width img-fluid mx-auto d-block" />
                                        <div className="story-box-content story-content-wrapper">
                                            {getCategories(item.category).map((cat, i) => (
                                                <span className="story-badge bg-custom-primary text-white" key={i}>{cat.title}</span>
                                            ))}
                                            {/* <h6><Link to={"/donation-details/" + item.id}>{item.title}</Link> </h6> */}
                                            {/* <Link to={"/donation-details/" + item.id} className="btn btn-text btn-text-white">Read More</Link> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {donationblock.slice(7, 9).map((item, i) => (
                                <div className="col-xl-6" key={i}>
                                    <div className="story-wrapper" onClick={() => window.location.href = item.link}>
                                        {/* { console.log(" --   -- - - ", item) } */}
                                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} className="full-width img-fluid mx-auto d-block" />
                                        <div className="story-box-content story-content-wrapper">
                                            {getCategories(item.category).map((cat, i) => (
                                                // console.log("================", cat) &&
                                                <span className="story-badge bg-custom-primary text-white" key={i}>{cat.title}</span>
                                            ))}
                                            {/* <h6><Link to={"/donation-details/" + item.id}>{item.title}</Link> </h6> */}
                                            {/* <Link to={"/donation-details/" + item.id} className="btn btn-text btn-text-white">Read More</Link> */}
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Donationbox;