import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mlmodel } from 'src/app/models/mlmodel/mlmodel';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  url = 'https://rockbotwebapi.azurewebsites.net/api';

  constructor(private httpClient: HttpClient) { }

  public getModels(): Observable<Mlmodel[]> {
    return this.httpClient.get<Mlmodel[]>(this.url + '/models');
  }
}
