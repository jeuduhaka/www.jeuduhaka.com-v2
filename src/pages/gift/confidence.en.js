import React from "react"
import { StaticImage } from "gatsby-plugin-image";

import Seo from '../../components/seo';
import GiftPage from "../../components/gift-en";

const Page = () => (
    <GiftPage>
        <Seo title="Confidence gift card" />
        <StaticImage
            width={500}
            src="../../assets/images/giftcards/en/gift-card-confidence-en.jpg"
            alt="Confidence gift card"
        />
    </GiftPage>
)
  
export default Page