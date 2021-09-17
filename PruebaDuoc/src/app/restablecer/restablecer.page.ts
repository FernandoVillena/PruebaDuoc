import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Persona } from '../persona.model'; 


@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  constructor(private personasService: PersonasService,
    private router : Router) { }

  ngOnInit() {
  }

  agregar(nombre :HTMLInputElement, usuario:HTMLInputElement, contrasenna:HTMLInputElement)
  {
    const nom = nombre.value; //obtiene el valor del elemento
    const usu = usuario.value;
    const con = contrasenna.value;
    // almacena en el arr que contiene el servicio
    this.personasService.addPersona(usu, nom, con);
    // redireccionar a la lista de personas
    this.router.navigate(['/inicio'])

  }

}
