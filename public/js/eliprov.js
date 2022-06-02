$(document).ready(function(){
    $('.btneli').on('click',function(){
        let btn=$('.btneli').index(this);
        let doc=$('.ped').eq(btn);

        let d=doc.val();
        alert("datos eliminados");
        
        $.ajax({
            type:"POST",
            url:'/eliprov',
            data:{
                dd:d
            }
        });
    })
})