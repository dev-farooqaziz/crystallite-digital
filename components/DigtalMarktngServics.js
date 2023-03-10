import React, { useState } from 'react';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/DigiMarktngServics.module.css';
import icon1 from '../public/images/seo.png'
import icon2 from '../public/images/smm.png'
import icon3 from '../public/images/ppc.png'
import icon4 from '../public/images/seo-1.png'
import icon5 from '../public/images/smm-1.png'
import icon6 from '../public/images/ppc-1.png'


const DigtalMarktngServics = () => {

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
                    <Row className={styles.tabsRow}>
                        <Col md={6}>
                            <MDBTabs className={styles.navTabs}>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon1}
                                                alt="Digital_Marketing"
                                            />
                                            <h5>Search Engine Optimization</h5>
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
                                            <h5>Social Media Marketing</h5>
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
                                            <h5>Pay-Per Click Marketing</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                        </Col>
                        <Col md={6}>
                            <MDBTabsContent>
                                <MDBTabsPane show={basicActive === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon4}
                                            alt="domian"
                                        />
                                        <h3>Search Engine <br />Optimization</h3>
                                        <p>
                                            Want to rank on the first page of Google? Our team of SEO experts is
                                            skilled to get the ball rolling on your ranking and get you to the top so you can reap the benefits of your investment. SEO has been the sole focus of many emerging brands, and this is what we’re here to do for you.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon5}
                                            alt="domian"
                                        />
                                        <h3>Social Media <br />Marketing</h3>
                                        <p>
                                            Want to rank on the first page of Google? Our team of SEO experts is
                                            skilled to get the ball rolling on your ranking and get you to the top so you can reap the benefits of your investment. SEO has been the sole focus of many emerging brands, and this is what we’re here to do for you.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon6}
                                            alt="domian"
                                        />
                                        <h3>Pay-Per Click <br />Marketing</h3>
                                        <p>
                                            Want to rank on the first page of Google? Our team of SEO experts is
                                            skilled to get the ball rolling on your ranking and get you to the top so you can reap the benefits of your investment. SEO has been the sole focus of many emerging brands, and this is what we’re here to do for you.
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

export default DigtalMarktngServics