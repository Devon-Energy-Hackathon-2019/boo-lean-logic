import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FileDropComponent } from 'src/app/components/file-drop/file-drop.component';
import { ThinSectionsComponent } from 'src/app/components/thin-sections/thin-sections.component';
import {  ThinSectionService } from '../../services/thin-section/thin-section.service';
import { Observable } from 'rxjs';
import { Thinsection } from 'src/app/models/thinsection/thinsection';

@Component({
  selector: 'app-thin-section-page',
  templateUrl: './thin-section-page.component.html',
  styleUrls: ['./thin-section-page.component.css']
})
export class ThinSectionPageComponent implements AfterViewInit {

  @ViewChild(FileDropComponent) fdChild: FileDropComponent;
  @ViewChild(ThinSectionsComponent) tsChild: ThinSectionsComponent;
  thinsections: Observable<Thinsection[]> = this.thinsectionService.getThinSections(); 

  constructor(private thinsectionService: ThinSectionService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.fdChild.refreshToken$.subscribe(this.handleData);
  }

  handleData(data)
  {
    console.log("refresh token: " + data);
    // this.thinsections = this.thinsectionService.getThinSections();
  }

}
 