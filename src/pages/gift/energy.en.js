import React from "react"
import { StaticImage } from "gatsby-plugin-image";

import Seo from '../../components/seo';
import GiftPage from "../../components/gift-en";

const Page = () => (
    <GiftPage>
        <Seo title="Energy gift card" />
        <StaticImage
            width={500}
            src="../../assets/images/giftcards/en/gift-card-energy-en.jpg"
            alt="Energy gift card"
        />
    </GiftPage>
)
  
export default Page