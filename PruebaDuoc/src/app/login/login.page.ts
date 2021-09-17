import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Persona } from '../persona.model'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  persona: Persona
  conta=0;
  personas=[]
  constructor(   private activatedRouter : ActivatedRoute,
    private personasService : PersonasService,
    private alertControl    : AlertController,
    private router          : Router) { }

  ngOnInit() {
    this.personas = this.personasService.getPersonas();
    
  }

  ionViewWillEnter()
  {
    this.personas = this.personasService.getPersonas();
  }
  async onClick(usuario :HTMLInputElement,pass:HTMLInputElement){
    const usu = usuario.value.toUpperCase(); 
    const pas = pass.value; 
    console.log(usu)

    this.persona = this.personasService.getPersona(usu);

    if(this.persona){
    if (usu== this.persona.usuario.toUpperCase(),pas== this.persona.contrasenna) 
    {
        this.router.navigate(['/', usu])
        this.conta=0
    }
    if(usu!= this.persona.usuario,pas!= this.persona.contrasenna)  {

      this.conta = this.conta+1;
    }

    if(this.conta>=3)  {

      const alerta = await this.alertControl.create({
      header  : "¿Olvido la contraseña?",
      message : "Favor confirmar",
      buttons : [
        {
          text: "No",
          role: "cancel"
        },
        {
          text    : "Si",
          handler : () => {
            this.router.navigateByUrl('/restablecer')
          }
        }
      ]
    });
    await alerta.present();
    }    
  }
  else{
    const alerta = await this.alertControl.create({
      header  : "El usuario ingresado no existe",
      buttons : [
        {
          text: "Aceptar",
          role: "cancel"
        }

      ]
    });
    await alerta.present();
  



  }
  
  }

}
