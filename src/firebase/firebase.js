import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD4Lqe13-xIdYFKnbqHYDvXZ5LxJzSGE68",
    authDomain: "react-init-6ffa4.firebaseapp.com",
    databaseURL: "https://react-init-6ffa4.firebaseio.com",
    projectId: "react-init-6ffa4",
    storageBucket: "react-init-6ffa4.appspot.com",
    messagingSenderId: "917609753297",
    appId: "1:917609753297:web:77a3c458db9b39a05eb3f0",
    measurementId: "G-BKM0PQR7YR"
};

firebase.initializeApp(firebaseConfig);

// fire.database().ref().set({
//     name:'abobakr'
// });

/*
* rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}*/
export default firebase;
