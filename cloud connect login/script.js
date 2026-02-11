// CONFIG: Change redirectTarget to any URL you want users to end up at.
const redirectTarget = "https://drive.google.com/file/d/1zZ6uqYhH9qn4QSWdhAYVRj5bQ5OcXHr7/view?usp=drivesdk"; // <-- replace with the destination site

const form = document.getElementById("loginForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  
  // Very simple validation for demo
  if (!u || !p) {
    msg.textContent = "Please type both username and password.";
    return;
  }
  
  // OPTIONAL: demo credential check (only for prototype)
  // if (u !== "demo" || p !== "demo") {
  //   msg.textContent = "Invalid demo credentials. Try 'demo' / 'demo'.";
  //   return;
  // }
  
  // show a tiny loading hint so user feels the flow
  msg.textContent = "Signing in…";
  
  // short delay to simulate processing; then redirect
  setTimeout(() => {
    // open in same tab:
    window.location.assign(redirectTarget);
    
    // or open in new tab:
    // window.open(redirectTarget, "_blank");
  }, 600);
});