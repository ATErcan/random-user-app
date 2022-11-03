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

  useEffect(() => {
    /*     setInfo({
      title: "My name is",
      detail: `${randomUser[0]?.name.first} ${randomUser[0]?.name.last}`,
    }); */
  }, []);

  const getNewUser = () => {
    setNewUser((prevUser) => !prevUser);
    setInfo((prevInfo) => ({
      title: "",
      detail: "",
    }));
  };

  const showInfo = (e) => {
    if (e.target.id === "gender") {
      setInfo((prevInfo) => ({
        title: "My name is",
        detail: `${randomUser[0].name.first} ${randomUser[0].name.last}`,
      }));
    } else if (e.target.id === "mail") {
      setInfo((prevInfo) => ({
        title: "My email is",
        detail: randomUser[0].email,
      }));
    } else if (e.target.id === "age") {
      setInfo((prevInfo) => ({
        title: "My age is",
        detail: randomUser[0].dob.age,
      }));
    } else if (e.target.id === "address") {
      setInfo((prevInfo) => ({
        title: "My address is",
        detail: `${randomUser[0].location.street.number} ${randomUser[0].location.street.name} ${randomUser[0].location.country}`,
      }));
    } else if (e.target.id === "phone") {
      setInfo((prevInfo) => ({
        title: "My phone is",
        detail: randomUser[0].phone,
      }));
    } else {
      setInfo((prevInfo) => ({
        title: "My password is",
        detail: randomUser[0].login.password,
      }));
    }
  };

  return (
    <div className="person">
      <img
        src={randomUser[0]?.picture.large}
        alt="person"
        className="person-img"
      />
      <div className="person-info">
        <p className="my-info">{!info.title ? "My name is" : info.title}</p>
        <h3 className="info">
          {!info.title
            ? `${randomUser[0]?.name.first} ${randomUser[0]?.name.last}`
            : info.detail}
        </h3>
      </div>
      <div className="icon-container">
        <img
          src={randomUser[0]?.gender === "male" ? man : woman}
          alt="gender"
          className="icon"
          onMouseOver={showInfo}
          id="gender"
        />
        <img
          src={mail}
          alt="email"
          className="icon"
          onMouseOver={showInfo}
          id="mail"
        />
        <img
          src={randomUser[0]?.gender === "male" ? gum : guw}
          alt="age"
          className="icon"
          onMouseOver={showInfo}
          id="age"
        />
        <img
          src={map}
          alt="address"
          className="icon"
          onMouseOver={showInfo}
          id="address"
        />
        <img
          src={phone}
          alt="phone"
          className="icon"
          onMouseOver={showInfo}
          id="phone"
        />
        <img
          src={padlock}
          alt="password"
          className="icon"
          onMouseOver={showInfo}
          id="password"
        />
      </div>
      <div className="btn-container">
        <button className="new-user btn" onClick={getNewUser}>
          NEW USER
        </button>
        <button className="add-user btn">ADD USER</button>
      </div>
    </div>
  );
};

export default Person;
