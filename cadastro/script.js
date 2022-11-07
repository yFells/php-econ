import { $ } from "./../scripts/ui/index.js";
import { query } from "./../scripts/network/index.js";

async function register(e) {
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
