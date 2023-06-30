import Style from "./SuccessState.module.scss";
import iconsuccess from "../../assets/images/icon-success.svg";


const SuccessState = () => {
  return (
    <div className={Style.SuccessState_page}>
      <div className={Style.SuccessState_box}>
        <div className={Style.SuccessState_icon}>
          <img
            className={Style.successicon_image}
            src={iconsuccess}
            alt="SVG image checkmark"
          ></img>
        </div>
        <div className={Style.SuccessState_head}>
          <h2>Thanks for <br/>subscribing!</h2>
        </div>
        <div className={Style.SuccessState_desc}>
          <p>
            A confirmation email has been sten to <br />
            insertnameherewithJS. Please open it and click <br />
            the button inside to confirm your subscription.
          </p>
        </div>
        <div className={Style.SuccessState_btn}>
          <button className={Style.success_btn}>Dismiss message</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessState;
