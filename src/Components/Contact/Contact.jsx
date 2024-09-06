import "./Contact.css"

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import message from "../../images/msg-icon.png"
import mail from "../../images/mail-icon.png"
import phone from "../../images/phone-icon.png"
import location from "../../images/location-icon.png"
import flyer from "../../images/flyer.jfif"

function Contact() {


  const { register, reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "e646d0b1-fda0-4267-bfb5-71936ec4a622";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Atwea Registration Forms",
      subject: "New Registration Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <>
      <div className="title">
        <h1>Register Here</h1>
        <h3><marquee behavior="" direction="">Please fill this forms below once, and click on the whatsapp icon for further information.</marquee></h3>
      </div>
      <div className="contact container" id="Contact">
        <div className="contactColumn">
          <h3>Send Us A Message <img src={message} alt="" /></h3>
          <p>Join our upcoming Atwea Gathering by filling this form.
            Kindly check the details of the program on the flyer,
            fill this forms with real information about you. We assure
            you that your information is secured with us. You will be alerted
            by our administration to confirm registration. Contact Us via the
            details and links below:
          </p>
          <ul>
            <li><img src={mail} alt="" />thewatcher700@gmail.com</li>
            <li><img src={phone} alt="" />+233-555-399-109 </li>
            <li><a target="blank" href="https:wa.me/+233555399109">Whatsapp Me Now</a></li>
          </ul>
        </div>
        <div className="contactColumn">
          <form onSubmit={handleSubmit(onSubmit)}>

            <input placeholder="Full Name:" type="text" {...register("Full Name: ", { required: true })} />
            <input placeholder="Phone: " type="tel" {...register("Phone: ", { required: true })} />
            <input placeholder="Email: " type="email" {...register("Email: ", { required: true })} />
            <textarea placeholder="Where Do you stay?" {...register("Location", { required: true })}></textarea>
            <button className="btn darkbtn" type="submit">Submit Form</button>

          </form>

          <span>{result} Please click on the whatsapp icon below, contact us for further information.</span>
        </div>
        <div className="columnimg">
          <img className="flyer" src={flyer} alt="" />
        </div>
      </div>
    </>
  );
}

export default Contact