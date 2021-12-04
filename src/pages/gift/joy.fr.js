import React from "react"
import { StaticImage } from "gatsby-plugin-image";

import Seo from '../../components/seo';
import GiftPage from "../../components/gift-fr";

const Page = () => (
    <GiftPage>
        <Seo title="Carte cadeau Joie" />
        <StaticImage
            width={500}
            src="../../assets/images/giftcards/fr/gift-card-joy-fr.jpg"
            alt="Carte cadeau Joie"
        />
    </GiftPage>
)
  
export default Page