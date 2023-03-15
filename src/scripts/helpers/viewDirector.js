import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import client from './client';
import startApp from './startApp';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {

      startApp(user);
    } else {
      // person is NOT logged in
      loginButton();
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
