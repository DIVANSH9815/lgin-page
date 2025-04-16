function handleLogin(event) {
  event.preventDefault();  // Prevent form from submitting to keep page from refreshing
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Basic input validation
  if (username === "" || password === "") {
    errorMessage.innerText = "Both fields are required!";
    return false;
  }

  // Simulating login check (you can replace this with an actual backend call)
  if (username === "admin" && password === "password123") {
    errorMessage.innerText = "Login successful!";
    errorMessage.style.color = "green";
    // Here you can redirect or show the next page
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Redirect to a dashboard or homepage
    }, 1000);
  } else {
    errorMessage.innerText = "Invalid username or password!";
  }
  return false;  // Prevent form submission
}
