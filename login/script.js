import { $, query } from "../scripts/index.js";

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

window.login = login;
