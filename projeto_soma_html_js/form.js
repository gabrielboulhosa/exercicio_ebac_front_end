const form = document.getElementById('form')

function campos() {
    let campoA = parseInt(document.getElementById('campoA').value)
    let campoB = parseInt(document.getElementById('campoB').value)
    let mensagemSucesso = document.querySelector('.mensagemsucesso')
    let mensagemFalha = document.querySelector('.mensagemfalha')

    

    if (campoB > campoA) {
        mensagemSucesso
        mensagemSucesso.style.display = 'block'
        mensagemFalha.style.display = 'none'
    } else {
       mensagemFalha
       mensagemFalha.style.display = 'block'
       mensagemSucesso.style.display = 'none'
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    campos()
})

console.log(form)