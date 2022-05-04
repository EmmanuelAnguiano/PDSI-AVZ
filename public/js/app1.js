$(document).ready(function(){
    $.post("/getsal",function(data){
        console.log(data);
    })
    $("/sendroom").click(function(){
        var nom = $('#nameroom').val()
        if(nom){
            $.post('/addsal',{name:nom},function(data){console.log(data);})
        }
    })
});
