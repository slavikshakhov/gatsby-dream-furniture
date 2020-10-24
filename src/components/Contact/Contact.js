import React from "react"
import ContactStyle from "./Contact.module.scss"

const Contact = () => {
  return (
    <div className="row mt-2 mr-1 p-3 mx-auto">
      <div className="col-10 col-sm-8 col-md-6 col-lg-5 mx-auto">
        <h2 className="text-center font-bold text-center">Contact us</h2>
        <form
          action="https://formspree.io/xdowkqap"
          method="POST"
          className="mt-2"
        >
          <div className="form-group mt-2">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="your email"
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              className="form-control"
              rows="5"
              placeholder="Please write a short message here ....."
            />
          </div>
          <button className="btn btn-outline-warning btn-block">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

/*

import React from "react";
import Title from "../Globals/Title";
export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/learncodetutorial@gmail.com"
            method="POST"
          >
           
<div className="form-group">
    <label htmlFor="name">Name</label>
    <input
        type="text"
        className="form-control"
        name="name"
        id="name"
        placeholder="john smith"
    />
</div>

<div className="form-group">
    <label htmlFor="email">Email</label>
    <input
        type="text"
        className="form-control"
        name="email"
        id="email"
        placeholder="email@email.com"
    />
</div>

<div className="form-group">
    <label htmlFor="description">Description</label>
    <textarea
        name="description"
        id="description"
        className="form-control"
        rows="5"
        placeholder="your description here....."
    />
</div>

<button
    type="submit"
    className="btn btn-yellow btn-block text-capitalize mt-5"
>
    submit
            </button>
          </form >
        </div >
      </div >
    </section >
  );
}


*/
