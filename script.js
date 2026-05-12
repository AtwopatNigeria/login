// script.js

const form = document.getElementById("loginForm");
const messageBox = document.getElementById("messageBox");

const captchaText = document.getElementById("captchaText");


// GENERATE CAPTCHA
function generateCaptcha(){

  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ123456789";
  let captcha = "";

  for(let i = 0; i < 4; i++){
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }

  captchaText.innerText = captcha;
}

generateCaptcha();


// LOGIN VALIDATION
form.addEventListener("submit", function(e){

  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const captchaInput = document.getElementById("captchaInput").value.trim();

  messageBox.innerHTML = "";

  // EMAIL CHECK
  if(!email.includes("@")){

    messageBox.innerHTML =
      `<div class="error-message">
        Invalid Email Address
      </div>`;

    return;
  }

  // PASSWORD CHECK
  if(password.length < 6){

    messageBox.innerHTML =
      `<div class="error-message">
        Invalid Password
      </div>`;

    return;
  }

  // CAPTCHA CHECK
  if(captchaInput.toUpperCase() !== captchaText.innerText){

    messageBox.innerHTML =
      `<div class="error-message">
        Incorrect Verification Code
      </div>`;

    generateCaptcha();
    return;
  }

  // SUCCESS
  messageBox.innerHTML =
    `<div class="success-message">
      Login Successful Redirecting...
    </div>`;

  // FUTURE BACKEND LOGIN API
  /*
  fetch("https://yourbackend.com/login", {
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  })
  */

  // REDIRECT
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 2000);

});
