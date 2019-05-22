const components = {};

components.welcomePage = `
  <div>Welcome Mindx Chats</div>
`;

components.registerPage = `
  <div>Register page</div>
`;

components.loginPage = `
<div id='login-screen'>
  <div id='login-form-container'>
    <h2>Mindx Chats</h2>

    <form id='login-form'>
      <div>
        <input
          type='text'
          name='email'
          placeholder="Email address"
        />
        <div id='email-error-message'></div>
      </div>

      <div>
        <input
          type='password'
          name='password'
          placeholder="Password"
        />
        <div id='password-error-message'></div>
      </div>

      <div>
        <p id='register-link'>Dont have an account? Register</p>
        <input type='submit' value='Log In' />
      </div>
    </form>
  </div>
  </div>
`;