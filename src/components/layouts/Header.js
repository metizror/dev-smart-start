import React from 'react';
import HeaderComponent from '../../helper/navhelper';
import classNames from 'classnames';
import { Link, NavLink, useLocation } from 'react-router-dom';
import navigationmenu from '../../data/navigation.json';
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import UserContext from '../../Context/UserContext';
import emailjs from '@emailjs/browser';
import { AxisConstantLineStyle } from 'devextreme-react/chart';
import axios from 'axios';
// import { OffcanvasProvider, Trigger, Offcanvas } from 'react-simple-offcanvas'
// import { GetStartedSlider } from './GetStartedSlider';

// import Offcanvas from "react-bootstrap/Offcanvas";


class Header extends HeaderComponent {
    static contextType = UserContext

    state = {
        scheduleModalIsOpen: false,
        fname: "cxvxcv",
        lname: "cxvxcv",
        email: "",
        phoneNumber: "",
        age: 0,
        childGrade: 0,
    }

    // const


    addNewLinkHandler(forth_item) {
        // const isLink = forth_item.link.search('mylearnworlds') == -1 ? false : true
        // console.log(forth_item.link.search('mylearnworlds'));
        if (!forth_item.link) {
            return forth_item;
        } else {
            console.log('falsess');
            return window.location.href = forth_item.link
        }
    }
    addsubMenuNewLinkHandler(item) {
        console.log(item);

        return window.location.href = item.link;

    }
    addsubMenuNewLinkHandlerThird(item) {
        return window.location.href = item;
    }



    render() {
        const { lname, fname, email, phoneNumber, age, childGrade } = this.state
        // console.log("-----------", this.context);
        const { user, setUser } = this.context
        console.log(user.isModalOpen);

        const stickyheader = this.state.isTop ? 'sticky' : '';
        const scrollable = window.pageYOffset;
        // console.log(scrollable);

        const isModalIsOpenFunc = () => setUser({ isModalOpen: !user.isModalOpen })
        const isModalIsOpen = user.isModalOpen
        // const isModalIsOpen = this.state.toggleModal
        const scheduleToggle = this.state.scheduleToggle
        // const addNewLinkHandler = (item) => {
        //     debugger
        //     if (item.link) {
        //         return window.location.href = item.link
        //     } else {
        //         return;
        //     }
        // }
        console.log("_____________________________", childGrade);
        const submitHandler = (e) => {
            e.preventDefault();
            console.log("-------------------------", lname, fname, email,
                phoneNumber,
                age,
                childGrade);
            console.log(e.target);
            var templateParams = {
                lname
                , fname, email,
                phoneNumber,
                age,
                childGrade
            }
            // axios.post('https://api.emailjs.com/api/v1.0/takraj184@gmail.com/send', {
            //     lname, fname, email,
            //     phoneNumber,
            //     age,
            //     childGrade
            // }).then((response) => {  console.log("--------the response:", response); }).catch(error => console.error())

            // emailjs.send('gmail', 'template_922ywtc', 'sgadmin@smartstartus.com', 'j_NxL-WuC0z0_NUKi')
            // emailjs.send('gmailId', 'template_922ywtc', '{data}', 'j_NxL-WuC0z0_NUKi')
            emailjs.sendForm("service_1b8b9am", "template_xuuq1jl",
                e.target, 'j_NxL-WuC0z0_NUKi'
                // emailjs.sendForm("service_1b8b9am","template_xuuq1jl",
                //     e.target, 'j_NxL-WuC0z0_NUKi'
                // email_id: "abhinav.prajapati@metizsoft.com",
            ).then(function (response) {
                // console.log('----------------------------------------------------SUCCESS!', response);
                console.log('SUCCESS!', response, response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        }
        return (
            // <header className="header sticky">
            <header className={"header sticky"}>
                <div className="container-fluid custom-container">``
                    <div className="row">
                        <div className="col-11">
                            <div className="navigation">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/logo/newlogo.png"} className="image-fit" alt="logo" />
                                    </Link>
                                </div>
                                <div className={classNames("main-navigation", { "active": this.state.navmethod })}>
                                    <nav>
                                        <ul className="main-menu" >
                                            {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                                                <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                                                    {item.child ? <Link onClick={e => e.preventDefault()} className="text-custom-white"> {item.linkText} <span className="arrow" /></Link> : <Link to={item.link} className="text-custom-white"> {item.linkText} </Link>}
                                                    {item.child ?
                                                        <ul className="sub-menu" role="menu" >
                                                            {item.submenu.map((sub_item, i) => (
                                                                <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                                                    {sub_item.child ? <a href={sub_item.link} > {sub_item.linkText} <span className="arrow" /></a> : <a href={sub_item.link} > {sub_item.linkText} </a>}
                                                                    {sub_item.submenu ?
                                                                        <ul className="sub-menu">
                                                                            {sub_item.submenu.map((third_item, i) => (
                                                                                <li className={`menu-item ${third_item.child ? 'menu-item-has-children' : ''} `} key={i}>

                                                                                    {third_item.child ? <a href={third_item.link}  > {third_item.linkText} <span className="arrow" /></a> : <Link
                                                                                        // onClick={() => this.addsubMenuNewLinkHandler(third_item)}
                                                                                        href={third_item.link}> {third_item.linkText} </Link>}
                                                                                    {third_item.submenu ?
                                                                                        <ul className="sub-menu">
                                                                                            {third_item.submenu.map((forth_item, i) => (
                                                                                                <li className={`menu-item ${forth_item.child ? 'menu-item-has-children' : ''} `} key={i}>

                                                                                                    <a href={forth_item.link}
                                                                                                    // onClick={() => this.addNewLinkHandler(forth_item)}
                                                                                                    // to={window.href = forth_item.link}
                                                                                                    >{forth_item.linkText}</a>
                                                                                                    {/* {this.addNewLinkHandler()} */}
                                                                                                    {/* {window.location.href = forth_item.link} */}
                                                                                                </li>
                                                                                            ))}
                                                                                        </ul> : null}

                                                                                </li>
                                                                            ))}
                                                                        </ul> : null}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        : null
                                                    }
                                                </li>
                                            )) : null}
                                            {/* <div> */}
                                            <div className="parent-div-modal"  >
                                                <div className='sub-div-modals is-open' >
                                                    <div className={isModalIsOpen ? 'open' : 'form-div '}   >
                                                        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

                                                        <script type="text/javascript">
                                                            emailjs.init('j_NxL-WuC0z0_NUKi')
                                                        </script>
                                                        <Form className="form" id="contact-form" onSubmit={submitHandler}>
                                                            <Form.Group className="mb-3" >
                                                                <Form.Label>Schedule an evaluation
                                                                    Meet with our faculty and identify the proper
                                                                    course level for your child.</Form.Label>
                                                            </Form.Group>

                                                            <Form.Group className="mb-3">
                                                                <Form.Control name="fname" type="text" id="fname" placeholder="FirstName" value={fname} onChange={(e) => this.setState({ fname: e.target.value })} />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" >
                                                                <Form.Control type="text" name="lname" id="lname" placeholder="LastName" value={lname} onChange={(e) => this.setState({ lname: e.target.value })} />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3"   >

                                                                <Form.Control type="email" name="email" id="email" placeholder="Enter email" value={email} onChange={(e) => this.setState({ email: e.target.value })} />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" >
                                                                <Form.Control type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={(e) => this.setState({ phoneNumber: e.target.value })} />
                                                            </Form.Group>

                                                            <Form.Group className="mb-3">
                                                                <Form.Control type="number " name="age" id="age" placeholder="Child Age" value={age} onChange={(e) => this.setState({ age: e.target.value })} />
                                                            </Form.Group>
                                                            {/* <Form.Text > */}
                                                            <Form.Text className="d-flex flex-row custom_child_grad" placement="right">
                                                                {/* <DropdownButton title="Child Grade" name='grade' id="grade" variant="success" onSelect={(e) => this.setState({ childGrade: e })} >
                                                                    <Dropdown.Item eventKey="3">3</Dropdown.Item>
                                                                    <Dropdown.Item eventKey="4">4</Dropdown.Item>
                                                                    <Dropdown.Item eventKey="5">5</Dropdown.Item>
                                                                    <Dropdown.Item eventKey="6">6</Dropdown.Item>
                                                                    <Dropdown.Item eventKey="7">7</Dropdown.Item>
                                                                    <Dropdown.Item eventKey="8">8</Dropdown.Item>
                                                                    <Dropdown.Item eventKey="9">9</Dropdown.Item>
                                                                    <Dropdown.Item eventKey="10">10</Dropdown.Item>
                                                                    <Dropdown.Item eventKey="11">11</Dropdown.Item>
                                                                    <Dropdown.Item eventKey="12">12</Dropdown.Item>
                                                                </DropdownButton> */}
                                                                {/* <label htmlFor="">Choose child age :</label> */}
                                                                <select id="grade" name='grade' placeholder='Child ' value={childGrade} className="p-2" style={{ backgroundColor: "#28a745", color: "white", borderRadius: "5px" }} onChange={(e) => this.setState({ childGrade: e.target.value })}>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                    <option value="9">9</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>

                                                                </select>
                                                            </Form.Text>
                                                            <Button type="submit" variant="success" className='mt-4'>SUBMIT</Button>
                                                        </Form>
                                                        <span class="border-width-line"></span>

                                                        <Button variant="success" className=' position-absolute end-0 p-4' onClick={isModalIsOpenFunc}  >Close</Button>
                                                    </div>
                                                </div>
                                            </div>

                                        </ul>
                                        <div className='get-started-btn'  >
                                            <a href="https://school.smartstartus.com/catalog">
                                                <Button variant="success" style={{ padding: "17px" }} className={isModalIsOpen ? 'open' : ''} ref={this.state.toggleModal}>Register Now</Button>
                                            </a>

                                        </div>
                                    </nav>



                                </div>
                                <div className="right-side-navigation">
                                    <ul>
                                        <li className="hamburger-menu">
                                            <Link to="" className={classNames("menu-btn", { "active": this.state.navmethod })} onClick={this.toggleNav}>
                                                <span />
                                                <span />
                                                <span />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;