function signUp() {
  const username = document.getElementById('username').value;
  if (!username) {
    alert("Please enter a username!");
    return;
  }

  // Save username & 1000 coins to localStorage
  localStorage.setItem("casinoUser", username);
  localStorage.setItem("casinoCoins", 1000);

  // Show welcome message
  document.querySelector(".form-section").style.display = "none";
  const messageDiv = document.getElementById("welcome-message");
  messageDiv.classList.remove("hidden");
  messageDiv.innerHTML = `
    <h2>Welcome, ${username}!</h2>
    <p>You received <strong>1000 coins</strong> to start playing! 🎉</p>
    <a href="#">Go to Casino</a>
  `;
}
