import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  titulo = "Directivas y ciclos";
  subtitulo="Listado de cursos";
  cursos = [];
  cursosObj:curso[] = [];

  constructor(public navCtrl: NavController) {
    this.cursos.push("JavaScript");
    this.cursos.push("Ionic");
    this.cursos.push("Angular");

    this.cursosObj.push(
      new curso(
        "JavaScript",
        Math.random()*1000+1000,
        "./assets/imgs/img1.jpg",
        true
      )
    );
    this.cursosObj.push(
      new curso(
        "Bootstrap",
        Math.random()*1000+1000,
        "./assets/imgs/img2.jpg",
        false
      )
    );

  }

}
class curso{
  constructor(
    public nombre:string,
    public precio:number,
    public foto:string,
    public disponible:boolean){

  }
}
