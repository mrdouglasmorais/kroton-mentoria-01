const root = document.getElementById('root');

const form = `
  <div>
    <form id="formulario">
      <input type="text" id="name" placeholder="informe seu nome">
      <input type="email" id="email" placeholder="informe seu email">
      <input type="submit" value="cadastrar">
    </form>
    <button id="button">Limpar formulário</button>

    <ul id="list"></ul>
  </div>
`

root.innerHTML = form;

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
  e.preventDefault();

  function createInputs(){
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
  }

  let name = document.getElementById('name').value
  let email = document.getElementById('email').value

  let list = document.getElementById('list')
  let li = document.createElement('li')
  li.append(`${name} | ${email}`)
  list.append(li)

  return createInputs(); 
})

const button = document.getElementById('button');

button.addEventListener('click', function(){
  document.getElementById('name').value = ''
  document.getElementById('email').value = ''
})