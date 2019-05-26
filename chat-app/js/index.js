window.onload = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBx9EGICQg1HpTy2qQu845NynRfRsBs1ks",
    authDomain: "ci-21-2bc09.firebaseapp.com",
    databaseURL: "https://ci-21-2bc09.firebaseio.com",
    projectId: "ci-21-2bc09",
    storageBucket: "ci-21-2bc09.appspot.com",
    messagingSenderId: "226629240825",
    appId: "1:226629240825:web:8b87f2c02503e2e6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // show welcomeScreen
  view.setActiveScreen('loginPage');
};