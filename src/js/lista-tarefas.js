import "./nav.js"
import "../css/lista-tarefas.css"
//sempre que for usar o query selector crie uma variavel const
//pra selecionar um elemento do DOM, crie uma variavel do tipo const
//use o comando document.queryselector + o seletor , neste caso um ID(pra usa-lo coloque a #)
const inputNovaTarefa = document.querySelector('#input-nova-tarefa')
const botaoAdicionar = document.querySelector('#btn-adicionar')
const listaTarefas = document.querySelector('#lista-tarefas')

// vai adicionar um evento,descrito na funçao, quando for feito um click no botao
botaoAdicionar.addEventListener('click',function(){//adiciona evento
//ação que ira ocorrer quando ocorrer o click
const li = document.createElement('li') //cria elemento
li.className = 'tarefa'
//let é o tipo da variavel criada
let descricaoTarefa = inputNovaTarefa.value 
li.innerHTML = `
	<div>${descricaoTarefa}</div>
  <button class="btn-excluir">Excluir</button>
`
listaTarefas.appendChild(li)
})


