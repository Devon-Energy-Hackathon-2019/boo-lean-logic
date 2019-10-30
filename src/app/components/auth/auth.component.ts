import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authentication$: Observable<any>;
  modelUrl = 'https://eastus2.aether.ms/api/v1.0/subscriptions/29f99573-9129-4ae4-9ce7-d5eef95e9b96/resourceGroups/dvnMLservices/providers/Microsoft.MachineLearningServices/workspaces/dvnMLservices/PipelineRuns/PipelineSubmit/c777e1d2-b698-4a75-a37b-b45dc4d5afc9';

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    console.log("authenticate");
    //this.authentication$ = this.authenticationService.get(this.modelUrl);
  }

}
