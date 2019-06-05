const model = {};

model.loginUser = undefined;

model.conversations = undefined;

model.activeConversation = undefined;

model.listener = undefined;

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

model.saveMessage = (newMessageContent) => {
  const newMessage = {
    content: newMessageContent,
    user: model.loginUser.email,
    createdAt: new Date(),
  };

  const db = firebase.firestore();
  db.collection('conversations')
    .doc('EYa0czWZhA3IOcyiFQ8n')
    .update({
      messages: firebase.firestore.FieldValue.arrayUnion(newMessage),
    });
};

model.loadConversations = () => {
  const db = firebase.firestore();
  model.listener = db.collection('conversations')
    .where('users', 'array-contains', model.loginUser.email)
    .onSnapshot((snapshot) => {
      const conversations = [];

      snapshot.docs.forEach((item) => {
        const conversation = item.data();
        conversation.id = item.id;
        conversations.push(conversation);
      });

      const activeConversation = conversations[0];
      model.activeConversation = activeConversation;

      if (model.conversations) {
        // render last message
        if (activeConversation) {
          // render message
          const newMessage = activeConversation.messages[activeConversation.messages.length - 1];
          if (newMessage.user === model.loginUser.email) {
            view.sendMessage('', newMessage.content);
          } else {
            view.sendMessage(newMessage.user, newMessage.content);
          }
        }
      } else {
        // render all message
        model.conversations = conversations;

        if (activeConversation) {
          activeConversation.messages.forEach((mess) => {
            if (mess.user === model.loginUser.email) {
              view.sendMessage('', mess.content);
            } else {
              view.sendMessage(mess.user, mess.content);
            }
          });
        }

        // render all conversation
        model.conversations.forEach((item) => {
          view.renderConversationItem(item);
        });
      }
    });
};

model.clearConversations = () => {
  model.conversations = undefined;
  model.activeConversation = undefined;
  model.listener();
};

model.createConversation = (conversationName, userEmail) => {
  const db = firebase.firestore();

  const newConversation = {
    name: conversationName,
    users: [userEmail, model.loginUser.email],
    createdAt: new Date(),
    messages: [],
  };
  db.collection('conversations').add(newConversation)
    .then(() => {
      view.setActiveScreen('chatPage');
    })
    .catch((error) => {
      console.log(error);
      window.alert(error.message);
    });
};