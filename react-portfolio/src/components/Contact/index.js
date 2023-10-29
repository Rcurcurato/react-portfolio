import React from "react";

function Contact() {
    return (
        <>
        <h1 className="contact-me">Contact Me</h1>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button className="button">Submit</button>
        </div>
        </>
    )
}   

export default Contact;
