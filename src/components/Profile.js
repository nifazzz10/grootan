import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
 import "./profile.css"
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
  });

const Profile = () => {
	const { user } = useAuth0();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

	return (
		<>
		<div class='parent'>	<div  class="productimg"><img width="500px" src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'></img></div>
			<div className="container">
				<p className="userInfo" id="userInfo1">
					Name: {user.name}</p>
				<p className="userInfo" id="userInfo2">
					Given Name: {user.given_name}</p>
				<p className="userInfo" id="userInfo3">
					Family Name: {user.family_name}</p>
				<p className="userInfo" id="userInfo4">
					Email: {user.email}</p>
				<p className="userInfo" id="userInfo5">
					Sub: {user.sub}</p>
					<button class="btn btn-primary
			mx-5 my-5 px-4"  onClick={handleClickOpen}>Checkout</button>
			</div></div>
	
	
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
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
		</>
	)
}

export default Profile
