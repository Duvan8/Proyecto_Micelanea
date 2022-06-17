$(document).ready(function(){
    $('.btnter').on('click',function(){
        let btn = $('.btnter').index(this);
        let val = $('.valor').eq(btn);
        let can = $('.cant').eq(btn);
        
        let v = val.val();
        let c = can.val();
        
        let total = v/c;
        alert("llega"+v,c);
        alert("datos para actualizar"+total);

        $.ajax({
            type: "POST",
            url: '/actudev',
            data: {
                ii: i,
                nn: n,
                cc: c,
                mm: m,
                ff: f
            }
        });
    });
});