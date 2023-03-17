import React, { useState } from "react";

import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enterName, setName] = useState("");
  const [enterAge, setAge] = useState("");
  const [error, setError] = useState();

  const userHandler = (e) => {
    e.preventDefault();
    if (enterName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "An error occured!",
        message: "Something went wrong!",
      });
      return;
    }
    if (+enterAge < 1) {
      setError({
        title: "invalid Age!",
        message: "Enter age valid age!",
      });
      return;
    }
    props.onAdd(enterName, enterAge);
    setName("");
    setAge("");
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const errorHandler = () =>{
    setError(null)
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onError = {errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={userHandler}>
          <label htmlFor="Username">Username</label>
          <input
            id="username"
            type="text"
            value={enterName}
            onChange={nameHandler}
          />
          <label htmlFor="Age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enterAge}
            onChange={ageHandler}
          />
          <Button type="submit">Add Users</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
