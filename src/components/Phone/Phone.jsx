import homePhones from "../../assets/phone.png";
import "./Phone.css";

function Phone() {
  return (
    <div className="phone_container">
      <div className="phone_animation_container">
        <div className="photo_animation"></div>
      </div>
      <img className="phone_placeholder" src={homePhones} />
    </div>
  );
}

export default Phone;
