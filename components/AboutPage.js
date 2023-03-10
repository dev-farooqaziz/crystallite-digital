import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/AboutPage.module.css';
import abtBanner from '../public/images/about-banner.png'

const AboutPage = () => {
    return (
        <>
            <section className={styles.banner}>
                <Container>
                    <Row className={styles.aboutRow}>
                        <Col md={6}>
                            <div className={styles.aboutBanner}>
                                <h1><span>About Us</span></h1>
                                <p>Connecting you to a new world of possibilities.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <Image className='img-fluid'
                                    src={abtBanner}
                                    alt="About_Banner"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.aboutBody}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <div>
                                <h2>About Us</h2>
                                <p>Crystallite with over five years of expertise within the ICT trade includes a robust foothold within the region wherever it's with success reworked and mature to become premier business partners of the enterprise with Multi-Million greenback revenues, a hands over one, IT professionals and a blue chip shopper portfolio.</p>
                                <p>Crystallite has been steady increasing its services and merchandise portfolio by giving information Center, Cloud Computing and Managed Services. Especially we tend to experience in possessing one in all the leading and qualified human resources within the info technology arena that continues to be a supply of our competitive advantage.</p>
                                <p>We have specialists and specialists operating in every of our product domains to ascertain provision of tailor engendered solutions denoted for our valued customers. Crystallization provides value efficacious and economical solutions with high notch support abundant to the delectation of its valued customers.</p>
                                <p>The key to Crystallite's prosperity has been its B2B focus and its formative and enduring vision to be the leading system quantifying instrument and resolution supplier within the region.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutPage