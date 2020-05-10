import React from "react"
import BackgroundImage from "gatsby-background-image"
import BackgroundStyles from "./BackgroundSection.module.scss"

const BackgroundSection = ({ fluid, styling, children, topLayer }) => {
  return (
    <BackgroundImage fluid={fluid} className={BackgroundStyles[styling]}>
      <div className={BackgroundStyles.topLayer}>{children}</div>
    </BackgroundImage>
  )
}

export default BackgroundSection
