const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(await response.text());
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#first_name-signup').value.trim();
  const last_name = document.querySelector('#last_name-signup').value.trim();
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const profile_pic = document.querySelector('#profile_pic-signup').value.trim();
  const user_age = document.querySelector('#user_age-signup').value.trim();
  const user_home  = document.querySelector('#user_home-signup').value.trim();
  const about_me = document.querySelector('#about_me-signup').value.trim();

  if (first_name && username && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ name: first_name, username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('user created');
      document.location.replace('/profile');
      // document.location.replace('/stamps');
    } else {
      alert(await response.text());
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
