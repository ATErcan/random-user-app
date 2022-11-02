import "./Main.css";
import axios from "axios";
import { useEffect, useState } from "react";
import woman from "../../assets/woman.svg";
import man from "../../assets/man.svg";
import mail from "../../assets/mail.svg";
import guw from "../../assets/growing-up-woman.svg";
import gum from "../../assets/growing-up-man.svg";
import map from "../../assets/map.svg";
import phone from "../../assets/phone.svg";
import padlock from "../../assets/padlock.svg";

const Person = () => {
  const [randomUser, setRandomUser] = useState([]);
  const [newUser, setNewUser] = useState(false);
  const [info, setInfo] = useState({
    title: "",
    detail: "",
  });

  useEffect(() => {
    const url = "https://randomuser.me/api/";
    axios(url).then((data) => setRandomUser(data.data.results));
  }, [newUser]);

  const getNewUser = () => {
    setNewUser((prevUser) => !prevUser);
  };

  const showInfo = (e) => {
    if (e.target.id === "gender") {
      setInfo((prevInfo) => ({
        title: "name",
        detail: `${randomUser[0].name.first} ${randomUser[0].name.last}`,
      }));
    } else if (e.target.id === "mail") {
      setInfo((prevInfo) => ({
        title: "email",
        detail: randomUser[0].email,
      }));
    } else if (e.target.id === "age") {
      setInfo((prevInfo) => ({
        title: "age",
        detail: randomUser[0].dob.age,
      }));
    } else if (e.target.id === "address") {
      setInfo((prevInfo) => ({
        title: "address",
        detail: `${randomUser[0].location.street.number} ${randomUser[0].location.street.name} ${randomUser[0].location.country}`,
      }));
    } else if (e.target.id === "phone") {
      setInfo((prevInfo) => ({
        title: "phone",
        detail: randomUser[0].phone,
      }));
    }
  };

  console.log(randomUser[0]);

  return (
    <div className="person">
      <img src={randomUser[0]?.picture.large} alt="person" />
      <div className="person-info">
        <p className="my-info">My {info.title} is</p>
        <h3 className="info">{info.detail}</h3>
      </div>
      <div className="icon-container">
        <img
          src={woman}
          alt="gender"
          width="50px"
          className="icon"
          onMouseOver={showInfo}
          id="gender"
        />
        <img
          src={mail}
          alt="email"
          width="50px"
          className="icon"
          onMouseOver={showInfo}
          id="mail"
        />
        <img
          src={guw}
          alt="age"
          width="50px"
          className="icon"
          onMouseOver={showInfo}
          id="age"
        />
        <img
          src={map}
          alt="address"
          width="50px"
          className="icon"
          onMouseOver={showInfo}
          id="address"
        />
        <img
          src={phone}
          alt="phone"
          width="50px"
          className="icon"
          onMouseOver={showInfo}
          id="phone"
        />
        <img
          src={padlock}
          alt="password"
          width="50px"
          className="icon"
          onMouseOver={showInfo}
          id="password"
        />
      </div>
      <button className="new-user btn" onClick={getNewUser}>
        New User
      </button>
    </div>
  );
};

export default Person;
