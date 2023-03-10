import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Header.module.css'
import Navbar from 'react-bootstrap/Navbar';
import { FaPhoneAlt, FaEnvelope, FaBuilding, FaBars, FaRegWindowClose } from "react-icons/fa";
import logo from '../public/images/logo.svg'

const Header = () => {

    const [isActive, setIsActive] = useState(false);

    const handleMenu = () => {
        setIsActive((prev) => !prev);
    }

    const router = useRouter();

    return (
        <>
            <Navbar.Brand href='/'>
                <Image className={`${styles.logo} img-fluid`}
                    src={logo}
                    alt="logo"
                />
            </Navbar.Brand>
            <FaBars className={styles.openMenu} onClick={handleMenu} />
            <Navbar className={isActive ? `${styles.navBar} ${styles.active}` : `${styles.navBar}`} expand="md">
                <FaRegWindowClose className={styles.closeMenu} onClick={handleMenu} />
                <Container>
                    <Row className={`${styles.navRow} w-100`}>
                        <Col md={4}>
                            <ul className={styles.menu}>
                                <li>
                                    <Link href="/" onClick={handleMenu}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/digital-marketing/" onClick={handleMenu}>
                                        Digital Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/telecommunication/" onClick={handleMenu}>
                                        Telecommunication
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/managed-it/" onClick={handleMenu}>
                                        IT Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dedicated-hosting/" onClick={handleMenu}>
                                        Dedicated Hosting
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/transcription/" onClick={handleMenu}>
                                        Transcription
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/business-intelligence/" onClick={handleMenu}>
                                        Business Intelligence
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/career/" onClick={handleMenu}>
                                        Career
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about/" onClick={handleMenu}>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact/"onClick={handleMenu}>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <ul className={styles.menu}>
                                <li>
                                    <Link href="#" onClick={handleMenu}>
                                        Content Writing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={handleMenu}>
                                        Blog Writing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={handleMenu}>
                                        Website Content
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={handleMenu}>
                                        Article Writing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={handleMenu}>
                                        Book Publishing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={handleMenu}>
                                        Book Writing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={handleMenu}>
                                        Ebook Writing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={handleMenu}>
                                        Copy Writing
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <div className={styles.info}>
                                <ul className={styles.subMenu}>
                                    <li>
                                        <h5>Email</h5>
                                        <div className={styles.infoLinks}>
                                            <Link href="mailto:info@crystal-lite.net">
                                                <FaEnvelope className={styles.icon} />
                                                info@crystal-lite.net
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Phone</h5>
                                        <div className={styles.infoLinks}>
                                            <Link href="tel:1-888-900-8007">
                                                <FaPhoneAlt className={styles.icon} />
                                                1-888-900-8007
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Office</h5>
                                        <div className={styles.infoLinks}>
                                            <Link href="https://goo.gl/maps/Vd2oB7YVTJQNJpNM6" target={'_blank'}>
                                                <FaBuilding className={styles.icon} />
                                                Karachi, Pakistan
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </>
    )
}

export default Header