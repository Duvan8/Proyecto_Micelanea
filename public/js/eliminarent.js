$(document).ready(function(){
    $('.btnnar').on('click',function(){
    
        alert("Borrado")
        let btn=$('.btnnar').index(this);
        let codigo=$('.cod').eq(btn);
    
    
        let c=codigo.val();    
        $.ajax({
        
            type:"POST",
            url:"/eliminarent",
            data:{
                dd:c
            }
        })
    })
})