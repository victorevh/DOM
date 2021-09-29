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

// ======================================================================
// Alterando estilos
const element = document.querySelector('body')

element.style.backgroundColor = "#f9f3d2"
// console.log(element.style.backgroundColor)

// classList

element.classList.add('active', 'green')
console.log(element.classList)
// element.classList.remove('active')
// o toggle adiciona a classe quando ela não existe, e remove quando ela existe, tipo um interruptor
// element.classList.toggle('active')