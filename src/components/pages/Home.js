import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Topbar from '../layouts/Topbar';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Newsletter from '../layouts/Newsletter';
import Content from '../sections/home/Content';

const pagelocation = "Homepage";

class Home extends Component {
    state = {
        isModalOpen: false,
    };

    handleToggleModal = (childData) => {
        this.setState({ isModalOpen: childData })
    }
    

    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Smart Start USA | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                {/* <Topbar /> */}
                <Header isModal={this.state.isModalOpen} />
                <Content 
                    parentCallback={this.handleToggleModal } 
                />
                {/* <Newsletter layout="" /> */}
                <Footer />
            </Fragment>
        );
    }
}

export default Home;