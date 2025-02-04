function validarValores(){

    let valorA = parseFloat(document.getElementById('valorA').value);
    let valorB = parseFloat(document.getElementById('valorB').value);
    let message = document.getElementById('message');

    if(valorB > valorA){
        message.innerHTML = 'Correto! O valor de B é maior que o valor de A';
        message.className = 'positive';
    }
    else{
        message.innerHTML = 'Errado! O valor de A é maior que o valor de B';
        message.className = 'negative'
    }
}
