$(document).ready(function(){
    $('.btneli').on('click',function(){
        let btn=$('.btneli').index(this);
        let doc=$('.doc_usu').eq(btn);

        let d=doc.val();
        alert("datos eliminados");
        
        $.ajax({
            type:"POST",
            url:'/eliusu',
            data:{
                dd:d
            }
        });
    })
})