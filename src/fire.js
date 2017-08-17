import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBIpAjVGYU8b-Mvqtkox9Jgm6l6ezYUjUk",
    authDomain: "web-games-a8df9.firebaseapp.com",
    databaseURL: "https://web-games-a8df9.firebaseio.com",
    projectId: "web-games-a8df9",
    storageBucket: "web-games-a8df9.appspot.com",
    messagingSenderId: "429067304519"
  };
fire = firebase.initializeApp(config);
export default fire;
