import React, { useState } from "react";

//Internal Import
import Style from "./Subscribe.module.scss";
// import iconlist from "../assets/images/icon-list.svg";
import iconsuccess from "../assets/images/icon-success.svg";
import illustration from "../assets/images/illustration-sign-up-desktop.svg";
// import favicon from "../assets/images/favicon-32x32.png";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState('');

  const [emailIsValid, setEmailIsValid] = useState(false);


  const validateEmail = (email) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(email)) {
      setError("Success");
    } else if (!regEx.test(email))  {
      setError("Invalid email");
    }else{
      setError(" ");
    }
    }
    
    // return re.test(String(email).toLowerCase());
  ;

  const handleSubmitClick = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
   setEmail(e.target.value)
  }

  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Stay updated!</h2>
          <p>
            Join 60,000+ product managers receiving monthly<br></br> updates on:{" "}
          </p>
          <div className={Style.subscribe_box_left_list}>
            <div className={Style.subscribe_box_left_list_field}>
              <img
                className={Style.successicon_image}
                src={iconsuccess}
                alt="SVG image checkmark"
              ></img>
              <div className={Style.successicon_text}>
                Product discovery and building what matters
              </div>
            </div>
            <div className={Style.subscribe_box_left_list_field}>
              <img
                className={Style.successicon_image}
                src={iconsuccess}
                alt="SVG image checkmark"
              ></img>
              <div className={Style.successicon_text}>
                Measuring to ensure updates are a success
              </div>
            </div>
            <div className={Style.subscribe_box_left_list_field}>
              <img
                className={Style.successicon_image}
                src={iconsuccess}
                alt="SVG image checkmark"
              ></img>
              <div className={Style.successicon_text}>And much more!</div>
            </div>
          </div>
          <form onSubmit={validateEmail}>
            <div className={Style.subscribe_box_left_input}>
              <label>Email address</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="email@company.com"
                onChange={handleChange}
              />
              {error}

            </div>
          </form>
          <div>
            <button onClick={validateEmail} className={Style.subscribe_btn}>
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
        <div className={Style.subscribe_box_right}>
          <img src={illustration}></img>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
