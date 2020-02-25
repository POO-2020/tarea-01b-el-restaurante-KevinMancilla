export default class Precio{
    constructor(valor){
        this.valor = valor
    }
    
    getPrecio(){
        return (`El costo del producto es de $${(this.valor)}`)
    }
}