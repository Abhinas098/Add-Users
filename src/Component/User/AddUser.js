import React, { useState, useRef } from "react";

import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameRef = useRef();
  const ageRef = useRef();
  const clgRef = useRef();

  const [error, setError] = useState();

  const userHandler = (e) => {
    e.preventDefault();
    const enterName = nameRef.current.value;
    const enterAge = ageRef.current.value;
    const enterClg = clgRef.current.value;

    if (
      enterName.trim().length === 0 ||
      enterAge.trim().length === 0 ||
      enterClg.trim().length === 0
    ) {
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
    props.onAdd(enterName, enterAge, enterClg);
    nameRef.current.value = "";
    ageRef.current.value = "";
    clgRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onError={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={userHandler}>
          <label htmlFor="Username">Username</label>
          <input id="username" type="text" ref={nameRef} />
          <label htmlFor="Age">Age (Years)</label>
          <input id="age" type="number" ref={ageRef} />
          <label htmlFor="College">College</label>
          <input id="clg" type="text" ref={clgRef} />
          <Button type="submit">Add Users</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
