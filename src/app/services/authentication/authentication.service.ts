import { Injectable } from '@angular/core';
import { Adal8HTTPService, Adal8Service} from 'adal-angular8';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private adal8HttpService: Adal8HTTPService,
    private adal8Service: Adal8Service) { }

  public get(url: string): Observable<any> {
    const options = this.prepareOptions();
    console.log(options);
    this.adal8HttpService.get(url, options);
    return ;
  }

  private prepareOptions(): any {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.adal8Service.userInfo.token}`);
    return { headers };
  }

}
