import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/ContactPage.module.css';
import cntctBanner from '../public/images/contact-banner.png'

const ContactPage = () => {
    return (
        <>
            <section className={styles.banner}>
                <Container>
                    <Row className={styles.contactRow}>
                        <Col md={6}>
                            <div className={styles.contactBanner}>
                                <h1><span>Contact Us</span></h1>
                                <p>Connecting you to a new world of possibilities.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <Image className='img-fluid'
                                    src={cntctBanner}
                                    alt="Contact_Banner"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ContactPage