import React from "react"
import ItemStyles from "./Item.module.scss"
import Img from "gatsby-image"

const Item = ({ node }) => {
  return (
    <div className={`card m-1 border-0 rounded ${ItemStyles.card}`}>
      <Img className="card-img-top" fluid={node.pic.fluid} />
      <div
        className={`card-body text-center d-flex flex-direction-column h-100 ${ItemStyles.cardBody}`}
      >
        <div className="flex-grow-1">
          <h5 className="card-title text-primary font-weight-bold">
            {node.title}
          </h5>
          <p>Price: {node.price}</p>
        </div>
        <button className="btn btn-outline-warning mt-2">Add To Chart</button>
      </div>
    </div>
  )
}

export default Item
// re-deploy - 2
