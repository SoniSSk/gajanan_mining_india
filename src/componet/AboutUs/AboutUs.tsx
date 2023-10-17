import React from 'react'
import styles from './AboutUs.module.css'
import Header from '../Header/Header'

const AboutUs = () => {

    const abloutUs = [
        {
            heading: "Company Overview",
            content: 'Gajanan Mining India Private Limited is wholeheartedly devoted to the responsible exploration and extraction of Earth invaluable resources.With a legacy extending over several decades, our company stands as a steadfast presence in the mining industry.Our unwavering commitment contributes significantly to global development while placing sustainability and environmental stewardship as paramount priorities in all our operations and endeavors.We continue to uphold this legacy while responsibly meeting the worlds resource demands.'
        },
        {
            heading: "Our Mission",
            content: "Our mission is to lead the mining industry, recognized for our unwavering commitment to safety, environmental responsibility, and community well-being in the areas we serve. We tirelessly endeavor to provide the world with the highest quality minerals and metals to address its ever-increasing demands. We aim to set a benchmark as industry leaders, championing safety, sustainability, and the welfare of the communities where our operations make a difference."
        },
        {
            heading: "Our Commitment to Sustainability",
            content: "Environmental responsibility is the cornerstone of our operations. We utilize cutting-edge technologies and best practices to reduce our ecological footprint. Our commitment extends to reclamation initiatives, water and energy conservation, and various sustainability efforts. We are dedicated to ensuring that our activities result in a positive impact on the environment, leaving it in a better state for future generations."
        },
        {
            heading: "Our Commitment to Safety",
            content: "Safety is our top priority, and it's non-negotiable. We uphold the most stringent safety standards, and we consistently invest in training and resources to guarantee that everyone involved with us can confidently return home without harm. Our unwavering commitment to safety extends to our employees, partners, and anyone associated with our operations. We consider their well-being paramount, fostering a culture where safety is ingrained in every aspect of our work."
        },
        {
            heading: "Our Community Engagement",
            content: "We prioritize community engagement and endeavor to be responsible neighbors. We forge strong partnerships with local communities to foster shared value. By offering employment opportunities, supporting educational initiatives, and participating in community projects, we strive to act as a catalyst for progress and development in the regions where we operate. Our commitment to creating a positive impact extends beyond our core operations, contributing to the betterment of the communities we are privileged to work alongside."
        },
        {
            heading: 'Innovation and Technology',
            content: 'We are always at the forefront of innovation. Our commitment to cutting-edge technology not only improves efficiency but also helps us reduce the environmental impact of our mining activities.'
        },
        {
            heading: 'Quality Assurance',
            content: 'We stand by our commitment to provide superior products. Our stringent quality control procedures guarantee that the minerals and metals we extract consistently meet the industry highest standards.We take pride in our unwavering dedication to delivering top- tier materials to meet the demands of our clients and partners.Our quality assurance measures are an integral part of our operations, reflecting our commitment to excellence and reliability in every product we offer.'
        },
        {
            heading: 'A Bright Future',
            content: 'The mining industry undergoes continual transformation, and we evolve with it. Our dedication lies in adapting to fresh challenges and opportunities, all while adhering to the core principles that have earned us respect and recognition in the mining sector. As we progress, we remain steadfast in our commitment to sustainability, safety, environmental stewardship, and community well-being, ensuring that our legacy of responsible mining endures amid an ever-changing industry landscape.'
        }
    ]
    return (
        <>
            <div className={styles.jj}>
                <Header />
            </div>
            <div className={styles.main_container}>

                <div>
                    <div className={styles.text}>
                        About us
                    </div>
                    <div className={styles.container_aaaa} >
                        <div className={styles.bbbb} >
                            {
                                abloutUs.map((about, index) => (
                                    <div key={index}>
                                        <div className={styles.main_texts}>
                                            {about.heading}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.aaaa} >
                            {
                                abloutUs.map((about, index) => (
                                    <div key={index}>
                                        <div className={styles.main_text}>
                                            {about.heading}
                                        </div>
                                        <div className={styles.ss}>
                                            {about.content}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AboutUs