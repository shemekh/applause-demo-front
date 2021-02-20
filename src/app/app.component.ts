import { Component } from '@angular/core';
import { TestersService } from './services/testers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Applause Demo';

  constructor(private testerService: TestersService) {
    testerService.getCountries().subscribe(res => console.log(res));
    testerService.getDevices().subscribe(res => console.log(res));
    testerService.getTesters(['US', 'GB'], [1, 2, 3, 4]).subscribe(res => console.log(res));
  }

}
