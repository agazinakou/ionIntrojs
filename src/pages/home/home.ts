import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import introJs from 'intro.js/intro.js';

declare var introJs: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log(introJs.introJs());
    setTimeout(() => {
      this.start();
    }, 3000);
  }

  start() {

    let intro = introJs.introJs();
    intro.setOptions({
      steps: [{
        element: '#b1',
        intro: 'Logo',
        tooltipPosition: 'bottom'
      },
      {
        element: '#b2',
        intro: 'form',
        tooltipPosition: 'bottom'
      },
      {
        element: '#b3',
        intro: 'login button',
        tooltipPosition: 'bottom'
      }]
    });

    // Start tutorial
    intro.start();
  }

}
