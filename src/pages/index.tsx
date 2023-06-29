import React from "react"
import { Helmet } from "react-helmet"
import "../styles/index.css"

const IndexPage: React.FC = () => (
  <div className="flex justify-center items-center h-screen bg-custom-bg">
    <Helmet>
      <meta property="og:title" content="Rising One - In Human Performance" />
      <meta property="og:image" content="https://imagedelivery.net/BraoERk7ObOhDfMARuruCw/61cad3d7-e5cc-47f4-bb82-994258007400/public" />
      <meta property="og:image:alt" content="Centered Image" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="This is the description for the Rising One - In Human Performance website." />
    </Helmet>
    <img src="https://imagedelivery.net/BraoERk7ObOhDfMARuruCw/61cad3d7-e5cc-47f4-bb82-994258007400/public" alt="Centered Image" className="max-w-full max-h-full" />
  </div>
)

export default IndexPage
