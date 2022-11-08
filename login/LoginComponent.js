import { html } from "../scripts/ui/index.js";

export function LoginComponent(email) {
  return html` <h1>Faça seu login</h1>
    <form onsubmit="login(event)" id="form-login" method="post">
      <input
        type="email"
        name="email"
        id="email"
        value="${email}"
        placeholder="Seu e-mail"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Sua senha"
      />
      <button type="submit">Login</button>
    </form>
    <h3>
      Não possui cadastro? <a onclick="mountRegister()">faça cadastro.</a>
    </h3>`;
}
