import React, { useState } from "react"
import ItemsStyles from "./Items.module.scss"
import Img from "gatsby-image"
import Item from "./Item"

const Items = ({ menu }) => {
  //console.log(JSON.stringify(items, null, 4))
  const [els, setEls] = useState(menu.edges)
  const [category, setCategory] = useState("")
  console.log(category)
  const categories = els.map(({ node }) => node.category)
  const [display, setDisplay] = useState(false)
  const uniqueCategories = [...new Set(categories)]
  console.log(uniqueCategories)

  const filterByCategory = category => {
    console.log(category)
    setCategory(category)
    setDisplay(true)
  }
  return (
    <div className={`pt-3 pb-5 ${ItemsStyles.sectionContainer}`}>
      {els.length > 0 ? (
        <section className="p-3">
          <h2 className="font-weight-bold text-primary text-center p-1">
            Choose category and start searching!
          </h2>
          <div className="row mt-2 mr-1 mx-auto text-center">
            <div className="col-sm-8 col-10 mx-auto">
              {uniqueCategories.map((category, i) => {
                return (
                  <button
                    key={i}
                    className="btn btn-info text-capitalize mr-1"
                    onClick={() => filterByCategory(category)}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          {display && (
            <div className="w-75 mx-auto d-flex flex-wrap justify-content-center mt-5">
              {els.map(({ node }) => {
                if (node.category === category) {
                  return <Item node={node} />
                }
              })}
            </div>
          )}
        </section>
      ) : (
        <section>nothing</section>
      )}
    </div>
  )
}

export default Items

// <Img fixed={node.pic.fixed} />
