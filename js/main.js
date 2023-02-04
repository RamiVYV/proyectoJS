$(document).ready(function () {

    $("#dropdownMenuButton").click(function (e) { 
      $("#carrito").toggle();      
    });
  
    $("#queryLista").click(function (e) { 
        let min = $("#minQuery").val();
        let max = $("#maxQuery").val();
        const filtrados = DATOSAPP.filter(producto => (producto.precio > min) &&  (producto.precio < max));
        console.log(filtrados);
        generarProductos(filtrados);
    });
  });
  
  generarProductos(DATOSAPP);
  