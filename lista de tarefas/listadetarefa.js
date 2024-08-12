$(document).ready(function () {
    
})

$('#form').on('submit',function (e) {
    e.preventDefault()
    let inputTarefa = $('#inputtarefa').val()
    let conteudo = $('<li></li>')

    $(`<h2>${inputTarefa}</h2>`).appendTo(conteudo)   
     conteudo.appendTo('ul')
     conteudo.fadeIn(1000)           
    $('#inputtarefa').val('')
})

$('ul').on('click','li',function () {
    $(this).toggleClass('linha')
    
    
})