import React, { Component } from 'react'
import { MetaTags } from 'react-meta-tags';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header'
import Newsletter from '../layouts/Newsletter';
import Topbar from '../layouts/Topbar'
import Content from '../sections/technology/Content';

const pagelocation = "Technology";
export class Technology extends Component {

    render() {
        return (
            <>
                <MetaTags >
                    <title>Smart Start USA | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Topbar />
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content />
                <Newsletter layout="" />
                <Footer />
            </>
        )
    }
}

export default Technology