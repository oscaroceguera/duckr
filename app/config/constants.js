import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDR-MJcN2jFp_yQ5-UbaQFTHKpVriTFyDg",
  authDomain: "oscar-test-project.firebaseapp.com",
  databaseURL: "https://oscar-test-project.firebaseio.com",
  storageBucket: "oscar-test-project.appspot.com",
  messagingSenderId: "9561993299"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
