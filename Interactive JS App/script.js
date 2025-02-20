document.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("nameInput");
  const greetButton = document.getElementById("greetButton");
  const clearButton = document.getElementById("clearButton");
  const message = document.getElementById("message");

  greetButton.addEventListener("click", function() {
      const name = input.value.trim();
      if (name) {
          message.textContent = `Hello, ${name}! Welcome to my app.`;
      } else {
          message.textContent = "Please enter your name!";
      }
  });

  clearButton.addEventListener("click", function() {
      input.value = "";
      message.textContent = "";
  });
});
