import React from "react"
import { StaticImage } from "gatsby-plugin-image";

import GiftPage from "../../components/gift-en";
import translations from "../../i18n/en";
import { capitalizeFirstLetter } from "../../utils";

const cardNameKey = 'strength';
const cardNameText = capitalizeFirstLetter(translations[cardNameKey]);

const Page = () => (
    <GiftPage
        metaTitle={translations.metaTitle(cardNameText)}
        bodyTitle={translations.bodyTitle}
        giftCardImage={
            <StaticImage
                width={500}
                src={`../../assets/images/giftcards/en/gift-card-${cardNameKey}-en.jpg`}
                alt={`${cardNameText} gift card`}
            />
        }
    />
)
 
export default Page