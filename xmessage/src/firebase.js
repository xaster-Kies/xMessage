import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCZMw-o6fbz7zNpqpbWrcNFUjeNO0O9F28",
    authDomain: "xmessage-2a0de.firebaseapp.com",
    projectId: "xmessage-2a0de",
    storageBucket: "xmessage-2a0de.appspot.com",
    messagingSenderId: "613998007234",
    appId: "1:613998007234:web:59a81bbf7a4b9633d6fc5b",
    measurementId: "G-YGHZYC6B2E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;