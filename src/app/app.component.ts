import { Component } from '@angular/core';
import { Adal8Service } from 'adal-angular8';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'Rockbot';

  private adalConfig = {
    tenant: '489f0f3b-e6ac-4928-b4f6-cfc55482e14e',
    clientId: '57d14c6b-b7e2-4108-8806-69ea3785b113',
    redirectUri: "https://localhost:4000/auth-callback",
    postLogoutRedirectUri: "https://localhost:4000/logout",
    endpoints: {
      "https://rockbotwebapi.azurewebsites.net": "57d14c6b-b7e2-4108-8806-69ea3785b113"
    }
  }
 
  constructor(private adal: Adal8Service) {
    this.adal.init(this.adalConfig);
  }
 
  signOut(): void {
    this.adal.logOut();
  }  


}
