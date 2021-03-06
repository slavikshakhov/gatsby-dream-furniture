import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

//import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"

import BackgroundSection from "../components/BackgroundSection/BackgroundSection"
import Story from "../components/Story/Story"
import Items from "../components/Items/Items"
import Contact from "../components/Contact/Contact"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      
      <BackgroundSection
        fluid={data.img.childImageSharp.fluid}
        styling="homeStyle"
        className="d-flex"
      >
        <h1 className="text-white text-uppercase text-center display-4 font-weight-bold">
          welcome to dream furniture!
        </h1>
      </BackgroundSection>
      <Story />
      <Items menu={data.menu} />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    img: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    menu: allContentfulItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          pic {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
/*
node {
  image {
    fluid {
      ...GatsbyContentfulFluid
    }
  }
}
*/