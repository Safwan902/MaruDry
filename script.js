// Login form validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Example: Predefined correct email and password
  const correctEmail = "user@example.com";
  const correctPassword = "password123";

  if (email === correctEmail && password === correctPassword) {
      window.location.href = "home.html";  // Redirect to home page after successful login
  } else {
      alert("Invalid email or password. Please try again.");
  }
});
