import React from "react"
import { Link } from "gatsby"
import StoryStyles from "./Story.module.scss"

const Story = () => {
  return (
    <section className={StoryStyles.section}>
      <div className="row">
        <div className="col-sm-8 col-10 mx-auto py-5 text-center">
          <h2 className="text-capitalize display-4 font-weight-bold bgColor">
            What we do
          </h2>
          <p className={`${StoryStyles.text}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            voluptatibus, voluptates soluta consequuntur facere iure molestiae
            beatae! Beatae odio voluptatem quidem fugit rem accusantium sit
            rerum laboriosam incidunt, minus iste, veritatis corrupti,
            repellendus placeat sint qui itaque tenetur consequuntur delectus
            provident. Eos sapiente aliquam, vero ad nam aut soluta neque sint
          </p>
          <div className="d-flex justify-content-center">
            <Link to="/about" className="m-1">
              <button className="btn btn-warning btn-lg text-uppercase my-3">
                See more
              </button>
            </Link>
            <Link to="/search" className="m-1">
              <button className="btn btn-warning btn-lg text-uppercase my-3">
                Search Furniture
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
