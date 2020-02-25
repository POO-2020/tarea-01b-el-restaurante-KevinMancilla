export default class Elemento{
    constructor(producto, cantidad){
        this.producto = producto
        this.cantidad = cantidad
    }

    getDescripcion(){
        return (`${this.cantidad} ${this.producto}`)
    }
}