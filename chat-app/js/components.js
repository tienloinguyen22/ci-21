const components = {};

components.welcomePage = `
  <div>Welcome Mindx Chats</div>
`;

components.loginPage = `
  <div class='login-screen' id='login-screen'>
    <div class='login-form-container' id='login-form-container'>
      <h2 class='logo'>Mindx Chats</h2>

      <form id='login-form'>
        <div class='input-wrapper'>
          <input
            class='input'
            type='text'
            name='email'
            placeholder="Email address"
          />
          <div class='error' id='email-error-message'></div>
        </div>

        <div class='input-wrapper'>
          <input
            class='input'
            type='password'
            name='password'
            placeholder="Password"
          />
          <div class='error' id='password-error-message'></div>
        </div>

        <div class='button-group'>
          <span id='register-link'>Dont have an account? Register</span>
          <input class='btn' type='submit' value='Log In' />
        </div>
      </form>
    </div>
  </div>
`;

components.registerPage = `
  <div class='register-screen' id='register-screen'>
    <div class='register-form-container' id='register-form-container'>
      <h2 class='logo'>Mindx Chats</h2>

      <form class='register-form' id='register-form'>
        <div class='name-group' id='name-group'>
          <div class='input-wrapper'>
            <input
              class='input'
              type='text'
              name='firstName'
              placeholder="First name"
            />
            <div class='error' id='first-name-error-message'></div>
          </div>
          <div class='input-wrapper'>
            <input
              class='input'
              type='text'
              name='lastName'
              placeholder="Last name"
            />
            <div class='error' id='last-name-error-message'></div>
          </div>
        </div>

        <div class='input-wrapper'>
          <input
            class='input'
            type='text'
            name='email'
            placeholder="Email address"
          />
          <div class='error' id='email-error-message'></div>
        </div>

        <div class='input-wrapper'>
          <input
            class='input'
            type='password'
            name='password'
            placeholder="Password"
          />
          <div class='error' id='password-error-message'></div>
        </div>

        <div class='input-wrapper'>
          <input
            class='input'
            type='password'
            name='confirmPassword'
            placeholder="Confirm password"
          />
          <div class='error' id='confirm-password-error-message'></div>
        </div>

        <div class='button-group'>
          <span id='login-link'>Already have an account? Log In</span>
          <input class='btn' type='submit' value='Register' />
        </div>
      </form>
    </div>
  </div>
`;

components.chatPage = `
<div class='chat-screen' id='chat-screen'>
  <div class='header'>Mindx Chats</div>
  <div class='chat-container'>
    <div class='conversation-name'>
      <h3>First conversation</h3>
    </div>
    <div id='message-container' class='message-container'>
    
    </div>
    <div class='message-form-container'>
      <form id='message-form'>
        <input
          class='message-input'
          type='text'
          placeholder='Type a message ...'
          name='message'
        />
        <input
          class='send-button'
          type='submit'
          value='Send'
        />
      </form>
    </div>
  </div>
  </div>
`;