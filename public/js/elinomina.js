$(document).ready(function(){
    $('.btneli').on('click',function(){
        let btn=$('.btneli').index(this);
        let idno=$('.id_no').eq(btn);

        let dino=idno.val();
        alert("datos eliminados correctamente");
        
        $.ajax({
            type:"POST",
            url:'/elinomina',
            data:{
                dn:dino
            }
        });
    })
})