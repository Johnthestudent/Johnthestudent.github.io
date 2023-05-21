//Helper Javascript in order to display message after TTL.
setTimeout(() => {
  const box = document.getElementById("box");

  // 👇️ removes element from DOM
  box.style.display = "block";

  // 👇️ hides element (still takes up space on page)
  // box.style.visibility = 'hidden';
}, 60000); // 👈️ time in milliseconds
