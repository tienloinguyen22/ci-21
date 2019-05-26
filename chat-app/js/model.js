const model = {};

model.loginUser = undefined;

model.createNewUser = (
  firstName,
  lastName,
  email,
  password,
) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((registerResult) => {
      // update displayName
      registerResult.user.updateProfile({
        displayName: `${firstName} ${lastName}`,
      });
      // sendVerifyEmail
      registerResult.user.sendEmailVerification();

      window.alert('Register success. Please check your email !!!');
      view.clearRegisterInfo();
    })
    .catch((error) => {
      console.log(error);
      window.alert(error.message);
    });
};

model.loginUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((loginResult) => {
      // check emailVerified
      if (loginResult.user.emailVerified) {
        // login success
        model.loginUser = {
          id: loginResult.user.id,
          displayName: loginResult.user.displayName,
          email: loginResult.user.email,
        };
        view.setActiveScreen('chatPage');
      } else {
        window.alert('This account is not activate. Please verify your email');
      }
    })
    .catch((error) => {
      console.log(error);
      window.alert(error.message);
    });
};