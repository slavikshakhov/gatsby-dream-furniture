import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo2.svg"
import { FaCartArrowDown } from "react-icons/fa"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [links, setLinks] = useState([
    { id: 1, path: "/", text: "home" },
    { id: 2, path: "/about", text: "about" },
  ])
  const [cssCollapse, setCssCollapse] = useState("collapse navbar-collapse")
  const navbarHandler = () => {
    if (navbarOpen) {
      setNavbarOpen(false)
      setCssCollapse("collapse navbar-collapse")
    } else {
      setNavbarOpen(true)
      setCssCollapse("collapse navbar-collapse show")
    }
  }
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" height="40" width="40" />
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={cssCollapse} id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          {links.map(link => {
            return (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            )
          })}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
