import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import category from "../../data/donation/category.json";
import tags from "../../data/donation/tags.json";
import { recentPost } from "../../helper/donationhelper";

class Donationsidebar extends Component {
    render() {
        return (
            <div className="side-bar">
               
                <div className="main-box padding-20 blog-tags mb-xl-20">
                    <h5 className="text-light-black">Tags</h5>
                    {tags.map((item, i) => (
                        <Link to={"/donation/tag/" + item.id} key={i}>#{item.title}</Link>
                    ))}
                </div>
                <div className="main-box padding-20 trending-blog-cat mb-xl-20">
                    <h5 className="text-light-black">Categories</h5>
                    <ul>
                        {category.map((item, i) => (
                            <li className="pb-xl-20 u-line mb-xl-20" key={i}>
                                {/* <Link to={"/donation/cat/" + item.id} className="text-light-black fw-600">{item.title}<span className="text-light-white fw-400">{item.count}</span></Link> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Donationsidebar;