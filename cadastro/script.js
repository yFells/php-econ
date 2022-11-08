import { $ } from "./../scripts/ui/index.js";
import { query } from "./../scripts/network/index.js";

async function register(e) {
  try {
    const body = {
    name: $("name").value,
    email: $("email").value,
    password: $("password").value,
    cpf: $("cpf").value,
    }
    console.log(body);
    const { data, error } = await query("./register.php", {
      body: JSON.stringify({body}),
      extraHeaders: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    console.log(data);
    if (data) {
      window.location = "/login"
    }
  } catch (error) {
    console.log(error);
  }
}

window.register = register;
