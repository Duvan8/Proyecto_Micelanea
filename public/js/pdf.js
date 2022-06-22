$(document).ready(function(){
    $('.pdf').on('click',function(){
        let btn = $('.pdf').index(this);
        let cod = $('.codf').eq(btn);
        
        let c = cod.val();

        alert("datos para actualizar"+c);

        $.ajax({
            type: "POST",
            url: '/pdf',
            data: {
                dd: c,
            }
        });
    });
});