import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { Device, Tester } from '../models/tester-api.models';

@Injectable({
  providedIn: 'root'
})
export class TestersService {

  constructor(private httpClient: HttpClient) {
  }

  getCountries(): Observable<string[]> {

    return this.httpClient.get<string[]>('/api/countries');
  }

  getDevices(): Observable<Device[]> {
    return this.httpClient.get<Device[]>('/api/devices');
  }

  getTesters(countries?: string[], deviceIds?: number[]): Observable<Tester[]> {
    let params = new HttpParams()
    if (countries)
      params = params.set('countries', countries.join(','))
    if (deviceIds)
      params = params.set('deviceIds', deviceIds.join(','));
    return this.httpClient.get<Tester[]>('/api/testerexp', { params })
  }


}
