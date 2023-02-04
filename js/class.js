class Producto {

    constructor(datos) {

        this.id = Number(datos.id)
        this.marca = datos.marca;
        this.modelo = datos.modelo;
        this.year = Number(datos.year);
        this.color = datos.color;
        this.motor = datos.motor;
        this.precio = Number(datos.precio);
        this.cantidad = 1;
        this.img = datos.img;
    }

    addCantidad() {
        this.cantidad++;
    }
    getTotal() {
        return (this.cantidad * this.precio);
    }
}