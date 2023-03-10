import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/DedHostingBanner.module.css';
import hostingBanner from '../public/images/hosting-banner.png'

const DedHostingBanner = () => {
    return (
        <>
            <section className={styles.banner}>
                <Container>
                    <Row className={styles.hostingRow}>
                        <Col md={6}>
                            <div className={styles.hostingBanner}>
                                <h1>Dedicated <br />
                                    <span>Server Hosting</span>
                                </h1>
                                <p>Revolutionizing what a hosting service can do for you</p>
                                <div className={styles.form}>
                                    <button className='primary-btn'>Join Us</button>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={styles.bannerImg}>
                                <Image className='img-fluid'
                                    src={hostingBanner}
                                    alt="Dedicated_Hosting"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default DedHostingBanner