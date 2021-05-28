import { AppPage } from './../../../e2e/src/app.po';
import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component(
  {
    //nome che assegno al file per richiamarlo
    selector: 'app-home',
    //url che prende il file
    templateUrl: 'home.html'
  })

  export class HomePage
  {
    // constructor( public navCtrl: NavController)
    // {

    // }

    sayHello()
    {
      console.log('Hello, world!');
    }
  }
