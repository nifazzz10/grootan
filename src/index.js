import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Auth0Provider
		domain='dev-8ox8oeb7kue5fqz7.us.auth0.com'
		clientId='nlQY0X7oGm8RBBXaPFEgDj7ArGnpJJkq'
		redirectUri={window.location.origin}>
		<App />
	</Auth0Provider>
);
