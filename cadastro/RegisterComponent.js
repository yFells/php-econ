import { html } from "../scripts/ui/index.js";

export function RegisterComponent(email) {
  return html`<h1>Faça seu registro</h1>
    <form
      onsubmit="event.preventDefault(); register(event)"
      id="form-register"
      method="post"
    >
      <input type="text" name="name" id="name" placeholder="Seu nome" />
      <input
        type="text"
        name="cpf"
        id="cpf"
        placeholder="Seu CPF"
        maxlength="11"
      />
      <input
        type="email"
        name="email"
        value="${email}"
        id="email"
        placeholder="Seu e-mail"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Sua senha"
      />
      <input
        type="password"
        name="password"
        id="password-confirmation"
        placeholder="confirme sua senha"
      />
      <h3 id="passwords-mismatch" class="passwords-mismatch"></h3>
      <button type="submit">Cadastro</button>
    </form>

    <h3>Já tem uma conta? <a onclick="mountLogin()">Faça login</a></h3>`;
}
