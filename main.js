import Cliente from "./cliente.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Direccion from "./direccion.js"
import Producto from "./producto.js"
import Precio from "./precio.js"
import Elemento from "./elemento.js"

class Main{

    constructor(){
        this.cliente1 = new Cliente("Kevin Mancilla", "Av. Pino Suarez 121", "3121105426")
        this.tiempo = new Tiempo(this.tiempo)
        this.fecha = new Fecha(this.fecha)
        this.direccion = new Direccion (this.direccion1)
        this.producto = new Producto (this.producto)
        this.precio = new Precio(65.19)
        this.elemento = new Elemento(this.elemento)
    }


    Cliente(){
        console.log(this.cliente1.getPerfil())
    }
    
    Tiempo(){
        let hora = new Tiempo(3, 50, "am")
        let hora2 = new Tiempo(4, 50, "pm")
        console.log(`La hora esta programada para las ${hora.getFormato12()}`)
        console.log(`La hora esta programada para las ${hora.getFormato24()}`)
        console.log(`La hora esta programada para las ${hora2.getFormato12()}`)
        console.log(`La hora esta programada para las ${hora2.getFormato24()}`)
    }

    Fecha(){
        let fechaP = new Fecha(27,8,2001)
        console.log(`Son ${fechaP.getAños()} años`)
        console.log(`Son ${fechaP.getMeses()} meses`)
        console.log(`Son ${fechaP.getSemanas()} semanas`)
        console.log(`Son ${fechaP.getDias()} dias `)
        console.log(`El dia ${fechaP.getFecha()}`)
        console.log(fechaP.getDiaFecha())
    }

    Direccion(){
        let direccion = new Direccion ("Av. Pino Suarez", "121", "2A", "Fatima", "28050", "Colima", "Col")
        console.log(direccion.getFormatoCorto())
        console.log(direccion.getFormatoLargo())
    }

    Producto(){
        let producto1 = new Producto ("Pizza", "$55")
        let producto2 = new Producto ("Hamburguesa", "$45")
        let producto3 = new Producto ("Refresco", "$15")
        let producto4 = new Producto ("Agua", "$10")
        console.log(producto1.getDescripcion())
        console.log(producto2.getDescripcion())
        console.log(producto3.getDescripcion())
        console.log(producto4.getDescripcion())
    }

    Precio(){
        console.log(this.precio.getPrecio())
    }

    Elemento(){
        let elemento1 = new Elemento ("Hamburguesa", "2x")
        console.log(elemento1.getDescripcion())
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