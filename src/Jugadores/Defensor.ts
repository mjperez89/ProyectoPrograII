import { Jugador } from "./Jugador"

export class Defensor extends Jugador{

    constructor(nombre: string, apellido:string, edad:number, equipo:string){
        super(nombre,apellido,edad,equipo)
    }

    entrenar(): void {
       let energy= this.energia-10
       
    }

}

export default Defensor;