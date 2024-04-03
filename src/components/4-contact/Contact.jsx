import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

function Contact() {
  const [state, handleSubmit] = useForm("xayrpkgn");
  
  return (
    <section className="conatct-us">
      <h1 className="title">
        <span className="envelope-icon">
          <i class="fa-solid fa-envelope"></i>
        </span>
        Contact Us
      </h1>
      <p className="sub-title">
        "Get in touch with us today to start building your success story!"
      </p>
      <div className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email" className="lable">
              Email Address :
            </label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "20px" }}>
            <label htmlFor="massage" className="lable">
              Your Massage :
            </label>
            <textarea required name="message" id="massage"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {!state.submitting ? (
  <button type="submit" disabled={state.submitting}>
    Submit
  </button>
) : (
<div class="newtons-cradle">
<div class="newtons-cradle__dot"></div>
<div class="newtons-cradle__dot"></div>
<div class="newtons-cradle__dot"></div>
<div class="newtons-cradle__dot"></div>
</div>
)}
        </form>
        {state.succeeded && ("")}
        <div className=" animation">animation</div>
      </div>
    </section>
  );
}

export default Contact;
