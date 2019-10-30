import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Thinsection } from 'src/app/models/thinsection/thinsection';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';  // './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ThinSectionService {

  url = environment.webApiBaseUrl;

  public firstPage = '';
  public prevPage = '';
  public nextPage = '';
  public lastPage = '';

  constructor(private httpClient: HttpClient) {}

  public getThinSections(): Observable<Thinsection[]> {
    return this.httpClient.get<Thinsection[]>(this.url + '/thinsections');
  }

}
