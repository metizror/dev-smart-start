import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class TechnologyText extends Component {
    render() {
        return (
            < Container >
                <div className="aboutus section-padding">
                    <div className="align-items-center">
                        <Row>
                            <Col>
                                <div className="mb-md-40 mb-4 " >
                                    <h2 className="text-light-black">Smart Start USA   <span className="text-light-green">Data Security</span></h2>
                                    <p className="text-light-white fs-5">Here at Smart Start US we take data security and privacy very seriously and we continuously look for opportunities to make improvements.</p>
                                    <p className="text-light-white fs-5">While it would not be prudent to share too much about what we do to protect our systems (since we would be effectively assisting malicious individuals who might try to compromise them), we can provide some general information about steps we take to keep your Online School and your customers safe.</p>
                                    <p className="text-light-green fs-5">Here are the measures we employ for securely storing the data you entrusted to us:</p>

                                </div>
                            </Col>
                            {/* <div className="col-lg-6"> */}
                            <Col>
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-sm-6 col-md-6">
                                        <div className="histry-img mb-xs-20">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/about/about1.jpg"} className="img-fluid full-width" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6">
                                        <div className="histry-img mb-xl-20">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/about/about2.jpg"} className="img-fluid full-width" alt="img" />
                                        </div>
                                        <div className="histry-img">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/about/about3.jpg"} className="img-fluid full-width" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            {/* </div> */}

                        </Row>
                        <Row>
                            <Col>
                                <div className="text-light-white mb-4"> <span className='fs-2'> Protection from Data Loss & Data Corruption</span>
                                    <p className='fs-5'> •	Isolated Databases
                                        Each Smart Start US School has its own, isolated Database. This means that even if a School gets compromised or goes rogue, all other Schools will remain unaffected.</p>
                                    <p className='fs-5'> •	Regular Backups
                                        Databases are mirrored and backed up off site, across multiple facilities. We keep daily database backups.</p>
                                    <p className='fs-5'>•	Customer data regulation
                                        We never move any school or user data outside of our secured environment for testing or any other reason. </p>
                                </div>

                                <div className="text-light-white mb-4"> <span className='fs-2' > Application Level Security</span >
                                    <p className='fs-5'> •	Password salting and hashing Smart Start US uses the most up-to-date and secure cryptographic methods. School Admin Passwords are salted and hashed and never stored or transmitted as plain text. Employees cannot view or manually change passwords. If you forget your password it cannot be retrieved, even by our own CTO – the password must be reset by you.</p>
                                    <p className='fs-5'> •	Encrypted Data Storage All user passwords are salted and hashed and never stored or transmitted as plain text. We do not store credit card details on our infrastructure. All credit card transactions are processed using secure encryption on a PCI-Compliant network.</p>
                                    <p className='fs-5'> •	HTTPS everywhere Smart Start US forces all requests over HTTPS, ensuring all traffic between your school and the user’s browser is encrypted. This means that anyone trying to eavesdrop on this data will not be able to decrypt and access the underlying data. Smart Start US uses TLS 1.2 exclusively, throughout its site and subdomains.</p>
                                    <p className='fs-5'> •	XSS vulnerability avoidance All user inputs are properly treated to ensure that XSS vulnerabilities are avoided.</p>
                                </div>
                                <div className="text-light-white mb-4"> <span className='fs-2' > Secure Software Development Life Cycle</span >
                                    <p className='fs-5'> •	Vulnerability Scanning & Patching We have automated systems in place that monitor all the software infrastructure that powers Smart Start US for new versions and vulnerabilities. Our infrastructure is updated regularly with the latest security patches. Moreover, our in-house security expert is constantly on the lookout for things that could jeopardize our systems, ready to intervene. We test our systems regularly through simulated attacks from the outside and in.</p>
                                    <p className='fs-5'> •	Secure File storage Your uploaded files can only be accessed through Smart Start US. Your students can only access files intended for them. Only authorized Smart Start US personnel can access your files, on a strict per-need basis.</p>
                                    <p className='fs-5'> •	Internal Controls For our employees, access rights and levels are based on job function and role, on a need-to-know basis, match defined responsibilities. All employees must abide by our policies about protecting customer data.</p>
                                    <p className='fs-5'> •	Security by design Our code is being developed following the latest patterns and industry best practices, and is constantly reviewed. Clear, readable and well-maintained code means secure systems.</p>
                                    <p className='fs-5'> •	Key management We keep our keys secret and out of version control, to ensure access to critical resources cannot be compromised.</p>
                                </div>
                                <span className=' text-light-white fs-2' > Data Center Security</span >
                                <p className="text-light-white fs-5">
                                    The GDPR requires controllers and processors of personal data to “implement appropriate technical and organizational” measures to ensure a sufficient level of security.</p>
                                <p className="text-light-white mb-4 fs-5">Smart Start US is a Google Cloud partner so we primarily use top-notch Google Cloud Platform servers as our third-party cloud storage subcontractor and we do not host customer data on our premises.</p>
                                <p className="text-light-white mb-4 fs-5"> <span className='fs-5'> This means that all our servers are located at Google premises, in different world-class data centers around the world</span >
                                    <p className='fs-5'> •	West USA (California)</p>
                                    <p className='fs-5'> •	Central USA (Iowa)</p>
                                    <p className='fs-5'> •	East USA (South Carolina, Virginia)</p>
                                    <p className='fs-5'> •	South America (Brazil/Sao Paolo)</p>
                                    <p className='fs-5'> •	Central EU (Netherlands, Belgium, Germany)</p>
                                    <p className='fs-5'> •	Southeast Asia (Singapore) Google Cloud Platform is a leading cloud provider, and holds industry best security certifications, such as SOC2/3 and ISO27001, and provides encryption in transit and at rest, without any action required from our customers. All servers are protected by biometric locks and round-the-clock interior and exterior surveillance monitoring. Only authorized personnel have access to the data center. 24/7/365 onsite staff provides additional protection against unauthorized entry and security breaches. For more info on Google Cloud Platform physical server security check here.</p>
                                    <p className='fs-5'> •	High availability. We’ve designed Smart Start US to ensure high availability throughout the platform. At every layer of the stack, we have a suite of contingency mechanisms, including automatic failover, to ensure 24/7 application availability.</p>
                                </p>
                                <p className="text-light-white "> <span className='fs-2'> Protecting Smart Start US Against rogue or hacked users</span>
                                    <p className='fs-5'>  We can secure ourselves, but if your computer gets compromised or someone gets into your Smart Start US account, that’s not good for either of us. Therefore,</p>
                                    <p className='fs-5'> •	We monitor and will automatically suspend accounts for signs of irregular or suspicious login activity.</p>
                                    <p className='fs-5'> •	Certain changes to your account, such as to your password, will trigger email notifications to the account owner.</p>
                                    <p className='fs-5'> •	We monitor accounts and school activity for signs of abuse (both via automatic notifications and human reviewers).</p>
                                </p>

                                <p className="text-light-white fs-5">Disclosure
                                    We are working continuously to make our systems secure. But modern software is amongst the most complex artefacts ever created by humans and cybersecurity is a moving target. If you do find any security issues, whether you are a user or security expert, please reach out to us at support@smartstartus.com.

                                    We will make sure the issue is fixed and updated ASAP.</p>
                                <p className="text-light-white fs-5 ">
                                    Our classes are led by a team of highly qualified licensed teachers with an extensive academic background and mastery of virtual education. Smart Start USA inspires students to become future leaders, lifelong learners, and critical thinkers responsible for their own choices in life. Our curriculum is academically diverse, rigorous, and helps our students stay motivated while achieving their individual academic goals. In addition, we provide various educational resources such as testing materials, educational software, etc., to meet the unique needs of our learners. Therefore, all our students achieve remarkable test scores and shoot to the top of their classes.</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container >
        )
    }
}

export default TechnologyText