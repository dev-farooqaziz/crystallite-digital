import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/BusinessBanner.module.css';
import busIntBanner from '../public/images/business-banner.png'

const BusinessBanner = () => {
    return (
        <>
            <section className={styles.banner}>
                <Container>
                    <Row className={styles.busIntRow}>
                        <Col md={6}>
                            <div className={styles.busIntBanner}>
                                <h1>Business <br />
                                    <span>Intelligence</span>
                                </h1>
                                <p>Innovation is just around the corner with us.</p>
                                <div className={styles.form}>
                                    <button className='primary-btn'>Join Us</button>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <Image className='img-fluid'
                                    src={busIntBanner}
                                    alt="Business_Intelligence"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BusinessBanner