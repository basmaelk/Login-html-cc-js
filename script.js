function login(e) {
  e.preventDefault(); // Corrected spelling

  const correctUsername = "basma";
  const correctPassword = "123456";

  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  const message = document.getElementById("message");

  if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
    message.style.color = "green";
    message.textContent = "Login successful";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
}

