import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

import logo from "../assets/Images/jeevandeep.png";
import "../assets/scss/Register.scss";

const RegisterScreen = () => {
    return (
        <div className="register">
            <div className="register_main">
                <div className="register_logo">
                    <span className="line"></span>
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <span className="line"></span>
                </div>
                <span className="line_hr"></span>
                <h4>For Organs / Tissue Pledging</h4>
                <span className="form_sub_title">
                    (To be filled by individual of age 18 years or above)
                </span>
                <div className="fill_form_title">
                    <span className="line"></span>
                    <h6>fill form in capital letters only</h6>
                    <span className="line"></span>
                </div>
            </div>
            <div className="register_form mt-3">
                <form>
                    <Row>
                        <Col xs="12">
                            <div className="register_date">
                                <label>Date : </label>
                                <input type="date" placeholder="date" />
                            </div>
                        </Col>
                        <Col xs="12" className="mt-2">
                            <label>
                                Name (As it appears on goverment issued identify card)
                            </label>
                        </Col>
                        <Col md="4">
                            <input type="text" placeholder="First Name" className="w-100" />
                        </Col>
                        <Col md="4">
                            <input type="text" placeholder="Last Name" className="w-100" />
                        </Col>
                        <Col md="4">
                            <input type="text" placeholder="Surname" className="w-100" />
                        </Col>
                        <Col xs="12" className="mt-2">
                            <label>Mother's / Father's Name*</label>
                            <input type="text" className="w-100" />
                        </Col>
                        <Col xs="12" className="mt-2">
                            <label>Current Residential Address*</label>
                            <input type="text" className="w-100" />
                        </Col>
                        <Col xs="12" className="mt-2">
                            <label>Address Line 2*</label>
                            <input type="text" className="w-100" />
                        </Col>
                        <Col md="4" className="mt-2">
                            <label>City*</label>
                            <input type="text" className="w-100" />
                        </Col>
                        <Col md="4" className="mt-2">
                            <label>District*</label>
                            <input type="text" className="w-100" />
                        </Col>
                        <Col md="4" className="mt-2">
                            <label>State*</label>
                            <input type="text" className="w-100" />
                        </Col>
                        <Col md="4" className="mt-2">
                            <label>Pin Code*</label>
                            <input type="text" className="w-100" />
                        </Col>
                        <Col md="4" className="mt-2">
                            <label>Mobile Number*</label>
                            <input type="text" className="w-100" />
                        </Col>
                        <Col md="4" className="mt-2">
                            <label>Occupation*</label>
                            <input type="text" className="w-100" />
                        </Col>
                        <Col md="4" className="mt-2">
                            <label>Email*</label>
                            <input type="email" className="w-100" />
                        </Col>
                        <Col md="4" className="mt-2">
                            <label>Date Of Birth(DD/MM/YY)*</label>
                            <input type="date" className="w-100" />
                        </Col>
                        <Col md="4" className="mt-2">
                            <label>Age*</label>
                            <input type="number" className="w-100" />
                        </Col>
                        <Col md="4" className="mt-2">
                            <label>Gender*</label>
                            <input type="text" className="w-100" />
                        </Col>
                        <Col md="3" className="mt-2">
                            <label>Blood Group*</label>
                            <input type="text" className="w-100" />
                        </Col>
                        <Col md="5" className="mt-2">
                            <label>Emergency Contact Name*</label>
                            <input type="text" className="w-100" />
                        </Col>
                        <Col md="6" className="mt-2">
                            <label>Emergency Contact Number*</label>
                            <input type="text" className="w-100" />
                        </Col>
                        <Col md="6" className="mt-2">
                            <label>Emergency Contact Address*</label>
                            <input type="text" className="w-100" />
                        </Col>
                        <Col md="6" className="mt-2">
                            <label>Identify Card*</label>
                            <input type="text" className="w-100" />
                        </Col>
                        <Col md="6" className="mt-2">
                            <label>Enter Identify Card Number*</label>
                            <input type="text" className="w-100" />
                        </Col>
                        <Col xs="12" className="mt-2">
                            <p className="mb-0">
                                <b>Please Tick as Applicable</b>
                            </p>
                            <div className="form_organs">
                                <span>
                                    <b>Organ(s) : </b>
                                </span>
                                <Form.Check type="checkbox" id="Heart" label="Heart" />
                                <Form.Check type="checkbox" id="Lungs" label="Lungs" />
                                <Form.Check type="checkbox" id="Kidneys" label="Kidneys" />
                                <Form.Check type="checkbox" id="Liver" label="Liver" />
                                <Form.Check type="checkbox" id="Pancreas" label="Pancreas" />
                                <Form.Check type="checkbox" id="intestine" label="intestine" />
                                <Form.Check type="checkbox" id="all" label="all" />
                            </div>
                            <div className="form_organs">
                                <span>
                                    <b>Tissue (s) : </b>
                                </span>
                                <Form.Check
                                    type="checkbox"
                                    id="Corneas"
                                    label="Corneas/Eye Balls"
                                />
                                <Form.Check type="checkbox" id="Skin" label="Skin" />
                                <Form.Check type="checkbox" id="Bones" label="Bones" />
                                <Form.Check
                                    type="checkbox"
                                    id="Heart-Value"
                                    label="Heart Valves"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="blood-valves"
                                    label="blood Valves"
                                />
                                <Form.Check type="checkbox" id="all" label="all" />
                            </div>
                            <p className="mb-0">
                                <b>
                                    (Tissues can also be donated after brain stem death as well as
                                    cardiac death)
                                </b>
                            </p>
                        </Col>
                        <Col xs="12" className="mt-2">
                            <p className="mb-1">
                                <b>Note : </b>
                            </p>
                            <p className="mb-1">
                                1. Organ Donation is a family decision. So, it is important that
                                you discuss your decision with family members and loved ones so
                                that is will be easier for them so follow through with your
                                wishes.
                            </p>
                            <Row>
                                <Col md="8">
                                    <p className="mb-1">
                                        2. The person making the pledge has the option to withdraw
                                        the pledge.
                                    </p>
                                </Col>
                                <Col md="4">
                                    <div className="sign-box">
                                        <input
                                            className="w-100"
                                            type="text"
                                            placeholder="Sign,.............................................................................................................."
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="12" className="mt-2 register_main">
                            <span class="line_hr"></span>
                        </Col>
                        <Col xs="12" className="mt-2">
                            <p className="slogen">
                                तुम्हारे जाने के बाद भी तुम जीवित रहेंगे |<br /> एक सरल कदम उठाए
                                अपना अंग दान करे |
                            </p>
                        </Col>
                        <Col xs="12" className="mt-2">
                            <div className="bottom-part">
                                <div className="line">
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-xl-block d-none"></span>
                                    <span className="d-lg-block d-none"></span>
                                    <span className="d-lg-block d-none"></span>
                                    <span className="d-lg-block d-none"></span>
                                    <span className="d-lg-block d-none"></span>
                                    <span className="d-lg-block d-none"></span>
                                    <span className="d-lg-block d-none"></span>
                                    <span className="d-lg-block d-none"></span>
                                    <span className="d-lg-block d-none"></span>
                                    <span className="d-lg-block d-none"></span>
                                    <span className="d-lg-block d-none"></span>
                                    <span className="d-lg-block d-none"></span>
                                    <span className="d-md-block d-none"></span>
                                    <span className="d-md-block d-none"></span>
                                    <span className="d-md-block d-none"></span>
                                    <span className="d-md-block d-none"></span>
                                    <span className="d-md-block d-none"></span>
                                    <span className="d-md-block d-none"></span>
                                    <span className="d-md-block d-none"></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="long"></span>
                                </div>
                                <div className="email">
                                    <div className="top"></div>
                                    <p>E-mail:  info@jeevandeepfoundation.in</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>
        </div>
    );
};
export default RegisterScreen;
