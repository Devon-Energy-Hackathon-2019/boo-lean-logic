import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cutting } from 'src/app/models/cutting/cutting';

@Injectable({
  providedIn: 'root'
})
export class CuttingService {

  url = 'https://rockbotwebapi.azurewebsites.net/api';

  constructor(private httpClient: HttpClient) { }

  public getCuttings(): Observable<Cutting[]> {
    return this.httpClient.get<Cutting[]>(this.url + '/cuttings/getall');
  }

  public getCuttingsById(id: number): Observable<Cutting[]> {
    return this.httpClient.get<Cutting[]>(this.url + '/cuttings/getbyid/' + id);
  }
}
