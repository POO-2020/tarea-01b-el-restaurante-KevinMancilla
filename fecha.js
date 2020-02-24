export default class Fecha{
    constructor(fecha){
        this.fecha = fecha
        this.fechaActual = new Date()
        this.años = Math.floor(((this.fechaActual - this.fecha) / (1000 * 60 * 60 * 24) / 365));
        this.mes = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ]
        
    }
    getAños(){
        return this.años
    }

    getMeses(){
        return (this.años*12)
    }

    getSemanas(){
        return (this.años*12*4)
    }

    getDias(){
        return (this.años*12*4*7)
    }
    
    getFecha(){
        return (`${this.fechaActual.getDate()}/${this.mes[this.fechaActual.getMonth()]}/${this.fechaActual.getFullYear()}`)
    }

    getDiaFecha(){
        let dia = this.fechaActual.getDay()
    
        let semana = [
            "Domingo",
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado",
            "Domingo"]
        return semana[dia]
    }
}