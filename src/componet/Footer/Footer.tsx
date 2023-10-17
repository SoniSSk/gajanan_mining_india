import React from 'react'
import styles from './Footer.module.css'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const footerOption = [
        { name: 'Home', link: '/gajanan_mining_india' },
        { name: 'About Us', link: '/gajanan_mining_india/about' },
        { name: 'Services', link: '/gajanan_mining_india/services' },
        { name: 'Certificates', link: '/gajanan_mining_india/certificate' },
        { name: 'CSR Activity', link: '/gajanan_mining_india/csr-activity' },
        { name: 'Contact Us', link: '/gajanan_mining_india/contact' },
    ];
    const navigate = useNavigate();
    return (
        <div className={styles.main}>
            <div className={styles.section1}>
                <div className={styles.company_name}>Gajanan Mining India Private  Limited</div>
                <div className={styles.text}>
                    gomtiinfra2001@gmail.com
                </div>
                <div className={styles.divider}></div>
                <div className={styles.text}> Copyright Dotcreativemarket  </div>
            </div>
            <div>
                <div>
                    <div className={styles.second_heading}>Sitemap
                    </div>
                    <div className={styles.sitemap_container}>
                        {
                            footerOption.map((item, index) => {
                                return (
                                    <div onClick={() => {
                                        navigate(item.link);
                                        window.scrollTo(0, 0)
                                    }}>
                                        {item.name}
                                    </div>

                                )
                            }
                            )
                        }
                    </div>
                </div>
                <div>
                    <div className={styles.second_heading}>Contact</div>
                    <div className={styles.text}>Email:- gomtiinfra2001@gmail.com</div>
                    <div className={styles.text}>Mobile:- +91-9648322001, +91-9648922001</div>
                </div>

            </div>

        </div>
    )
}


export default Footer