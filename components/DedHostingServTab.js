import React, { useState } from 'react';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/DedHostingServTab.module.css';
import icon1 from '../public/images/monitoring.png'
import icon2 from '../public/images/operating-system.png'
import icon3 from '../public/images/app-support.png'
import icon4 from '../public/images/monitoring-1.png'
import icon5 from '../public/images/operating-system-1.png'
import icon6 from '../public/images/app-suppot-1.png'


const DedHostingServTab = () => {

    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value, string) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    return (
        <>
            <section className={`${styles.dedhostingService} scroll scroll-servTab`} data-section-name="scroll-servTab">
                <Container>
                    <Row className={styles.tabsRow}>
                        <Col md={6}>
                            <MDBTabsContent>
                                <MDBTabsPane show={basicActive === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <Image className='img-fluid'
                                            src={icon4}
                                            alt="domian"
                                        />
                                        <h3>24/7 System <br />Monitoring</h3>
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
                                        <h3>Operating System</h3>
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
                                        <h3>Unlimited Onsite & <br />Remote Support.</h3>
                                        <p>
                                            Want to rank on the first page of Google? Our team of SEO experts is
                                            skilled to get the ball rolling on your ranking and get you to the top so you can reap the benefits of your investment. SEO has been the sole focus of many emerging brands, and this is what we’re here to do for you.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                            </MDBTabsContent>
                        </Col>
                        <Col md={6}>
                            <MDBTabs className={styles.navTabs}>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon1}
                                                alt="Monitoring"
                                            />
                                            <h5>24/7 System Monitoring</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon2}
                                                alt="Operating_System"
                                            />
                                            <h5>Operating System</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon3}
                                                alt="Support"
                                            />
                                            <h5>Unlimited Onsite &
                                                Remote Support.</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default DedHostingServTab