$(document).ready(function(){
    $('.btnact').on('click',function(){
        
        
        let btn=$('.btnact').index(this);
        let codigo=$('.cod').eq(btn);
        let cantidad=$('.can').eq(btn);
        let valor=$('.val').eq(btn);
        let valors=$('.vals').eq(btn);
    
    
        let c=codigo.val();
        let ca=cantidad.val();
        let va=valor.val();
        let vls=valos.val();
    
        $.ajax({
        
            type:"POST",
            url:"/actentrada",
            data:{
                cc:c,dd:ca,cl:va,mm:vls
            }
        })
    
    })
    $('.btndel').on('click',function(){
    
        alert("Borrado")
        let btn=$('.btndel').index(this);
        let codigo=$('.cod').eq(btn);
    
    
        let c=codigo.val();    
        $.ajax({
        
            type:"POST",
            url:"/actentrada",
            data:{
                dd:c
            }
        })
    })
})