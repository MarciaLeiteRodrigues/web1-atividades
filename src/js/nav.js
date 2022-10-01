
import '@picocss/pico'
import '../css/global.css'
 const nav = /* html*/ `

<ul>
  <li><a class="contrast" href=" ./index.html">Desenvolvimento Web 1</a></li>
</ul>
<ul>
  <li>
    <details role="list" dir="rtl">
      <summary role="link" class="contrast">Exercícios</summary>
      <ul role="listbox">
        <li><a class="primary" href="./lista-tarefas.html"> Lista de tarefas </a></li>
      </ul>
    </details>
  </li>
</ul>


`
const menu = document.querySelector("#menu")
menu.innerHTML=nav
