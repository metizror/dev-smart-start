import React from 'react';
import { Link } from 'react-router-dom';
import Popuphelper from '../../../helper/popuphelper';

class Gallery extends Popuphelper {
    render() {
        return (
            <section className="masonary-gallery-sec">
                <div className="container-fluid no-padding">
                    <div className="row magnific-gallery">
                        <div className="col-lg-6">
                            <div className="video-box full-height">
                                <div className="video_wrapper video_wrapper_full js-videoWrapper">
                                    <div className="videoPoster js-videoPoster">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/gallery/f24.jpeg"} className="image-fit" alt="#" />
                                        {/* <img src={process.env.PUBLIC_URL + "/assets/img/gallery/thisisimage1.jpg"} className="image-fit" alt="#" /> */}
                                        {/* <div className="video-inner video-btn-wrapper"> <a rel={"external"} href={"https://www.youtube.com/watch?v=KH1pcNUTa6U"} className="popup-youtube"><i className="pe-7s-play" /></a></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="video-box full-height">
                                <div className="video_wrapper video_wrapper_full js-videoWrapper">
                                    <div className="videoPoster js-videoPoster">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/gallery/f25.jpeg"} className="image-fit" alt="#" />
                                        {/* <img src={process.env.PUBLIC_URL + "/assets/img/gallery/thisisimage1.jpg"} className="image-fit" alt="#" /> */}
                                        {/* <div className="video-inner video-btn-wrapper"> <a rel={"external"} href={"https://www.youtube.com/watch?v=KH1pcNUTa6U"} className="popup-youtube"><i className="pe-7s-play" /></a></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-0">
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="masonary-item p-relative">
                                    <a rel={"external"} href={process.env.PUBLIC_URL + "/assets/img/gallery/g26.jpeg"} className="popup popup-image">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/gallery/g26.jpeg"} className="image-fit" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8 col-sm-6">
                                <div className="masonary-item p-relative">
                                    <a rel={"external"} href={process.env.PUBLIC_URL + "/assets/img/gallery/g27.jpg"} className="popup popup-image">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/gallery/g27.jpg"} className="image-fit" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="masonary-item p-relative">
                                    <a rel={"external"} href={process.env.PUBLIC_URL + "/assets/img/gallery/g28.jpeg"} className="popup popup-image">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/gallery/g28.jpeg"} className="image-fit" alt="img" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8 col-sm-6">
                                <div className="masonary-item p-relative">
                                    <a rel={"external"} href={process.env.PUBLIC_URL + "/assets/img/gallery/g29.jpg"} className="popup popup-image">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/gallery/g29.jpg"} className="image-fit" alt="img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Gallery;