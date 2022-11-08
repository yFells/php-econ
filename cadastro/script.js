import { $ } from "./../scripts/ui/index.js";
import { query } from "./../scripts/network/index.js";

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

window.register = register;
