import React from 'react';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const headerOptions = [
        { name: 'Home', link: '/gajanan_mining_india' },
        { name: 'About Us', link: '/gajanan_mining_india/about' },
        { name: 'Services', link: '/gajanan_mining_india' },
        { name: 'Certificates', link: '/gajanan_mining_india' },
        { name: 'CSR Activity', link: '/gajanan_mining_india/csr-activity' },
        { name: 'Contact Us', link: '/gajanan_mining_india/contact' },
    ];

    const navigate = useNavigate();;


    return (
        <div className={styles.main_container}>
            <div
                onClick={() => {
                    navigate("/gajanan_mining_india")
                }}
                className={styles.gomti}>Gajanan <span className={styles.infra}>  Mining India Private Limited </span> </div>
            <div className={styles.option_container}>
                {headerOptions.map((option, index) => (
                    <div key={index}>
                        <div onClick={() => {
                            navigate(option.link);
                            window.scrollTo(0, 0)
                        }}>
                            {option.name}
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}

export default Header;
