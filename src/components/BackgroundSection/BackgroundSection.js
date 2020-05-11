import React from "react"
import BackgroundImage from "gatsby-background-image"
import BackgroundStyles from "./BackgroundSection.module.scss"

const BackgroundSection = ({ fluid, styling, children, topLayer }) => {
  return (
    <BackgroundImage fluid={fluid} className={BackgroundStyles[styling]}>
      {children}
    </BackgroundImage>
  )
}

export default BackgroundSection

// <div className={BackgroundStyles.topLayer}>{children}</div>
