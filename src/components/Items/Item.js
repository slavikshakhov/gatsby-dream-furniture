import React from "react"
import ItemStyles from "./Item.module.scss"
import Img from "gatsby-image"

const Item = ({ node }) => {
  return (
    <div className={`card m-1 border-0 rounded ${ItemStyles.card}`}>
      <Img className="card-img-top" fluid={node.pic.fluid} />
      <div className={`card-body text-center ${ItemStyles.cardBody}`}>
        <p>Price: {node.price}</p>
        <h5 className="card-title text-primary font-weight-bold">
          {node.title}
        </h5>
        <p className="card-text">{`${node.description.description.slice(
          0,
          60
        )} ...`}</p>
      </div>
    </div>
  )
}

export default Item
// re-deploy
