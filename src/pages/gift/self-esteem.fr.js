import React from "react"
import { StaticImage } from "gatsby-plugin-image";

import Seo from '../../components/seo';
import GiftPage from "../../components/gift-fr";

const Page = () => (
    <GiftPage>
        <Seo title="Carte cadeau Estime de soi" />
        <StaticImage
            width={500}
            src="../../assets/images/giftcards/fr/gift-card-self-esteem-fr.jpg"
            alt="Carte cadeau Estime de soi"
        />
    </GiftPage>
)
  
export default Page