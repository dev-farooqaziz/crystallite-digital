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

    const [selectedService, setSelectedService] = useState('tab1');

    const handleSelectChange = (event) => {
        setSelectedService(event.target.value);
    };


    return (
        <>
            <section className={`${styles.service} scroll scroll-service`} data-section-name="scroll-service">
                <Container>
                    <Row>
                        <Col xl={10} className='mx-auto mb-4 pb-4'>
                            <div className={styles.serviceHeader}>
                                <h2>Our <span>Services</span></h2>
                                <p>Our platform provides the best of all worlds – blending public cloud with private cloud and bare metal servers into a single, unified architecture. This flexible approach enables you to tailor your setup and achieve just the right levels of cost-efficiency, security, reliability, performance and control that you need.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={`${styles.tabsRow} ${styles.deskTop}`}>
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
                                            <p>Digital Marketing is a blend of three ingredients, Passion, Creativity, and Consistency.</p>
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
                                            <h5>Search Engine Optimizaion</h5>
                                            <p>Spending a huge amount on marketing yet not getting Relevant Traffic? What could be the reason?</p>
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
                                            <h5>Managed IT Services</h5>
                                            <p>Globally, IT outsourcing is a well-proven and highly successful “managed services” business model.</p>
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
                                            <p>Dedicated server hosting covers complete infrastructure management.</p>
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
                                            <p>At Transcriber Hub, our goal is to keep your satisfaction level to highest standards.</p>
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
                                            <h5>Business Intelligence</h5>
                                            <p>Bridging the gap between data and real-time business analytics for promising outcomes</p>
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
                                        <p>Crystallite’s expertise lies in building, publishing, and marketing engaging content that will grow your client base, increase customer retention and achieve your ultimate goal of sales. We formulate strategies in such a way that they make your social presence consistent and interesting.</p>
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
                                        <h3>Search Engine Optimizaion</h3>
                                        <p>Crystallite’s expertise lies in building, publishing, and marketing engaging content that will grow your client base, increase customer retention and achieve your ultimate goal of sales. We formulate strategies in such a way that they make your social presence consistent and interesting.</p>
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
                                        <h3>Managed IT Services</h3>
                                        <p>Globally, IT outsourcing is a well-proven and highly successful “managed services” business model. Crystallite can help you infuse efficiency in your IT operations by providing End-to-End managed services.</p>
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
                                        <p>Dedicated server hosting covers complete infrastructure management. Crystallite takes full responsibility for the monitoring, maintenance, security, and operation of your managed solution.</p>
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
                                        <p>At Transcriber Hub, our goal is to keep your satisfaction level to highest standards through our revolutionary 3 – Tier process. Transcriber Hub takes pride of providing world-class services with surprising turnaround time in a highly affordable price.</p>
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
                                        <p>Crystallite will look out of your operations and documentation workloads, so you’ll focus a lot of on generating a lot of business and growth. We have a tendency to provide you with the liberty of macro managing your business. We’ve in-house time unit Specialists, Accountants and Document Coordinators.</p>
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
                        <Col xl={12} className={styles.servTxt}>
                            <Image className={`${styles.servcTxt} img-fluid`}
                                src={serviceTxt}
                                alt="services"
                            />
                        </Col>
                    </Row>

                    {/*========== For Mobile ==========*/}

                    <Row className={`${styles.tabsRow} tabsRow`}>
                        <Col xl={6}>
                            <div className={styles.navTabs}>
                                <select
                                    id="serviceSelect"
                                    className="form-select"
                                    value={selectedService}
                                    onChange={handleSelectChange}
                                >
                                    <option className='opt' value="tab1">Digital Marketing</option>
                                    <option className='opt' value="tab2">Search Engine Optimization</option>
                                    <option className='opt' value="tab3">Managed IT Services</option>
                                    <option className='opt' value="tab4">Dedicated Hosting</option>
                                    <option className='opt' value="tab5">Transcription</option>
                                    <option className='opt' value="tab6">Business Intelligence</option>
                                </select>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <MDBTabsContent>
                                <MDBTabsPane show={selectedService === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Digital Marketing</h3>
                                        <p>Crystallite’s expertise lies in building, publishing, and marketing engaging content that will grow your client base, increase customer retention and achieve your ultimate goal of sales. We formulate strategies in such a way that they make your social presence consistent and interesting.</p>
                                    </div>
                                    <div className={styles.tabSrvImg}>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon7}
                                                alt="domian"
                                            />
                                            <h4>Graphic Designing</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon8}
                                                alt="domian"
                                            />
                                            <h4>Website Design <br />Development</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon9}
                                                alt="domian"
                                            />
                                            <h4>Social Media <br />Marketing</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon10}
                                                alt="domian"
                                            />
                                            <h4>Search Engine <br />Optimization</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon11}
                                                alt="domian"
                                            />
                                            <h4>Animation & 3D <br />Videos</h4>
                                        </div>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Search Engine Optimizaion</h3>
                                        <p>Crystallite’s expertise lies in building, publishing, and marketing engaging content that will grow your client base, increase customer retention and achieve your ultimate goal of sales. We formulate strategies in such a way that they make your social presence consistent and interesting.</p>
                                    </div>
                                     <div className={styles.tabSrvImg}>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon7}
                                                alt="domian"
                                            />
                                            <h4>Graphic Designing</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon8}
                                                alt="domian"
                                            />
                                            <h4>Website Design <br />Development</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon9}
                                                alt="domian"
                                            />
                                            <h4>Social Media <br />Marketing</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon10}
                                                alt="domian"
                                            />
                                            <h4>Search Engine <br />Optimization</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon11}
                                                alt="domian"
                                            />
                                            <h4>Animation & 3D <br />Videos</h4>
                                        </div>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Managed IT Services</h3>
                                        <p>Globally, IT outsourcing is a well-proven and highly successful “managed services” business model. Crystallite can help you infuse efficiency in your IT operations by providing End-to-End managed services.</p>
                                    </div>
                                     <div className={styles.tabSrvImg}>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon7}
                                                alt="domian"
                                            />
                                            <h4>Graphic Designing</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon8}
                                                alt="domian"
                                            />
                                            <h4>Website Design <br />Development</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon9}
                                                alt="domian"
                                            />
                                            <h4>Social Media <br />Marketing</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon10}
                                                alt="domian"
                                            />
                                            <h4>Search Engine <br />Optimization</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon11}
                                                alt="domian"
                                            />
                                            <h4>Animation & 3D <br />Videos</h4>
                                        </div>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab4'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Dedicated Hosting</h3>
                                        <p>Dedicated server hosting covers complete infrastructure management. Crystallite takes full responsibility for the monitoring, maintenance, security, and operation of your managed solution.</p>
                                    </div>
                                     <div className={styles.tabSrvImg}>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon7}
                                                alt="domian"
                                            />
                                            <h4>Graphic Designing</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon8}
                                                alt="domian"
                                            />
                                            <h4>Website Design <br />Development</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon9}
                                                alt="domian"
                                            />
                                            <h4>Social Media <br />Marketing</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon10}
                                                alt="domian"
                                            />
                                            <h4>Search Engine <br />Optimization</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon11}
                                                alt="domian"
                                            />
                                            <h4>Animation & 3D <br />Videos</h4>
                                        </div>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab5'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Transcription</h3>
                                        <p>At Transcriber Hub, our goal is to keep your satisfaction level to highest standards through our revolutionary 3 – Tier process. Transcriber Hub takes pride of providing world-class services with surprising turnaround time in a highly affordable price.</p>
                                    </div>
                                     <div className={styles.tabSrvImg}>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon7}
                                                alt="domian"
                                            />
                                            <h4>Graphic Designing</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon8}
                                                alt="domian"
                                            />
                                            <h4>Website Design <br />Development</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon9}
                                                alt="domian"
                                            />
                                            <h4>Social Media <br />Marketing</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon10}
                                                alt="domian"
                                            />
                                            <h4>Search Engine <br />Optimization</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon11}
                                                alt="domian"
                                            />
                                            <h4>Animation & 3D <br />Videos</h4>
                                        </div>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={selectedService === 'tab6'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Business Intelligence</h3>
                                        <p>Crystallite will look out of your operations and documentation workloads, so you’ll focus a lot of on generating a lot of business and growth. We have a tendency to provide you with the liberty of macro managing your business. We’ve in-house time unit Specialists, Accountants and Document Coordinators.</p>
                                    </div>
                                     <div className={styles.tabSrvImg}>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon7}
                                                alt="domian"
                                            />
                                            <h4>Graphic Designing</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon8}
                                                alt="domian"
                                            />
                                            <h4>Website Design <br />Development</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon9}
                                                alt="domian"
                                            />
                                            <h4>Social Media <br />Marketing</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon10}
                                                alt="domian"
                                            />
                                            <h4>Search Engine <br />Optimization</h4>
                                        </div>
                                        <div>
                                            <Image className='img-fluid'
                                                src={icon11}
                                                alt="domian"
                                            />
                                            <h4>Animation & 3D <br />Videos</h4>
                                        </div>
                                    </div>
                                </MDBTabsPane>
                            </MDBTabsContent>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Services