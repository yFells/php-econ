import { $ } from "./../scripts/ui/index.js";
import { query } from "./../scripts/network/index.js";
import { LoginComponent } from "../login/LoginComponent.js";
import { RegisterComponent } from "./RegisterComponent.js";

let prevState;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const repeat = async (fn, t) => {
  for (let i = 0; i < t; i++) {
    await fn();
  }
};

async function register(e) {
  e.preventDefault();
  const password = $("password").value;
  const confirmPassword = $("password-confirmation").value;
  if (password !== confirmPassword) {
    await repeat(async () => {
      $("passwords-mismatch").innerHTML = "Senhas não batem.";
      await sleep(500);
      $("passwords-mismatch").innerHTML = "Senhas não batem..";
      await sleep(500);
      $("passwords-mismatch").innerHTML = "Senhas não batem...";
      await sleep(500);
    }, 3);
    $("passwords-mismatch").innerHTML = "";
    return;
  }
  try {
    const registerForm = $("form-register");
    const { data, error } = await query("./register.php", {
      body: new FormData(registerForm),
      method: "POST",
    });
  } catch (error) {
    console.log(error);
  }
}

async function login(e) {
  e.preventDefault();
  try {
    const formLogin = $("form-login");
    const { data, error } = await query("./login.php", {
      body: new FormData(formLogin),
      method: "POST",
    });

    if (!data.loggedIn) {
      return;
    }

    localStorage.setItem("user", JSON.stringify(data));

    window.location = "/";
  } catch (error) {}
}

function mountLogin() {
  const email = $("email").value;
  prevState = $("main").innerHTML;
  $("main").innerHTML = LoginComponent(email);
}

function mountRegister() {
  const email = $("email").value;
  prevState = $("main").innerHTML;
  $("main").innerHTML = RegisterComponent(email);
}

window.onload = function () {
  $("main").innerHTML = RegisterComponent('');
}
window.mountLogin = mountLogin;
window.mountRegister = mountRegister;
window.login = login;
window.register = register;
