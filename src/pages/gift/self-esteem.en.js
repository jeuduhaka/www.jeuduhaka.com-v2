import React from "react"
import { StaticImage } from "gatsby-plugin-image";

import Seo from '../../components/seo';
import GiftPage from "../../components/gift-en";

const Page = () => (
    <GiftPage>
        <Seo title="Self-esteem gift card" />
        <StaticImage
            width={500}
            src="../../assets/images/giftcards/en/gift-card-self-esteem-en.jpg"
            alt="Self-esteem gift card"
        />
    </GiftPage>
)
  
export default Page