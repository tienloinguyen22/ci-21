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
  }
};

view.renderErrorMessage = (elementId, errorMessage) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerText = errorMessage;
  }
};