import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Persona } from '../persona.model'; 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  persona: Persona
  personas=[]
  constructor(   private activatedRouter : ActivatedRoute,
    private personasService : PersonasService,
    private alertControl    : AlertController,
    private router          : Router) { }


  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(paramMap =>{
      const usuario = paramMap.get('usuario');
      this.persona =this.personasService.getPersona(String(usuario))
    })
  }

}
