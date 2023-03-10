import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/TranscriptionBanner.module.css';
import transBanner from '../public/images/transcription-banner.png'

const TranscriptionBanner = () => {
    return (
        <>
            <section className={styles.banner}>
                <Container>
                    <Row className={styles.transRow}>
                        <Col md={6}>
                            <div className={styles.transBanner}>
                                <h1>Transcription <br />
                                    <span>Service</span>
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
                                    src={transBanner}
                                    alt="Transcription"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TranscriptionBanner