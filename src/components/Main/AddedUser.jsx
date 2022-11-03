import { nanoid } from "nanoid";

const AddedUser = ({ userList }) => {
  const firstName = userList.map((fname, i) => {
    return <p key={nanoid()} className="user-item">{`${fname.firstName}`}</p>;
  });
  const email = userList.map((mail, i) => {
    return <p key={nanoid()} className="user-item">{`${mail.email}`}</p>;
  });
  const phone = userList.map((number, i) => {
    return <p key={nanoid()} className="user-item">{`${number.phone}`}</p>;
  });
  const age = userList.map((age, i) => {
    return <p key={nanoid()} className="user-item">{`${age.age}`}</p>;
  });

  return (
    <div className="user-list">
      <div className="firstname-title">
        <h4 className="user-title">Name</h4>
        {firstName}
      </div>
      <div className="email-title">
        <h4 className="user-title">Email</h4>
        {email}
      </div>
      <div className="phone-title">
        <h4 className="user-title">Phone</h4>
        {phone}
      </div>
      <div className="age-title">
        <h4 className="user-title">Age</h4>
        {age}
      </div>
    </div>
  );
};

export default AddedUser;
