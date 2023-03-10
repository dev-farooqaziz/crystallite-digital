import React from 'react'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/Contact.module.css';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <section className={`${styles.contact} scroll scroll-contact`} data-section-name="scroll-contact">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.contactContent}>
                                <h2>Let's Get <br /> <span>Started</span></h2>
                                <p>Some of the greatest things in life start with a <br /> simple conversation. We welcome you to call, <br /> email, or simply use the magic form to the right.</p>
                                <h5>Email</h5>
                                <div className={styles.infoLinks}>
                                    <Link href="mailto:info@crystal-lite.net">
                                        <FaEnvelope className={styles.icon} />
                                        info@crystal-lite.net
                                    </Link>
                                </div>
                                <h5>Phone</h5>
                                <div className={styles.infoLinks}>
                                    <Link href="tel:1-888-900-8007">
                                        <FaPhoneAlt className={styles.icon} />
                                        1-888-900-8007
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <form className={styles.contactForm}>
                                <Row>
                                    <Col xl={12} className='mt-3'>
                                        <input type="text" name="name" placeholder="Name" required="" />
                                    </Col>
                                    <Col xl={12} className='mt-3'>
                                        <input type="email" name="email" placeholder="Email" required="" />
                                    </Col>
                                    <Col xl={12} className='mt-3'>
                                        <input type="text" maxlength="10" name="phone" placeholder="Phone" required="" />
                                    </Col>
                                    <Col xl={12} className='mt-3'>
                                        <textarea placeholder="Message"></textarea>
                                    </Col>
                                    <Col xl={12} className='mt-4'>
                                        <button type="submit" className='primary-btn'>Submit</button>
                                    </Col>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact