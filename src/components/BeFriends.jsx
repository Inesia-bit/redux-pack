import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addfriend } from "../features/friends";

const BeFriends = () => {
  const [friend, setFriend] = useState([{ username: "", age: 0, sex: "" }]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addfriend(friend));
  };
  return (
    <div className="friends-container">
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="username">What Do you want me to call you?</label>
          <input
            type="text"
            name="username"
            className=""
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <label htmlFor="age">What's your age?</label>
          <input type="text" name="age" className="" onChange={handleChange} />
        </div>
        <div className="input">
          <label htmlFor="sex">Which gender are you?</label>
          <input type="text" name="sex" className="" onChange={handleChange} />
        </div>

        <button id="submit-details">Submit</button>
      </form>
    </div>
  );
};

export default BeFriends;
