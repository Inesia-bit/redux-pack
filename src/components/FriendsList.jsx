import React from "react";
import { useSelector } from "react-redux";

const FriendsList = () => {
  const users = useSelector((state) => state.friend.value);

  return (
    <div className="list">
      {users.length > 0 ? (
        <>
          <h1 style={{ textAlign: "center" }}> Friends' List</h1>
          <table>
            <thead>
              <tr>
                <th className="tablehead">Name</th>
                <th className="tablehead">Age</th>
                <th className="tablehead">Sex</th>
              </tr>
            </thead>
            <tbody>
              {users.map((person, id) => {
                return (
                  <tr key={id}>
                    <td>{person.username}</td>
                    <td style={{ textAlign: "center" }}>{person.age}</td>
                    <td style={{ textAlign: "center" }}>{person.sex}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <h4 style={{ textAlign: "center" }}>
          You are about to be my Friend! Yipee!
        </h4>
      )}
    </div>
  );
};

export default FriendsList;
