import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDp5AwpqrarWhe1H9LsQjrYgNQlYj3SLe4",
    authDomain: "proyecto-8210b.firebaseapp.com",
    projectId: "proyecto-8210b",
    storageBucket: "proyecto-8210b.appspot.com",
    messagingSenderId: "838157121790",
    appId: "1:838157121790:web:45009b3569c846e3268daf",
    measurementId: "G-NZ3TKZ0DKZ"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = app.auth();

  export {db,auth}; 