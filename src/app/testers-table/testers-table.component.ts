import { Component, Input, OnInit } from '@angular/core';
import { Tester } from '../models/tester-api.models';

@Component({
  selector: 'app-testers-table',
  templateUrl: './testers-table.component.html',
  styleUrls: ['./testers-table.component.scss']
})
export class TestersTableComponent implements OnInit {
  @Input()
  testers: Tester[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
