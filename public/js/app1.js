$(document).ready(function(){
    $.post("/getsal",function(data){
        let disalas=document.getElementById('salas');
        let salas= "";
        for(let i=0;i<data.length;i++){
            salas+=`
            <button class='w-100 btn btn-lg btn-dark' type='button' id='${data[i].idgrupo}'>${data[i].nomgrup}</button>`;
        }
        disalas.innerHTML=salas;

        console.log(data);

    });

    let btn=document.getElementById('agr');
    btn.addEventListener('click',()=>{
        var nombresal = prompt('Nombre de la sala');
        let saln;
        $.post("/addroom",{name:nombresal}, function(data){
            //let disalas1=document.getElementById('salas');
            if(data){
                
              saln=`<button class='w-100 btn btn-lg btn-dark' type='button' id='${data['insertId']}'>${nombresal}</button>`;
                $('#salas').append(saln);
            }
        })
        console.log(saln);
    })
});
