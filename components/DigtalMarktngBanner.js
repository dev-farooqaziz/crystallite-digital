import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/DigiMarktngBanner.module.css';
import digiBanner from '../public/images/digital-marketing-banner.png'

const DigtalMarktngBanner = () => {
    return (
        <>
            <section className={styles.banner}>
                <Container>
                    <Row className={styles.digiRow}>
                        <Col md={6}>
                            <div className={styles.digiBanner}>
                                <h1>Digital <br />
                                    <span>Marketing</span>
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
                                    src={digiBanner}
                                    alt="Digital_Marketing"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default DigtalMarktngBanner