import { Component } from '@angular/core';

import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private model: Model) {
    this.model = model;
  }

  getName() {
    return this.model.user;
  }
}
