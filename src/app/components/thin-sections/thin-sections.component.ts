import { Component, OnInit, SimpleChanges, OnChanges, Input, Output } from '@angular/core';
import { ThinSectionService } from '../../services/thin-section/thin-section.service';
import { Thinsection } from '../../models/thinsection/thinsection';
import { Observable } from 'rxjs';
import { LabelCuttingService } from './../../services/label-cuttings/label-cutting.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-thin-sections',
  templateUrl: './thin-sections.component.html',
  styleUrls: ['./thin-sections.component.css']
})
export class ThinSectionsComponent implements OnInit {

  @Input() thinsections$: Observable<Thinsection[]>; 
  selectedRow: Number;
  searchText: string;
  @Output() selectedThinSection: Thinsection;
  selectedIDs: any = [];
  selectedModelID: Number = 6;

  constructor(private thinsectionService: ThinSectionService, private ds: LabelCuttingService, private  httpClient: HttpClient) { 
  }

  setClickedRow = function(index, ts: Thinsection){
    this.selectedRow = index;
    this.selectedThinSection = ts;
    this.ds.changeThinSection(ts);
    //this.ds.currentThinSection.subscribe(thinSection => this.message = message)

  }

  filterThinSection(thinSection: Thinsection) {
    if(thinSection.Depth === undefined || thinSection.WellName === undefined || thinSection.UWI === undefined || this.searchText === undefined) {
      return true;
    }
    console.log(thinSection.Depth, thinSection.WellName, thinSection.UWI);
    console.log(this.searchText);
    return thinSection.Depth.startsWith(this.searchText) || thinSection.WellName.startsWith(this.searchText) || thinSection.UWI.startsWith(this.searchText);
  }

  toggleCheck = function(id: number) {
    this.selectedIDs.push(id);
    console.log(id);
    console.log(this.selectedIDs);
  }

  trainModel = function()
  {
    const formData = new FormData();
    formData.append('ThinSectionIDs', this.selectedIDs);

    const payload = { "ThinSectionIDs": this.selectedIDs}
    const headers = new HttpHeaders({
    });

    this.httpClient.post('https://rockbotwebapi.azurewebsites.net/api/upload/training', payload, { headers, responseType: 'json' })
    .subscribe(data => {
      console.log("train model");
    });
  }

  predict = function()
  {
    const formData = new FormData();
    formData.append('ThinSectionIDs', this.selectedIDs);

    const payload = { "ThinSectionIDs": this.selectedIDs, "ModelID": this.selectedModelID}
    const headers = new HttpHeaders({
    });

    this.httpClient.post('https://rockbotwebapi.azurewebsites.net/api/upload/prediction', payload, { headers, responseType: 'json' })
    .subscribe(data => {
      console.log("predict");
    });
  }

  selectAll = function() {
    console.log("select all");
  }

  ngOnInit(){
    this.thinsections$ = this.thinsectionService.getThinSections();
  }

}
