import React from "react"
import { StaticImage } from "gatsby-plugin-image";

import GiftPage from "../../components/gift-fr";
import translations from "../../i18n/fr";
import { capitalizeFirstLetter } from "../../utils";

const cardNameKey = 'confidence';
const cardNameText = capitalizeFirstLetter(translations[cardNameKey]);

const Page = () => (
    <GiftPage
        metaTitle={translations.metaTitle(cardNameText)}
        bodyTitle={translations.bodyTitle}
        giftCardImage={
            <StaticImage
                width={500}
                src={`../../assets/images/giftcards/fr/gift-card-${cardNameKey}-fr.jpg`}
                alt={`Carte cadeau ${cardNameText}`}
            />
        }
    />
)
 
export default Page