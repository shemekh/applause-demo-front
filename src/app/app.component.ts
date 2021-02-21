import { Component } from '@angular/core';
import { Tester } from './models/tester-api.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  testers: Tester[] = [];

  onSearch(foundTesters: Tester[]) {
    this.testers = foundTesters;
  }

}
