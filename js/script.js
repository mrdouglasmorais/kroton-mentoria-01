const root = document.getElementById('root')

const form = `
  <div>
    <form id="formulario">
      <input type="text" id="name" placeholder="informe seu nome">
      <input type="email" id="email" placeholder="informe seu email">
      <input type="submit" value="cadastrar">
    </form>
  </div>
`

root.innerHTML = form;

const formulario = document.getElementById('formulario')