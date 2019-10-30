import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cutting } from 'src/app/models/cutting/cutting';
import { BehaviorSubject } from 'rxjs';
import { Thinsection } from './../../models/thinsection/thinsection';

@Injectable({
  providedIn: 'root'
})
export class LabelCuttingService {

  url = 'https://rockbotwebapi.azurewebsites.net/api';

  constructor(private httpClient: HttpClient) { }

  private selectedThinSection = new BehaviorSubject<Thinsection>(undefined);
  currentThinSection = this.selectedThinSection.asObservable();

  changeThinSection(ts: Thinsection) {
    this.selectedThinSection.next(ts)
  }

  public getCuttings(): Observable<Cutting[]> {
    return this.httpClient.get<Cutting[]>(this.url + '/cuttings/getall');
  }

  public getCuttingsById(id: number): Observable<Cutting[]> {
    return this.httpClient.get<Cutting[]>(this.url + '/cuttings/getbyid/' + id);
  }
}
