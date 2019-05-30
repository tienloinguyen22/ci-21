const view = {};

view.setActiveScreen = (screenName) => {
  const app = document.getElementById('app');

  switch (screenName) {
    case 'loginPage':
      if (app) {
        app.innerHTML = components.loginPage;
      }

      // listen submit
      const loginForm = document.getElementById('login-form');
      if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = loginForm.email.value;
            const password = loginForm.password.value;

            controller.validateLoginInfo(email, password);
        });
      }

      // listen click
      const registerLink = document.getElementById('register-link');
      if (registerLink) {
        registerLink.addEventListener('click', (event) => {
          view.setActiveScreen('registerPage');
        });
      }
      break;
    case 'registerPage':
      if (app) {
        app.innerHTML = components.registerPage;
      }

      // listen link click
      const loginLink = document.getElementById('login-link');
      if (loginLink) {
        loginLink.addEventListener('click', (event) => {
          view.setActiveScreen('loginPage');
        });
      }

      // listen form submit
      const registerForm = document.getElementById('register-form');
      if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
          event.preventDefault();

          controller.validateRegisterInfo(
            registerForm.firstName.value,
            registerForm.lastName.value,
            registerForm.email.value,
            registerForm.password.value,
            registerForm.confirmPassword.value,
          );
        });
      }
      break;
    case 'chatPage':
      if (app) {
        app.innerHTML = components.chatPage;
      }

      // listen message form submit
      const messageForm = document.getElementById('message-form');
      if (messageForm) {
        messageForm.addEventListener('submit', (event) => {
          event.preventDefault();

          const messageContainer = document.getElementById('message-container');
          if (messageContainer && messageForm.message.value) {
            view.sendMessage('', messageForm.message.value);
            view.sendMessage('Mindx Bot', messageForm.message.value);
            messageForm.message.value = '';
          }
        });
      }
      break;
  }
};

view.renderErrorMessage = (elementId, errorMessage) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerText = errorMessage;
  }
};

view.clearRegisterInfo = () => {
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.firstName.value = '';
    registerForm.lastName.value = '';
    registerForm.email.value = '';
    registerForm.password.value = '';
    registerForm.confirmPassword.value = '';
  }
};

view.sendMessage = (sender, messageContent) => {
  const messageContainer = document.getElementById('message-container');
  if (messageContainer) {
    // create 3 div element
    const messageItem = document.createElement('div');
    const senderElement = document.createElement('div');
    const messageContentElement = document.createElement('div');

    // modify div.message-item
    messageItem.classList.add('message-item');
    if (sender) {
      messageItem.classList.add('other-message');
    } else {
      messageItem.classList.add('my-message');
    }

    // modify div.sender
    senderElement.classList.add('sender');
    if (sender) {
      senderElement.innerText = sender;
    }

    // modify div.message-content
    messageContentElement.classList.add('message-content');
    messageContentElement.innerText = messageContent;

    // assemble
    messageItem.appendChild(senderElement);
    messageItem.appendChild(messageContentElement);

    // append to message-container
    messageContainer.appendChild(messageItem);
  }
};