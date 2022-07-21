import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import programJson from '../../../../src/data/shop/Program.json';
// import shopblock from '../../../data/shop/shop.json';
// import { handleOutofStock } from '../../../helper/shophelper';
import Quickview from '../../layouts/Quickview';
import {
    // OverlayTrigger, Tooltip,
    Modal
} from "react-bootstrap";
import { render } from '@testing-library/react';

// smartstartus



class Bestsellers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalshow: false,
            lastActiveBox: -1,
        };
        this.modalShow = this.modalShow.bind(this);
        this.modalClose = this.modalClose.bind(this);
    }
    // Modal
    modalShow(index) {
        this.setState({ modalshow: true, lastActiveBox: index });
    }
    modalClose() {
        this.setState({ modalshow: false });
    }

    addNewLinkHandler(forth_item) {
        // console.log("-------------------=-=-=-=--", forth_item.link.search('smartstartus'));
        // const isLink = forth_item.link.search('smartstartus') == -1 ? false : true
        // console.log(forth_item.link.search('mylearnworlds'));
        if (!forth_item.link) {
            return ;
        } else {
            console.log('falsess');
            return window.location.href = forth_item.link
        }
    }

    render() {
        return (
            <section className="recent-order section-padding">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header-left title">
                                <h3 className="text-light-black header-title redColor">OUR PROGRAMS</h3>
                                {/* <span className="fs-16"><Link to="/shop-left">See All Bestseller</Link></span> */}
                            </div>
                        </div>
                        {programJson.slice(0, 6).map((item, i) => (
                            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6" key={i}>
                                <div className="product-box mb-md-20">
                                    <div className="product-img" >
                                        {/* <Link to={"/shop-details/" + item.id}> */}
                                        <Link onClick={() => this.addNewLinkHandler(item)}>
                                            <img src={process.env.PUBLIC_URL + "/" + item.image[0]} className="img-fluid full-width " alt={item.title} />
                                        </Link>
                                    </div>
                                    {/* <div className="product-caption text-center"> */}
                                    <div className=" text-center">
                                        <h6 className="product-title fw-500 mt-10"><Link to={"/shop-details/" + item.id} className="our-program-text redColor">{item.title}</Link></h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Modal (Quick View) */}
                        <Modal show={this.state.modalshow} className="quick-view-modal" onHide={this.modalClose} aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
                            <Modal.Body>
                                <button type="button" className="close" onClick={this.modalClose}>×</button>
                                <Quickview productId={this.state.lastActiveBox} />
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </section>
        );
    }
}

export default Bestsellers;