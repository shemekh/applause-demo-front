import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Device, Tester } from '../models/tester-api.models';

import { TestersService } from './testers.service';

describe('TestersService', () => {
  const mockedCountries = ['US', 'GB', 'JP'];
  const mockedDevices: Device[] = [{ deviceId: 1, description: 'iPhone 5' }, { deviceId: 2, description: 'Samsung' }];
  const mockedTesters: Tester[] = [{ firstName: 'John', lastName: 'Stones', exp: 75 }, { firstName: 'Marry', lastName: 'Bee', exp: 15 },]

  let testersService: TestersService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    testersService = TestBed.inject(TestersService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(testersService).toBeTruthy();
  });

  it('should properly call countries API', () => {
    testersService.getCountries().subscribe(countries => {
      expect(countries).toBe(mockedCountries);
    });

    const req = httpTestingController.expectOne('/api/countries');
    expect(req.request.method).toEqual('GET');
    req.flush(mockedCountries);
  });

  it('should properly call devices API', () => {
    testersService.getDevices().subscribe(devices => {
      expect(devices).toBe(mockedDevices);
    });

    const req = httpTestingController.expectOne('/api/devices');
    expect(req.request.method).toEqual('GET');
    req.flush(mockedDevices);
  });


  it('should properly call testers API', () => {
    testersService.getTesters(mockedCountries, [1,2]).subscribe(testers => {
      expect(testers).toBe(mockedTesters);
    });

    const req = httpTestingController.expectOne('/api/testerexp?countries=US,GB,JP&deviceIds=1,2');
    expect(req.request.method).toEqual('GET');
    req.flush(mockedTesters);
  });

});
