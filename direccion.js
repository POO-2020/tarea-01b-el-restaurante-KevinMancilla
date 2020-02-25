export default class Direccion{

    constructor(calle, numeroExterior, numeroInterior, colonia, codigoPostal, ciudad, municipio){
        this.calle = calle
        this.numeroExterior = numeroExterior
        this.numeroInterior = numeroInterior
        this.colonia = colonia
        this.codigoPostal = codigoPostal
        this.ciudad = ciudad
        this.municipio = municipio
    }

    getFormatoCorto(){
        return (`${this.calle} ${this.numeroExterior}`)
    }

    getFormatoLargo(){
        return (`Calle: ${this.calle}, Numero exterior: ${this.numeroExterior}, Numero interior: ${this.numeroInterior}, Colonia: ${this.colonia}, CP: ${this.codigoPostal}, Ciudad: ${this.ciudad}, Municipio: ${this.municipio}`)
    }

}