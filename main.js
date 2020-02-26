import Cliente from "./cliente.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Direccion from "./direccion.js"
import Producto from "./producto.js"
import Precio from "./precio.js"
import Elemento from "./elemento.js"
import Restaurante from "./restaurante.js"

class Main{

    constructor(){
        this.cliente1 = new Cliente("Kevin Mancilla", "Av. Pino Suarez 121", "3121105426")

        this.tiempo1 = new Tiempo(3, 50, "am")
        this.tiempo2 = new Tiempo(4, 50, "pm")

        this.fecha = new Fecha(27,8,2001)

        this.direccion = new Direccion ("Av. Pino Suarez", "121", "2A", "Fatima", "28050", "Colima", "Col")

        this.producto1 = new Producto ("Pizza", "$55")
        this.producto2 = new Producto ("Refresco", "$15")

        this.precio = new Precio(65.19)

        this.elemento = new Elemento ("Hamburguesa", "2x")

        this.restaurante = new Restaurante("Monolapis", 123, "Ojos, Marinos")
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