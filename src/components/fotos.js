import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from './ligthbox';

// This component pulls the images from files and uses the Ligthsbox component to render the.

const Fotos = () => (
  <StaticQuery
    query={graphql`
      query{
        misFotos: allFile(filter: {relativeDirectory: {eq: "images/fotos"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data=> <Lightbox misFotos={data.misFotos.edges} />}
  ></StaticQuery>
)


export default Fotos
