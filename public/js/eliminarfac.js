$(document).ready(function(){
    $('.btndel').on('click',function(){
        let btn=$('.btndel').index(this);
        let cod=$('.codf').eq(btn);

        let d=cod.val();
        alert("Datos eliminados Exitosamente");
        
        $.ajax({
            type:"POST",
            url:'/eliminarfac',
            data:{
                dd:d
            }
        });
    })
})