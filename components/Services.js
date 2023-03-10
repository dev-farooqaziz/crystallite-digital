import React, { useState } from 'react';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/Services.module.css';
import serviceTxt from '../public/images/service-text.png'
import icon1 from '../public/images/icon-1.png'
import icon2 from '../public/images/icon-2.png'
import icon3 from '../public/images/icon-3.png'
import icon4 from '../public/images/icon-4.png'
import icon5 from '../public/images/icon-5.png'
import icon6 from '../public/images/icon-6.png'
import icon7 from '../public/images/icon-7.png'
import icon8 from '../public/images/icon-8.png'
import icon9 from '../public/images/icon-9.png'
import icon10 from '../public/images/icon-10.png'
import icon11 from '../public/images/icon-11.png'

const Services = () => {

    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value, string) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    return (
        <>
            <section className={`${styles.service} scroll scroll-service`} data-section-name="scroll-service">
                <Container>
                    <Row>
                        <Col xl={10} className='mx-auto mb-4'>
                            <div className={styles.serviceHeader}>
                                <h2>Our <span>Services</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip aliquip.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={styles.tabsRow}>
                        <Col xl={6}>
                            <MDBTabs className={styles.navTabs}>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon1}
                                                alt="Digital_Marketing"
                                            />
                                            <h5>Digital Marketing</h5>
                                            <p>Lorem Ipsum has been the industry's <br />standard dummy text ever since.</p>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon2}
                                                alt="Telecommunication"
                                            />
                                            <h5>Telecommunication</h5>
                                            <p>Lorem Ipsum has been the industry's <br />standard dummy text ever since.</p>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon3}
                                                alt="IT"
                                            />
                                            <h5>IT Service</h5>
                                            <p>Lorem Ipsum has been the industry's <br />standard dummy text ever since.</p>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon4}
                                                alt="Hosting"
                                            />
                                            <h5>Dedicated Hosting</h5>
                                            <p>Lorem Ipsum has been the industry's <br />standard dummy text ever since.</p>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab5')} active={basicActive === 'tab5'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon5}
                                                alt="Transcription"
                                            />
                                            <h5>Transcription</h5>
                                            <p>Lorem Ipsum has been the industry's <br />standard dummy text ever since.</p>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab6')} active={basicActive === 'tab6'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon6}
                                                alt="Intelligence"
                                            />
                                            <h5>Intelligence</h5>
                                            <p>Lorem Ipsum has been the industry's <br />standard dummy text ever since.</p>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                        </Col>
                        <Col xl={6}>
                            <MDBTabsContent>
                                <MDBTabsPane show={basicActive === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Digital Marketing</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                                    </div>
                                    <Row className={styles.tabPanRow}>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon7}
                                                alt="domian"
                                            />
                                            <h4>Graphic Designing</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon8}
                                                alt="domian"
                                            />
                                            <h4>Website Design <br />Development</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon9}
                                                alt="domian"
                                            />
                                            <h4>Social Media <br />Marketing</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon10}
                                                alt="domian"
                                            />
                                            <h4>Search Engine <br />Optimization</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon11}
                                                alt="domian"
                                            />
                                            <h4>Animation & 3D <br />Videos</h4>
                                        </Col>
                                    </Row>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Telecommunication</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                                    </div>
                                    <Row className={styles.tabPanRow}>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon7}
                                                alt="domian"
                                            />
                                            <h4>Graphic Designing</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon8}
                                                alt="domian"
                                            />
                                            <h4>Website Design <br />Development</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon9}
                                                alt="domian"
                                            />
                                            <h4>Social Media <br />Marketing</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon10}
                                                alt="domian"
                                            />
                                            <h4>Search Engine <br />Optimization</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon11}
                                                alt="domian"
                                            />
                                            <h4>Animation & 3D <br />Videos</h4>
                                        </Col>
                                    </Row>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>IT Service</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                                    </div>
                                    <Row className={styles.tabPanRow}>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon7}
                                                alt="domian"
                                            />
                                            <h4>Graphic Designing</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon8}
                                                alt="domian"
                                            />
                                            <h4>Website Design <br />Development</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon9}
                                                alt="domian"
                                            />
                                            <h4>Social Media <br />Marketing</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon10}
                                                alt="domian"
                                            />
                                            <h4>Search Engine <br />Optimization</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon11}
                                                alt="domian"
                                            />
                                            <h4>Animation & 3D <br />Videos</h4>
                                        </Col>
                                    </Row>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab4'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Dedicated Hosting</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                                    </div>
                                    <Row className={styles.tabPanRow}>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon7}
                                                alt="domian"
                                            />
                                            <h4>Graphic Designing</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon8}
                                                alt="domian"
                                            />
                                            <h4>Website Design <br />Development</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon9}
                                                alt="domian"
                                            />
                                            <h4>Social Media <br />Marketing</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon10}
                                                alt="domian"
                                            />
                                            <h4>Search Engine <br />Optimization</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon11}
                                                alt="domian"
                                            />
                                            <h4>Animation & 3D <br />Videos</h4>
                                        </Col>
                                    </Row>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab5'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Transcription</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                                    </div>
                                    <Row className={styles.tabPanRow}>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon7}
                                                alt="domian"
                                            />
                                            <h4>Graphic Designing</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon8}
                                                alt="domian"
                                            />
                                            <h4>Website Design <br />Development</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon9}
                                                alt="domian"
                                            />
                                            <h4>Social Media <br />Marketing</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon10}
                                                alt="domian"
                                            />
                                            <h4>Search Engine <br />Optimization</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon11}
                                                alt="domian"
                                            />
                                            <h4>Animation & 3D <br />Videos</h4>
                                        </Col>
                                    </Row>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab6'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Business Intelligence</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                                    </div>
                                    <Row className={styles.tabPanRow}>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon7}
                                                alt="domian"
                                            />
                                            <h4>Graphic Designing</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon8}
                                                alt="domian"
                                            />
                                            <h4>Website Design <br />Development</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon9}
                                                alt="domian"
                                            />
                                            <h4>Social Media <br />Marketing</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon10}
                                                alt="domian"
                                            />
                                            <h4>Search Engine <br />Optimization</h4>
                                        </Col>
                                        <Col md={4}>
                                            <Image className='img-fluid'
                                                src={icon11}
                                                alt="domian"
                                            />
                                            <h4>Animation & 3D <br />Videos</h4>
                                        </Col>
                                    </Row>
                                </MDBTabsPane>
                            </MDBTabsContent>
                        </Col>
                        <Col xl={12}>
                            <Image className={`${styles.servcTxt} img-fluid`}
                                src={serviceTxt}
                                alt="services"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Services