import React from 'react'
import { Button, Form } from 'react-bootstrap';
// import { OffcanvasProvider, Trigger, Offcanvas } from 'react-simple-offcanvas'
export const GetStartedSlider = ({ isModalIsOpen, toggleModalFunc }) => {
    return (
        <>
        <div>
            <div >
                {/* position: relative;
                                            width: 50%;
                                            float: right;
                                            height: 300px;
                                            background: red;
                                            top: -352px;
                                            right: -124px;
                                            z-index: -999999;
                                        visibility: hidden; */}

                {isModalIsOpen && <div style={{
                    animationDuration: "5s",
                    // position: "relative", width: "50%", float: "right", height: "300px", background: 'red',
                    // top: '-352px',
                    // right: '-124px',
                    // zIndex: '-999999',
                    // width:"100%",
                    // visibility: ' hidden'
                }}>


                    <Form style={{ backgroundColor: "white" }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                    {/* <Offcanvas position='top' > */}
                    {/* </Offcanvas> */}
                </div>
                }

                    <Button variant="success" onClick={toggleModalFunc} > {isModalIsOpen ? "Close" : 'Get Started'  }</Button>
            </div>

        </div>
                    </>
    )
}
