import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventhubService {

  constructor(private http: HttpClient) { }

  publishEvent(message) {
    console.log(message)
    // post message to event hub
    let options = { headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded','Authorization':'SharedAccessSignature sr=https%3A%2F%2Frockbot.servicebus.windows.net&sig=2RY978N8YSi4ldl7Cai%2Bv7KO0D9U%2F8Y4MU6buBNnd5I%3D&se=1566829544&skn=RootManageSharedAccessKey'})};
    return this.http.post("https://rockbot.servicebus.windows.net/images/messages",message,options)
  }

}
