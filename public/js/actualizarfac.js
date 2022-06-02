$(document).ready(function () {
    $(".btnact").on("click", function () {
      let btn = $(".btnact").index(this);
      let co = $(".co").eq(btn);
      let doc = $(".do").eq(btn);
      let cod = $(".cod").eq(btn);
      let fe = $(".fe").eq(btn);
      let can = $(".ca").eq(btn);
      let val = $(".va").eq(btn);
  
      let c = co.val();
      let d = doc.val();
      let o = cod.val();
      let f = fe.val();
      let ca = can.val();
      let v = val.val();
  
      alert("datos para actualizar" + c + d + o + f + ca + va);
  
      $.ajax({
        type: "POST",
        url: "/actufac",
        data: {
          dd: c,
          uu: d,
          aa: o,
          cc: f,
          rr: ca,
          vv: v,
        },
      });
    });

    //BORRAR FACTURA

    $(document).ready(function(){
        $('.btndel').on('click',function(){
            
            alert("Borrado")
            let btn=$('.btndel').index(this);
            let codigo=$('.co').eq(btn);
            let documento=$('.do').eq(btn);
            let codigof=$('.cod').eq(btn);
            let fecha=$('.fe').eq(btn);
            let cantidad=$('.ca').eq(btn);
            let valor=$('.va').eq(btn);
        
        
        
            let c=codigo.val();
            let d=documento.val();
            let co=codigof.val();
            let f=fecha.val();
            let ca=cantidad.val();
            let v=valor.val();
        
        
            $.ajax({
            
                type:"POST",
                url:"/actufac",
                data:{
                    cc:c,
                    dd:d,
                    coc:co,
                    ff:f,
                    ca:ca,
                    vv:v,
                }
            })
        
        
        })
        
        
        });
  });
  