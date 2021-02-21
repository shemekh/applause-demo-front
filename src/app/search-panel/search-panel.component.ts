import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Device, Tester } from '../models/tester-api.models';
import { TestersService } from '../services/testers.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  @Output() search: EventEmitter<Tester[]> = new EventEmitter();

  countries: string[] = [];
  selectedCountries = [];
  countriesDropdownSettings: IDropdownSettings = {};

  devices: Device[] = [];
  selectedDevices = [];
  devicesDropdownSettings: IDropdownSettings = {};

  constructor(private testerService: TestersService) { }

  ngOnInit(): void {
    this.countriesDropdownSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
    }

    this.devicesDropdownSettings = {
      singleSelection: false,
      idField: 'deviceId',
      textField: 'description',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
    }

    this.testerService.getCountries()
      .subscribe(apiCountries => this.countries = apiCountries);
    this.testerService.getDevices().subscribe(apiDevices => this.devices = apiDevices);
    this.searchTesters();
  }

  onSearchClick() {
    this.searchTesters();
  }

  private searchTesters() {
    const deviceIds = this.selectedDevices.map((device: Device) => device.deviceId);
    this.testerService.getTesters(this.selectedCountries, deviceIds)
      .subscribe(apiTesters => this.search.emit(apiTesters));
  }

}
