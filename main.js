import Cliente from "./cliente.js"
import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import Direccion from "./direccion.js"


class Main{

    constructor(){
        this.cliente1 = new Cliente("Kevin Mancilla", "Av. Pino Suarez 121", "3121105426")
        this.tiempo = new Tiempo(this.tiempo)
        this.fecha = new Fecha(this.fecha)
        this.direccion1 = new Direccion (this.direccion1)
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
        let direccion1 = new Direccion ("Av. Pino Suarez", "121", "2A", "Fatima", "28050", "Colima", "Col")
        console.log(direccion1.getFormatoCorto())
        console.log(direccion1.getFormatoLargo())


    }
}

let verificar = new Main()

verificar.Cliente()
verificar.Tiempo()
verificar.Fecha()
verificar.Direccion()
