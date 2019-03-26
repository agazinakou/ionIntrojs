import { Component } from '@angular/core';

// import IntroJS
declare var require: any
const IntroJs = require("../../../node_modules/intro.js/intro");

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
    setTimeout(() => {
      this.introMethod();      
    }, 2000);
  }

  introMethod() {
    let intro = IntroJs();
    console.log("inside intro.js");
    intro.setOptions({
      steps: [
        {
          element: '#step1',
          intro: 'Logo',
          position: 'bottom'
        },
        {
          element: '#step2',
          intro: 'form',
          position: 'bottom'
        },
        {
          element: '#step3',
          intro: 'login button',
          position: 'bottom'
        }
      ],
      showProgress: true,
      skipLabel: "Cancel",
      doneLabel: "Begin",
      nextLabel: "Next",
      prevLabel: "Back",
    });
    intro.start();
  }
}
