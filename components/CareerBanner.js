import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/CareerBanner.module.css';
import careerBanner from '../public/images/career-banner.png'

const CareerBanner = () => {
    return (
        <>
            <section className={styles.banner}>
                <Container>
                    <Row className={styles.careerRow}>
                        <Col md={6}>
                            <div className={styles.careerBanner}>
                                <h1>Our <br />
                                    <span>Careers</span>
                                </h1>
                                <p>Connecting you to a new world of possibilities.</p>
                                <div className={styles.form}>
                                    <button className='primary-btn'>Join Us</button>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <Image className='img-fluid'
                                    src={careerBanner}
                                    alt="Career"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CareerBanner