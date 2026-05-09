//Variaveis iniciais
let tarefas = []
const input =  document.getElementById('input')
const lista = document.getElementById('lista')
const botao = document.getElementById('botao')
function criarTarefa(texto){
    const item = document.createElement('li')
    const x = document.createElement('button')

        //monta a tarefa
        x.textContent = 'x'
        item.textContent = texto
        item.appendChild(x)
        lista.appendChild(item)
    //Botão para excluir
    x.addEventListener("click", function(){
        event.stopPropagation()
        item.remove()
        tarefas = tarefas.filter(function(t) {
            return t != texto
        })
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
    })
    // Botão de conclusão
    item.addEventListener("click", function (){
        if (item.style.textDecoration !="line-through" ) {
            item.style.textDecoration = "line-through"

        }
        else{
            item.style.textDecoration = ""
        }
    })

}
//Salvamento
const tarefasalva = JSON.parse(localStorage.getItem("tarefas"))
if (tarefasalva) {
    tarefas = tarefasalva
    tarefasalva.forEach(function (texto) {
   criarTarefa(texto)
    })
    }

// Botão e seu funcionamento
botao.addEventListener("click", function(){
//Condições
    const texto = input.value
    if(texto !="") {
        criarTarefa(texto)
        input.value = ""
        tarefas.push(texto)


        // Storage
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
    }
})