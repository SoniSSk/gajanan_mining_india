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
                        {/* Gomti Infra Mining Private Limited, we are dedicated to the responsible exploration and extraction of the Earth's valuable resources. With a legacy dating back decades, our company has been a stalwart in the mining industry, contributing to global development while prioritizing sustainability and environmental stewardship. */}
                        <div

                            className={
                                styles.get_in_touch
                            }>

                            Gajanan Mining India Pvt. Ltd. (Main Office)
                        </div>

                        <div>
                            Address:- <span className={styles.s}> Ground Floor 3/777, Vastu khand Gomti Nagar Lucknow (Uttar Pradesh) Pin-226010</span>

                        </div>
                        <div>
                            Email:- <span className={styles.link}>gomtiinfra2001@gmail.com</span>
                        </div>
                        <div>
                            Mobile:- <span className={styles.link}>+91-9648322001 </span>
                        </div>
                        <div>
                            Mobile:- <span className={styles.link}>+91-9648922001 </span>
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