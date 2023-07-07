document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#auth-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      //document.location.replace('/dashboard');
      window.location.href = '/dashboard';
    } else {
      alert(await response.json().message);
    }
  });
});
