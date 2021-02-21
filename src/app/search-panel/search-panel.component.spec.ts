import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SearchPanelComponent } from './search-panel.component';
import { TestersService } from '../services/testers.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Device, Tester } from '../models/tester-api.models';
import { By } from '@angular/platform-browser';


describe('SearchPanelComponent', () => {
  let component: SearchPanelComponent;
  let fixture: ComponentFixture<SearchPanelComponent>;
  const mockedCountries = ['US', 'GB', 'JP'];
  const mockedDevices: Device[] = [{ deviceId: 1, description: 'iPhone 5' }, { deviceId: 2, description: 'Samsung' }];
  const mockedTesters: Tester[] = [{ firstName: 'John', lastName: 'Stones', exp: 75 }, { firstName: 'Marry', lastName: 'Bee', exp: 15 },]

  class MockedTestersService {
    getCountries() { return of(mockedCountries) }
    getDevices() { return of(mockedDevices) }
    getTesters(countries?: string[], deviceIds?: number[]) { return of(mockedTesters) }
  }

  beforeEach(async () => {

    // const mockTestersService = jasmine.createSpyObj('TestersService', ['getCountries', 'getDevices', 'getTesters']);
    // const getCountriesSpy = mockTestersService.getCountries.and.returnValue(of(mockedCountries));
    // const getDevicesSpy = mockTestersService.getDevices.and.returnValue(of(mockedDevices));
    // const getTestersSpy = mockTestersService.getDevices.and.returnValue(of(mockedDevices));

    await TestBed.configureTestingModule({
      declarations: [SearchPanelComponent],
      providers: [{ provide: TestersService, useClass: MockedTestersService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set countries properly', () => {
    expect(component.countries.length).toBe(3);
    mockedCountries.forEach((country, index) => {
      expect(component.countries[index]).toBe(country)
    })
  });

  it('should set devices properly', () => {
    expect(component.devices.length).toBe(2);
    mockedCountries.forEach((country, index) => {
      expect(component.countries[index]).toBe(country)
    })
  });

  it('should invoke onSearch and emit event after button click', fakeAsync(() => {
    component.search.subscribe((testers: Tester[]) => expect(testers).toBe(mockedTesters))
    spyOn(component, 'onSearchClick');
    let btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', null);
    tick();
    expect(component.onSearchClick).toHaveBeenCalled();
  }));

});
