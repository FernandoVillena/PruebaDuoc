import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

private personas : Persona[]= [  
  {
    usuario:'FER.VILLENA',
    nombre:'Fernando',
    contrasenna:'1234',
  },
  {
    usuario:'NIC.VIDAL',
    nombre:'Nicolas',
    contrasenna:'5678',
  }

]


  constructor() {}


  getPersonas()
  {
    return this.personas
  }


  getPersona(usuario: string){

    return this.personas.find(x => {return x.usuario== usuario})
  }
  addPersona(usuario: string, contrasenna: string,nombre:string)
  {
    this.personas.push(
      {
        usuario  : usuario,
        contrasenna: contrasenna,
        nombre:nombre

        
    })
  }

}
