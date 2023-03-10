import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/Journey.module.css';
import journeyImg from '../public/images/journey_bg.png'
import journeyTxt from '../public/images/journey_text.png'

const Journey = () => {
    return (
        <>
            <section className={`${styles.journey} scroll scroll-journey`} data-section-name="scroll-journey">
                <Container fluid>
                    <Row>
                        <Col xl={12}>
                            <div className={styles.journeyHeader}>
                                <h2>Our Wonderful <br /> <span>Journey</span></h2>
                            </div>
                        </Col>
                        <Col xl={12} className={styles.journeycol}>
                            <Image className={`${styles.journeyImg} img-fluid mt-lg-5`}
                                src={journeyImg}
                                alt="journeyImg"
                            />
                        </Col>
                        <Col xl={12}>
                            <Image className={`${styles.journeytxt} img-fluid`}
                                src={journeyTxt}
                                alt="journeyImg"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Journey