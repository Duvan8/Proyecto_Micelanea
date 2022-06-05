$(document).ready(function(){
    $('.busq').on('click',function(){
        let btn = $('.busq').index(this);
        let bus = $('.consul').eq(btn);
        alert("consulta: "+bus)

        let b = bus.val();
        alert("cosnulta individual: "+b)

        $.ajax({
            type: "POST",
            url: '/factura',
            data: {
                bb: b,
            }
        });
    });
});