// getElementById (element)
// getElementsByClassName (HTMLCollection)
// getElementsByTagName (HTMLCollection)
// querySelector (element)
// querySelectorAll (NodeList)



// getElementById()

// const element = document.getElementById('studies-title')
// console.log(element)

// getElementsByClassName()

// const elementByClassName = document.getElementsByClassName('one')
// console.log(elementByClassName)

// getElementsByTagName()

// const element = document.getElementsByTagName('h1')
// console.log(element)

// querySelector()

// const element = document.querySelector('[src]')    
// console.log(element)

// querySelectorAll

// const elements = document.querySelectorAll('.one')
// console.log(elements)

// elements.forEach(el => console.log(el))


//======================================================================================================================
// Manipulando Conteúdo
// textContent

// const element = document.querySelector('h1')

// element.textContent += " sobre o DOM"
// console.log(element.textContent)

// Trocando texto
// innerText
// element.innerText = "Olá Pessoas!"

// trocando HTML interno
// innerHTML

// element.innerHTML = "Oi pessoal! <small> oi pessoal! </small>"

// Value input

// const elementvalue = document.querySelector('input')

// console.log(elementvalue.value)
// elementvalue.value="outro valor"

// atributos

// const header = document.querySelector('header')
// header.setAttribute('id', 'header')

// console.log(headerID.getAttribute('class'))

// header.removeAttribute('id')
// header.removeAttribute('bg')
// header.setAttribute('class', 'bg header')

//======================================================================================================================
// Alterando estilos
// const element = document.querySelector('body')

// element.style.backgroundColor = "#f9f3d2"
// console.log(element.style.backgroundColor)

// classList

// element.classList.add('active', 'green')
// console.log(element.classList)
// element.classList.remove('active')
// o toggle adiciona a classe quando ela não existe, e remove quando ela existe, tipo um interruptor
// element.classList.toggle('active')

//======================================================================================================================

// Navegando pelos elementos
// parentNode parentElement
// const body = document.querySelector('body')

// console.log(body.parentNode)

// const element = document.querySelector('h1')

// console.log(element.parentElement)

// navegando pelos elementos filhos
// childNodes children

// const el = document.querySelector('body')

// console.log(el.childNodes)
// console.log(el.children)

// firstChild firstElementChild
// console.log(el.firstChild) // leva em consideração o espaçõ vazio
// console.log(el.firstElementChild)

// lastChild lastElementChild
// console.log(el.lastChild)
// console.log(el.lastElementChild)

// Navegando pelos elementos filhos

// const el = document.querySelector('header')

// nextSibling nextElementSibling
// console.log(el.nextSibling) // leva em consideração o espaço vazio
// console.log(el.nextElementSibling)

// previousSibling previousElementSibling
// console.log(el.previousSibling)// leva em consideração o espaço vazio
// console.log(el.previousElementSibling)

//======================================================================================================================

// Criando e adicionando elementos 

// createElement
// const div = document.createElement('div')
// div.innerText = "Olá Devs!"

// append prepend
// const body = document.querySelector('body')

// body.append(div) // adiciona no fim do html
// body.prepend(div) // adiciona no inicio do html

// insertBefore
// const script = document.querySelector('script')
// body.insertBefore(div, script) //adiciona depois do elemento selecionado.

// const header = body.querySelector('header')
// body.insertBefore(div, header.nextElementSibling) //adicionando texto antes do elemento selecionado

//======================================================================================================================

// Eventos

function print() {
    console.log('print')
}

// Eventos de teclado

const input = document.querySelector('input')

// input.onkeyup = function() {
//    console.log('rodei')
// }

// Ouvidor de eventos

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

h1.addEventListener('click', function(){
    console.log('outro momento')
})

// Argumento event

input.onkeydown = function(event) {
    console.log(event.key)
}

input.onkeydown = function(event) {
    console.log(event.currentTarget.value)
}