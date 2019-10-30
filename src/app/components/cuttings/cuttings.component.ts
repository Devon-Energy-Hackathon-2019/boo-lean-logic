import { Component, OnInit, Input } from '@angular/core';
import { CuttingService } from '../../services/cutting/cutting.service';
import { Cutting } from '../../models/cutting/cutting';
import { Observable } from 'rxjs';
import { LabelCuttingService } from './../../services/label-cuttings/label-cutting.service';

@Component({
  selector: 'app-cuttings',
  templateUrl: './cuttings.component.html',
  styleUrls: ['./cuttings.component.css']
})
export class CuttingsComponent implements OnInit {

  @Input() ThinSectionId: number = 0;
  @Input() cuttings$: Observable<Cutting[]>; 
  private results: Cutting[];

  constructor(private cuttingService: CuttingService, private ds: LabelCuttingService)  { }

  ngOnInit() {
    this.ds.currentThinSection.subscribe(thinSection => {
      if(thinSection === undefined || thinSection.ThinSectionID === undefined) {
        return;
      } else {
        this.ThinSectionId = thinSection.ThinSectionID;
        this.cuttings$ = this.cuttingService.getCuttingsById(this.ThinSectionId);
        this.cuttings$.subscribe((data) => {this.results = data;});
      }
    });
  }

}
