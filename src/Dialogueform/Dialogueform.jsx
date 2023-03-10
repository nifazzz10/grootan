import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Dialogueform.css";

function Dialogueform() {
  // React States
  const { user } = useAuth0();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [description, setDescription] = useState(false);
  const [reviews, setReviews] = useState(true);
  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button
            className="btn btn-primary
			mx-5 my-5 px-4"
            type="submit"
          >
            Log In
          </button>
          ;{/* <input type="submit" /> */}
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? (
          <div>
            <div className="container">
              <p className="userInfo" id="userInfo1">
                Name: {user.name}
              </p>
              <p className="userInfo" id="userInfo2">
                Given Name: {user.given_name}
              </p>
              <p className="userInfo" id="userInfo3">
                Family Name: {user.family_name}
              </p>
              <p className="userInfo" id="userInfo4">
                Email: {user.email}
              </p>
              <p className="userInfo" id="userInfo5">
                Sub: {user.sub}
              </p>
              <button
                className="btn btn-primary
			mx-5 my-3 px-4"
              >
                Accept
              </button>{" "}
              <button
                className="btn btn-primary
			mx-5 my-3 px-4"
              >
                Decline
              </button>
            </div>
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default Dialogueform;
