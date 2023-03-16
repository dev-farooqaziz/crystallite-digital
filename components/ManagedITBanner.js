import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/MngdITBanner.module.css';
import ITBanner from '../public/images/it-banner.png'

const ManagedITBanner = () => {
    return (
        <>
            <section className={`${styles.banner} scroll scroll-banner`} data-section-name="scroll-banner">
                <Container>
                    <Row className={styles.manageITRow}>
                        <Col md={6}>
                            <div className={styles.manageITBanner}>
                                <h1>Managed <br />
                                    <span>IT Service</span>
                                </h1>
                                <p>Our solutions are simpler, smarter, and of course efficient.</p>
                                <div className={styles.form}>
                                    <button className='primary-btn'>Join Us</button>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <Image className='img-fluid'
                                    src={ITBanner}
                                    alt="Telecommunication"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ManagedITBanner