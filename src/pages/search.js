import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Items from "../components/Items/Items"
import { graphql } from "gatsby"

const SearchPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Search" />
      <div clasName="">
        <Items menu={data.menu} />
      </div>
    </Layout>
  )
}

export default SearchPage

export const query = graphql`
  {
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
