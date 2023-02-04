function componenteCard(producto) {
    return`   
    <div class="col mb-3">
<div class="card">
  <img src="${producto.img}" class="card-img-top" alt="Todoterreno" height="300rem" width="350rem">
  <div class="card-body">
  <h3 class="card-title">${producto.marca}</h3>
  <h4>${producto.modelo}</h4>
  <class="card-text"><h5> Año: ${producto.year}</h5>
  <h5> Color: ${producto.color}</h5>
  <h5> Motor: ${producto.motor}</h5>
  <h5> Precio: ${producto.precio} U$D</h5></p>
  <button type="button" id= ${producto.id} class="btn btn-primary btn-productos">Comprar</button>
  </div>
</div>
                             
`
    
}