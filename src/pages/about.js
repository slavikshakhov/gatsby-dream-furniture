import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

//import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"

import BackgroundSection from "../components/BackgroundSection/BackgroundSection"
import Story from "../components/Story/Story"

const AboutPage = ({ data }) => {
  return (
    <Layout>
      {/* <SEO title="About" /> */}
      
      <BackgroundSection
        fluid={data.img.childImageSharp.fluid}
        styling="aboutStyle"
      >
        <div className="row">
          <div className="col-4 col-sm-5 pl-5 pt-1">
            <p className="text-white display-4 py-2">About us</p>
            <blockquote className="pt-3 font-italic text-white-50 about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              numquam eaque nemo sapiente ipsum natus nobis impedit eum ducimus
              nihil ipsa, adipisci eveniet maiores itaque illum commodi aut
              omnis suscipit soluta nisi, eos totam harum. Enim, eius voluptates
              ullam ipsam nesciunt fuga harum nemo aspernatur magni error
              accusamus perferendis ratione!
            </blockquote>
          </div>
        </div>
      </BackgroundSection>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
