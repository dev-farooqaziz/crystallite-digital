import React, { useState } from 'react';
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/MngdITServicsTab.module.css';
import icon1 from '../public/images/tailored.png'
import icon2 from '../public/images/operating.png'
import icon3 from '../public/images/guaranteed.png'
import icon4 from '../public/images/competent.png'

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
            <section className={`${styles.manageItTabs} scroll scroll-servTab`} data-section-name="scroll-servTab">
                <Container>
                    <Row className={styles.manageItTabsRow}>
                        <Col xl={6}>
                            <MDBTabs className={styles.navTabs}>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon1}
                                                alt="Tailored_Business"
                                            />
                                            <h5>Tailored to your<br />
                                                Business needs</h5>
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
                                    <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab3'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon3}
                                                alt="Guaranteed_SLA"
                                            />
                                            <h5>Guaranteed SLA</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                                <MDBTabsItem>
                                    <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
                                        <div className={styles.tabsPan}>
                                            <Image className='img-fluid'
                                                src={icon4}
                                                alt="Competent_Staff"
                                            />
                                            <h5>High Competent Staff</h5>
                                        </div>
                                    </MDBTabsLink>
                                </MDBTabsItem>
                            </MDBTabs>
                        </Col>
                        <Col xl={6}>
                            <MDBTabsContent>
                                <MDBTabsPane show={basicActive === 'tab1'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Tailored to your <br />Business needs</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab2'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Operating System</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab3'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>Guaranteed SLA</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                                        </p>
                                    </div>
                                </MDBTabsPane>
                                <MDBTabsPane show={basicActive === 'tab4'}>
                                    <div className={styles.tabPanContent}>
                                        <h3>High Competent Staff</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
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