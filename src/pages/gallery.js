
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Fotos from "../components/fotos"

const GalleryPage = () => (
  <Layout>
    <SEO title="Making a Gallery" description="Using Graphql to create a gallery"/>
    <h1>Gallery of Images</h1>
    <Fotos />
   

  </Layout>
)

export default GalleryPage
