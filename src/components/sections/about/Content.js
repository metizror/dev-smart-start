import React, { Component, Fragment } from 'react';
import Blogpost from './Blogpost';
import Workprocess from './Workprocess';
import Testimonials from '../../layouts/Testimonials';
import AboutVision from './AboutVision';
import AboutDataText from './AboutDataText';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <AboutDataText />
                <AboutVision />
                {/* <Workprocess/> */}
                {/* <Testimonials/> */}
                {/* <Blogpost/> */}
            </Fragment>
        );
    }
}

export default Content;