import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "./profile.css";
import data from "../data";
import Dialogueform from "../Dialogueform/Dialogueform";
import { margin } from "@mui/system";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Profile = () => {
  const { user } = useAuth0();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setDescription(false);
    setReviews(true);
    setOpen(true);
    setFail(false);
    setSucess(false);
  };

  const handleClose = () => {
    setDescription(false);
    setReviews(false);
    setOpen(false);
    setFail(true);
    setSucess(false);
  };

  const [description, setDescription] = useState(true);
  const [reviews, setReviews] = useState(false);
  const [success, setSucess] = useState(false);
  const [fail, setFail] = useState(false);
  const reviewsHandler = () => {
    setDescription(false);
    setReviews(false);
    setSucess(true);
    setOpen(false);
    setFail(false);
  };
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

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
        </div>
      </form>
    </div>
  );
  return (
    <>
      <h1 style={{marginLeft:"230px",marginBottom:"3%"}}>Hi {user.name}👋</h1>{" "}
      <div class="parent">
        <div class="productimg">
          <img
            width="500px"
            style={{ borderRadius: "10px" }}
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          ></img>
        </div>
        {description && (
          <div className="container">
            <p className="userInfo" id="userInfo1">
              Product: {data.object}
            </p>
            <p className="userInfo" id="userInfo2">
              Color: {data.color}
            </p>
            <p className="userInfo" id="userInfo3">
              Price: {data.Price}
            </p>
            <p className="userInfo" id="userInfo4">
              Quantity: {data.qty}
            </p>

            <button
              class="btn btn-primary
              mx-5 my-5 px-4"
              onClick={handleClickOpen}
            >
              Checkout
            </button>
          </div>
        )}
        {reviews && (
          <h1
            class="
          mx-5 my-5 px-4"
          >
            Payment Proceeding 🍵
          </h1>
        )}{" "}
        {success && (
          <h1
            class="
          mx-5 my-5 px-4"
          >
            Payment successful✅
          </h1>
        )}
        {fail && (
          <h1
            class="
          mx-5 my-5 px-4"
          >
            Payment Unsuccessful❌
          </h1>
        )}
        {}
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Bank Login"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className="login-form">
              {isSubmitted ? (
                <div>
                  <div className="container">
                    <p className="userInfo" id="userInfo1">
                      Hi {user.name}👋
                    </p>
                    <p className="userInfo" id="userInfo1">
                      Product: {data.object}
                    </p>
                    <p className="userInfo" id="userInfo2">
                      Color: {data.color}
                    </p>
                    <p className="userInfo" id="userInfo3">
                      Price: {data.Price}
                    </p>
                    <p className="userInfo" id="userInfo4">
                      Quantity: {data.qty}
                    </p>
                    <button
                      className="btn btn-primary
			mx-5 my-3 px-4"
                      onClick={reviewsHandler}
                    >
                      Accept
                    </button>{" "}
                    <button
                      onClick={handleClose}
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
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
};

export default Profile;
