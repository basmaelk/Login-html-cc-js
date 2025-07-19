function login() {
  const correctUsername = "basma";
  const correctPassword = "123456";

    const enteredUsername = document.getElementById("username").value;
    const enteredUsername = document.getElementById("username").value;
    
    console.log(enteredUsername);
    console.log(enteredPassword);

    const message = document.getElementById('message');

    if (eneteredUsername === correctUsername && enteredPassword === correctPassword) {
      message.style.color = "green";
      message.textContent = "Login successfull";
    } else {
      message.style.color = "red"
      message.textContent = "Invalid username or password.";
    }
}

