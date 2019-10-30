import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/services/model/model.service';
import { Mlmodel } from 'src/app/models/mlmodel/mlmodel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ml-models',
  templateUrl: './ml-models.component.html',
  styleUrls: ['./ml-models.component.css']
})
export class MlModelsComponent implements OnInit {

  mlmodel$: Observable<Mlmodel[]>; 

  constructor(private modelService: ModelService) { }

  ngOnInit() {
    this.mlmodel$ = this.modelService.getModels();
  }

}
