import React, { useState } from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import styles from '@/styles/SmmServices.module.css';
//
import icon1 from '../public/images/keyword.png'
import icon2 from '../public/images/linkbuild.png'
import icon3 from '../public/images/onpage.png'
import icon4 from '../public/images/keyword-1.png'
import icon5 from '../public/images/linkbuild-1.png'
import icon6 from '../public/images/onpage-1.png'
import icon7 from '../public/images/offpage.png'
import icon8 from '../public/images/offpage-1.png'


const SeoServices = () => {

    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value, string) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    return (
        <>
            <section className={`${styles.digiService} scroll scroll-service`} data-section-name="scroll-service">
                <Container>
                    <Row className={styles.dedhostingRow}>
                        <Col lg={10} className='mx-auto'>
                            <div className={styles.dedhostingBody}>
                                <h2>Our SEO Services</h2>
                                <p>
                                    Increase Your Search Rankings and Get Discovered More Online With The Best SEO Agency Ever!
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={styles.tabsRow}>
                        <Col lg={6}>
                            <MDBTabs className={styles.navTabs}>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon1}
                                                alt="Digital_Marketing"
                                            />
                                            <h5>Keyword Research & Strategy</h5>
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
                                            <h5>Link Building</h5>
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
                                            <h5>On-Page SEO</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon7}
                                                alt="IT"
                                            />
                                            <h5>Off-Page SEO</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                        </Col>
                        <Col lg={6} className='mbl-none'>
                            <MDBTabsContent>
                                <MDBTabsPane show={basicActive === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon4}
                                            alt="domian"
                                        />
                                        <h3>Keyword Research & Strategy</h3>
                                        <p>
                                            Keyword Research serves as the lifeline of Search Engine Optimization efforts. Our SEO company has a team of professional and highly skilled digital marketing and WordPress SEO experts who know the art of conducting comprehensive <strong>Keyword Research</strong>. They will assess your business needs using in-depth keyword research and thorough site audits to provide the best online marketing strategies for your SEO campaigns.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon5}
                                            alt="domian"
                                        />
                                        <h3>Link Building</h3>
                                        <p>
                                            Backlinks are a major component of ranking higher in search engines. Hence you should work with an <strong>SEO company</strong> like Crystallite, which has a dedicated SEO link building service driving traffic to your site through backlinks. We offer fully managed and bespoke link building services that speed up your ranking game and help you grow your BUSINESS, AUDIENCE, AND REVENUE!
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon6}
                                            alt="domian"
                                        />
                                        <h3>On-Page SEO</h3>
                                        <p>
                                            With our On Page SEO services, you can enhance your website’s trustworthiness and increase traffic. <strong>On page SEO</strong> research entails a mix of activities that reveal your website's existing position and authority in search and highlight avenues for business growth. We use the latest search engine optimization tactics to help your brand rank high in Google for targeted keywords that will bring more users to your website.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab4'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid mb-3'
                                            src={icon8}
                                            alt="domian"
                                        />
                                        <h3>Off-Page SEO</h3>
                                        <p>
                                            Our professional SEO agency offers Off Page SEO featuring a unique blend of digital marketing services to help you build your brand and generate qualified links. We work with social media and influencer campaigns as well link building strategies as part of <strong>Off Page SEO</strong> that will improve the search engine rankings for all pages on our website by utilizing On Page Treatments like keyword research & deep linking analysis, among others!
                                        </p>
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

export default SeoServices