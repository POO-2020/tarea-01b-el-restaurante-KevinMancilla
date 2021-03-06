import Cliente from "./cliente.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Direccion from "./direccion.js"
import Producto from "./producto.js"
import Precio from "./precio.js"
import Elemento from "./elemento.js"
import Restaurante from "./restaurante.js"
import Pedido from "./pedido.js"

class Main{

    constructor(){
        this.cliente1 = new Cliente("Kevin Mancilla", "Av. Pino Suarez 121", "3121105426")

        this.tiempo1 = new Tiempo(3, 50, "am")
        this.tiempo2 = new Tiempo(4, 50, "pm")

        this.fecha = new Fecha(27,8,2001)

        this.direccion = new Direccion ("Av. Pino Suarez", "121", "2A", "Fatima", "28050", "Colima", "Col")

        this.precio = new Precio(65.19)
        this.precio2 = new Precio(15)

        this.producto1 = new Producto ("Pizza", this.precio)
        this.producto2 = new Producto ("Refresco", new Precio(15))

        this.elemento = new Elemento ("Hamburguesa", "2x")

        this.restaurante = new Restaurante("Monolapis", 3121105426, this.direccion)

        this.pedido = new Pedido(this.fecha, this.tiempo1, this.cliente1)
    }


    Cliente(){
        console.log(this.cliente1.getPerfil())
    }
    
    Tiempo(){
        console.log(`La hora esta programada para las ${this.tiempo1.getFormato12()}, que son las ${this.tiempo1.getFormato24()} en formato 24`)
        console.log(`La hora esta programada para las ${this.tiempo2.getFormato12()} que son las ${this.tiempo2.getFormato24()} en formato 24`)

    }

    Fecha(){
        console.log(`Hoy es ${this.fecha.getDiaFecha()} ${this.fecha.getFecha()}. Son ${this.fecha.getAños()} años, ${this.fecha.getMeses()} meses, ${this.fecha.getSemanas()} semanas, ${this.fecha.getDias()} dias. `)
    }

    Direccion(){    
        console.log(`La direccion corta es: ${this.direccion.getFormatoCorto()} y la direccion larga es: ${this.direccion.getFormatoLargo()}`)
    }

    Producto(){
        console.log(this.producto1.getDescripcion())
        console.log(this.producto2.getDescripcion())

    }

    Precio(){
        console.log(this.precio.getPrecio())
    }

    Elemento(){
        console.log(this.elemento.getDescripcion())
    }

    Restaurante(){
        this.restaurante.registrarProducto(new Producto("Coctel de camaron", new Precio(121.200)))
        this.restaurante.registrarProducto(new Producto("Pizza de cangrejo", new Precio(221.55)))
        this.restaurante.registrarProducto(new Producto("Agua de coco", new Precio(22.32)))
        this.restaurante.listarProductos()
    }

    Pedido(){
        let fecha = new Fecha(23, 2, 2020).getFecha();
        let hora = new Tiempo(12, 15, "PM").getFormato12();
        let elementos = 10;
        let cantidad = 23;
        let precio = 135;
        let costo = new Precio(precio*cantidad).getPrecio();
        let producto = new Producto("Tortas", "Hawaianas", "Chicas", costo).getDescripcion();
        let total = new Precio(precio*cantidad*elementos).getPrecio();
        let pedido = new Pedido(fecha, hora, elementos, cantidad, producto, total);
        console.log(`${pedido.getResumen()}`);
        console.log(`${pedido.getNumeroElementos()}`)
        console.log(`${pedido.getProductos()}`)
        console.log(`${pedido.getCostoTotal()}`)
    }
    }


let verificar = new Main()

verificar.Cliente()
verificar.Tiempo()
verificar.Fecha()
verificar.Direccion()
verificar.Producto()
verificar.Precio()
verificar.Elemento()
verificar.Restaurante()
verificar.Pedido()