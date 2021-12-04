import React, { useEffect } from "react"

import Seo from "../components/seo"

const IndexPage = () => {
  useEffect(() => {
    window.location.replace("https://www.jeuduhaka.com");
  }, []);

  return (
    <Seo title="Home" />
  )
}
  

export default IndexPage
