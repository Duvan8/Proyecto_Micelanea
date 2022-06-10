$(document).ready(function(){
    $('.btneli').on('click',function(){
        let btn=$('.btneli').index(this);
        let idti=$('.id_ti').eq(btn);

        let dt=idti.val();
        alert("datos eliminados correctamente");
        
        $.ajax({
            type:"POST",
            url:'/elitiempo',
            data:{
                ddt:dt
            }
        });
    })
})