$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault();

        const novaTarefa = $('#newTask').val();
        const novoItem = $('<li></li>');

        novoItem.text(novaTarefa);
        $(novoItem).appendTo('ul');

        $('#newTask').val('')
    })

    $('#clear').on('click', function(){
        $('ul').empty();
    })

    $('ul').on('click', 'li', function(){
        if ($(this).css('text-decoration') === 'line-through'){
            $(this).css('text-decoration', 'none');
        } else{
            $(this).css('text-decoration', 'line-through');
        }
    })
})