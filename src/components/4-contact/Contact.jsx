import "./Contact.css";
function Contact() {
  return (
    <section className="conatct-us">
      <h1 className="title">
        <span className="envelope-icon">
          <i class="fa-solid fa-envelope"></i>
        </span>
        Contact Us
      </h1>
      <p className="sub-title">"Get in touch with us today to start building your success story!"</p>
      <div className="flex">
        <form >
          <div className="flex">
            <label htmlFor="email">Email Address :</label>
            <input required type="email" name="" id="email" />
                  </div>
                  

          <div className="flex" style={{marginTop:"20px"}}>
            <label htmlFor="massage">Your Massage :</label>
            <textarea required name="" id="massage"></textarea>
                  </div>
                  

          <button >submit</button>
        </form>
        <div className=" animation">animation</div>
      </div>
    </section>
  );
}

export default Contact;
