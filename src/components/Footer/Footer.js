import React from "react"
import FooterStyles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className="py-3">
      <div className="row">
        <div className="col-sm-8 col-10 mx-auto text-yellow text-center text-capitalize">
          <h3>
            all rights reserved &copy;{new Date().getFullYear().toString()}
          </h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer
