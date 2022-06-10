$(document).ready(function(){
    $('.btneli').on('click',function(){
        let btn=$('.btneli').index(this);
        let pro=$('.id_p').eq(btn);

        let pd=pro.val();
        alert("datos eliminados correctamente");
        
        $.ajax({
            type:"POST",
            url:'/eliproductos',
            data:{
                dts:pd
            }
        });
    })
})