
import React from 'react'
import styles from './CSRActivity.module.css'
import Header from '../Header/Header'
import enviornment from "../../../src/assets/images/envior.png"

const CSRActivity = () => {
    return (
        <>
            <div className={styles.jj}>
                <Header />
            </div>
            <div className={styles.main_container}>
                <div>
                    <div className={styles.text}>
                        CSR Activity
                    </div>
                    <div style={{
                        padding: '20px',
                        display: "flex",
                        gap: "150px"
                    }}>
                        <div style={{ width: '50%', textAlign: 'justify', padding: "50px 0px" }}>
                            At Gajanan Mining India Private Limited, we consider environmental preservation a paramount responsibility. To minimize our environmental impact, we integrate various environmentally conscious activities into our operational schedules. Efficient energy consumption, meticulous waste management, and the reduction of greenhouse gas emissions are pivotal aspects of our policies. We rigorously adhere to the regulations of the countries in which we operate and the global environmental standards. Regularly reviewing these guidelines is ingrained in our organizational culture, ensuring sustainable performance in the industry. Our unwavering commitment to environmental stewardship reflects our dedication to a balanced and responsible approach, where harmony with the environment is a core tenet of our operations.  </div>

                        <div>
                            <img src={enviornment} alt="ss" width={400} height={350} style={{ borderRadius: "10px" }} />
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default CSRActivity