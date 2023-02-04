function generarHTMLJQ(auto){

$('#contenidoGenerado').prepend(componenteCard(auto));

}

function generarProductos(listado){

$('#contenidoGenerado').empty();

for (const producto of listado) {

    generarHTMLJQ(producto)
    
}

$('.btn-productos').click(agregarProducto);

}

function agregarProducto(e) {
    let producto = SELECCIONADOS.find(producto => producto.id == e.target.id)
    if(producto != undefined){
    producto.addCantidad();
    }
    else {
    let seleccionado = DATOSAPP.find(producto => producto.id == e.target.id);
    SELECCIONADOS.push(new Producto(seleccionado));  
    }


console.log(SELECCIONADOS);

$(e.target).parents(".card").fadeOut();
generarCarrito();
}

function generarCarrito(){
    
    $("#carrito").empty();

    let total=0
    for (const producto of SELECCIONADOS) {
        total = total + producto.precio
        $("#carrito").append(`     
        <p>
        Vehículo ${producto.marca}, Modelo ${producto.modelo}
        </p>
        <p>
        Valor ${producto.precio} USD
        </p>`);
    }
    $("#carrito").append(` <h5> Total : ${total} USD </h5>`);

    $('html, body').animate({
        scrollTop: $("body").offset().top  
    }, 1000, ()=>{
        $('#carrito').fadeIn(2000, ()=>{
            $('#carrito').fadeOut(2000);
        });
    });
}

