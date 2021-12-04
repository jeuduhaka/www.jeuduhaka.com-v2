import React from "react"
import { Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import translations from '../i18n/en';
import '../assets/css/fonts.css';
import '../assets/css/styles.css';

const GiftPage = ({ children }) => (
    <Container>
        <Row>
        <div className="Absolute-Center is-Responsive">
            <div className="block-text">
                <div className="title">{translations.bodyTitle}</div>
            </div>
            <br/>
            {children}
            <br/>
            <br/>
            <div className="subtitle"><a href="https://www.jeuduhaka.com">www.jeuduhaka.com</a></div>
            <div className="title">{translations.freeApp}</div>
            <a href="https://apps.apple.com/us/app/the-hakas-game-ludocoach/id1289735068">
                <StaticImage
                    width={169}
                    height={50}
                    className="img-responsive"
                    src="../assets/images/badges/app-store-badge-en.png"
                    alt={translations.availableAppStore}
                />
            </a>
            <a href='https://play.google.com/store/apps/details?hl=en&id=com.marckucharz.jeuduhakaludocoach&utm_source=jeuduhaka.com&utm_campaign=jeuduhaka.com'>
                <StaticImage
                    width={169}
                    height={50}
                    className="img-responsive"
                    src="../assets/images/badges/google-play-badge-en.png"
                    alt={translations.availableGooglePlay}
                />
            </a>
            </div>
        </Row>
    </Container>
)
  
export default GiftPage