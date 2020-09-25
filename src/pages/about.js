import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// This page is desplayng a single picture 

const AboutPage = ({data}) => {
  return(
  <Layout>
    <SEO title="Importing Images" description="Using GraphiQL to works with images."/>
    <h1>Importing one image using "GatsbyImageSharpFixed"</h1>
    <Img
  className="headshot"
  fixed={data.file.childImageSharp.fixed}
  alt="headshot"
/>

  </Layout>
)
}

export const query = graphql`
  query{
    file(relativePath: {eq: "images/fotos/familyOne.jpg"}) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AboutPage