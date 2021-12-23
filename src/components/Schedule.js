import React, { useRef } from 'react';
import emailjs from "emailjs-com";

const Schedule = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2imx7qo', 'template_74amvwi', form.current, 'user_wTQhiYWS7WNtkHej9syNR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
    <div className="contacts">
      <div className="text-center">
        <h1>Schedule Quote</h1>
        <p>Please fill out form and I will contact you as soon as possible!</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            {/* name input */}
            <input type="text" id="name" className="form-control" placeholder="Name" name="name" />
            {/* phone input */}
            <input type="text" id="phone" className="form-control" placeholder="Phone Number" name="phone" />
            {/* email input */}
            <input type="email" id="email" className="form-control" placeholder="Email" name="email" />
            {/* subject input */}
            <input type="text" id="subject" className="form-control" placeholder="Subject" name="subject" />
          </div>
          <div className="col-md-6 col-xs-12">
            {/* Description input */}
            <textarea type="text" id="description" className="form-control" placeholder="Description" name="description"></textarea>
              <button className="btn-main-offer contact-btn" type="submit">Schedule Quote</button>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
};

export default Schedule;
