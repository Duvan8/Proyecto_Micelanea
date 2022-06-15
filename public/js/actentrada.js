$(document).ready(function(){
    $('.btnzar').on('click',function(){
        let btn=$('.btnzar').index(this);
        let codigo=$('.cod').eq(btn);
        let cantidad=$('.can').eq(btn);
        let valor=$('.val').eq(btn);
        let valors=$('.vals').eq(btn);
    
    
        let c=codigo.val();
        let ca=cantidad.val();
        let va=valor.val();
        let vls=valors.val();
    
        $.ajax({
        
            type:"POST",
            url:"/actentrada",
            data:{
                cc:c,dd:ca,cl:va,mm:vls
            }
        })
    
    })
})