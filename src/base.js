import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCMFKiiFh_VfXj_X2saTsu280vtPpivO0k",
  authDomain: "thenoisexyziscool.firebaseapp.com",
  databaseURL: "https://thenoisexyziscool.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
