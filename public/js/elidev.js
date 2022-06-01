$(document).ready(function(){
    $('.btneli').on('click',function(){
        let btn=$('.btneli').index(this);
        let id=$('.id').eq(btn);

        let i=id.val();
        alert("datos eliminados");
        
        $.ajax({
            type:"POST",
            url:'/elidev',
            data:{
                ii:i
            }
        });
    })
})