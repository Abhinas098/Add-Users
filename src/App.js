import React, { useState } from "react";

import AddUser from "./Component/User/AddUser";
import UserList from "./Component/User/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addingUser = (userName, userAge, userClg) => {
    setUserList((prev) => {
      return [
        ...prev,
        {
          name: userName,
          age: userAge,
          clg: userClg,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <div>
      <AddUser onAdd={addingUser} />
      <UserList users={userList} />
    </div>
  );
};
export default App;
