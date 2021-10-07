import React from "react";
import { useSelector } from "react-redux";

const FriendsList = () => {
  const users = useSelector((state) => state.friend.value);

  return (
    <div>
      {users.length > 0 ? (
        <>
          <h1>Friends' List</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Sex</th>
              </tr>
            </thead>
            <tbody>
              {users.map((person, id) => {
                return (
                  <tr key={id}>
                    <td>{person.username}</td>
                    <td>{person.age}</td>
                    <td>{person.sex}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <h4>You are about to be my first friend! Yipee!</h4>
      )}
    </div>
  );
};

export default FriendsList;
