import React from 'react'
import styles from './ContactUs.module.css'
import Header from '../Header/Header'

const ContactUs = () => {
    return (
        <>
            <div className={styles.jj}>
                <Header />
            </div>
            <div className={styles.main_container}>
                <div>
                    <div className={styles.text}>
                        Contact Us
                    </div>
                    <div className={styles.conatainer}>
                        <div

                            className={
                                styles.get_in_touch
                            }>

                            Gajanan Mining India Pvt. Ltd. (Main Office)
                        </div>

                        <div>
                            Address:- <span className={styles.s}> Ward No. 22, Harshan Seva Sadan, 32, Indrapuri Colony, Tikamgarh (M.P.) – 472001</span>

                        </div>
                        <div>
                            Email:- <span className={styles.link}>gajananindiapvtltd@gmail.com</span>
                        </div>
                        <div>
                            Mobile:- <span className={styles.link}>+91-9425141650 </span>
                        </div>
                        <div>
                            Mobile:- <span className={styles.link}>+91-9935142001 </span>
                        </div>



                    </div>
                </div>
                {/* <div>
                <img
                    src={iron_ore_mines}
                    alt="Pictu"
                    className={styles.image}
                />
            </div> */}
                {/* <div className={styles.mail_container}>
                    <div
                        className={styles.mail_input}
                    >
                        <div className={styles.input_feild}>
                            Name
                        </div>
                        <div className={styles.input_feild}>
                            email
                        </div>
                    </div>
                    <div className={styles.input_feild_two}>

                    </div>
                    <button className={styles.button_style} type="submit">Send Message</button>
                </div> */}

            </div >
        </>
    )
}

export default ContactUs