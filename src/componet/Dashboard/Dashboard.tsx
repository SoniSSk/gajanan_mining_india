import React from 'react';
import styles from './Dashboard.module.css';
import ImageWithTextContainer from '../ImageWithTextContainer/ImageWithTextContainer';
import enviornment from '../../assets/images/envior.jpeg';
import mission from '../../assets/images/kkkk.png';
import imgg from '../../assets/images/kkk.jpeg';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
// import ImageWrapper from './ImageWrapper';

const Dashboard: React.FC = () => {
    const constainers = [
        {
            image: imgg,
            heading: "Company Overview",
            text: "Gajanan Mining India Pvt. Ltd. is dedicated to Earth's resource extraction with a longstanding legacy. We prioritize sustainability, contributing to global development in the mining sector while emphasizing responsible environmental practices.",
            link: "/gajanan_mining_india/about/"
        },
        {
            image: mission,
            heading: "Our Mission",
            text: "Our mission is to lead the mining industry, recognized for unwavering commitment to safety, environmental stewardship, and community well-being. We aim to supply top-quality minerals and metals to meet the rising global demands.",
            link: "/gajanan_mining_india/about/"
        },
        {
            image: enviornment,
            heading: "CSR Activity",
            text: "Our unwavering dedication lies in responsibly exploring and extracting Earth's invaluable resources. With a multi-decade legacy, our company stands as a mining industry stalwart, contributing to global development while placing utmost importance on sustainability and environmental stewardship.",
            link: "/gajanan_mining_india/csr-activity/"
        },


    ]

    const navigate = useNavigate();

    return (
        <div className={styles.jjs}>

            <div className={styles.jj}>
                <Header />
                <div
                    className={styles.banner_text}
                >
                    <div style={{ width: "500px " }}>Gajanan Mining India Private Limited</div>
                </div>
            </div>
            <div className={styles.text_container}>
                <div className={styles.ttext}>
                    Who We Are ?
                </div>
                <div className={styles.inner_text}>
                    <b> Gajanan Mining IndiaPrivate Limited</b>,
                    is deeply committed to the conscientious exploration and extraction of Earth's precious resources. With a storied legacy spanning several decades, our company stands as an unwavering pillar in the mining industry. We actively contribute to global development, placing sustainability and environmental stewardship at the forefront of our endeavors. Our mission is to continue this legacy while responsibly meeting the world's resource demands. <span
                        className={styles.read_more}
                        onClick={() => {
                            navigate("/gajanan_mining_india/about");
                            window.scrollTo(0, 0)
                        }
                        }

                    > read more...</span>
                </div>
            </div>

            <div className={styles.colo}>
                {
                    constainers.map((container, index) => (
                        <div

                        >
                            <ImageWithTextContainer
                                image={container.image}
                                heading={container.heading}
                                text={container.text}
                                link={container.link}
                            />
                        </div>
                    ))
                }
            </div>
        </div >
    );
}

export default Dashboard;
