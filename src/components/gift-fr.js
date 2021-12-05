import React from "react"
import { Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import Seo from './seo';
import translations from '../i18n/fr';
import '../assets/css/fonts.css';
import '../assets/css/styles.css';

const GiftPage = ({ metaTitle, bodyTitle, giftCardImage }) => (
    <Container>
        <Seo title={metaTitle} />
        <Row>
        <div className="Absolute-Center is-Responsive">
            <div className="block-text">
                <div className="title">{bodyTitle}</div>
            </div>
            <br/>   
            {giftCardImage}
            <br/>
            <br/>
            <div className="subtitle"><a href="https://www.jeuduhaka.com">www.jeuduhaka.com</a></div>
            <div className="title">{translations.freeApp}</div>
            <a href="https://apps.apple.com/fr/app/le-jeu-du-haka-ludocoach/id1289735068">
                <StaticImage
                    width={169}
                    height={50}
                    className="img-responsive"
                    src="../assets/images/badges/app-store-badge-fr.png"
                    alt={translations.availableAppStore}
                />
            </a>
            <a href='https://play.google.com/store/apps/details?hl=en&id=com.marckucharz.jeuduhakaludocoach&utm_source=jeuduhaka.com&utm_campaign=jeuduhaka.com'>
                <StaticImage
                    width={169}
                    height={50}
                    className="img-responsive"
                    src="../assets/images/badges/google-play-badge-fr.png"
                    alt={translations.availableGooglePlay}
                />
            </a>
            </div>
        </Row>
    </Container>
)
  
export default GiftPage