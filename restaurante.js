export default class Restaurante{
    constructor(nombre, telefono, direccion){
        this.nombre = nombre
        this.telefono = telefono
        this.direccion = direccion
        this.productos = new Array ()
        this.pedidos = new Array ()
        
        
    }
    registrarProducto(producto) {
        this.productos.push(producto.getDescripcion())
    }

    listarProductos() {
        this.productos.forEach((producto, i) => {
            console.log(`${i} - ${producto}`)
        })
    }

    registrarPedido(pedido) {
        this.pedidos.push(pedido)
    }

    listarPedidos() {
        this.pedidos.forEach((pedido, i) => {
            console.log(`${i} - ${pedido.getResumen()}`)
        })
    }
}